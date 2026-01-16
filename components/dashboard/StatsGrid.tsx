"use client";

import { Flame, MapPin, Target, Globe } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
    icon: ReactNode;
    value: string;
    label: string;
    colorClasses: string; // e.g., "bg-orange-50 text-orange-600 border-orange-100"
}

function StatCard({ icon, value, label, colorClasses }: StatCardProps) {
    return (
        <div className={`rounded-3xl p-4 shadow-sm border flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-200 ${colorClasses}`}>
            <div className="p-2 bg-white rounded-full mb-2 shadow-sm">
                {icon}
            </div>
            <span className="text-lg font-epilogue font-extrabold mb-0.5">{value}</span>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{label}</span>
        </div>
    );
}

interface StatsGridProps {
    region: string;
    streak: number;
    xp: number;
}

export default function StatsGrid({ region, streak, xp }: StatsGridProps) {
    return (
        <div className="grid grid-cols-2 gap-4 w-full">
            <StatCard
                icon={<Flame className="w-6 h-6 text-orange-500" />}
                colorClasses="bg-orange-50 border-orange-100 text-orange-800"
                value={`${streak} Days`}
                label="Streak"
            />
            <StatCard
                icon={<Target className="w-6 h-6 text-green-600" />}
                colorClasses="bg-green-50 border-green-100 text-green-800"
                value={`${xp}`}
                label="Total XP"
            />
            <StatCard
                icon={<MapPin className="w-6 h-6 text-blue-500" />}
                colorClasses="bg-blue-50 border-blue-100 text-blue-800"
                value={region}
                label="Region Rank"
            />
            <StatCard
                icon={<Globe className="w-6 h-6 text-purple-500" />}
                colorClasses="bg-purple-50 border-purple-100 text-purple-800"
                value="Top 10%"
                label="Global"
            />
        </div>
    );
}
