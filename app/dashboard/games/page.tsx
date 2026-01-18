"use client";

import { useState } from "react";
import { ArrowLeft, Coins, Rocket, Brain } from "lucide-react";
import Link from "next/link";
import { useXP } from "@/hooks/useXP";
import TheGauntlet from "@/components/games/TheGauntlet";
import TrotroRun from "@/components/games/TrotroRun";

export default function GamesPage() {
    const { xp } = useXP();
    const [activeTab, setActiveTab] = useState<"gauntlet" | "trotro">("trotro");

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pb-24 font-jakarta">
            {/* Header */}
            <div className="bg-black/40 backdrop-blur-md border-b border-white/5 p-6 sticky top-0 z-30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-epilogue font-extrabold text-[#FCD116] flex items-center gap-2">
                            Sika Fie
                        </h1>
                        <p className="text-white/40 font-jakarta text-[10px] uppercase tracking-widest">High Stakes Gaming</p>
                    </div>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#FCD116]" />
                    <span className="font-epilogue font-black text-[#FCD116]">{xp} XP</span>
                </div>
            </div>

            <div className="max-w-md mx-auto px-4 pt-6">
                {/* Tab Switcher */}
                <div className="bg-white/5 p-1 rounded-full flex gap-1 mb-6 border border-white/10">
                    <button
                        onClick={() => setActiveTab("gauntlet")}
                        className={`flex-1 py-3 rounded-full font-epilogue font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "gauntlet"
                                ? "bg-[#FCD116] text-black shadow-lg shadow-yellow-500/20"
                                : "text-white/40 hover:text-white/60"
                            }`}
                    >
                        <Brain className="w-4 h-4" />
                        The Gauntlet
                    </button>
                    <button
                        onClick={() => setActiveTab("trotro")}
                        className={`flex-1 py-3 rounded-full font-epilogue font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "trotro"
                                ? "bg-[#CE1126] text-white shadow-lg shadow-red-500/20"
                                : "text-white/40 hover:text-white/60"
                            }`}
                    >
                        <Rocket className="w-4 h-4" />
                        Trotro Run
                    </button>
                </div>

                {/* Content Area */}
                <div className="min-h-[400px]">
                    {activeTab === "gauntlet" ? <TheGauntlet /> : <TrotroRun />}
                </div>
            </div>
        </div>
    );
}
