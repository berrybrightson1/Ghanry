"use client";

import { useState } from "react";
import { getGist } from "@/app/actions/news";
import { type NewsItem } from "@/lib/news";
import GistFeed from "@/components/GistFeed";
import DidYouKnow from "@/components/DidYouKnow";
import { Sparkles, Newspaper, Lightbulb } from "lucide-react";
import RefreshButton from "@/components/RefreshButton";
import { useEffect } from "react";

type Tab = "news" | "facts";

export default function GistPage() {
    const [activeTab, setActiveTab] = useState<Tab>("news");
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            const fetchedNews = await getGist();
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
                        {activeTab === "news" ? "positive vibes only." : "discover ghana's hidden gems."}
                    </p>
                </div>
                {activeTab === "news" && <RefreshButton />}
            </div>

            {/* Tab Toggle */}
            <div className="mb-6 bg-gray-100 rounded-full p-1 flex gap-1">
                <button
                    onClick={() => setActiveTab("news")}
                    className={`flex-1 py-3 rounded-full font-epilogue font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "news"
                        ? "bg-white text-[#006B3F] shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <Newspaper className="w-4 h-4" />
                    The Gist
                </button>
                <button
                    onClick={() => setActiveTab("facts")}
                    className={`flex-1 py-3 rounded-full font-epilogue font-bold text-sm transition-all flex items-center justify-center gap-2 ${activeTab === "facts"
                        ? "bg-white text-ghana-gold shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    <Lightbulb className="w-4 h-4" />
                    Did You Know?
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === "news" ? (
                loading ? (
                    <div className="text-center py-12 text-gray-500 font-jakarta">
                        Loading vibes...
                    </div>
                ) : (
                    <GistFeed initialNews={news} />
                )
            ) : (
                <DidYouKnow />
            )}
        </div>
    );
}
