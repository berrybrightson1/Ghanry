"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight, RotateCcw, Share2, Check, Copy } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import confetti from 'canvas-confetti';
import { useEffect, useState } from 'react';
import { useStreak } from "@/hooks/useStreak";
import { useXP } from "@/hooks/useXP";
import { useDailyTrivia } from "@/hooks/useDailyTrivia";

export default function ResultScreen({
    score,
    totalQuestions,
    isDaily,
    nextPath = "/dashboard/categories"
}: {
    score: number,
    totalQuestions: number,
    isDaily?: boolean,
    nextPath?: string
}) {
    const xpGained = score * 50;

    const { updateStreak } = useStreak();
    const {
        addXP,
        level,
        levelProgressPercent,
        xpToNextLevel
    } = useXP();
    const { markAsCompleted } = useDailyTrivia();
    const [hasUpdated, setHasUpdated] = useState(false);

    useEffect(() => {
        if (!hasUpdated && score > 0) {
            // Update streak and XP on successful completion
            updateStreak();
            addXP(xpGained);

            if (isDaily) {
                markAsCompleted();
            }

            // Trigger confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#CE1126', '#FCD116', '#006B3F']
            });

            setHasUpdated(true);
        }
    }, [score, updateStreak, addXP, xpGained, hasUpdated, isDaily, markAsCompleted]);

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
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-2 -right-4 bg-[#CE1126] text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                    >
                        +{xpGained} XP
                    </motion.div>
                </div>
            </motion.div>

            <h1 className="text-4xl font-epilogue font-extrabold text-white mb-2">
                Intelligence Level {level}
            </h1>
            <p className="text-green-100 font-jakarta text-lg mb-8">
                You scored <span className="font-bold text-ghana-gold">{score}</span> out of <span className="font-bold text-ghana-gold">{totalQuestions}</span>
            </p>

            {/* Level Progress */}
            <div className="w-full max-w-xs space-y-2 mb-12">
                <div className="flex justify-between items-end">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        Level {level} Progress
                    </span>
                    <span className="text-[10px] text-ghana-gold font-bold">
                        {xpToNextLevel} XP to Level {level + 1}
                    </span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden relative border border-white/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${levelProgressPercent}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-ghana-gold to-yellow-500 shadow-[0_0_15px_rgba(252,209,22,0.5)] rounded-full"
                    />
                </div>
            </div>

            <div className="flex flex-col w-full max-w-xs gap-3 relative z-50">
                {/* Share Button */}
                <button
                    onClick={() => {
                        const shareText = `I just hit Level ${level} in Ghanry! 🇬🇭\nScored ${score}/${totalQuestions} in the latest quiz.\n\nCan you beat my intelligence? #Ghanry #GhanaTrivia`;
                        if (navigator.share) {
                            navigator.share({
                                title: 'Ghanry Result',
                                text: shareText,
                                url: window.location.origin
                            }).catch(console.error);
                        } else {
                            navigator.clipboard.writeText(shareText);
                            toast.success("Result copied to clipboard!");
                        }
                    }}
                    className="w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-jakarta font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 mb-2"
                >
                    <Share2 className="w-4 h-4" /> Share Result
                </button>

                <Link href={nextPath} className="w-full">
                    <button className="w-full py-4 bg-ghana-gold hover:bg-yellow-500 text-black font-epilogue font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2">
                        Next Intelligence <ArrowRight className="w-4 h-4" />
                    </button>
                </Link>

                <Link href="/dashboard" className="w-full">
                    <button className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-epilogue font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                        Back to Menu <RotateCcw className="w-4 h-4" />
                    </button>
                </Link>
            </div>
        </div >
    );
}
