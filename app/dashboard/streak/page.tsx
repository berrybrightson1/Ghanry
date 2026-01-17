"use client";

import { motion } from "framer-motion";
import { Flame, Star, Shield, Crown, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AchievementCard from "@/components/AchievementCard";
import { useXP } from "@/hooks/useXP";
import { useStreak } from "@/hooks/useStreak";
import { LucideIcon } from "lucide-react";

interface Milestone {
    id: number;
    type: "streak" | "rank";
    value: string | number;
    title: string;
    message: string;
    threshold: number; // XP or Streak required
    icon: LucideIcon;
    color: string;
}

const MILESTONES: Milestone[] = [
    {
        id: 1, type: "rank", value: "Tourist", title: "The Beginning",
        message: "Akwaaba! I've officially started my journey to master everything about my roots. 🇬🇭",
        threshold: 0, icon: Star, color: "bg-blue-400"
    },
    {
        id: 2, type: "streak", value: 3, title: "Heating Up",
        message: "Consistency is key. 3 days of pure Ghana wisdom down, forever to go! 🔥",
        threshold: 3, icon: Flame, color: "bg-orange-400"
    },
    {
        id: 3, type: "rank", value: "Citizen", title: "Moving Up",
        message: "I'm not just a visitor anymore—I'm a Citizen of knowledge! Level 10 reached. 🛡️",
        threshold: 5000, icon: Shield, color: "bg-green-500"
    },
    {
        id: 4, type: "streak", value: 7, title: "Flame On",
        message: "A perfect week! I'm officially a master of the daily gist. Ghana knowledge on lock! 🔒",
        threshold: 7, icon: Flame, color: "bg-red-500"
    },
    {
        id: 5, type: "rank", value: "Elder God", title: "Peak Knowledge",
        message: "Rank: Elder God. My roots run deep and my knowledge of Ghana is now legendary! 👑🏛️",
        threshold: 50000, icon: Crown, color: "bg-ghana-gold"
    },
];

export default function JourneyPage() {
    const { xp } = useXP();
    const { streak } = useStreak();
    const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

    const isUnlocked = (milestone: Milestone) => {
        if (milestone.type === "rank") return xp >= milestone.threshold;
        return streak >= milestone.threshold;
    };

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 p-6 sticky top-0 z-30 flex items-center gap-4">
                <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                </Link>
                <div className="flex-1">
                    <h1 className="text-2xl font-epilogue font-extrabold text-gray-900">My Journey</h1>
                    <p className="text-gray-500 font-jakarta text-sm lowercase">track your progress and bragging rights.</p>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                    <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                    <span className="font-bold text-orange-700">{streak}</span>
                </div>
            </div>

            <div className="max-w-md mx-auto px-6 py-12 relative">
                {/* Winding Path SVG Line (Conceptual) */}
                <div className="absolute left-1/2 top-24 bottom-24 w-1 bg-gray-200 -translate-x-1/2 rounded-full border-4 border-white shadow-inner" />

                <div className="space-y-24 relative z-10">
                    {MILESTONES.map((milestone, index) => {
                        const unlocked = isUnlocked(milestone);
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={milestone.id}
                                className={`flex items-center gap-8 ${isEven ? "flex-row-reverse" : "flex-row"}`}
                            >
                                {/* Milestone Node */}
                                <motion.div
                                    whileHover={unlocked ? { scale: 1.1 } : {}}
                                    whileTap={unlocked ? { scale: 0.95 } : {}}
                                    onClick={() => unlocked && setSelectedMilestone(milestone)}
                                    className={`relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer shadow-xl transition-all duration-500 
                                        ${unlocked
                                            ? `${milestone.color} border-4 border-white ring-8 ring-${milestone.color}/10`
                                            : "bg-gray-100 border-4 border-white grayscale opacity-50 cursor-not-allowed"
                                        }`}
                                >
                                    <milestone.icon className={`w-8 h-8 ${unlocked ? "text-white" : "text-gray-400"}`} />

                                    {/* Unlocked Indicator */}
                                    {unlocked && (
                                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        </div>
                                    )}
                                </motion.div>

                                {/* Milestone Info */}
                                <div className={`flex-1 ${isEven ? "text-right" : "text-left"}`}>
                                    <h3 className={`font-epilogue font-bold text-lg ${unlocked ? "text-gray-900" : "text-gray-400"}`}>
                                        {milestone.title}
                                    </h3>
                                    <p className={`text-xs font-jakarta ${unlocked ? "text-gray-500 font-bold" : "text-gray-300"}`}>
                                        {unlocked ? milestone.value : `${milestone.threshold} ${milestone.type === 'streak' ? 'day streak' : 'xp'} required`}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Brag Card Modal */}
            {selectedMilestone && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
                    <div className="w-full max-w-sm">
                        <AchievementCard
                            type={selectedMilestone.type}
                            value={selectedMilestone.value}
                            title={selectedMilestone.title}
                            message={selectedMilestone.message}
                            onClose={() => setSelectedMilestone(null)}
                        />

                        <button
                            onClick={() => setSelectedMilestone(null)}
                            className="w-full mt-6 py-4 bg-white/10 hover:bg-white/20 text-white font-epilogue font-bold rounded-2xl border border-white/20 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
