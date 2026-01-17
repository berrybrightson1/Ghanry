"use client";

import { Home, Trophy, MessageCircle, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function BottomNav() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navItems = [
        { path: "/dashboard", icon: Home, label: "Home" },
        { path: "/dashboard/leaderboard", icon: Trophy, label: "Rank" },
        { path: "/dashboard/ask", icon: MessageCircle, label: "Ask" },
        { path: "/dashboard/settings", icon: Settings, label: "Settings" },
    ];

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-6 py-3 flex items-center gap-8 pointer-events-auto">
                {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            className={`flex flex-col items-center gap-1 ${isActive(item.path) ? "text-[#006B3F]" : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            <item.icon className={`w-6 h-6 ${isActive(item.path) ? "fill-current" : ""}`} />
                            {/* Optional Label */}
                            {/* <span className="text-[10px] font-bold">{item.label}</span> */}
                            {isActive(item.path) && (
                                <motion.div
                                    layoutId="nav-dot"
                                    className="w-1 h-1 rounded-full bg-[#006B3F] absolute -bottom-1"
                                />
                            )}
                        </motion.button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
