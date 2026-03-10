"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowRight, RotateCcw, Flame, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { useEffect, useState } from "react";
import { useStreak } from "@/hooks/useStreak";
import { useXP } from "@/hooks/useXP";
import { useDailyTrivia } from "@/hooks/useDailyTrivia";
import { calculateProgress, calculateQuizReward } from "@/lib/gamification";

const TOPIC_LABELS: Record<string, string> = {
    history:   "History",
    culture:   "Culture & Tribes",
    geography: "Geography",
    food:      "Food & Lifestyle",
    music:     "Music & Arts",
    arts:      "Arts & Crafts",
    sports:    "Sports",
    general:   "General Knowledge",
};

export default function ResultScreen({
    score,
    totalQuestions,
    isDaily,
    timeElapsed = 0,
    nextPath = "/dashboard/categories",
    categorySlug
}: {
    score: number;
    totalQuestions: number;
    isDaily?: boolean;
    timeElapsed?: number;
    nextPath?: string;
    categorySlug?: string;
}) {
    const { updateStreak, streak } = useStreak();
    const { addXP, xp, activeBuffs } = useXP();
    const { markAsCompleted } = useDailyTrivia();
    const [hasUpdated, setHasUpdated] = useState(false);
    const router = useRouter();

    // User profile
    const [nickname, setNickname] = useState("Champion");
    const [location, setLocation] = useState("");

    useEffect(() => {
        setNickname(localStorage.getItem("ghanry_nickname") ?? "Champion");
        const loc = localStorage.getItem("ghanry_location");
        const region = localStorage.getItem("ghanry_region");
        setLocation(loc || region || "");
    }, []);

    const isTourist = typeof window !== "undefined"
        ? localStorage.getItem("ghanry_status") === "tourist"
        : false;

    const currentProgress = calculateProgress(xp);
    const quizReward = calculateQuizReward(
        score, totalQuestions, streak, currentProgress.currentLevel, isTourist, timeElapsed
    );
    const multiplier = activeBuffs.find(b => b.type === "multiplier")?.value || 1;
    const baseXP = quizReward.totalXP;
    const finalXP = Math.round(baseXP * multiplier);
    const newTotalXP = xp + quizReward.totalXP;
    const newProgress = calculateProgress(newTotalXP);
    const [xpAwarded, setXpAwarded] = useState(false);

    const topic = categorySlug
        ? (TOPIC_LABELS[categorySlug] ?? categorySlug)
        : "Daily Trivia";

    const isPerfect = score === totalQuestions;
    const isGood = score >= totalQuestions * 0.6;

    useEffect(() => {
        if (!hasUpdated) {
            const completedLevels = JSON.parse(
                localStorage.getItem("ghanry_completed_levels") || "[]"
            );
            const isReplay = completedLevels.includes(categorySlug) && !isDaily;
            updateStreak();

            if (!isReplay && (score > 0 || isDaily)) {
                addXP(baseXP);
                setXpAwarded(true);
                if (!isDaily && categorySlug) {
                    completedLevels.push(categorySlug);
                    localStorage.setItem("ghanry_completed_levels", JSON.stringify(completedLevels));
                }
            } else {
                setXpAwarded(false);
            }

            if (isDaily) markAsCompleted();

            if (score > totalQuestions / 2 || isDaily) {
                confetti({
                    particleCount: 220,
                    spread: 80,
                    origin: { y: 0.55 },
                    colors: ["#CE1126", "#FCD116", "#006B3F"],
                    disableForReducedMotion: true,
                });
            }
            setHasUpdated(true);
        }
    }, [score, totalQuestions, updateStreak, addXP, baseXP, hasUpdated, isDaily, markAsCompleted, categorySlug]);

    return (
        <div className="w-full flex flex-col items-center px-4 py-6 gap-5">

            {/* ── Shareable personal card ─────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.35, duration: 0.7 }}
                className="w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/40"
            >
                {/* Ghana flag stripe — top edge */}
                <div className="flex h-[5px]">
                    <div className="flex-1 bg-[#006B3F]" />
                    <div className="flex-1 bg-[#FCD116]" />
                    <div className="flex-1 bg-[#CE1126]" />
                </div>

                {/* Card body */}
                <div className="bg-white/12 backdrop-blur-xl border border-white/10 px-6 pt-6 pb-5 flex flex-col items-center gap-4 relative overflow-hidden">

                    {/* Subtle background rings */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#FCD116]/8 blur-2xl" />
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#CE1126]/8 blur-2xl" />
                    </div>

                    {/* Trophy */}
                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.5, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", bounce: 0.6, delay: 0.15 }}
                            className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl ${
                                isPerfect
                                    ? "bg-gradient-to-tr from-[#FCD116] to-yellow-300 shadow-yellow-500/30"
                                    : isGood
                                    ? "bg-gradient-to-tr from-[#006B3F] to-emerald-400 shadow-green-500/30"
                                    : "bg-white/20"
                            }`}
                        >
                            <Trophy className="w-10 h-10 text-white fill-white" />
                        </motion.div>

                        {(score > 0 || isDaily) && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                                className={`absolute -top-2 -right-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full border-2 border-white/20 shadow-lg ${
                                    xpAwarded ? "bg-[#CE1126]" : "bg-white/30"
                                }`}
                            >
                                {xpAwarded ? `+${finalXP} XP` : "Replay"}
                            </motion.div>
                        )}
                    </div>

                    {/* Name + location */}
                    <div className="text-center">
                        <h2 className="font-epilogue font-extrabold text-white text-2xl leading-tight">
                            {nickname}
                        </h2>
                        {location && (
                            <div className="flex items-center justify-center gap-1 mt-1">
                                <MapPin className="w-3 h-3 text-[#FCD116]" />
                                <span className="text-[#FCD116]/90 font-jakarta text-xs font-bold">
                                    {location}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* "scored X/Y on TOPIC" */}
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-white/60 font-jakarta text-xs uppercase tracking-widest">
                            scored
                        </p>
                        <div className="flex items-baseline gap-1">
                            <span className="font-epilogue font-extrabold text-[#FCD116] text-5xl leading-none">
                                {score}
                            </span>
                            <span className="font-epilogue font-bold text-white/40 text-2xl leading-none">
                                /{totalQuestions}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="h-px flex-1 w-8 bg-white/20 rounded" />
                            <span className="text-[#FCD116] font-jakarta font-extrabold text-xs uppercase tracking-[0.15em]">
                                {topic}
                            </span>
                            <div className="h-px flex-1 w-8 bg-white/20 rounded" />
                        </div>
                    </div>

                    {/* Rank + level */}
                    <div className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-2xl px-5 py-2.5">
                        <span className="font-epilogue font-extrabold text-white text-lg">
                            {newProgress.rank}
                        </span>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="text-white/60 font-jakarta text-sm font-bold">
                            Level {newProgress.currentLevel}
                        </span>
                    </div>

                    {/* Daily badge */}
                    {isDaily && (
                        <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 px-4 py-1.5 rounded-xl text-xs font-bold">
                            <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                            Daily Trivia Completed!
                        </div>
                    )}

                    {/* XP bonus chips */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {quizReward.timeBonus > 0 && (
                            <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-500/30">
                                Fast Finish +{quizReward.timeBonus} XP
                            </span>
                        )}
                        {quizReward.perfectScoreBonus > 0 && (
                            <span className="bg-[#FCD116]/20 text-[#FCD116] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#FCD116]/30">
                                Perfect +{quizReward.perfectScoreBonus} XP
                            </span>
                        )}
                        {quizReward.streakBonus > 0 && (
                            <span className="bg-red-500/20 text-red-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-red-500/30">
                                Streak +{quizReward.streakBonus} XP
                            </span>
                        )}
                        {isTourist && (
                            <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-purple-500/30">
                                Tourist Buff ×1.5
                            </span>
                        )}
                        {multiplier > 1 && (
                            <span className="bg-[#FCD116]/20 text-[#FCD116] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#FCD116]/30 animate-pulse">
                                Wisdom ×{multiplier} Active!
                            </span>
                        )}
                    </div>

                    {/* Ghanry branding watermark */}
                    <p className="text-white/20 font-epilogue font-bold text-[10px] tracking-widest uppercase mt-1">
                        ghanry.app
                    </p>
                </div>

                {/* Ghana flag stripe — bottom edge */}
                <div className="flex h-[5px]">
                    <div className="flex-1 bg-[#CE1126]" />
                    <div className="flex-1 bg-[#FCD116]" />
                    <div className="flex-1 bg-[#006B3F]" />
                </div>
            </motion.div>

            {/* ── XP progress bar ─────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full space-y-2"
            >
                <div className="flex justify-between items-end">
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
                        Level {newProgress.currentLevel} Progress
                    </span>
                    <span className="text-[10px] text-[#FCD116] font-bold">
                        {newProgress.xpToNextLevel} XP to Level {newProgress.currentLevel + 1}
                    </span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${newProgress.progressPercent}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-[#FCD116] to-yellow-400 shadow-[0_0_12px_rgba(252,209,22,0.5)] rounded-full"
                    />
                </div>
            </motion.div>

            {/* ── Action buttons ──────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="w-full flex flex-col gap-3"
            >
                <button
                    onClick={() => router.push("/dashboard/streak")}
                    className="w-full py-4 bg-white/10 text-white font-epilogue font-bold rounded-2xl border border-white/20 active:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                    <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
                    View My Journey
                </button>

                <Link href={nextPath} className="w-full">
                    <button className="w-full py-4 bg-[#FCD116] text-[#004629] font-epilogue font-extrabold rounded-2xl shadow-xl shadow-yellow-900/20 active:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                        Next Quiz <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>

                <Link href="/dashboard" className="w-full">
                    <button className="w-full py-4 bg-white/5 text-white/50 font-epilogue font-bold rounded-2xl active:bg-white/10 transition-colors flex items-center justify-center gap-2">
                        Back to Menu <RotateCcw className="w-4 h-4" />
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}
