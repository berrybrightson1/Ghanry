"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Radio } from "lucide-react";

const newsItems = [
    { id: 1, source: "JoyNews", title: "Black Stars squad announced for upcoming qualifiers", time: "2h ago", color: "bg-red-100 text-red-800" },
    { id: 2, source: "Citi News", title: "New technological hub opens in Accra Digital Center", time: "4h ago", color: "bg-blue-100 text-blue-800" },
    { id: 3, source: "Pulse GH", title: "Detty December calendar: All the major concerts confirmed", time: "6h ago", color: "bg-purple-100 text-purple-800" },
];

export default function TheGist() {
    return (
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 overflow-hidden relative">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-red-50 rounded-full">
                        <TrendingUp className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                        <h3 className="font-epilogue font-bold text-gray-900 text-lg leading-tight">The Gist</h3>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                            <Radio className="w-3 h-3 text-red-500 animate-pulse" /> Live Feeds
                        </span>
                    </div>
                </div>
                <button className="text-xs font-bold text-gray-400 hover:text-gray-900 transition-colors">
                    View All
                </button>
            </div>

            <div className="space-y-4">
                {newsItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-3 group cursor-pointer"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.color}`}>
                                    {item.source}
                                </span>
                                <span className="text-[10px] font-bold text-gray-400">{item.time}</span>
                            </div>
                            <h4 className="font-jakarta font-semibold text-sm text-gray-800 group-hover:text-[#006B3F] transition-colors line-clamp-2">
                                {item.title}
                            </h4>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors mt-1" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
