"use client";

import { useState } from "react";
import { Search, Loader2, Crown, Calendar, Award, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LegendData {
    name: string;
    role: string;
    years: string;
    achievements: string[];
    quote?: string;
    legacy: string;
}

export default function HallOfFame() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [legend, setLegend] = useState<LegendData | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!query.trim()) return;

        setLoading(true);
        setSearched(true);

        try {
            const response = await fetch("/api/legends", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query }),
            });

            if (response.ok) {
                const data = await response.json();
                setLegend(data.legend);
            } else {
                setLegend(null);
            }
        } catch (error) {
            console.error("Search error:", error);
            setLegend(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative mb-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a Legend (e.g. Nkrumah, Sarkodie, Yaa Asantewaa)..."
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-lg font-jakarta text-base focus:border-[#006B3F] focus:outline-none transition-colors"
                />
                <button
                    type="submit"
                    disabled={loading || !query.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#006B3F] text-white font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#005a35] transition-colors"
                >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search"}
                </button>
            </form>

            {/* Results */}
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-lg border-2 border-gray-200 p-8"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <Loader2 className="w-12 h-12 text-[#006B3F] animate-spin" />
                            <p className="text-gray-500 font-jakarta">Searching the archives...</p>
                        </div>
                    </motion.div>
                )}

                {!loading && legend && (
                    <motion.div
                        key="result"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-gradient-to-br from-white to-green-50 rounded-lg border-2 border-[#006B3F] p-6 shadow-lg"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4 pb-4 border-b border-[#006B3F]/20">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <Crown className="w-6 h-6 text-ghana-gold fill-ghana-gold" />
                                    <h2 className="text-2xl font-epilogue font-black text-[#006B3F]">
                                        {legend.name}
                                    </h2>
                                </div>
                                <p className="text-gray-700 font-jakarta font-bold">{legend.role}</p>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600 font-jakarta text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>{legend.years}</span>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-[#006B3F]" />
                                <h3 className="font-epilogue font-bold text-[#006B3F]">Key Achievements</h3>
                            </div>
                            <ul className="space-y-2">
                                {legend.achievements.map((achievement, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <span className="text-ghana-gold mt-1">•</span>
                                        <span className="text-sm font-jakarta text-gray-700">{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quote */}
                        {legend.quote && (
                            <div className="bg-white/50 border-l-4 border-ghana-gold p-4 mb-4 rounded">
                                <p className="font-jakarta italic text-gray-800">&ldquo;{legend.quote}&rdquo;</p>
                            </div>
                        )}

                        {/* Legacy */}
                        <div className="bg-[#006B3F]/5 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-ghana-gold" />
                                <h4 className="font-epilogue font-bold text-[#006B3F] text-sm">Legacy</h4>
                            </div>
                            <p className="text-sm font-jakarta text-gray-700">{legend.legacy}</p>
                        </div>
                    </motion.div>
                )}

                {!loading && searched && !legend && (
                    <motion.div
                        key="empty"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
                    >
                        <Crown className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="font-epilogue font-bold text-gray-600 mb-2">No Legend Found</h3>
                        <p className="text-gray-500 font-jakarta text-sm">
                            Try searching for a different Ghanaian figure or check your spelling.
                        </p>
                    </motion.div>
                )}

                {!loading && !searched && (
                    <motion.div
                        key="initial"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-lg border-2 border-dashed border-[#006B3F]/30 p-12 text-center"
                    >
                        <Crown className="w-20 h-20 text-ghana-gold fill-ghana-gold/20 mx-auto mb-4" />
                        <h3 className="font-epilogue font-bold text-[#006B3F] text-xl mb-2">
                            Hall of Fame
                        </h3>
                        <p className="text-gray-600 font-jakarta">
                            Search to reveal the history of Ghana&apos;s greatest legends.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
