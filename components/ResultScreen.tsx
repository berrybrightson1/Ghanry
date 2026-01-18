"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight, RotateCcw, Flame } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { useStreak } from "@/hooks/useStreak";
import { useXP } from "@/hooks/useXP";
import { useDailyTrivia } from "@/hooks/useDailyTrivia";
import { calculateProgress, calculateQuizReward } from "@/lib/gamification";

export default function ResultScreen({
    score,
    totalQuestions,
    isDaily,
    timeElapsed = 0,
    nextPath = "/dashboard/categories"
}: {
    score: number,
    totalQuestions: number,
    isDaily?: boolean,
    timeElapsed?: number,
    nextPath?: string
}) {
    const { updateStreak, streak } = useStreak();
    const { addXP, xp } = useXP();
    const { markAsCompleted } = useDailyTrivia();
    const [hasUpdated, setHasUpdated] = useState(false);
    const router = useRouter();

    // Calculate rewards
    const isTourist = typeof window !== 'undefined' ? localStorage.getItem("ghanry_status") === "tourist" : false;
    const currentProgress = calculateProgress(xp);
    const quizReward = calculateQuizReward(score, totalQuestions, streak, currentProgress.currentLevel, isTourist, timeElapsed);

    // Check for active multiplier
    const { activeBuffs } = useXP();
    const multiplier = activeBuffs.find(b => b.type === 'multiplier')?.value || 1;
    const baseXP = quizReward.totalXP;
    const finalXP = baseXP * multiplier;

    // Future stats for display
    const newTotalXP = xp + quizReward.totalXP;
    const newProgress = calculateProgress(newTotalXP);

    useEffect(() => {
        if (!hasUpdated) {
            // Update streak and XP on completion
            updateStreak();

            // Only add XP if they got at least one question right or it's a daily
            if (score > 0 || isDaily) {
                addXP(baseXP); // Multiplier is handled inside addXP
            }

            if (isDaily) {
                markAsCompleted();
            }

            // Trigger confetti if score is decent OR it's a Daily Trivia completion
            if (score > (totalQuestions / 2) || isDaily) {
                confetti({
                    particleCount: 200,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#CE1126', '#FCD116', '#006B3F'],
                    disableForReducedMotion: true
                });
            }

            setHasUpdated(true);
        }
    }, [score, totalQuestions, updateStreak, addXP, baseXP, hasUpdated, isDaily, markAsCompleted]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-transparent p-6 text-center">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="mb-8"
            >
                <div className="relative inline-block">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-ghana-gold to-yellow-300 flex items-center justify-center shadow-[0_0_30px_rgba(252,209,22,0.3)] animate-pulse">
                        <Trophy className="w-12 h-12 text-white fill-white" />
                    </div>
                    {(score > 0 || isDaily) && (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-2 -right-4 bg-[#CE1126] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white"
                        >
                            +{finalXP} XP
                        </motion.div>
                    )}
                </div>
            </motion.div>

            {isDaily && (
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-4 bg-green-500/20 border border-green-500/30 text-green-100 px-4 py-2 rounded-xl backdrop-blur-md"
                >
                    <span className="font-bold flex items-center gap-2">
                        <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                        Daily Trivia Completed!
                    </span>
                </motion.div>
            )}

            <h1 className="text-4xl font-epilogue font-extrabold text-white mb-2">
                {newProgress.rank} - Level {newProgress.currentLevel}
            </h1>
            <p className="text-green-100 font-jakarta text-lg mb-4">
                Score: <span className="font-bold text-ghana-gold">{score}/{totalQuestions}</span>
            </p>

            {/* Bonus Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {quizReward.timeBonus > 0 && (
                    <div className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2 py-1 rounded-full border border-blue-500/30">
                        Fast Finish +{quizReward.timeBonus} XP
                    </div>
                )}
                {quizReward.perfectScoreBonus > 0 && (
                    <div className="bg-ghana-gold/20 text-ghana-gold text-[10px] font-bold px-2 py-1 rounded-full border border-ghana-gold/30">
                        Perfect +{quizReward.perfectScoreBonus} XP
                    </div>
                )}
                {quizReward.streakBonus > 0 && (
                    <div className="bg-red-500/20 text-red-300 text-[10px] font-bold px-2 py-1 rounded-full border border-red-500/30">
                        Streak +{quizReward.streakBonus} XP
                    </div>
                )}
                {multiplier > 1 && (
                    <div className="bg-[#FCD116]/20 text-[#FCD116] text-[10px] font-bold px-2 py-1 rounded-full border border-[#FCD116]/30 animate-pulse">
                        Wisdom x{multiplier} Active!
                    </div>
                )}
            </div>

            {/* Level Progress */}
            <div className="w-full max-w-xs space-y-2 mb-12">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        Level {newProgress.currentLevel} Progress
                    </span>
                    <span className="text-[10px] text-ghana-gold font-bold">
                        {newProgress.xpToNextLevel} XP to Level {newProgress.currentLevel + 1}
                    </span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden relative border border-white/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${newProgress.progressPercent}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-ghana-gold to-yellow-500 shadow-[0_0_15px_rgba(252,209,22,0.5)] rounded-full"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full max-w-xs gap-3 relative z-50">
                <button
                    onClick={() => router.push("/dashboard/streak")}
                    className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-epilogue font-bold rounded-2xl border border-white/20 transition-all flex items-center justify-center gap-2 mb-2"
                >
                    <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
                    View My Journey
                </button>

                <Link href={nextPath} className="w-full">
                    <button className="w-full py-4 bg-ghana-gold hover:bg-yellow-500 text-green-900 font-epilogue font-black rounded-2xl shadow-xl shadow-yellow-900/20 transition-all flex items-center justify-center gap-2">
                        Next Quiz <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>

                <Link href="/dashboard" className="w-full">
                    <button className="w-full py-4 bg-white/5 hover:bg-white/10 text-white/60 font-epilogue font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                        Back to Menu <RotateCcw className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
