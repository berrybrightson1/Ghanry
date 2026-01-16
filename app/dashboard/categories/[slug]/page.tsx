"use client";

import { useState, useEffect } from "react";
import { useStreak } from '@/hooks/useStreak';
import { Share2 } from "lucide-react";
import QuizCard from "@/components/QuizCard";
import { motion } from "framer-motion";
import { ArrowLeft, Trophy, RotateCcw, Loader2 } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
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

// Mock Data Store
const QUESTIONS_DB: Record<string, Question[]> = {
    history: [
        {
            id: 1,
            category: "History",
            text: "Who was the first President of Ghana?",
            options: [
                { id: "a", text: "J.B. Danquah", isCorrect: false },
                { id: "b", text: "Kwame Nkrumah", isCorrect: true },
                { id: "c", text: "Jerry Rawlings", isCorrect: false },
                { id: "d", text: "Kofi Annan", isCorrect: false },
            ],
            isSilhouette: false
        },
        {
            id: 2,
            category: "History",
            text: "In which year did Ghana gain independence?",
            options: [
                { id: "a", text: "1957", isCorrect: true },
                { id: "b", text: "1960", isCorrect: false },
                { id: "c", text: "1948", isCorrect: false },
                { id: "d", text: "1981", isCorrect: false },
            ],
        },
        {
            id: 3,
            category: "History",
            text: "What was the former name of Ghana?",
            options: [
                { id: "a", text: "Ivory Coast", isCorrect: false },
                { id: "b", text: "Gold Coast", isCorrect: true },
                { id: "c", text: "Grain Coast", isCorrect: false },
                { id: "d", text: "Slave Coast", isCorrect: false },
            ],
        }
    ],
    culture: [
        {
            id: 1,
            category: "Culture",
            text: "What does the Adinkra symbol 'Gye Nyame' mean?",
            options: [
                { id: "a", text: "Love for all", isCorrect: false },
                { id: "b", text: "Except God", isCorrect: true },
                { id: "c", text: "Unity in diversity", isCorrect: false },
                { id: "d", text: "Strength of soul", isCorrect: false },
            ],
        },
        {
            id: 2,
            category: "Culture",
            text: "Which festival is celebrated by the Ga people?",
            options: [
                { id: "a", text: "Odwira", isCorrect: false },
                { id: "b", text: "Homowo", isCorrect: true },
                { id: "c", text: "Aboakyir", isCorrect: false },
                { id: "d", text: "Hogbetsotso", isCorrect: false },
            ],
        }
    ],
    food: [
        {
            id: 1,
            category: "Food",
            text: "Which of these is the main ingredient in Banku?",
            options: [
                { id: "a", text: "Rice", isCorrect: false },
                { id: "b", text: "Cassava & Corn Dough", isCorrect: true },
                { id: "c", text: "Yam", isCorrect: false },
                { id: "d", text: "Plantain", isCorrect: false },
            ],
        }
    ]
};

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
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameStatus, setGameStatus] = useState<"playing" | "finished">("playing");

    const { markAsAnswered, answeredIds } = useQuestionProgress();
    const currentQuestion = categoryQuestions[currentIndex];
    const { streak, updateStreak } = useStreak();

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

        // Filter out already answered questions
        const freshQuestions = allQuestions.filter(q => !answeredIds.includes(q.id));

        // If everything is answered, allow re-playing or show mastered state
        // For now, let's just use the full set if empty to avoid crashing, 
        // but the user will see a "Mastered" badge if they want.
        const finalizedQuestions = freshQuestions.length > 0 ? freshQuestions : allQuestions;

        const timer = setTimeout(() => {
            setLoading(false);
            setCategoryQuestions(finalizedQuestions);
        }, 1000);
        return () => clearTimeout(timer);
    }, [slug, answeredIds]);

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
            const isTourist = localStorage.getItem("ghanry_status") === "tourist";
            const points = isTourist ? 150 : 100; // 1.5x Multiplier for Tourists
            setScore(s => s + points);
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
