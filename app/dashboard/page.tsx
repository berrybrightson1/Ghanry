"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import factsData from "@/data/facts.json";
import proverbsData from "@/data/proverbs.json";
import { RefreshCw, Sparkles, Quote, LucideIcon } from "lucide-react";
import HeroCarousel from "@/components/dashboard/HeroCarousel";
import StatsGrid from "@/components/dashboard/StatsGrid";
import TrendingSection from "@/components/dashboard/TrendingSection";
import { useXP } from "@/hooks/useXP";
import { useStreak } from "@/hooks/useStreak";

export default function Dashboard() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ nickname: string; region: string } | null>(null);
    const { xp } = useXP();
    const { streak } = useStreak();

    // Dynamic Content State
    const [dailyContent, setDailyContent] = useState<{
        type: "fact" | "proverb";
        text: string;
        subText?: string; // For proverbs (meaning) or facts (category)
        icon: LucideIcon;
    } | null>(null);

    const getRandomContent = () => {
        // 40% chance of proverb, 60% chance of fact
        const isProverb = Math.random() < 0.4;

        if (isProverb) {
            const randomProverb = proverbsData[Math.floor(Math.random() * proverbsData.length)];
            setDailyContent({
                type: "proverb",
                text: `"${randomProverb.native}"`,
                subText: randomProverb.meaning,
                icon: Quote
            });
        } else {
            const randomFact = factsData[Math.floor(Math.random() * factsData.length)];
            setDailyContent({
                type: "fact",
                text: randomFact.text,
                subText: `Category: ${randomFact.category}`,
                icon: Sparkles
            });
        }
    };

    useEffect(() => {
        const pid = localStorage.getItem("ghanry_passport_id");
        const status = localStorage.getItem("ghanry_status");

        if (!pid && !status) {
            router.push("/");
            return;
        }

        const nick = localStorage.getItem("ghanry_nickname") || "Citizen";
        const reg = localStorage.getItem("ghanry_region") || "Ghana";

        setUserData({ nickname: nick, region: reg });

        // Load daily content
        getRandomContent();
    }, [router]);


    if (!userData) return null; // Or a loading spinner

    return (
        <div className="w-full min-h-full bg-white relative pb-24 sm:pb-0">
            {/* (Header moved to Sidebar) */}

            <div className="p-6 space-y-8 max-w-4xl mx-auto">
                {/* 1. Hero Section (Carousel) */}
                <section>
                    <HeroCarousel />
                </section>

                {/* 2. Trending Section */}
                <section>
                    <TrendingSection />
                </section>

                {/* 3. Stats Grid */}
                <section>
                    <h3 className="text-gray-800 font-bold text-lg mb-4 flex items-center gap-2">
                        Your Progress <span className="text-xs font-normal text-gray-400 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider">Weekly</span>
                    </h3>
                    <StatsGrid region={userData.region} streak={streak} xp={xp} />
                </section>

                {/* 4. Did You Know (Dynamic Engine) */}
                <section>
                    <div className="bg-[#FFF8E1] border border-[#FFD700] rounded-2xl p-5 relative overflow-hidden transition-all duration-500">
                        {/* Background Decor */}
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            {dailyContent?.type === "proverb" ? (
                                <Quote className="w-16 h-16 text-[#B38F00]" />
                            ) : (
                                <span className="text-6xl">💡</span>
                            )}
                        </div>

                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-[#B38F00] font-bold text-xs uppercase tracking-wider">
                                {dailyContent?.type === "proverb" ? "Wisdom of the Elders" : "Did You Know?"}
                            </h4>
                            <button
                                onClick={getRandomContent}
                                className="p-2 hover:bg-[#FFD700]/20 rounded-full transition-colors group cursor-pointer"
                                aria-label="New Fact"
                            >
                                <RefreshCw className="w-4 h-4 text-[#B38F00] group-hover:rotate-180 transition-transform duration-500" />
                            </button>
                        </div>

                        <div className="min-h-[80px]">
                            <p className={`text-gray-800 font-medium font-jakarta mb-2 transition-all leading-relaxed ${dailyContent?.type === "proverb" ? "italic text-lg" : "text-sm"
                                }`}>
                                {dailyContent ? dailyContent.text : "Loading..."}
                            </p>

                            {dailyContent?.subText && (
                                <p className="text-xs text-[#B38F00]/80 font-bold uppercase tracking-wider flex items-center gap-1">
                                    {dailyContent.type === "proverb" ? "Meaning:" : ""} {dailyContent.subText}
                                </p>
                            )}
                        </div>
                    </div>
                </section>
            </div>

            {/* 5. Bottom Nav is handled in Layout */}
        </div>
    );
}
