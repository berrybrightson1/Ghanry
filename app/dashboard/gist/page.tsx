"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, Filter } from "lucide-react";
import { useEffect, useState } from "react";

// Mock Data (Expanded Pool)
const ALL_NEWS_ITEMS = [
    {
        id: 1,
        source: "JoyNews",
        title: "Black Stars squad announced for upcoming qualifiers",
        summary: "The head coach has released the 26-man squad for the pivotal AFCON qualifiers, featuring three debutants and the return of Thomas Partey.",
        time: "2h ago",
        color: "bg-red-100 text-red-800",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
        id: 2,
        source: "Citi News",
        title: "New technological hub opens in Accra Digital Center",
        summary: "A state-of-the-art tech hub aimed at fostering startups and innovation has been inaugurated by the Minister of Communications today.",
        time: "4h ago",
        color: "bg-blue-100 text-blue-800",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
        id: 3,
        source: "Pulse GH",
        title: "Detty December calendar: All the major concerts confirmed",
        summary: "Get your wallets ready! Here is the comprehensive list of every major concert and event happening in Accra this December.",
        time: "6h ago",
        color: "bg-purple-100 text-purple-800",
        category: "Entertainment",
        image: "https://images.unsplash.com/photo-1459749411177-8c275d843660?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
        id: 4,
        source: "Graphic Online",
        title: "Cedi stabilizes against the dollar in mid-week trading",
        summary: "Market analysts report a slight appreciation of the Cedi following the latest injection of liquidity by the Central Bank.",
        time: "8h ago",
        color: "bg-green-100 text-green-800",
        category: "Finance",
        image: null
    },
    {
        id: 5,
        source: "MyJoyOnline",
        title: "Cape Coast Castle sees record tourist numbers",
        summary: "The Ghana Tourism Authority reports a 40% increase in visitors to the historic castle this quarter, signaling a boom in heritage tourism.",
        time: "12h ago",
        color: "bg-yellow-100 text-yellow-800",
        category: "Tourism",
        image: "https://images.unsplash.com/photo-1532309787611-1976a2e46853?auto=format&fit=crop&q=80&w=300&h=200"
    },
    {
        id: 6,
        source: "Daily Guide",
        title: "New Cocoa processing plant to boost local export",
        summary: "President marks the groundbreaking ceremony for a new facility expected to add value to Ghana's cocoa before export.",
        time: "1d ago",
        color: "bg-orange-100 text-orange-800",
        category: "Business",
        image: null
    }
];

export default function GhanaNowPage() {
    const [displayItems, setDisplayItems] = useState(ALL_NEWS_ITEMS);

    useEffect(() => {
        // Randomize the news order on mount to simulate fresh content
        const shuffled = [...ALL_NEWS_ITEMS].sort(() => 0.5 - Math.random());
        setDisplayItems(shuffled);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Live Updates
                    </span>
                    <h1 className="text-4xl font-epilogue font-bold text-gray-900">Ghana Now</h1>
                    <p className="text-gray-500 font-jakarta max-w-md">Curated headlines from verified Ghanaian sources. Stay informed without the noise.</p>
                </div>

                <div className="flex items-center gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" /> Filter
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-600 flex items-center gap-2 hover:bg-gray-50 transition-colors">
                        <Calendar className="w-4 h-4" /> Today
                    </button>
                </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col h-full"
                    >
                        {item.image && (
                            <div className="w-full h-40 rounded-2xl bg-gray-100 mb-5 overflow-hidden relative">
                                <motion.div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className="absolute top-3 left-3">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.color}`}>
                                        {item.source}
                                    </span>
                                </div>
                            </div>
                        )}
                        {!item.image && (
                            <div className="mb-4">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.color}`}>
                                    {item.source}
                                </span>
                            </div>
                        )}

                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400">
                                <span>{item.time}</span>
                                <span>•</span>
                                <span>{item.category}</span>
                            </div>
                            <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-3 group-hover:text-[#006B3F] transition-colors leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm font-jakarta leading-relaxed line-clamp-3 mb-4">
                                {item.summary}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-gray-50 flex justify-between items-center mt-auto">
                            <span className="text-xs font-bold text-gray-400 group-hover:text-[#006B3F] transition-colors">Read Full Story</span>
                            <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#006B3F] transition-colors" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
