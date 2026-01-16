"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Timer, HelpCircle } from "lucide-react";
import confetti from "canvas-confetti";

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
}

interface QuizCardProps {
    question: Question;
    onNext: (isCorrect: boolean) => void;
    questionNumber: number;
    totalQuestions: number;
}

export default function QuizCard({
    question,
    onNext,
    questionNumber,
    totalQuestions
}: QuizCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isFlipping, setIsFlipping] = useState(false);
    const [secondsLeft, setSecondsLeft] = useState(240); // 4 minutes

    useEffect(() => {
        if (selectedOption) return; // Pause timer on answer

        const timer = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [selectedOption]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (optionId: string) => {
        if (selectedOption !== null) return;

        setSelectedOption(optionId);
        const correct = optionId === question.options.find(o => o.isCorrect)?.id;

        if (correct) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#CE1126', '#FCD116', '#006B3F']
            });
        }
    };

    const getOptionStyle = (option: Option) => {
        if (!selectedOption) return "bg-white border-2 border-gray-100 hover:border-ghana-gold hover:bg-gray-50";

        if (option.id === selectedOption) {
            return option.isCorrect
                ? "bg-green-50 border-2 border-green-500 text-green-700"
                : "bg-red-50 border-2 border-red-500 text-red-700";
        }

        if (option.isCorrect && selectedOption) return "bg-green-50 border-2 border-green-500 text-green-700";

        return "bg-white border-2 border-gray-50 opacity-40";
    };

    const handleNext = () => {
        setIsFlipping(true);
        setTimeout(() => {
            const isCorrect = question.options.find(o => o.id === selectedOption)?.isCorrect || false;
            setSelectedOption(null);
            setIsFlipping(false);
            onNext(isCorrect);
        }, 500);
    };

    return (
        <div className="w-full max-w-xl mx-auto px-4 pt-2 pb-2 flex flex-col items-center justify-start min-h-[400px] relative">

            {/* Premium Aura Glow */}
            <div className="absolute inset-0 bg-ghana-gold/10 blur-[100px] rounded-full z-0 pointer-events-none scale-75 animate-pulse" />
            <div className="absolute inset-0 bg-[#006B3F]/20 blur-[80px] rounded-full z-0 pointer-events-none -translate-y-8" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={question.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="w-full bg-white/95 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative z-10 flex flex-col border border-white"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-gray-400 font-jakarta font-bold text-[10px] uppercase tracking-widest mb-1 px-1">
                                {question.category}
                            </span>
                            <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-gray-50 rounded-full border border-gray-100">
                                <HelpCircle className="w-3 h-3 text-ghana-gold" />
                                <span className="text-gray-600 font-bold text-[9px]">
                                    Q {questionNumber} / {totalQuestions}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-[#CE1126] rounded-xl border border-red-100 font-epilogue font-bold text-xs shadow-sm">
                            <Timer className="w-3.5 h-3.5 animate-pulse" />
                            <span>{formatTime(secondsLeft)}</span>
                        </div>
                    </div>

                    {/* Progress Bar Layer */}
                    <div className="w-full h-1.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                            className="h-full bg-gradient-to-r from-ghana-gold to-yellow-500 rounded-full"
                        />
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-epilogue font-extrabold text-[#2D2D2D] mb-4 leading-tight">
                            {question.text}
                        </h2>

                        {/* Options */}
                        <div className="space-y-4">
                            {question.options.map((option) => (
                                <motion.button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option.id)}
                                    disabled={!!selectedOption}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group w-full p-4 rounded-2xl flex items-center justify-between transition-all duration-300 ${getOptionStyle(option)} text-left`}
                                >
                                    <span className="font-jakarta font-bold text-base">{option.text}</span>
                                    <div className="flex items-center">
                                        {selectedOption === option.id ? (
                                            option.isCorrect ? (
                                                <CheckCircle2 className="w-7 h-7 text-green-500 fill-green-50" />
                                            ) : (
                                                <XCircle className="w-7 h-7 text-red-500 fill-red-50" />
                                            )
                                        ) : (
                                            option.isCorrect && selectedOption && (
                                                <CheckCircle2 className="w-7 h-7 text-green-500 fill-green-50" />
                                            )
                                        )}
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Footer / Next Button */}
                    <AnimatePresence>
                        {selectedOption && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="mt-6"
                            >
                                <button
                                    onClick={handleNext}
                                    className="w-full py-4 bg-[#006B3F] hover:bg-[#004629] text-white font-epilogue font-bold text-base rounded-2xl shadow-xl shadow-green-900/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Next Intelligence
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
