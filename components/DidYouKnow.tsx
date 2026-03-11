"use client";

import { useState, useEffect, useCallback } from "react";
import { Lightbulb, RefreshCw, Sparkles, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SEEN_KEY = "ghanry_seen_facts";

interface FactData {
    id: number;
    category: string;
    title: string;
    fact: string;
    didYouKnow: string;
    tags: string[];
}

function getSeenIds(): number[] {
    try {
        return JSON.parse(localStorage.getItem(SEEN_KEY) ?? "[]");
    } catch {
        return [];
    }
}

function addSeenId(id: number, maxPool: number) {
    try {
        const seen = getSeenIds();
        if (!seen.includes(id)) seen.push(id);
        // Reset when all seen
        if (seen.length >= maxPool) localStorage.setItem(SEEN_KEY, "[]");
        else localStorage.setItem(SEEN_KEY, JSON.stringify(seen));
    } catch { /* ignore */ }
}

export default function DidYouKnow() {
    const [fact, setFact] = useState<FactData | null>(null);
    const [loading, setLoading] = useState(true);
    const [cycleReset, setCycleReset] = useState(false);

    const fetchFact = useCallback(async () => {
        setLoading(true);
        setCycleReset(false);
        try {
            const seenIds = getSeenIds();
            const exclude = seenIds.join(",");
            const url = `/api/facts${exclude ? `?exclude=${exclude}` : ""}`;
            const response = await fetch(url, { cache: "no-store" });
            if (response.ok) {
                const data = await response.json();
                const totalFacts = data.totalCount || 1000;
                const wasAllSeen = seenIds.length >= totalFacts - 1;
                
                setFact(data.fact);
                addSeenId(data.fact.id, totalFacts);
                if (wasAllSeen) setCycleReset(true);
            }
        } catch (error) {
            console.error("Error fetching fact:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFact();
    }, [fetchFact]);

    const categoryColors: Record<string, string> = {
        History: "bg-orange-100 text-orange-700 border-orange-200",
        Culture: "bg-purple-100 text-purple-700 border-purple-200",
        Nature: "bg-green-100 text-green-700 border-green-200",
        Food: "bg-yellow-100 text-yellow-700 border-yellow-200",
        Music: "bg-pink-100 text-pink-700 border-pink-200",
        Throwback: "bg-blue-100 text-blue-700 border-blue-200",
        Sports: "bg-red-100 text-red-700 border-red-200",
        Economy: "bg-emerald-100 text-emerald-700 border-emerald-200",
        Language: "bg-indigo-100 text-indigo-700 border-indigo-200",
        Innovation: "bg-cyan-100 text-cyan-700 border-cyan-200",
        Geography: "bg-teal-100 text-teal-700 border-teal-200",
        People: "bg-rose-100 text-rose-700 border-rose-200",
        Festivals: "bg-amber-100 text-amber-700 border-amber-200",
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[300px] flex flex-col items-center justify-center gap-4"
                    >
                        <RefreshCw className="w-8 h-8 text-[#006B3F] animate-spin" />
                        <p className="text-gray-400 font-jakarta text-sm animate-pulse">Digging into the archives...</p>
                    </motion.div>
                ) : fact ? (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative"
                    >
                        {/* Ghana flag stripe */}
                        <div className="h-2 w-full flex">
                            <div className="flex-1 bg-[#CE1126]" />
                            <div className="flex-1 bg-[#FCD116]" />
                            <div className="flex-1 bg-[#006B3F]" />
                        </div>

                        <div className="p-8">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold font-jakarta border ${categoryColors[fact.category] ?? "bg-gray-100 text-gray-700"}`}>
                                    {fact.category}
                                </span>
                                <Lightbulb className="w-6 h-6 text-ghana-gold fill-ghana-gold" />
                            </div>

                            {/* Cycle reset notice */}
                            {cycleReset && (
                                <p className="text-xs text-[#006B3F] font-jakarta font-bold mb-3 animate-pulse">
                                    🔄 You&apos;ve seen them all — starting a fresh cycle!
                                </p>
                            )}

                            {/* Title */}
                            <h2 className="text-2xl font-epilogue font-black text-[#006B3F] mb-4 leading-tight">
                                {fact.title}
                            </h2>

                            {/* Did You Know Highlight */}
                            <div className="bg-[#FFFBF0] rounded-xl p-4 mb-6 border border-[#FCD116]/30">
                                <div className="flex gap-2">
                                    <Sparkles className="w-5 h-5 text-ghana-gold shrink-0 mt-0.5" />
                                    <p className="text-sm font-bold font-jakarta text-gray-800 italic">
                                        &quot;{fact.didYouKnow}&quot;
                                    </p>
                                </div>
                            </div>

                            {/* Main Fact */}
                            <p className="text-gray-600 font-jakarta leading-relaxed mb-6">
                                {fact.fact}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {fact.tags.map((tag, i) => (
                                    <span key={i} className="flex items-center gap-1 text-xs text-gray-400 font-jakarta">
                                        <Tag className="w-3 h-3" />
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action */}
                            <button
                                onClick={fetchFact}
                                className="w-full py-4 bg-[#006B3F] hover:bg-[#005a35] text-white rounded-xl font-epilogue font-bold shadow-lg shadow-green-900/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                            >
                                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                                Next Fact
                            </button>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
}
