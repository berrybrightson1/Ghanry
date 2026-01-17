"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight, RotateCcw, Download } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import confetti from 'canvas-confetti';
import { useEffect, useState, useRef } from 'react';
import { useStreak } from "@/hooks/useStreak";
import { useXP } from "@/hooks/useXP";
import { useDailyTrivia } from "@/hooks/useDailyTrivia";
import { calculateProgress, calculateQuizReward } from "@/lib/gamification";
import ShareCard from "@/components/ShareCard";
import { toPng } from 'html-to-image';

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
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const shareCardRef = useRef<HTMLDivElement>(null);

    // Calculate rewards
    const isTourist = typeof window !== 'undefined' ? localStorage.getItem("ghanry_status") === "tourist" : false;
    const currentProgress = calculateProgress(xp);
    const quizReward = calculateQuizReward(score, totalQuestions, streak, currentProgress.currentLevel, isTourist, timeElapsed);

    // Future stats for display
    const newTotalXP = xp + quizReward.totalXP;
    const newProgress = calculateProgress(newTotalXP);

    useEffect(() => {
        if (!hasUpdated) {
            // Update streak and XP on completion
            updateStreak();

            // Only add XP if they got at least one question right or it's a daily
            if (score > 0 || isDaily) {
                addXP(quizReward.totalXP);
            }

            if (isDaily) {
                markAsCompleted();
            }

            // Trigger confetti if score is decent
            if (score > (totalQuestions / 2)) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#CE1126', '#FCD116', '#006B3F']
                });
            }

            setHasUpdated(true);
        }
    }, [score, totalQuestions, updateStreak, addXP, quizReward.totalXP, hasUpdated, isDaily, markAsCompleted]);

    const handleDownloadShareCard = async () => {
        if (!shareCardRef.current) return;

        setIsGeneratingImage(true);
        try {
            const dataUrl = await toPng(shareCardRef.current, {
                quality: 0.95,
                pixelRatio: 2,
                backgroundColor: '#1a5236',
            });

            // Download the image
            const link = document.createElement('a');
            link.download = `ghanry-result-${score}-${totalQuestions}.png`;
            link.href = dataUrl;
            link.click();
            toast.success("Share card downloaded!");
        } catch (error) {
            console.error('Failed to generate share image:', error);
            toast.error("Failed to generate share card");
        } finally {
            setIsGeneratingImage(false);
        }
    };

    return (
        <>
            {/* Hidden Share Card for Image Generation */}
            <ShareCard
                ref={shareCardRef}
                score={score}
                totalQuestions={totalQuestions}
                rank={newProgress.rank}
                level={newProgress.currentLevel}
            />

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
                                className="absolute -top-2 -right-4 bg-[#CE1126] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                            >
                                +{quizReward.totalXP} XP
                            </motion.div>
                        )}
                    </div>
                </motion.div>

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
                        onClick={handleDownloadShareCard}
                        disabled={isGeneratingImage}
                        className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-jakarta font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 mb-2 disabled:opacity-50"
                    >
                        <Download className="w-4 h-4" />
                        {isGeneratingImage ? "Generating..." : "Download Share Card"}
                    </button>

                    <Link href={nextPath} className="w-full">
                        <button className="w-full py-4 bg-ghana-gold hover:bg-yellow-500 text-black font-epilogue font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
                            Next Quiz <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>

                    <Link href="/dashboard" className="w-full">
                        <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-epilogue font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                            Back to Menu <RotateCcw className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div >
        </>
    );
}
