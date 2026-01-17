"use client";

import { NewsItem } from "@/lib/news";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NewsCard from "./NewsCard";
import { Loader2 } from "lucide-react";

interface GistFeedProps {
    initialNews: NewsItem[];
}

const PAGE_SIZE = 10;

export default function GistFeed({ initialNews }: GistFeedProps) {
    // Client-side pagination state
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [visibleNews, setVisibleNews] = useState<NewsItem[]>(initialNews.slice(0, PAGE_SIZE));

    // Intersection Observer for infinite scroll
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView && visibleCount < initialNews.length) {
            // Simulate network delay for effect (optional, or just load instantly)
            const timeout = setTimeout(() => {
                const nextCount = visibleCount + PAGE_SIZE;
                setVisibleCount(nextCount);
                setVisibleNews(initialNews.slice(0, nextCount));
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [inView, visibleCount, initialNews]);

    // Update if initialNews changes (e.g. refresh)
    useEffect(() => {
        setVisibleCount(PAGE_SIZE);
        setVisibleNews(initialNews.slice(0, PAGE_SIZE));
    }, [initialNews]);

    return (
        <div className="space-y-4 pb-24">
            {visibleNews.map((item, index) => (
                <NewsCard key={item.id} item={item} index={index % PAGE_SIZE} />
            ))}

            {/* Loading Trigger */}
            {visibleCount < initialNews.length && (
                <div ref={ref} className="w-full py-8 flex justify-center">
                    <Loader2 className="w-6 h-6 animate-spin text-[#006B3F]" />
                </div>
            )}

            {visibleCount >= initialNews.length && initialNews.length > 0 && (
                <div className="w-full py-8 text-center text-gray-400 text-xs font-bold uppercase tracking-wider">
                    You&apos;re all caught up!
                </div>
            )}

            {initialNews.length === 0 && (
                <div className="py-20 text-center">
                    <p className="text-gray-500 font-jakarta">No gist found right now. Check back later!</p>
                </div>
            )}
        </div>
    );
}
