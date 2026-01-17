"use client";

import { useState, useEffect } from "react";
import { useStreak } from '@/hooks/useStreak';
import QuizCard from "@/components/QuizCard";
import { Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import ResultScreen from "@/components/ResultScreen";

import { musicQuestions } from "@/lib/data/music";
import { foodQuestions } from "@/lib/data/food";
import { historyQuestions } from "@/lib/data/history";

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


// Generic filler if category empty
const GENERIC_QUESTIONS = [
    {
        id: 99,
        category: "General",
        text: "What is the capital of Ghana?",
        options: [
            { id: "a", text: "Kumasi", isCorrect: false },
            { id: "b", text: "Accra", isCorrect: true },
            { id: "c", text: "Tamale", isCorrect: false },
            { id: "d", text: "Takoradi", isCorrect: false },
        ],
    }
];

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

    const { markAsAnswered, answeredIds } = useQuestionProgress();
    const currentQuestion = categoryQuestions[currentIndex];
    const { updateStreak } = useStreak();

    // Calculate Next Category for the Result Screen
    const currentCategoryIndex = CATEGORY_ORDER.indexOf(slug);
    const nextCategorySlug = CATEGORY_ORDER[(currentCategoryIndex + 1) % CATEGORY_ORDER.length];
    const nextPath = `/dashboard/categories/${nextCategorySlug}`;

    useEffect(() => {
        // Simulate data fetch based on slug
        let allQuestions: Question[] = [];

        if (slug === "music") allQuestions = musicQuestions;
        else if (slug === "food") allQuestions = foodQuestions;
        else if (slug === "history") allQuestions = historyQuestions;
        else {
            // Default placeholder
            allQuestions = [
                {
                    id: 999,
                    category: "General",
                    text: "What is the capital of Ghana?",
                    options: [
                        { id: "a", text: "Kumasi", isCorrect: false },
                        { id: "b", text: "Accra", isCorrect: true },
                        { id: "c", text: "Tamale", isCorrect: false },
                        { id: "d", text: "Cape Coast", isCorrect: false },
                    ]
                }
            ];
        }

        // By default, show all questions for this category to allow replaying
        // But shuffle them to keep it fresh
        const finalizedQuestions = shuffleArray(allQuestions);

        const timer = setTimeout(() => {
            setLoading(false);
            setCategoryQuestions(finalizedQuestions);
        }, 800);
        return () => clearTimeout(timer);
    }, [slug]);

    // Added shuffle helper
    const shuffleArray = (array: Question[]) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

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

    const handleNext = (isCorrect: boolean) => {
        // Mark current question as answered
        if (currentQuestion) {
            markAsAnswered(currentQuestion.id);
        }

        if (isCorrect) {
            setScore(s => s + 1);
        }

        if (currentIndex < categoryQuestions.length - 1) {
            setTimeout(() => setCurrentIndex(i => i + 1), 1000);
        } else {
            setTimeout(() => setGameStatus("finished"), 1000);
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
                    />
                ) : (
                    <QuizCard
                        question={currentQuestion || GENERIC_QUESTIONS[0]}
                        onNext={handleNext}
                        questionNumber={currentIndex + 1}
                        totalQuestions={categoryQuestions.length}
                    />
                )}
            </div>
        </div>
    );
}
