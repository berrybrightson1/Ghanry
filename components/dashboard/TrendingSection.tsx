"use client";

import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import Link from "next/link";

const trendingQuizzes = [
    {
        id: 1,
        title: "Chieftaincy 101",
        category: "Culture",
        plays: "2.5k",
        color: "bg-orange-100 text-orange-800",
        slug: "culture"
    },
    {
        id: 2,
        title: "Afrobeats Origins",
        category: "Music",
        plays: "5k+",
        color: "bg-purple-100 text-purple-800",
        slug: "music"
    },
    {
        id: 3,
        title: "Independence Day",
        category: "History",
        plays: "1.2k",
        color: "bg-red-100 text-red-800",
        slug: "history"
    },
];

export default function TrendingSection() {
    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-800 font-bold text-lg flex items-center gap-2">
                    Trending in Ghana <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
                </h3>
                <Link href="/dashboard/categories" className="text-sm font-bold text-[#006B3F] hover:underline flex items-center gap-1">
                    See All <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
                {trendingQuizzes.map((quiz, index) => (
                    <Link key={quiz.id} href={`/dashboard/categories/${quiz.slug}`}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="min-w-[200px] bg-white border border-gray-100 p-4 rounded-2xl shadow-sm cursor-pointer group hover:shadow-md transition-all"
                        >
                            <div className={`inline-block px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-2 ${quiz.color}`}>
                                {quiz.category}
                            </div>
                            <h4 className="font-epilogue font-bold text-gray-900 text-lg mb-4 group-hover:text-[#006B3F] transition-colors">
                                {quiz.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                                <Flame className="w-3 h-3" /> {quiz.plays} Plays
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
