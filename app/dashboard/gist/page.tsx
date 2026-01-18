"use client";

import { useState } from "react";
import { fetchNews, type NewsItem } from "@/lib/news";
import GistFeed from "@/components/GistFeed";
import HallOfFame from "@/components/HallOfFame";
import { Sparkles, Newspaper, Crown } from "lucide-react";
import RefreshButton from "@/components/RefreshButton";
import { useEffect } from "react";

type Tab = "news" | "legends";

export default function GistPage() {
    const [activeTab, setActiveTab] = useState<Tab>("news");
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            const fetchedNews = await fetchNews();
            setNews(fetchedNews);
            setLoading(false);
        };
        loadNews();
    }, []);

    return (
        <div className="max-w-[480px] mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-epilogue font-extrabold text-[#006B3F] flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-ghana-gold fill-current" />
                        Gist Hub
                    </h1>
                    <p className="text-gray-500 font-jakarta text-sm lowercase">
                        {activeTab === "news" ? "latest buzz from ghana & beyond." : "discover ghana's legends."}
                    </p>
                </div>
                {activeTab === "news" && <RefreshButton />}
            </div>

            {/* Tab Toggle */}
            <div className="mb-6 bg-gray-100 rounded-lg p-1 flex gap-1">
                <button
                    onClick={() => setActiveTab("news")}
                    className={`flex-1 py-3 rounded-lg font-epilogue font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "news"
                        ? "bg-white text-[#006B3F] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <Newspaper className="w-4 h-4" />
                    The Gist
                </button>
                <button
                    onClick={() => setActiveTab("legends")}
                    className={`flex-1 py-3 rounded-lg font-epilogue font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "legends"
                        ? "bg-white text-ghana-gold shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <Crown className="w-4 h-4" />
                    Hall of Fame
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === "news" ? (
                loading ? (
                    <div className="text-center py-12 text-gray-500 font-jakarta">
                        Loading news...
                    </div>
                ) : (
                    <GistFeed initialNews={news} />
                )
            ) : (
                <HallOfFame />
            )}
        </div>
    );
}
