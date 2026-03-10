"use client";

import { useState, useEffect, useRef } from "react";
import { useStreak } from '@/hooks/useStreak';
import QuizCard from "@/components/QuizCard";
import {
    Zap, Clock, Trophy, PlayCircle,
    Landmark, Drum, Map, UtensilsCrossed, Music, Palette, Dumbbell, Brain,
    type LucideIcon,
} from "lucide-react";
import confetti from "canvas-confetti";
import ResultScreen from "@/components/ResultScreen";
import { toast } from "sonner";
import { useXP } from "@/hooks/useXP";
import { motion } from "framer-motion";

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

    const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0); // Count of correct answers
    const [gameStatus, setGameStatus] = useState<"ready" | "playing" | "finished">("ready");
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
        // 1. Resolve static questions for this slug
        const staticMap: Record<string, Question[]> = {
            history: historyQuestions, food: foodQuestions, music: musicQuestions,
            culture: cultureQuestions, geography: geographyQuestions, arts: artsQuestions,
            sports: sportsQuestions, general: generalQuestions,
        };
        const staticQuestions = staticMap[slug] ?? generalQuestions;

        // 2. Show start screen immediately with shuffled static questions
        setCategoryQuestions(shuffleArray(staticQuestions).slice(0, 5));

        // 3. Attempt AI upgrade silently in the background
        const controller = new AbortController();
        (async () => {
            try {
                const response = await fetch("/api/quiz/generate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ topic: `${slug} in Ghana` }),
                    signal: controller.signal,
                });
                if (!response.ok) return;
                const data = await response.json();
                if (data.questions?.length >= 5) {
                    setCategoryQuestions(data.questions.slice(0, 5));
                }
            } catch {
                // silently ignored — static questions are already set
            }
        })();

        return () => controller.abort();

        // Cleanup / Reset State on Slug Change
        return () => {
            controller.abort();
            setCategoryQuestions([]);
            setCurrentIndex(0);
            setScore(0);
            setGameStatus("ready");
            setTimeElapsed(0);
            setUserAnswers({});
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

    const handleStart = () => {
        startTimeRef.current = Date.now();
        setGameStatus("playing");
    };

    const TOPIC_LABELS: Record<string, { label: string; icon: LucideIcon; color: string; bg: string; description: string }> = {
        history:   {
            label: "History",
            icon: Landmark, color: "text-amber-700", bg: "bg-amber-50 border-amber-100",
            description: "Ghana's story stretches back centuries, from the rise of the Ashanti Empire to the first nation in sub-Saharan Africa to gain independence. These five questions will take you through the key people, turning points and defining moments that built the country you know today.",
        },
        culture:   {
            label: "Culture and Tribes",
            icon: Drum, color: "text-rose-600", bg: "bg-rose-50 border-rose-100",
            description: "With over 70 ethnic groups, Ghana is one of the most culturally rich nations on earth. You will be tested on festivals, traditional customs, royal ceremonies, language families and the deeply held values that unite Ghanaians across every region.",
        },
        geography: {
            label: "Geography",
            icon: Map, color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-100",
            description: "From the Volta Basin to the Sahel fringes of the north, Ghana's landscape is strikingly diverse. These questions cover the sixteen regions, major rivers, national parks, border countries and the physical features that define life across the country.",
        },
        food:      {
            label: "Food and Lifestyle",
            icon: UtensilsCrossed, color: "text-orange-600", bg: "bg-orange-50 border-orange-100",
            description: "Ghanaian food is bold, communal and deeply tied to identity. Waakye, kontomire stew, fufu, kelewele and more are part of everyday life. This quiz explores the dishes, ingredients, eating traditions and lifestyle patterns that make Ghanaian culture so distinct.",
        },
        music:     {
            label: "Music and Arts",
            icon: Music, color: "text-purple-600", bg: "bg-purple-50 border-purple-100",
            description: "From the golden age of highlife to the global rise of Ghanaian hiplife and Afrobeats, the country has produced some of Africa's most influential sounds. You will be tested on pioneering artists, iconic songs, genres and the cultural movements that shaped them.",
        },
        arts:      {
            label: "Arts and Crafts",
            icon: Palette, color: "text-pink-600", bg: "bg-pink-50 border-pink-100",
            description: "Kente cloth, Adinkra symbols, Bolga baskets and Fante flags each carry layers of meaning passed down through skilled hands. This quiz covers the origins, techniques and significance of Ghana's most celebrated artistic traditions and the communities behind them.",
        },
        sports:    {
            label: "Sports",
            icon: Dumbbell, color: "text-blue-600", bg: "bg-blue-50 border-blue-100",
            description: "Ghana has punched above its weight on the world stage across football, boxing, athletics and more. From the legendary Azumah Nelson to the Black Stars at the World Cup, these questions test your knowledge of the athletes, tournaments and moments that made history.",
        },
        general:   {
            label: "General Knowledge",
            icon: Brain, color: "text-[#006B3F]", bg: "bg-green-50 border-green-100",
            description: "A wide-ranging mix of Ghanaian facts that does not stay in one lane. History, culture, geography, famous faces, national symbols and everyday trivia are all on the table. The questions are unpredictable by design, so stay sharp and trust what you know.",
        },
    };
    const topic = TOPIC_LABELS[slug] ?? {
        label: slug, icon: Brain, color: "text-gray-600", bg: "bg-gray-50 border-gray-100",
        description: "Test your knowledge on Ghana.",
    };

    if (gameStatus === "ready") {
        return (
            <div className="w-full h-full flex flex-col px-5 pt-6 pb-6">

                {/* ── Hero ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.55 }}
                    className="flex-1 flex flex-col items-center justify-center gap-4 text-center"
                >
                    {/* Icon tile */}
                    <div className={`w-24 h-24 rounded-3xl ${topic.bg} border flex items-center justify-center shadow-sm mb-2`}>
                        <topic.icon className={`w-10 h-10 ${topic.color}`} strokeWidth={1.5} />
                    </div>

                    <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Ready to play</p>
                        <h1 className="font-epilogue font-extrabold text-3xl text-gray-900 leading-tight">{topic.label}</h1>
                        <p className="text-gray-500 font-jakarta text-sm mt-3 leading-relaxed">{topic.description}</p>
                    </div>
                </motion.div>

                {/* ── Stats card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.45 }}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-4"
                >
                    <div className="grid grid-cols-3 divide-x divide-gray-200">
                        <div className="flex flex-col items-center gap-1.5 px-2">
                            <Trophy className="w-5 h-5 text-[#FCD116]" strokeWidth={1.5} />
                            <span className="font-epilogue font-extrabold text-gray-900 text-base leading-none">5</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Questions</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 px-2">
                            <Clock className="w-5 h-5 text-[#006B3F]" strokeWidth={1.5} />
                            <span className="font-epilogue font-extrabold text-gray-900 text-base leading-none">Live</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Timer</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 px-2">
                            <Zap className="w-5 h-5 text-[#CE1126]" strokeWidth={1.5} />
                            <span className="font-epilogue font-extrabold text-gray-900 text-base leading-none">XP</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Reward</span>
                        </div>
                    </div>
                </motion.div>

                {/* ── Start button ── */}
                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.18, duration: 0.4 }}
                    onClick={handleStart}
                    className="w-full py-4 bg-[#FCD116] text-gray-900 font-epilogue font-extrabold text-lg rounded-2xl shadow-lg shadow-yellow-900/15 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                    <PlayCircle className="w-5 h-5" />
                    Start Quiz
                </motion.button>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-white relative flex flex-col items-center justify-start px-4 overflow-x-hidden">
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
