"use client";

import { useState, useEffect } from "react";
import { Trophy, MapPin, Globe, Loader2 } from "lucide-react";
import { LeaderboardService, type LeaderboardEntry } from "@/lib/leaderboard";
import { useXP } from "@/hooks/useXP";

export default function Leaderboard() {
    const [activeTab, setActiveTab] = useState<"global" | "region">("global");
    const [rankings, setRankings] = useState<LeaderboardEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userRank, setUserRank] = useState<LeaderboardEntry | undefined>(undefined);
    const { xp: realXP } = useXP();

    useEffect(() => {
        const fetchRankings = async () => {
            setIsLoading(true);
            const nickname = localStorage.getItem("ghanry_nickname") || "Guest";
            const region = localStorage.getItem("ghanry_region") || "Greater Accra";
            const passportId = localStorage.getItem("ghanry_passport_id");

            // Only include user if they have a valid passport ID
            if (!passportId) {
                setRankings([]);
                setIsLoading(false);
                return;
            }

            let data: LeaderboardEntry[] = [];
            if (activeTab === "global") {
                data = await LeaderboardService.getRankings(nickname, region, realXP);
            } else {
                data = await LeaderboardService.getRegionRankings(region);
                // Mark current user in regional data
                data = data.map(u => ({
                    ...u,
                    isCurrentUser: u.nickname === nickname
                }));
            }

            // Filter to only show users with valid IDs (in production, this would be handled server-side)
            const validRankings = data.filter(user => user.isCurrentUser || user.nickname !== "Guest");

            setRankings(validRankings);
            setUserRank(validRankings.find(p => p.isCurrentUser));
            setIsLoading(false);
        };

        fetchRankings();
    }, [realXP, activeTab]);

    return (
        <div className="w-full min-h-screen bg-gray-50 pb-24 flex flex-col items-center">

            {/* Header */}
            <div className="w-full bg-[#006B3F] pt-8 pb-16 px-6 rounded-b-[2.5rem] shadow-xl text-center relative overflow-hidden group">
                {/* Animated Background Shapes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] opacity-10 animate-[spin_20s_linear_infinite]">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FCD116" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.5C59.4,45.9,47.9,55,35.6,63.2C23.3,71.4,10.2,78.7,-1.8,81.8C-13.8,84.9,-25.6,83.8,-36.4,77.5C-47.2,71.2,-57,59.7,-65.4,47.3C-73.8,34.9,-80.8,21.6,-81.9,8C-83,-5.6,-78.2,-19.5,-68.8,-29.9C-59.4,-40.3,-45.4,-47.2,-32.1,-55.1C-18.8,-63,-6.2,-71.9,7.5,-84.9L44.7,-76.4Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#006B3F] via-transparent to-transparent z-0" />

                <h1 className="text-3xl font-epilogue font-extrabold text-white mb-2 relative z-10 filter drop-shadow-sm">Leaderboard</h1>

                {/* User's Current Rank Card */}
                {!isLoading && userRank && (
                    <div className="mt-6 mx-auto max-w-xs bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl relative z-10 shadow-lg flex items-center gap-4 overflow-hidden group hover:bg-white/15 transition-all cursor-default">
                        {/* Shine Effect */}
                        <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-[shimmer_2s_infinite]" />

                        <div className="w-14 h-14 bg-ghana-gold rounded-xl flex items-center justify-center text-[#006B3F] font-extrabold text-2xl shadow-inner border border-yellow-300 transform group-hover:scale-110 transition-transform">
                            #{userRank.rank}
                        </div>
                        <div className="flex-1 text-left">
                            <p className="text-[10px] text-yellow-300 font-bold uppercase tracking-widest mb-1 opacity-90">Your Global Rank</p>
                            <p className="text-white font-epilogue font-bold text-lg leading-none">Keep pushing!</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="w-full max-w-2xl px-6 -mt-10 relative z-20">
                {/* Tabs */}
                <div className="bg-white rounded-full p-1 shadow-md flex mb-6">
                    <button
                        onClick={() => setActiveTab("global")}
                        className={`flex-1 py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "global"
                            ? "bg-ghana-gold text-[#2D2D2D] shadow-sm"
                            : "text-gray-400 hover:text-gray-600"
                            }`}
                    >
                        <Globe className="w-4 h-4" /> Top Citizens
                    </button>
                    <button
                        onClick={() => setActiveTab("region")}
                        className={`flex-1 py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "region"
                            ? "bg-ghana-gold text-[#2D2D2D] shadow-sm"
                            : "text-gray-400 hover:text-gray-600"
                            }`}
                    >
                        <MapPin className="w-4 h-4" /> Rep Your Region
                    </button>
                </div>

                {/* List */}
                <div className="space-y-3 pb-8">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-12 text-gray-400 gap-2">
                            <Loader2 className="w-8 h-8 animate-spin text-[#006B3F]" />
                            <span className="text-xs font-bold uppercase tracking-wider">Syncing Global Data...</span>
                        </div>
                    ) : activeTab === "global" ? (
                        rankings.length > 0 ? (
                            rankings.map((user) => (
                                <div
                                    key={user.rank}
                                    className={`p-4 rounded-2xl shadow-sm flex items-center gap-4 transition-all ${user.isCurrentUser
                                        ? "bg-green-50 border-2 border-[#006B3F] scale-[1.02] shadow-md"
                                        : "bg-white hover:scale-[1.01]"
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm ${user.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                                        user.rank === 2 ? "bg-gray-300 text-gray-800" :
                                            user.rank === 3 ? "bg-orange-300 text-orange-900" :
                                                "bg-gray-100 text-gray-500"
                                        }`}>
                                        {user.rank <= 3 ? <Trophy className="w-5 h-5" /> : user.rank}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`font-epilogue font-bold ${user.isCurrentUser ? "text-[#006B3F]" : "text-gray-800"}`}>
                                            {user.nickname} {user.isCurrentUser && "(You)"}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs text-gray-400 font-bold">
                                            <MapPin className="w-3 h-3" /> {user.region}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[#006B3F] font-extrabold text-sm">{user.xp.toLocaleString()} XP</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{user.rankName || "Citizen"}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-8 rounded-2xl text-center">
                                <p className="text-gray-500 font-jakarta text-sm mb-2">Be the first to join the leaderboard!</p>
                                <p className="text-xs text-gray-400">Complete quizzes to earn XP and rank up</p>
                            </div>
                        )
                    ) : (
                        rankings.length > 0 ? (
                            rankings.map((user) => (
                                <div
                                    key={user.rank}
                                    className={`p-4 rounded-2xl shadow-sm flex items-center gap-4 transition-all ${user.isCurrentUser
                                        ? "bg-green-50 border-2 border-[#006B3F] scale-[1.02] shadow-md"
                                        : "bg-white hover:scale-[1.01]"
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm ${user.rank === 1 ? "bg-yellow-400 text-yellow-900" :
                                        user.rank === 2 ? "bg-gray-300 text-gray-800" :
                                            user.rank === 3 ? "bg-orange-300 text-orange-900" :
                                                "bg-gray-100 text-gray-500"
                                        }`}>
                                        {user.rank <= 3 ? <Trophy className="w-5 h-5" /> : user.rank}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`font-epilogue font-bold ${user.isCurrentUser ? "text-[#006B3F]" : "text-gray-800"}`}>
                                            {user.nickname} {user.isCurrentUser && "(You)"}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs text-gray-400 font-bold">
                                            <MapPin className="w-3 h-3" /> {user.region}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[#006B3F] font-extrabold text-sm">{user.xp.toLocaleString()} XP</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{user.rankName || "Citizen"}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-8 rounded-2xl text-center">
                                <p className="text-gray-500 font-jakarta text-sm mb-2">Be the first to represent {localStorage.getItem("ghanry_region") || "your region"}!</p>
                                <p className="text-xs text-gray-400">Complete quizzes to earn XP and top the local charts</p>
                            </div>
                        )
                    )}
                </div>
            </div >

            {/* Bottom Nav handled by Layout */}
        </div >
    );
}
