"use client";

import { useState, useEffect } from "react";
import { Lightbulb, RefreshCw, Sparkles, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FactData {
    category: string;
    title: string;
    fact: string;
    didYouKnow: string;
    tags: string[];
}

export default function DidYouKnow() {
    const [fact, setFact] = useState<FactData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchFact = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/facts", { cache: "no-store" });
            if (response.ok) {
                const data = await response.json();
                setFact(data.fact);
            }
        } catch (error) {
            console.error("Error fetching fact:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFact();
    }, []);

    const categoryColors: Record<string, string> = {
        History: "bg-orange-100 text-orange-700 border-orange-200",
        Culture: "bg-purple-100 text-purple-700 border-purple-200",
        Nature: "bg-green-100 text-green-700 border-green-200",
        Food: "bg-yellow-100 text-yellow-700 border-yellow-200",
        Music: "bg-pink-100 text-pink-700 border-pink-200",
        Throwback: "bg-blue-100 text-blue-700 border-blue-200",
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
                        {/* Decorative Top */}
                        <div className="h-2 w-full flex">
                            <div className="flex-1 bg-[#CE1126]" />
                            <div className="flex-1 bg-[#FCD116]" />
                            <div className="flex-1 bg-[#006B3F]" />
                        </div>

                        <div className="p-8">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold font-jakarta border ${categoryColors[fact.category] || "bg-gray-100 text-gray-700"}`}>
                                    {fact.category}
                                </span>
                                <Lightbulb className="w-6 h-6 text-ghana-gold fill-ghana-gold" />
                            </div>

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

                            {/* Actions */}
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
