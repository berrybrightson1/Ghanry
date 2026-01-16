"use client";

import { Flag, Star } from "lucide-react";
import { motion } from "framer-motion";

const holidays = [
    { date: "Jan 1", name: "New Year's Day", type: "Public Holiday", description: "First day of the year." },
    { date: "Jan 7", name: "Constitution Day", type: "Statutory Holiday", description: "Marks the adoption of the 1992 Constitution." },
    { date: "Mar 6", name: "Independence Day", type: "National Day", description: "Commemorates Ghana's independence from British rule in 1957.", highlight: true },
    { date: "Apr 18", name: "Good Friday", type: "Religious", description: "Christian holiday observing the crucifixion of Jesus." },
    { date: "Apr 21", name: "Easter Monday", type: "Religious", description: "Day after Easter Sunday." },
    { date: "May 1", name: "May Day", type: "Public Holiday", description: "Workers' Day." },
    { date: "Aug 4", name: "Founders' Day", type: "National Day", description: "Honors the 'Big Six' and other contributors to independence.", highlight: true },
    { date: "Sep 21", name: "Kwame Nkrumah Memorial Day", type: "National Day", description: "Birthday of Ghana's first President." },
    { date: "Dec 5", name: "Farmer's Day", type: "National Recognition", description: "First Friday in December, honoring farmers and fishermen." },
    { date: "Dec 25", name: "Christmas Day", type: "Religious", description: "Celebration of the birth of Jesus Christ." },
    { date: "Dec 26", name: "Boxing Day", type: "Public Holiday", description: "Traditionally a day for giving gifts to the poor." },
];

export default function HolidaysPage() {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="space-y-2">
                    <span className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
                        <Flag className="w-4 h-4" />
                        National Calendar
                    </span>
                    <h1 className="text-4xl font-epilogue font-bold text-gray-900">Holidays & Special Days</h1>
                    <p className="text-gray-500 font-jakarta max-w-md">Mark your calendars. A curated list of statutory public holidays and national celebrations in Ghana.</p>
                </div>
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
                            ? "bg-green-50 border-[#006B3F]/20"
                            : "bg-white border-gray-100"
                            }`}>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${holiday.highlight ? "bg-[#006B3F] text-white" : "bg-gray-100 text-gray-500"
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
