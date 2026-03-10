"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import proverbsData from "@/data/proverbs.json";
import HeroCarousel from "@/components/dashboard/HeroCarousel";
import StatsGrid from "@/components/dashboard/StatsGrid";
import TrendingSection from "@/components/dashboard/TrendingSection";
import { useXP } from "@/hooks/useXP";
import { useStreak } from "@/hooks/useStreak";
import { toast } from "sonner";

export default function Dashboard() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ nickname: string; region: string } | null>(null);
    const { xp } = useXP();
    const { streak } = useStreak();

    // TODO: limit to twice per 24 hours in production
    // const canShowProverb = () => {
    //     const key = "ghanry_proverb_shown";
    //     const record = JSON.parse(localStorage.getItem(key) || "[]") as number[];
    //     const now = Date.now();
    //     const within24h = record.filter(t => now - t < 24 * 60 * 60 * 1000);
    //     if (within24h.length >= 2) return false;
    //     localStorage.setItem(key, JSON.stringify([...within24h, now]));
    //     return true;
    // };

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

        // Delay so the page and Toaster are fully mounted before firing
        const timer = setTimeout(() => {
            const proverb = proverbsData[Math.floor(Math.random() * proverbsData.length)];
            toast("Wisdom of the Elders", {
                id: "proverb-wisdom",
                description: proverb.native,
                duration: 10000,
                action: {
                    label: "Read more",
                    onClick: () => window.dispatchEvent(
                        new CustomEvent("ghanry_proverb_open", { detail: proverb })
                    ),
                },
            });
        }, 800);

        return () => clearTimeout(timer);
    }, [router]);


    if (!userData) return null; // Or a loading spinner

    return (
        <div className="w-full min-h-full bg-white relative pb-6">
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

            </div>

            {/* 5. Bottom Nav is handled in Layout */}
        </div>
    );
}
