"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Trophy, Sparkles } from "lucide-react";

export default function RealQuizCard() {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full rounded-3xl overflow-hidden relative shadow-lg group cursor-pointer"
        >
            {/* background Gradient (Yellow/Gold) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FCD116] to-[#E5BD14] z-0" />

            {/* Decorative Patterns */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl opacity-50" />
            <div className="absolute top-1/2 right-0 w-32 h-32 rounded-full bg-[#006B3F]/10 blur-2xl" />

            <div className="relative z-10 p-6 flex flex-col items-start justify-between min-h-[220px]">
                {/* Icons on Right Side */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-20">
                    <Trophy className="w-12 h-12 text-[#006B3F]" />
                    <Sparkles className="w-8 h-8 text-[#CE1126] translate-x-4" />
                </div>

                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-xs font-bold text-black/70 mb-4">
                        <Sparkles className="w-3 h-3 text-[#006B3F]" />
                        Exploration Mode
                    </div>

                    <h3 className="text-black/60 font-bold text-lg leading-tight mb-2">Knowledge Quest</h3>
                    <h2 className="text-2xl sm:text-3xl font-epilogue font-extrabold text-[#2D2D2D] leading-tight mb-4">
                        Start Real Quiz
                    </h2>
                </div>

                <div className="w-full">
                    <p className="text-[#2D2D2D]/60 text-[10px] font-bold mb-3 uppercase tracking-wider">
                        UNLIMITED ATTEMPTS • ALL CATEGORIES
                    </p>

                    <Link href="/dashboard/categories">
                        <button className="w-full py-3 bg-[#006B3F] hover:bg-[#004629] text-white font-epilogue font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                            <Play className="w-4 h-4 fill-white" />
                            Explore Categories
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
