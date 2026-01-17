"use client";

import { Sparkles, Home, Trophy, Calendar, Settings, Flame } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SidebarProps {
    nickname: string;
}

export default function Sidebar({ nickname }: SidebarProps) {
    const pathname = usePathname();
    const [status, setStatus] = useState<string>("citizen");

    useEffect(() => {
        const storedStatus = localStorage.getItem("ghanry_status") || "citizen";
        setStatus(storedStatus);
    }, []);

    const isActive = (path: string) => {
        if (path === "/dashboard" && pathname === "/dashboard") return true;
        if (path !== "/dashboard" && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { path: "/dashboard", icon: Home, label: "Home" },
        { path: "/dashboard/categories", icon: Trophy, label: "Topics" },
        { path: "/dashboard/streak", icon: Flame, label: "Journey" },
        { path: "/dashboard/gist", icon: Sparkles, label: "Ghana Now" },
        { path: "/dashboard/holidays", icon: Calendar, label: "Holidays" },
        { path: "/dashboard/leaderboard", icon: Trophy, label: "Leaderboard" },
        { path: "/dashboard/settings", icon: Settings, label: "Settings" },
    ];

    return (
        <div className="w-full h-full flex flex-col bg-white border-r border-gray-100 relative">
            {/* Header: Passport Info */}
            <div className="p-6 border-b border-gray-50">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-ghana-gold overflow-hidden flex items-center justify-center text-gray-500 font-bold">
                        {nickname.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                        <h2 className="font-epilogue font-bold text-gray-900 leading-tight">{nickname}</h2>

                        {/* Status Badge */}
                        <div className={`text-[10px] font-bold uppercase tracking-widest mt-0.5 ${status === 'tourist' ? "text-blue-500" : "text-[#006B3F]"
                            }`}>
                            {status === 'tourist' ? "Tourist Visa" : "Citizen"}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 min-h-0">
                <nav className="h-full p-4 space-y-1 overflow-y-auto no-scrollbar">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
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
                    ))}
                </nav>
            </div>
        </div>
    );
}
