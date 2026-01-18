"use client";

import { Home, Trophy, Calendar, Settings, Flame, Gamepad2, MessageSquare, Scroll, Sparkles, Square, Circle, Triangle, Hexagon, Octagon, Star, Zap, Shield, Heart, Ghost, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useXP } from "@/hooks/useXP";
import { calculateProgress, getRankColor } from "@/lib/gamification";
import { useState, useEffect } from "react";

const SHAPE_ICONS: Record<string, React.ElementType> = {
    Square, Circle, Triangle, Hexagon, Octagon, Star, Zap, Shield, Heart, Ghost
};

interface SidebarProps {
    nickname: string;
    isGuest?: boolean;
    avatar?: string;
    status?: 'citizen' | 'tourist';
    verified?: boolean;
}

export default function Sidebar({ nickname, isGuest = false, avatar: initialAvatar, status, verified: initialVerified = false }: SidebarProps) {
    const pathname = usePathname();
    const { xp } = useXP();
    const { rank } = calculateProgress(xp);

    // Local state for avatar and verified status to allow real-time updates
    const [avatar, setAvatar] = useState(initialAvatar);
    const [verified, setVerified] = useState(initialVerified);

    // Listen for profile updates
    useEffect(() => {
        const handleProfileUpdate = () => {
            const newAvatar = localStorage.getItem("ghanry_avatar");
            const newVerified = localStorage.getItem("ghanry_verified") === "true";
            setAvatar(newAvatar || undefined);
            setVerified(newVerified);
        };

        window.addEventListener('ghanry_profile_update', handleProfileUpdate);
        return () => window.removeEventListener('ghanry_profile_update', handleProfileUpdate);
    }, []);

    // Override Rank Label for Citizens if XP is low (avoid calling them "Tourist")
    // If status is citizen, use "Ghanaian" as base rank if calculated rank is "Tourist".
    // Otherwise respect higher calculated ranks (e.g. Expat, Patriot).
    let displayRank = rank;
    if (status === 'citizen' && (rank === 'Tourist' || rank === 'Expat')) {
        displayRank = "GHANAIAN";
    }

    const rankColor = getRankColor(rank); // Keep color logic based on XP for progression feeling? Or match status?
    // Let's keep color logic based on XP for now, but label based on Status.

    const isActive = (path: string) => {
        if (path === "/dashboard" && pathname === "/dashboard") return true;
        if (path !== "/dashboard" && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { path: "/dashboard", icon: Home, label: "Home" },
        { path: "/dashboard/categories", icon: Gamepad2, label: "Play Quiz" },
        { path: "/dashboard/streak", icon: Flame, label: "Journey" },
        { path: "/dashboard/gist", icon: Sparkles, label: "Ghana Now" },
        { path: "/dashboard/holidays", icon: Calendar, label: "Holidays" },
        { path: "/dashboard/leaderboard", icon: Trophy, label: "Leaderboard" },
        { path: "/dashboard/wisdom", icon: Scroll, label: "Wisdom Pot" },
        { path: "/dashboard/settings", icon: Settings, label: "Settings" },
        { path: "/dashboard/ask", icon: MessageSquare, label: "Ask Ghanry" },
    ];

    return (
        <div className="w-full h-full flex flex-col bg-white border-r border-gray-100 relative">
            {/* Header: Passport Info */}
            <div className="p-6 border-b border-gray-50">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-ghana-gold overflow-hidden flex items-center justify-center text-gray-500 font-bold text-xl relative shrink-0">
                        {avatar?.startsWith('icon:') ? (
                            (() => {
                                const Icon = SHAPE_ICONS[avatar.split(':')[1]];
                                return Icon ? <Icon size={24} className="text-[#006B3F]" /> : <span className="text-xl">?</span>;
                            })()
                        ) : (
                            avatar || nickname.slice(0, 2).toUpperCase()
                        )}
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <h2 className="font-epilogue font-bold text-gray-900 leading-tight truncate max-w-[140px]" title={nickname}>
                                {nickname}
                            </h2>
                            {verified && (
                                <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/10" />
                            )}
                        </div>

                        {/* Status Badge */}
                        <div className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${isGuest ? "text-gray-400" : rankColor}`}>
                            {isGuest ? "GUEST ACCOUNT" : displayRank}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 min-h-0">
                <nav className="h-full p-4 space-y-1 overflow-y-auto no-scrollbar">
                    {navItems.map((item, index) => (
                        <div key={item.path}>
                            {index === navItems.length - 1 && (
                                <div className="mt-8 mb-4 border-t border-gray-50 pt-4 px-5">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Support</span>
                                </div>
                            )}
                            <Link
                                href={item.path}
                                className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all group relative overflow-hidden ${isActive(item.path)
                                    ? 'bg-[#006B3F] text-white shadow-lg shadow-green-900/10'
                                    : 'text-gray-500 hover:bg-green-50 hover:text-[#006B3F]'
                                    }`}
                            >
                                {isActive(item.path) && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#006B3F] rounded-l-xl"
                                    />
                                )}
                                <item.icon className={`w-5 h-5 ${isActive(item.path) ? "fill-current" : ""}`} />
                                <span className="font-bold font-jakarta text-[14px]">{item.label}</span>
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}
