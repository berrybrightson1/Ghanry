"use client";

import { motion } from 'framer-motion';
import { useSoundEffects } from '@/hooks/useSoundEffects';
import { Trophy, ArrowRight, RotateCcw, Flame, MapPin, Download, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { useEffect, useState, useRef, useCallback } from "react";
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

function buildWriteup(
    nickname: string,
    score: number,
    total: number,
    topic: string,
    rank: string,
    isDaily: boolean
): string {
    const pct = score / total;
    const first = nickname.split(" ")[0];

    if (isDaily) {
        if (pct === 1)
            return `${first} just aced the Daily Ghana Trivia. All ${total} questions, zero mistakes. Some people study Ghana, ${first} lives it.`;
        if (pct >= 0.8)
            return `${first} scored ${score}/${total} on today's Ghana Trivia. The culture runs deep and the knowledge shows.`;
        return `${first} showed up for today's Ghana Trivia and kept the streak alive. Every question is a step deeper into the story of Ghana.`;
    }

    if (pct === 1)
        return `${first} went ${score} for ${score} on Ghana ${topic}. Not luck, that is real knowledge of who we are.`;
    if (pct >= 0.8)
        return `${first} scored ${score}/${total} on Ghana ${topic}. A solid ${rank}, learning the story behind the flag.`;
    if (pct >= 0.6)
        return `${first} is digging into Ghana ${topic}, scored ${score}/${total} and growing fast. The journey to knowing your roots has no shortcut.`;
    return `${first} took the Ghana ${topic} quiz and started the journey. Every Ghanaian story worth knowing starts with curiosity.`;
}

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
    const [downloading, setDownloading] = useState(false);
    const router = useRouter();
    const cardRef = useRef<HTMLDivElement>(null);

    const [nickname, setNickname] = useState("Champion");
    const [location, setLocation] = useState("");

    const { playFanfare } = useSoundEffects();

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
                playFanfare();
                confetti({
                    particleCount: 200,
                    spread: 75,
                    origin: { y: 0.5 },
                    colors: ["#CE1126", "#FCD116", "#006B3F"],
                    disableForReducedMotion: true,
                });
            }
            setHasUpdated(true);
        }
    }, [score, totalQuestions, updateStreak, addXP, baseXP, hasUpdated, isDaily, markAsCompleted, categorySlug, playFanfare]);

    const writeup = buildWriteup(
        nickname, score, totalQuestions, topic, newProgress.rank, !!isDaily
    );

    const handleDownload = useCallback(async () => {
        if (!cardRef.current || downloading) return;
        setDownloading(true);
        try {
            const html2canvas = (await import("html2canvas")).default;
            const canvas = await html2canvas(cardRef.current, {
                backgroundColor: null,
                scale: 3,
                useCORS: true,
                logging: false,
            });
            const link = document.createElement("a");
            link.download = `ghanry-${nickname.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch (err) {
            console.error("Download failed:", err);
        } finally {
            setDownloading(false);
        }
    }, [downloading, nickname]);

    const bonusChips = [
        quizReward.timeBonus > 0 && { label: `Fast Finish +${quizReward.timeBonus} XP`, color: "bg-blue-500/20 text-blue-200 border-blue-500/25" },
        quizReward.perfectScoreBonus > 0 && { label: `Perfect +${quizReward.perfectScoreBonus} XP`, color: "bg-amber-400/20 text-amber-300 border-amber-400/25" },
        quizReward.streakBonus > 0 && { label: `Streak +${quizReward.streakBonus} XP`, color: "bg-orange-500/20 text-orange-300 border-orange-500/25" },
        isTourist && { label: "Tourist Buff ×1.5", color: "bg-purple-500/20 text-purple-300 border-purple-500/25" },
        multiplier > 1 && { label: `Wisdom ×${multiplier}`, color: "bg-amber-400/20 text-amber-300 border-amber-400/25" },
    ].filter(Boolean) as { label: string; color: string }[];

    return (
        <div className="w-full flex flex-col items-center px-4 py-6 gap-4">

            {/* ─────────────────── SHAREABLE CARD ─────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", bounce: 0.3, duration: 0.65 }}
                className="w-full"
            >
                {/* Captured zone */}
                <div ref={cardRef} className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">

                    {/* Ghana flag stripe — top */}
                    <div className="flex h-[4px]">
                        <div className="flex-1 bg-[#006B3F]" />
                        <div className="flex-1 bg-[#FCD116]" />
                        <div className="flex-1 bg-[#CE1126]" />
                    </div>

                    {/* Body */}
                    <div className="bg-[#004d2e] px-6 pt-8 pb-6 flex flex-col items-center gap-5">

                        {/* Trophy row — fully contained */}
                        <div className="flex flex-col items-center gap-3">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                                isPerfect
                                    ? "bg-[#FCD116]"
                                    : isGood
                                    ? "bg-emerald-500"
                                    : "bg-white/15"
                            }`}>
                                <Trophy className="w-8 h-8 text-white fill-white" />
                            </div>

                            {/* XP badge — inline below trophy */}
                            {(score > 0 || isDaily) && (
                                <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${
                                    xpAwarded ? "bg-[#CE1126]" : "bg-white/20"
                                }`}>
                                    {xpAwarded ? `+${finalXP} XP earned` : "Replay"}
                                </span>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10" />

                        {/* Name + location */}
                        <div className="text-center">
                            <h2 className="font-epilogue font-extrabold text-white text-xl leading-tight">
                                {nickname}
                            </h2>
                            {location && (
                                <div className="flex items-center justify-center gap-1 mt-1">
                                    <MapPin className="w-3 h-3 text-[#FCD116]" />
                                    <span className="text-[#FCD116] font-jakarta text-xs font-semibold">
                                        {location}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Score */}
                        <div className="flex flex-col items-center gap-1">
                            <p className="text-white/50 font-jakarta text-[10px] uppercase tracking-widest">
                                scored
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="font-epilogue font-black text-[#FCD116] text-6xl leading-none">
                                    {score}
                                </span>
                                <span className="font-epilogue font-bold text-white/70 text-2xl leading-none pb-1">
                                    /{totalQuestions}
                                </span>
                            </div>
                            <p className="text-[#FCD116]/80 font-jakarta font-bold text-[11px] uppercase tracking-[0.18em]">
                                {topic}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10" />

                        {/* Rank row */}
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <Star className="w-3.5 h-3.5 text-[#FCD116] fill-[#FCD116]" />
                                <span className="font-epilogue font-extrabold text-white text-sm">
                                    {newProgress.rank}
                                </span>
                            </div>
                            <div className="w-px h-4 bg-white/20" />
                            <span className="text-white/90 font-jakarta text-xs font-semibold">
                                Level {newProgress.currentLevel}
                            </span>
                            {isDaily && (
                                <>
                                    <div className="w-px h-4 bg-white/20" />
                                    <div className="flex items-center gap-1 text-emerald-300 text-xs font-bold font-jakarta">
                                        <Flame className="w-3 h-3 text-orange-400 fill-orange-400" />
                                        Daily Done
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Bonus chips — only if any */}
                        {bonusChips.length > 0 && (
                            <div className="flex flex-wrap justify-center gap-1.5">
                                {bonusChips.map((chip, i) => (
                                    <span key={i} className={`text-[10px] font-bold font-jakarta px-2.5 py-1 rounded-full border ${chip.color}`}>
                                        {chip.label}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10" />

                        {/* Writeup */}
                        <p className="text-white/90 font-jakarta text-[12px] leading-relaxed text-center italic px-1">
                            &ldquo;{writeup}&rdquo;
                        </p>

                        {/* Branding */}
                        <p className="text-white/50 font-epilogue font-bold text-[9px] tracking-[0.25em] uppercase">
                            ghanry.app
                        </p>
                    </div>

                    {/* Ghana flag stripe — bottom */}
                    <div className="flex h-[4px]">
                        <div className="flex-1 bg-[#CE1126]" />
                        <div className="flex-1 bg-[#FCD116]" />
                        <div className="flex-1 bg-[#006B3F]" />
                    </div>
                </div>
            </motion.div>

            {/* ─────────────────── DOWNLOAD ─────────────────── */}
            <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                onClick={handleDownload}
                disabled={downloading}
                className="w-full py-3.5 bg-[#004d2e] hover:bg-[#006B3F] text-white font-epilogue font-bold rounded-2xl border border-[#006B3F] shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-60 text-sm"
            >
                {downloading ? (
                    <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Saving...
                    </>
                ) : (
                    <>
                        <Download className="w-4 h-4" />
                        Save &amp; Share My Result
                    </>
                )}
            </motion.button>

            {/* ─────────────────── XP PROGRESS ─────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full space-y-2"
            >
                <div className="flex justify-between">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Level {newProgress.currentLevel} Progress
                    </span>
                    <span className="text-[10px] text-[#006B3F] font-bold">
                        {newProgress.xpToNextLevel} XP to Level {newProgress.currentLevel + 1}
                    </span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${newProgress.progressPercent}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        className="h-full bg-[#FCD116] rounded-full"
                    />
                </div>
            </motion.div>

            {/* ─────────────────── ACTIONS ─────────────────── */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full flex flex-col gap-2.5"
            >
                <Link href={nextPath} className="w-full">
                    <button className="w-full py-4 bg-[#FCD116] text-[#003d22] font-epilogue font-extrabold rounded-2xl shadow-lg shadow-yellow-900/15 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        Next Quiz <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>

                <button
                    onClick={() => router.push("/dashboard/streak")}
                    className="w-full py-3.5 bg-gray-50 text-gray-700 font-epilogue font-bold rounded-2xl border border-gray-100 active:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                    <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                    View My Journey
                </button>

                <Link href="/dashboard" className="w-full">
                    <button className="w-full py-3 text-gray-400 font-jakarta font-medium rounded-2xl active:bg-gray-50 transition-colors flex items-center justify-center gap-1.5 text-sm">
                        <RotateCcw className="w-3.5 h-3.5" />
                        Back to Menu
                    </button>
                </Link>
            </motion.div>
        </div>
    );
}
