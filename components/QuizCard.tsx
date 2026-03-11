"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Timer, HelpCircle, ArrowLeft } from "lucide-react";
import confetti from "canvas-confetti";
import { useSoundEffects } from "@/hooks/useSoundEffects";

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
    onNext: (isCorrect: boolean, selectedOptionId: string) => void;
    questionNumber: number;
    totalQuestions: number;
    onPrevious?: () => void;
    savedAnswer?: string;
}

export default function QuizCard({
    question,
    onNext,
    questionNumber,
    totalQuestions,
    onPrevious,
    savedAnswer
}: QuizCardProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(savedAnswer ?? null);
    const [timeLeft, setTimeLeft] = useState(10);
    const { playCorrect, playWrong } = useSoundEffects();

    // Tracks whether THIS render cycle's selection came from the user (not a savedAnswer restore)
    const userJustSelected = useRef(false);

    // Tracks when the current question explicitly started
    const startMsRef = useRef<number>(Date.now());

    // Sync state if savedAnswer changes OR question ID changes (fixes reuse bug)
    useEffect(() => {
        userJustSelected.current = false; // reset on every question change
        setSelectedOption(savedAnswer ?? null);
        setTimeLeft(10); // reset timer for new question
        startMsRef.current = Date.now(); // reset real-time clock
    }, [savedAnswer, question.id]);

    // 10-second countdown timer (Real-time delta approach)
    useEffect(() => {
        if (selectedOption || savedAnswer) return; // pause if answered
        
        const MAX_SECONDS = 10;
        
        // Use a faster tick (every 100ms) to keep the UI perfectly crisp
        // but only update the state when the integer second changes.
        const timer = setInterval(() => {
            const now = Date.now();
            const elapsedSeconds = Math.floor((now - startMsRef.current) / 1000);
            const remaining = Math.max(0, MAX_SECONDS - elapsedSeconds);
            
            setTimeLeft(prev => {
                if (prev === remaining) return prev; // Avoid unnecessary re-renders if second hasn't ticked
                if (remaining <= 0) {
                    clearInterval(timer);
                    // Timeout! Automatically mark as incorrect
                    playWrong();
                    // Use setTimeout to allow state to settle before triggering parent onNext
                    setTimeout(() => onNext(false, ""), 0); 
                    return 0;
                }
                return remaining;
            });
        }, 100);
        
        return () => clearInterval(timer);
    }, [selectedOption, savedAnswer, onNext, playWrong]);

    // Auto-advance logic — only fires when user explicitly picks an answer (not on restore)
    useEffect(() => {
        if (selectedOption && userJustSelected.current) {
            const timer = setTimeout(() => {
                const isCorrect = question.options.find(o => o.id === selectedOption)?.isCorrect || false;
                onNext(isCorrect, selectedOption);
            }, 2500); // 2.5s delay for "glancing"
            return () => clearTimeout(timer);
        }
    }, [selectedOption, onNext, question]);



    const getTimerColor = (time: number) => {
        if (time > 5) return "bg-green-50 text-[#006B3F] border-green-100";
        if (time > 3) return "bg-yellow-50 text-yellow-700 border-yellow-100";
        return "bg-red-50 text-[#CE1126] border-red-100 animate-pulse";
    };

    const handleOptionSelect = (optionId: string) => {
        if (selectedOption !== null) return;

        userJustSelected.current = true; // mark as a real user selection
        setSelectedOption(optionId);
        const correct = optionId === question.options.find(o => o.isCorrect)?.id;

        if (correct) {
            playCorrect();
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#CE1126', '#FCD116', '#006B3F']
            });
        } else {
            playWrong();
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
        setTimeout(() => {
            if (selectedOption) {
                const isCorrect = question.options.find(o => o.id === selectedOption)?.isCorrect || false;
                onNext(isCorrect, selectedOption);
            }
        }, 300);
    };

    return (
        <div className="w-full flex flex-col items-center justify-start h-full">

            <AnimatePresence mode="wait">
                <motion.div
                    key={question.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-5 pt-5 pb-3">
                        <div className="flex flex-col">
                            <span className="text-gray-400 font-jakarta font-bold text-[10px] uppercase tracking-widest mb-1">
                                {question.category}
                            </span>
                            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-gray-50 rounded-full border border-gray-100">
                                <HelpCircle className="w-3 h-3 text-ghana-gold" />
                                <span className="text-gray-600 font-bold text-[9px]">
                                    Q {questionNumber} / {totalQuestions}
                                </span>
                            </div>
                        </div>
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border font-epilogue font-bold text-xs transition-colors duration-300 ${getTimerColor(timeLeft)}`}>
                            <Timer className="w-3.5 h-3.5" />
                            <span>00:{timeLeft.toString().padStart(2, '0')}</span>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1 bg-gray-100 mx-0 overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
                            className="h-full bg-gradient-to-r from-ghana-gold to-yellow-500"
                        />
                    </div>

                    {/* Question text */}
                    <div className="px-5 pt-4 pb-3">
                        <h2 className="text-base font-epilogue font-extrabold text-gray-900 leading-snug">
                            {question.text}
                        </h2>
                    </div>

                    {/* Options */}
                    <div className="flex flex-col gap-2.5 px-5 pb-4">
                        {question.options.map((option) => (
                            <motion.button
                                key={option.id}
                                onClick={() => !savedAnswer && handleOptionSelect(option.id)}
                                disabled={!!selectedOption && !savedAnswer}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-200 ${getOptionStyle(option)} text-left`}
                            >
                                <span className="font-jakarta font-semibold text-sm leading-snug pr-2">{option.text}</span>
                                <div className="shrink-0">
                                    {selectedOption === option.id ? (
                                        option.isCorrect ? (
                                            <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-50" />
                                        ) : (
                                            <XCircle className="w-6 h-6 text-red-500 fill-red-50" />
                                        )
                                    ) : (
                                        option.isCorrect && selectedOption && (
                                            <CheckCircle2 className="w-6 h-6 text-green-500 fill-green-50" />
                                        )
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Footer navigation */}
                    <div className="flex items-center gap-3 px-5 pb-5">
                        {onPrevious && (
                            <button
                                onClick={onPrevious}
                                aria-label="Previous Question"
                                className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors shrink-0"
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>
                        )}

                        <AnimatePresence>
                            {selectedOption && (
                                <motion.div
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 6 }}
                                    className="flex-1"
                                >
                                    <button
                                        onClick={handleNext}
                                        className="w-full py-3.5 bg-[#006B3F] hover:bg-[#004629] text-white font-epilogue font-bold text-sm rounded-xl shadow-lg shadow-green-900/15 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        Next
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
