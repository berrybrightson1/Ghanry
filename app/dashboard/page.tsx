"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import HeroCarousel from "@/components/dashboard/HeroCarousel";
import StatsGrid from "@/components/dashboard/StatsGrid";
import TrendingSection from "@/components/dashboard/TrendingSection";
import { ArrowRight } from "lucide-react";
import { useXP } from "@/hooks/useXP";
import { useStreak } from "@/hooks/useStreak";

export default function Dashboard() {
    const router = useRouter();
    const [userData, setUserData] = useState<{ nickname: string; region: string } | null>(null);
    const { xp } = useXP();
    const { streak } = useStreak();

    useEffect(() => {
        // Check for user data
        const storedNickname = localStorage.getItem("ghanry_nickname");
        const storedRegion = localStorage.getItem("ghanry_region");

        if (!storedNickname || !storedRegion) {
            // Redirect to onboarding if missing
            router.push("/");
        } else {
            setUserData({ nickname: storedNickname, region: storedRegion });
        }
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

                {/* 4. Did You Know */}
                <section>
                    <div className="bg-[#FFF8E1] border border-[#FFD700] rounded-2xl p-5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="text-6xl">💡</span>
                        </div>
                        <h4 className="text-[#B38F00] font-bold text-xs uppercase tracking-wider mb-2">Did You Know?</h4>
                        <p className="text-gray-800 font-medium font-jakarta mb-3 text-sm leading-relaxed">
                            The name &quot;Ghana&quot; means &quot;Warrior King&quot; and was the title of the kings of the medieval Ghana Empire.
                        </p>
                        <button
                            onClick={() => toast.success("Feature coming soon!")}
                            className="text-[#B38F00] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            Read More <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </section>
            </div>

            {/* 5. Bottom Nav is handled in Layout */}
        </div>
    );
}
