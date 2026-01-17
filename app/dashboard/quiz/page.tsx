"use client";

import { useState, useEffect } from "react";
import QuizCard from "@/components/QuizCard";
import ResultScreen from "@/components/ResultScreen";
import { useRouter } from "next/navigation";

import { useDailyTrivia } from "@/hooks/useDailyTrivia";

import { useQuestionProgress } from "@/hooks/useQuestionProgress";

// Daily Trivia Questions - Distinct ID range (5000+) to avoid overlap with category IDs
const QUESTIONS = [
    {
        id: 5001,
        category: "History",
        text: "Who led the final Ashanti uprising against British colonialism in 1900, known as the War of the Golden Stool?",
        options: [
            { id: "a", text: "Nana Prempeh I", isCorrect: false },
            { id: "b", text: "Yaa Asantewaa", isCorrect: true },
            { id: "c", text: "Osei Tutu", isCorrect: false },
            { id: "d", text: "Kofi Karikari", isCorrect: false },
        ],
    },
    {
        id: 5002,
        category: "History",
        text: "The Ashanti Empire's military power was symbolized by which animal on their flag?",
        options: [
            { id: "a", text: "Lion", isCorrect: false },
            { id: "b", text: "Eagle", isCorrect: false },
            { id: "c", text: "Porcupine", isCorrect: true },
            { id: "d", text: "Elephant", isCorrect: false },
        ],
    },
    {
        id: 5003,
        category: "History",
        text: "What is the official seat of the Asantehene, the traditional ruler of the Ashanti Kingdom?",
        options: [
            { id: "a", text: "Osu Castle", isCorrect: false },
            { id: "b", text: "Manhyia Palace", isCorrect: true },
            { id: "c", text: "Elmina Castle", isCorrect: false },
            { id: "d", text: "Paga Palace", isCorrect: false },
        ],
    },
];

export default function QuizPage() {
    const router = useRouter();
    const { isCompletedToday } = useDailyTrivia();
    const { markAsAnswered } = useQuestionProgress();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);

    // Temporarily disabled daily redirect to allow for testing and replaying
    // useEffect(() => {
    //     if (isCompletedToday && !isCompleted) {
    //         router.replace("/dashboard");
    //     }
    // }, [isCompletedToday, isCompleted, router]);

    // Don't render anything if redirecting
    // if (isCompletedToday && !isCompleted) return null;

    const handleNext = (isCorrect: boolean) => {
        // Mark current daily question as answered
        markAsAnswered(QUESTIONS[currentQuestionIndex].id);

        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Quiz is complete
            setIsCompleted(true);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#006B3F] to-[#004629] relative flex flex-col items-center justify-start px-4 overflow-x-hidden">
            <div className="w-full max-w-4xl mx-auto pt-8 pb-12 flex-1 flex flex-col items-center justify-start">
                {isCompleted ? (
                    <ResultScreen score={score} totalQuestions={QUESTIONS.length} isDaily={true} />
                ) : (
                    <QuizCard
                        question={QUESTIONS[currentQuestionIndex]}
                        questionNumber={currentQuestionIndex + 1}
                        totalQuestions={QUESTIONS.length}
                        onNext={(isCorrect) => handleNext(isCorrect)}
                    />
                )}
            </div>
        </div>
    );
}
