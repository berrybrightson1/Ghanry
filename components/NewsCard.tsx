"use client";

import { NewsItem } from "@/lib/news";
import { motion } from "framer-motion";
import { CalendarDays, ExternalLink, Mic2, Tv, Newspaper, Radio } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

interface NewsCardProps {
    item: NewsItem;
    index: number;
}

export default function NewsCard({ item, index }: NewsCardProps) {
    const [imgSrc, setImgSrc] = useState(item.image);

    // Placeholder logic based on source/tag
    const getPlaceholderIcon = () => {
        switch (item.tag) {
            case 'Showbiz': return <Mic2 className="w-8 h-8 text-pink-500" />;
            case 'News': return <Tv className="w-8 h-8 text-red-500" />;
            case 'Politics': return <Radio className="w-8 h-8 text-blue-500" />;
            default: return <Newspaper className="w-8 h-8 text-green-500" />;
        }
    };

    return (
        <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 p-3 transition-all duration-300 hover:scale-[1.02] hover:border-green-100"
        >
            <div className="flex gap-4">
                {/* Thumbnail */}
                <div className="w-24 h-24 flex-shrink-0 relative overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                    {imgSrc ? (
                        <Image
                            src={imgSrc}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => setImgSrc(undefined)}
                        />
                    ) : (
                        getPlaceholderIcon()
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#006B3F] bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                                {item.source}
                            </span>
                            <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
                                <CalendarDays className="w-3 h-3" />
                                {formatDistanceToNow(new Date(item.pubDate), { addSuffix: true }).replace("about ", "")}
                            </span>
                        </div>
                        <h3 className="font-epilogue font-bold text-gray-900 leading-tight text-sm line-clamp-2 group-hover:text-[#006B3F] transition-colors">
                            {item.title}
                        </h3>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-ghana-gold font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Read Gist <ExternalLink className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </div>
        </motion.a>
    );
}
