"use client";

import { Star } from "lucide-react";

interface PassportHeaderProps {
    nickname: string;
    rank: string;
    xp: number;
}

export default function PassportHeader({ nickname, rank, xp }: PassportHeaderProps) {
    return (
        <div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-white/20 p-4 flex items-center justify-between shadow-sm">
            {/* Left: Avatar */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-ghana-gold overflow-hidden relative flex-shrink-0">
                    {/* Placeholder Avatar */}
                    <div className="w-full h-full bg-gradient-to-tr from-green-600 to-green-400 flex items-center justify-center text-white font-bold text-xs">
                        {nickname.slice(0, 2).toUpperCase()}
                    </div>
                </div>

                {/* Middle: Info */}
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{rank}</span>
                    <span className="text-sm font-epilogue font-extrabold text-[#2D2D2D] leading-none">
                        {nickname}
                    </span>
                </div>
            </div>

            {/* Right: XP Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-ghana-gold rounded-full shadow-sm">
                <Star className="w-3 h-3 fill-ghana-gold text-ghana-gold" />
                <span className="text-xs font-bold text-[#2D2D2D]">{xp} XP</span>
            </div>
        </div>
    );
}
