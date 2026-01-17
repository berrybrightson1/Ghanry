"use client";

import { NewsItem } from "@/lib/news";
import { motion } from "framer-motion";
import { CalendarDays, ChevronRight, Mic2, Tv, Newspaper, Radio } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import Link from "next/link";

interface NewsCardProps {
    item: NewsItem;
    index: number;
}

export default function NewsCard({ item, index }: NewsCardProps) {
    const [imgSrc, setImgSrc] = useState(item.image);

    // Placeholder logic based on source/tag
    const getPlaceholderIcon = () => {
        switch (item.tag) {
            case 'Showbiz': return <Mic2 className="w-12 h-12 text-pink-500" />;
            case 'News': return <Tv className="w-12 h-12 text-red-500" />;
            case 'Politics': return <Radio className="w-12 h-12 text-blue-500" />;
            default: return <Newspaper className="w-12 h-12 text-green-500" />;
        }
    };

    return (
        <Link href={`/dashboard/gist/${item.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="group block bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
                {/* Image Section (Top, 16:9 Aspect) */}
                <div className="w-full aspect-video relative bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                    {imgSrc ? (
                        <Image
                            src={imgSrc}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={() => setImgSrc(undefined)}
                            unoptimized
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                            {getPlaceholderIcon()}
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.tag}</span>
                        </div>
                    )}

                    {/* Overlay Badge */}
                    <div className="absolute top-3 left-3 flex gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#006B3F] bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm border border-white/20">
                            {item.source}
                        </span>
                    </div>
                </div>

                {/* Content Section (Bottom) */}
                <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
                            <CalendarDays className="w-3 h-3" />
                            {formatDistanceToNow(new Date(item.pubDate), { addSuffix: true }).replace("about ", "")}
                        </span>
                    </div>

                    <h3 className="font-epilogue font-bold text-gray-900 leading-snug text-lg line-clamp-2 group-hover:text-[#006B3F] transition-colors">
                        {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 font-jakarta line-clamp-2 leading-relaxed">
                        {item.contentSnippet}
                    </p>

                    <div className="pt-2 flex items-center justify-end">
                        <span className="text-xs text-ghana-gold font-bold flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                            Read More <ChevronRight className="w-3 h-3" />
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
