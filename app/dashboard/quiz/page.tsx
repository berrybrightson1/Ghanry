"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizCard from "@/components/QuizCard";
import ResultScreen from "@/components/ResultScreen";
import { Flame, Clock, Zap, PlayCircle, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";
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
    const [gameStatus, setGameStatus] = useState<"ready" | "playing" | "finished">("ready");
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [timeElapsed, setTimeElapsed] = useState(0);
    const startTimeRef = useRef<number>(Date.now());

    // startTimeRef tracks when the quiz started. We use this to calculate total timeElapsed at the end.

    useEffect(() => {
        if (isCompletedToday && gameStatus !== "finished") {
            router.replace("/dashboard");
        }
    }, [isCompletedToday, gameStatus, router]);

    if (isCompletedToday && gameStatus !== "finished") return null;

    const handleStart = () => {
        startTimeRef.current = Date.now();
        setGameStatus("playing");
    };

    const handleNext = (isCorrect: boolean, selectedOptionId: string) => {
        // Mark current daily question as answered
        markAsAnswered(QUESTIONS[currentQuestionIndex].id);
        setUserAnswers(prev => ({ ...prev, [QUESTIONS[currentQuestionIndex].id]: selectedOptionId }));

        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            const endTime = Date.now();
            setTimeElapsed(Math.floor((endTime - startTimeRef.current) / 1000));
            setGameStatus("finished");
        }
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
                    <div className="w-24 h-24 rounded-3xl bg-orange-50 border border-orange-100 flex items-center justify-center shadow-sm mb-2">
                        <CalendarCheck className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                    </div>

                    <div>
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Ready to play</p>
                        <h1 className="font-epilogue font-extrabold text-3xl text-gray-900 leading-tight">Daily Trivia</h1>
                        <p className="text-gray-500 font-jakarta text-sm mt-3 leading-relaxed">Every day brings five new questions drawn from across Ghanaian history, culture, geography, food and more. Your answers are locked in once submitted, your streak is on the line, and the timer starts the moment you begin. Come back tomorrow for a fresh set.</p>
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
                            <Flame className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
                            <span className="font-epilogue font-extrabold text-gray-900 text-base leading-none">Daily</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Streak</span>
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
                        totalQuestions={QUESTIONS.length}
                        isDaily={true}
                        timeElapsed={timeElapsed}
                    />
                ) : (
                    <QuizCard
                        question={QUESTIONS[currentQuestionIndex]}
                        questionNumber={currentQuestionIndex + 1}
                        totalQuestions={QUESTIONS.length}
                        onNext={(isCorrect, optionId) => handleNext(isCorrect, optionId)}
                        savedAnswer={userAnswers[QUESTIONS[currentQuestionIndex]?.id]}
                    />
                )}
            </div>
        </div>
    );
}
