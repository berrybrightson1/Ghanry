"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "@/components/QuizCard";
import ResultScreen from "@/components/ResultScreen";

import { useQuestionProgress } from "@/hooks/useQuestionProgress";
import { useDailyTrivia } from "@/hooks/useDailyTrivia";

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
    {
        id: 5004,
        category: "Geography",
        text: "Which of these is the largest man-made lake by surface area in the world, located in Ghana?",
        options: [
            { id: "a", text: "Lake Victoria", isCorrect: false },
            { id: "b", text: "Lake Volta", isCorrect: true },
            { id: "c", text: "Lake Bosumtwi", isCorrect: false },
            { id: "d", text: "Lake Kariba", isCorrect: false },
        ],
    },
    {
        id: 5005,
        category: "Culture",
        text: "What is the name of the traditional Ghanaian kente cloth pattern that symbolizes royalty and wealth?",
        options: [
            { id: "a", text: "Adinkra", isCorrect: false },
            { id: "b", text: "Nyame Biribi Wo Soro", isCorrect: false },
            { id: "c", text: "Adweneasa", isCorrect: true },
            { id: "d", text: "Sankofa", isCorrect: false },
        ],
    },
];

export default function QuizPage() {
    // Redirect if already completed today to prevent XP farming
    const router = useRouter();
    const { isCompletedToday } = useDailyTrivia();
    const { markAsAnswered } = useQuestionProgress();

    // State
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const startTimeRef = useRef<number>(Date.now());

    // Reset timer on mount and start tick
    useEffect(() => {
        startTimeRef.current = Date.now();
        const timer = setInterval(() => {
            if (!isCompleted) {
                setCurrentTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [isCompleted]);

    useEffect(() => {
        if (isCompletedToday && !isCompleted) {
            router.replace("/dashboard");
        }
    }, [isCompletedToday, isCompleted, router]);

    // Don't render anything if redirecting
    if (isCompletedToday && !isCompleted) return null;

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
            const endTime = Date.now();
            setTimeElapsed(Math.floor((endTime - startTimeRef.current) / 1000));
            setIsCompleted(true);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#006B3F] to-[#004629] relative flex flex-col items-center justify-start px-4 overflow-x-hidden">
            <div className="w-full max-w-4xl mx-auto pt-8 pb-12 flex-1 flex flex-col items-center justify-start">
                {isCompleted ? (
                    <ResultScreen
                        score={score}
                        totalQuestions={QUESTIONS.length}
                        isDaily={true}
                        timeElapsed={timeElapsed}
                    />
                ) : (
                    <QuizCard
                        question={QUESTIONS[currentQuestionIndex]}
                        questionNumber={currentQuestionIndex + 1}
                        totalQuestions={QUESTIONS.length}
                        currentTime={currentTime}
                        onNext={(isCorrect) => handleNext(isCorrect)}
                    />
                )}
            </div>
        </div>
    );
}
