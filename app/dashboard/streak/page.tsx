"use client";

import { motion } from "framer-motion";
import { Flame, Star, Shield, Crown, ArrowLeft, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import AchievementCard from "@/components/AchievementCard";
import { useXP } from "@/hooks/useXP";
import { useStreak } from "@/hooks/useStreak";
import { LucideIcon } from "lucide-react";
import { toJpeg } from "html-to-image";
import { toast } from "sonner";

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
        id: 3, type: "rank", value: "Expat", title: "Settling In",
        message: "I'm becoming a regular! I've moved from Tourist to Expat status. Ghana knowledge is growing! 🇬🇭✨",
        threshold: 900, icon: Shield, color: "bg-purple-500"
    },
    {
        id: 4, type: "streak", value: 7, title: "Flame On",
        message: "A perfect week! I'm officially a master of the daily gist. Ghana knowledge on lock! 🔒",
        threshold: 7, icon: Flame, color: "bg-red-500"
    },
    {
        id: 5, type: "rank", value: "Citizen", title: "True Citizen",
        message: "Official recognition! I've reached Citizen status on Ghanry. My roots are deep! 🌳🇬🇭",
        threshold: 24650, icon: Crown, color: "bg-[#006B3F]"
    },
    {
        id: 6, type: "rank", value: "Legend", title: "National Treasure",
        message: "Rank: LEGEND. My knowledge of Ghana is unmatched. I am a living archive of the Motherland! 👑🏛️🇬🇭",
        threshold: 59750, icon: Sparkles, color: "bg-ghana-gold"
    },
];

export default function JourneyPage() {
    const { xp } = useXP();
    const { streak } = useStreak();
    const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
    const [isVerified, setIsVerified] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVerified(localStorage.getItem("ghanry_verified") === "true");
    }, []);

    const isUnlocked = (milestone: Milestone) => {
        if (milestone.type === "rank") return xp >= milestone.threshold;
        return streak >= milestone.threshold;
    };

    const handleExport = useCallback(async () => {
        if (!cardRef.current) return;

        setIsExporting(true);
        const toastId = toast.loading("Preparing your brag card...");

        try {
            const dataUrl = await toJpeg(cardRef.current, {
                quality: 0.95,
                backgroundColor: "#ffffff",
                style: {
                    transform: "scale(1)",
                    borderRadius: "40px"
                }
            });

            const link = document.createElement("a");
            link.download = `ghanry-achievement-${selectedMilestone?.value}.jpg`;
            link.href = dataUrl;
            link.click();

            toast.success("Saved to gallery!", { id: toastId });
        } catch (err) {
            console.error(err);
            toast.error("Failed to export image", { id: toastId });
        } finally {
            setIsExporting(false);
        }
    }, [selectedMilestone]);

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
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
                    <div className="w-full max-w-sm">
                        <AchievementCard
                            ref={cardRef}
                            type={selectedMilestone.type}
                            value={selectedMilestone.value}
                            title={selectedMilestone.title}
                            message={selectedMilestone.message}
                            isVerified={isVerified}
                            onClose={() => !isExporting && setSelectedMilestone(null)}
                        />

                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <button
                                onClick={handleExport}
                                disabled={isExporting}
                                className="py-4 bg-[#006B3F] hover:bg-[#005a35] text-white font-epilogue font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isExporting ? (
                                    <>Saving...</>
                                ) : (
                                    <>
                                        <Download className="w-5 h-5" />
                                        Save Image
                                    </>
                                )}
                            </button>
                            <button
                                onClick={() => {
                                    if (!selectedMilestone) return;
                                    const text = encodeURIComponent(`${selectedMilestone.message}\n\nJoin me on Ghanry to learn more about the Motherland! 🇬🇭✨`);
                                    window.open(`https://wa.me/?text=${text}`, "_blank");
                                }}
                                disabled={isExporting}
                                className="py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-epilogue font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.893-5.335 11.896-11.893a11.826 11.826 0 00-3.48-8.413z" />
                                </svg>
                                Share WhatsApp
                            </button>
                        </div>
                        <button
                            onClick={() => setSelectedMilestone(null)}
                            disabled={isExporting}
                            className="w-full py-4 mt-3 bg-white/10 hover:bg-white/20 text-white font-epilogue font-bold rounded-2xl border border-white/20 transition-all disabled:opacity-50"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
