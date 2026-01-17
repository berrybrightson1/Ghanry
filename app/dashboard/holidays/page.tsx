"use client";

import { Flag, Star, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ghanaHolidays, worldCelebrations } from "@/lib/data/holidays";

export default function HolidaysPage() {
    const [activeTab, setActiveTab] = useState<"ghana" | "world">("ghana");
    const holidays = activeTab === "ghana" ? ghanaHolidays : worldCelebrations;

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                        <Flag className="w-4 h-4" />
                        Celebrations Calendar
                    </span>
                    <h1 className="text-4xl font-epilogue font-bold text-gray-900">Holidays & Special Days</h1>
                    <p className="text-gray-500 font-jakarta max-w-md">
                        {activeTab === "ghana"
                            ? "Mark your calendars. Statutory public holidays and national celebrations in Ghana."
                            : "Global celebrations and international observances recognized worldwide."}
                    </p>
                </div>
            </div>

            {/* Toggle Bar */}
            <div className="bg-white rounded-full p-1 shadow-md flex max-w-md">
                <button
                    onClick={() => setActiveTab("ghana")}
                    className={`flex-1 py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "ghana"
                        ? "bg-[#006B3F] text-white shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                        }`}
                >
                    <Flag className="w-4 h-4" /> Ghana Holidays
                </button>
                <button
                    onClick={() => setActiveTab("world")}
                    className={`flex-1 py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2 ${activeTab === "world"
                        ? "bg-ghana-gold text-[#2D2D2D] shadow-sm"
                        : "text-gray-400 hover:text-gray-600"
                        }`}
                >
                    <Globe className="w-4 h-4" /> World Days
                </button>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-8 pb-12">
                {holidays.map((holiday, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <div className={`absolute -left-[9px] top-6 w-5 h-5 rounded-full border-4 border-white ${holiday.highlight ? "bg-[#FCD116]" : "bg-gray-200"
                            } shadow-sm`} />

                        <div className={`p-6 rounded-2xl border transition-all hover:shadow-md ${holiday.highlight
                            ? activeTab === "ghana" ? "bg-green-50 border-[#006B3F]/20" : "bg-yellow-50 border-yellow-200/50"
                            : "bg-white border-gray-100"
                            }`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${holiday.highlight
                                            ? activeTab === "ghana" ? "bg-[#006B3F] text-white" : "bg-ghana-gold text-black"
                                            : "bg-gray-100 text-gray-500"
                                            }`}>
                                            {holiday.date}
                                        </span>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{holiday.type}</span>
                                    </div>
                                    <h3 className="text-xl font-epilogue font-bold text-gray-900 mb-1">{holiday.name}</h3>
                                    <p className="text-gray-500 text-sm font-jakarta">{holiday.description}</p>
                                </div>
                                {holiday.highlight && (
                                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-gray-100 shadow-sm">
                                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
