"use client";

import { useState, useEffect, useRef } from "react";
import { useStreak } from '@/hooks/useStreak';
import QuizCard from "@/components/QuizCard";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import ResultScreen from "@/components/ResultScreen";
import { toast } from "sonner";
import { useXP } from "@/hooks/useXP";

import { musicQuestions } from "@/lib/data/music";
import { foodQuestions } from "@/lib/data/food";
import { historyQuestions } from "@/lib/data/history";
import { cultureQuestions } from "@/lib/data/culture";
import { geographyQuestions } from "@/lib/data/geography";
import { artsQuestions } from "@/lib/data/arts";
import { sportsQuestions } from "@/lib/data/sports";
import { generalQuestions } from "@/lib/data/general";

interface Option {
    id: string;
    text: string;
    isCorrect: boolean;
}

interface Question {
    id: number;
    category: string;
    text: string;
    image?: string;
    options: Option[];
    isSilhouette?: boolean;
}


import { useQuestionProgress } from "@/hooks/useQuestionProgress";

// Category Order for "Next Intelligence" flow
const CATEGORY_ORDER = ["history", "culture", "geography", "food", "music", "arts", "sports", "general"];

export default function CategoryQuizPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;

    const [loading, setLoading] = useState(true);
    const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0); // Count of correct answers
    const [gameStatus, setGameStatus] = useState<"playing" | "finished">("playing");
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const startTimeRef = useRef<number>(Date.now());

    // Tick the timer
    useEffect(() => {
        if (gameStatus === "playing") {
            const timer = setInterval(() => {
                setCurrentTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [gameStatus]);

    const { markAsAnswered } = useQuestionProgress();
    const { updateStreak } = useStreak();
    const { consumeShield } = useXP();

    // Helper: Shuffle array
    const shuffleArray = (array: Question[]) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    // Calculate Next Category for the Result Screen
    const currentCategoryIndex = CATEGORY_ORDER.indexOf(slug);
    const nextCategorySlug = CATEGORY_ORDER[(currentCategoryIndex + 1) % CATEGORY_ORDER.length];
    const nextPath = `/dashboard/categories/${nextCategorySlug}`;

    useEffect(() => {
        const fetchQuestions = async () => {
            // 1. Identification of Static Fallback Data
            let staticQuestions: Question[] = [];
            switch (slug) {
                case "history": staticQuestions = historyQuestions; break;
                case "food": staticQuestions = foodQuestions; break;
                case "music": staticQuestions = musicQuestions; break;
                case "culture": staticQuestions = cultureQuestions; break;
                case "geography": staticQuestions = geographyQuestions; break;
                case "arts": staticQuestions = artsQuestions; break;
                case "sports": staticQuestions = sportsQuestions; break;
                case "general": staticQuestions = generalQuestions; break;
                default: staticQuestions = generalQuestions;
            }

            try {
                // 2. Attempt to fetch AI Questions
                const response = await fetch("/api/quiz/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ topic: `${slug} in Ghana` })
                });

                if (!response.ok) throw new Error("AI Generation Failed");

                const data = await response.json();

                if (data.questions && Array.isArray(data.questions) && data.questions.length >= 5) {
                    // Success! Use AI questions
                    setCategoryQuestions(data.questions.slice(0, 5));

                } else {
                    throw new Error("Invalid AI Response Format");
                }

            } catch (error) {
                console.warn("Falling back to static questions:", error);

                // 3. Fallback to Static Data
                const finalizedQuestions = shuffleArray(staticQuestions).slice(0, 5);
                setCategoryQuestions(finalizedQuestions);
            } finally {
                setLoading(false);
                startTimeRef.current = Date.now();
            }
        };

        fetchQuestions();

        // Cleanup / Reset State on Slug Change
        return () => {
            setCategoryQuestions([]);
            setCurrentIndex(0);
            setScore(0);
            setGameStatus("playing");
            setTimeElapsed(0);
            setUserAnswers({});
            setLoading(true);
        };
    }, [slug]);


    useEffect(() => {
        if (gameStatus === "finished" && score > 0) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            // Update daily streak after finishing quiz
            updateStreak();
        }
    }, [gameStatus, score, updateStreak]);

    // Show Loading State
    if (loading) {
        return (
            <div className="w-full min-h-screen bg-gradient-to-br from-[#006B3F] to-[#004629] relative flex flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center justify-center">
                    <Loader2 className="w-12 h-12 text-white animate-spin mb-4" />
                    <p className="text-white/60 font-jakarta font-bold animate-pulse">Loading Quiz...</p>
                </div>
            </div>
        );
    }

    const handleNext = (isCorrect: boolean, selectedOptionId: string) => {
        const currentQ = categoryQuestions[currentIndex];
        const isAlreadyAnswered = userAnswers[currentQ.id] !== undefined;

        // Only process scoring if this is the first time answering
        if (!isAlreadyAnswered) {
            // Mark current question as answered
            if (currentQ) {
                markAsAnswered(currentQ.id);
            }

            let finalIsCorrect = isCorrect;
            if (!isCorrect) {
                // Check for wisdom shield
                if (consumeShield()) {
                    finalIsCorrect = true;
                    toast.success("Wisdom Shield Activated!", {
                        description: "Your error was blocked by the ancestors. 🛡️",
                        icon: "🛡️"
                    });
                }
            }

            setUserAnswers(prev => ({ ...prev, [currentQ.id]: selectedOptionId }));

            if (finalIsCorrect) {
                setScore(s => s + 1);
            }
        }

        if (currentIndex < categoryQuestions.length - 1) {
            setCurrentIndex(i => i + 1);
        } else {
            const endTime = Date.now();
            const finalTime = Math.floor((endTime - startTimeRef.current) / 1000);
            setTimeElapsed(finalTime);
            setGameStatus("finished");
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#006B3F] to-[#004629] relative flex flex-col items-center justify-start px-4 overflow-x-hidden">
            <div className="w-full max-w-4xl mx-auto pt-8 pb-12 flex-1 flex flex-col items-center justify-start">
                {gameStatus === "finished" ? (
                    <ResultScreen
                        score={score}
                        totalQuestions={categoryQuestions.length}
                        nextPath={nextPath}
                        timeElapsed={timeElapsed}
                        categorySlug={slug}
                    />
                ) : (
                    <QuizCard
                        question={categoryQuestions[currentIndex]}
                        questionNumber={currentIndex + 1}
                        totalQuestions={categoryQuestions.length}
                        currentTime={currentTime}
                        onNext={(isCorrect, optionId) => handleNext(isCorrect, optionId)}
                        onPrevious={currentIndex > 0 ? handlePrevious : undefined}
                        savedAnswer={userAnswers[categoryQuestions[currentIndex]?.id]}
                    />
                )}
            </div>
        </div>
    );
}
