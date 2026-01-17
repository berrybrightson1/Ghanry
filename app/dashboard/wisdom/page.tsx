"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ArrowLeft, Lock, Sparkles, Scroll, Coins, Zap } from "lucide-react";
import Link from "next/link";
import { useXP } from "@/hooks/useXP";
import { toast } from "sonner";
import proverbsData from "@/data/proverbs.json";

interface Proverb {
    id: number;
    native: string;
    language: string;
    translation: string;
    meaning: string;
    power: string;
    powerValue: string | number;
    rarity: string;
}

export default function WisdomPotPage() {
    const { xp, spendXP, addBuff, addXP } = useXP();
    const [unlockedIds, setUnlockedIds] = useState<number[]>([]);
    const [isRitualActive, setIsRitualActive] = useState(false);
    const [selectedProverb, setSelectedProverb] = useState<Proverb | null>(null);
    const [activeTab, setActiveTab] = useState<"pot" | "scrolls">("pot");

    const COST_PER_KNOT = 200;

    // Load unlocked proverbs
    useEffect(() => {
        const saved = localStorage.getItem("ghanry_unlocked_wisdom");
        if (saved) setUnlockedIds(JSON.parse(saved));
    }, []);

    const saveUnlock = (id: number) => {
        const updated = [...unlockedIds, id];
        setUnlockedIds(updated);
        localStorage.setItem("ghanry_unlocked_wisdom", JSON.stringify(updated));
    };

    const handleSacrifice = () => {
        if (xp < COST_PER_KNOT) {
            toast.error("Not enough XP, chale!", {
                description: `You need ${COST_PER_KNOT} XP to untie a Sacred Knot.`
            });
            return;
        }

        // Pick a random proverb the user doesn't have yet
        const available = proverbsData.filter(p => !unlockedIds.includes(p.id));
        if (available.length === 0) {
            toast.info("You've mastered all current wisdom! More coming soon.");
            return;
        }

        const randomProverb = available[Math.floor(Math.random() * available.length)];

        if (spendXP(COST_PER_KNOT)) {
            setIsRitualActive(true);
            setSelectedProverb(randomProverb);

            // Animation timeout
            setTimeout(() => {
                applyPower(randomProverb);
                saveUnlock(randomProverb.id);
            }, 3000);
        }
    };

    const applyPower = (proverb: Proverb) => {
        if (proverb.power === "xp_refund") {
            addXP(proverb.powerValue as number);
            toast.success(`Wisdom Reward! Received +${proverb.powerValue} XP Refund.`);
        } else if (proverb.power === "shield") {
            addBuff({ type: 'shield', value: 1 });
            toast.success("Wisdom Power! You earned a Quiz Shield.");
        } else if (proverb.power === "xp_multiplier") {
            addBuff({ type: 'multiplier', value: proverb.powerValue as number, expiresAt: Date.now() + (3600 * 1000 * 2) }); // 2 hours
            toast.success(`Wisdom Power! 2x XP enabled for 2 hours.`);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pb-24">
            {/* Header */}
            <div className="bg-black/40 backdrop-blur-md border-b border-white/5 p-6 sticky top-0 z-30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-epilogue font-extrabold text-[#FCD116] flex items-center gap-2">
                            Nyansapo
                        </h1>
                        <p className="text-white/40 font-jakarta text-[10px] uppercase tracking-widest">The Wisdom Pot</p>
                    </div>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <span className="text-sm font-jakarta text-white/60 mr-2">Your Balance</span>
                    <span className="font-epilogue font-black text-[#FCD116]">{xp} XP</span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 pt-12">
                {/* Tabs */}
                <div className="flex gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab("pot")}
                        className={`flex-1 py-4 rounded-2xl font-epilogue font-bold transition-all border ${activeTab === "pot" ? "bg-[#FCD116] text-black border-[#FCD116]" : "bg-white/5 text-white/60 border-white/10"
                            }`}
                    >
                        Untie Knots
                    </button>
                    <button
                        onClick={() => setActiveTab("scrolls")}
                        className={`flex-1 py-4 rounded-2xl font-epilogue font-bold transition-all border ${activeTab === "scrolls" ? "bg-[#FCD116] text-black border-[#FCD116]" : "bg-white/5 text-white/60 border-white/10"
                            }`}
                    >
                        Your Scrolls ({unlockedIds.length})
                    </button>
                </div>

                {activeTab === "pot" ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-12">
                        {/* The Pot Ritual UI */}
                        <div className="relative">
                            <motion.div
                                animate={isRitualActive ? {
                                    scale: [1, 1.2, 0.9, 1.1, 1],
                                    rotate: [0, 5, -5, 2, 0]
                                } : { y: [0, -10, 0] }}
                                transition={{
                                    duration: isRitualActive ? 1 : 4,
                                    repeat: isRitualActive ? 3 : Infinity
                                }}
                                className="w-64 h-64 relative z-10"
                            >
                                <div className="absolute inset-0 bg-[#FCD116] blur-[80px] opacity-20 animate-pulse rounded-full" />
                                <div className="w-full h-full bg-gradient-to-tr from-[#1a1a1a] to-[#333] rounded-[60px] border-4 border-[#FCD116]/30 shadow-2xl flex items-center justify-center p-8">
                                    {isRitualActive ? (
                                        <Sparkles className="w-24 h-24 text-[#FCD116] animate-spin" />
                                    ) : (
                                        <div className="relative">
                                            <div className="w-24 h-24 rounded-full border-8 border-[#FCD116] border-double animate-[spin_10s_linear_infinite]" />
                                            <Lock className="absolute inset-0 m-auto w-8 h-8 text-[#FCD116]" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        {!isRitualActive ? (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-epilogue font-black text-white">Invest in Wisdom</h2>
                                    <p className="text-white/40 font-jakarta max-w-sm mx-auto">
                                        Untie a Sacred Kente Knot for <span className="text-[#FCD116] font-bold">200 XP</span> to reveal proverbs and gain buffs.
                                    </p>
                                </div>
                                <button
                                    onClick={handleSacrifice}
                                    className="px-12 py-5 bg-[#FCD116] text-black font-epilogue font-black text-xl rounded-full shadow-[0_0_30px_rgba(252,209,22,0.3)] hover:scale-105 active:scale-95 transition-all"
                                >
                                    Sacrifice XP
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <h3 className="text-xl font-epilogue font-bold text-[#FCD116] animate-pulse">Untying the Knot...</h3>
                                <p className="text-white/40 font-jakarta">Ancestors are speaking.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {unlockedIds.length > 0 ? (
                            proverbsData.filter(p => unlockedIds.includes(p.id)).map(proverb => (
                                <motion.div
                                    key={proverb.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:border-[#FCD116]/30 transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-2xl">
                                            <Scroll className="w-5 h-5 text-[#FCD116]" />
                                        </div>
                                        <span className={`text-[10px] font-jakarta font-bold uppercase tracking-tighter px-3 py-1 rounded-full border ${proverb.rarity === 'legendary' ? 'border-purple-500 text-purple-400 bg-purple-500/10' :
                                            proverb.rarity === 'rare' ? 'border-[#FCD116] text-[#FCD116] bg-[#FCD116]/10' :
                                                'border-white/20 text-white/40'
                                            }`}>
                                            {proverb.rarity}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-epilogue font-black mb-2 leading-tight">&ldquo;{proverb.native}&rdquo;</h4>
                                    <p className="text-[#FCD116] text-xs font-jakarta font-bold mb-4">{proverb.language}</p>
                                    <p className="text-white/80 text-sm font-jakarta italic mb-6">Translation: {proverb.translation}</p>
                                    <div className="pt-6 border-t border-white/5">
                                        <p className="text-white/40 text-xs font-jakarta leading-relaxed">
                                            <span className="text-white font-bold block mb-1">THE WISDOM:</span>
                                            {proverb.meaning}
                                        </p>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-24 text-center space-y-4 bg-white/5 rounded-[40px] border border-dashed border-white/10">
                                <Coins className="w-12 h-12 text-white/10 mx-auto" />
                                <p className="text-white/40 font-jakarta">Your pot is empty, Sage. Invest some XP!</p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Ritual Result Modal */}
            <AnimatePresence>
                {selectedProverb && isRitualActive && unlockedIds.includes(selectedProverb.id) && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6"
                    >
                        <motion.div
                            initial={{ scale: 0.5, y: 100 }}
                            animate={{ scale: 1, y: 0 }}
                            className="w-full max-w-lg bg-gradient-to-b from-[#1a1a1a] to-black rounded-[40px] p-8 border-2 border-[#FCD116] shadow-[0_0_100px_rgba(252,209,22,0.2)] text-center relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#FCD116] to-transparent" />

                            <div className="mb-8">
                                <div className="w-20 h-20 bg-[#FCD116] rounded-full flex items-center justify-center mx-auto mb-4 text-black shadow-lg">
                                    {selectedProverb.power === 'shield' ? <Shield className="w-10 h-10" /> :
                                        selectedProverb.power === 'xp_multiplier' ? <Zap className="w-10 h-10" /> :
                                            <Coins className="w-10 h-10" />}
                                </div>
                                <h2 className="text-4xl font-epilogue font-black text-white mb-2 italic">
                                    &ldquo;{selectedProverb.native}&rdquo;
                                </h2>
                                <p className="text-[#FCD116] font-jakarta font-bold">{selectedProverb.language} Wisdom</p>
                            </div>

                            <div className="space-y-6 mb-12">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                    <p className="text-white/60 text-sm font-jakarta italic mb-2">Translation:</p>
                                    <p className="text-white text-lg font-jakarta leading-snug">{selectedProverb.translation}</p>
                                </div>
                                <div className="p-6 bg-[#FCD116]/5 rounded-3xl border border-[#FCD116]/20">
                                    <p className="text-[#FCD116] text-xs font-jakarta font-black uppercase tracking-widest mb-2">Power Unlocked</p>
                                    <p className="text-white text-md font-jakarta">{
                                        selectedProverb.power === 'shield' ? "Sacred Shield (Protects your next loss)" :
                                            selectedProverb.power === 'xp_multiplier' ? "Golden Boost (2x XP for 2 hours)" :
                                                `Prosperity Reward (+${selectedProverb.powerValue} XP Refund)`
                                    }</p>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setIsRitualActive(false);
                                    setSelectedProverb(null);
                                }}
                                className="w-full py-5 bg-white text-black font-epilogue font-black rounded-2xl hover:bg-gray-200 transition-all"
                            >
                                Me da ase (Thank you)
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
