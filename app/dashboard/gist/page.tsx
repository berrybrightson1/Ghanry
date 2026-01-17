import { fetchNews } from "@/lib/news";
import GistFeed from "@/components/GistFeed";
import { Sparkles } from "lucide-react";
import RefreshButton from "@/components/RefreshButton";

export const dynamic = 'force-dynamic';
export const revalidate = 60; // Revalidate every minute

export default async function GistPage() {
    // 1. Fetch Data (Server Side)
    const news = await fetchNews();

    return (
        <div className="max-w-[480px] mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-epilogue font-extrabold text-[#006B3F] flex items-center gap-2">
                        <Sparkles className="w-6 h-6 text-ghana-gold fill-current" />
                        Gist Hub
                    </h1>
                    <p className="text-gray-500 font-jakarta text-sm lowercase">latest buzz from ghana & beyond.</p>
                </div>
                <RefreshButton />
            </div>

            {/* Infinite Feed */}
            <GistFeed initialNews={news} />
        </div>
    );
}
