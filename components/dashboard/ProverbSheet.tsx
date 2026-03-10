"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Sparkles, Languages, Star } from "lucide-react";

export interface Proverb {
    id: number;
    native: string;
    language: string;
    translation: string;
    meaning: string;
    power?: string;
    powerValue?: number;
    rarity?: string;
}

const RARITY_STYLES: Record<string, { label: string; class: string }> = {
    common: { label: "Common", class: "bg-gray-100 text-gray-500" },
    uncommon: { label: "Uncommon", class: "bg-emerald-50 text-emerald-600 border border-emerald-100" },
    rare: { label: "Rare", class: "bg-blue-50 text-blue-600 border border-blue-100" },
    legendary: { label: "Legendary", class: "bg-[#FCD116]/20 text-amber-700 border border-[#FCD116]/40" },
};

const POWER_LABELS: Record<string, string> = {
    xp_refund: "Grants an XP refund on wrong answers",
    shield: "Activates a Wisdom Shield in your next quiz",
    xp_multiplier: "Multiplies your XP earnings",
    streak_boost: "Protects your streak for one day",
};

const SPRING = { type: "spring" as const, stiffness: 320, damping: 30, mass: 0.85 };

interface ProverbSheetProps {
    proverb: Proverb | null;
    onClose: () => void;
}

export default function ProverbSheet({ proverb, onClose }: ProverbSheetProps) {
    const rarity = RARITY_STYLES[proverb?.rarity ?? "common"] ?? RARITY_STYLES.common;

    return (
        <AnimatePresence>
            {proverb && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                    />

                    {/* Sheet */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl overflow-hidden flex flex-col"
                        style={{ maxHeight: "88%" }}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={SPRING}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={{ top: 0.04, bottom: 0.35 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.y > 100 || info.velocity.y > 400) onClose();
                        }}
                    >
                        {/* Ghana flag stripe */}
                        <div className="flex h-[4px] flex-shrink-0">
                            <div className="flex-1 bg-[#CE1126]" />
                            <div className="flex-1 bg-[#FCD116]" />
                            <div className="flex-1 bg-[#006B3F]" />
                        </div>

                        {/* Drag handle + close */}
                        <div className="flex-shrink-0 flex items-center justify-between px-5 pt-3 pb-2">
                            <div className="w-10 h-1.5 bg-gray-200 rounded-full mx-auto absolute left-1/2 -translate-x-1/2 top-5" />
                            <div />
                            <button
                                onClick={onClose}
                                aria-label="Close"
                                className="ml-auto p-2 rounded-2xl bg-gray-100 text-gray-500 active:bg-gray-200 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Scrollable content */}
                        <div className="overflow-y-auto flex-1 px-5 pb-10" onPointerDown={e => e.stopPropagation()}>

                            {/* Header label */}
                            <div className="flex items-center gap-2 mb-5">
                                <BookOpen className="w-4 h-4 text-[#006B3F]" />
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                                    Wisdom of the Elders
                                </span>
                            </div>

                            {/* Native proverb — hero text */}
                            <p className="font-epilogue font-bold text-2xl text-gray-900 italic leading-snug mb-3">
                                &ldquo;{proverb.native}&rdquo;
                            </p>

                            {/* Language badge */}
                            <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-500 text-[11px] font-bold px-3 py-1 rounded-full mb-6">
                                <Languages className="w-3 h-3" />
                                {proverb.language}
                            </span>

                            {/* Translation */}
                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-4">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Translation</p>
                                <p className="font-jakarta font-bold text-gray-800 text-sm leading-relaxed">
                                    {proverb.translation}
                                </p>
                            </div>

                            {/* Meaning */}
                            <div className="bg-[#FFF8E1] border border-[#FCD116]/30 rounded-2xl p-4 mb-4">
                                <p className="text-[10px] font-bold text-[#B38F00] uppercase tracking-widest mb-1.5">Meaning</p>
                                <p className="font-jakarta text-gray-700 text-sm leading-relaxed">
                                    {proverb.meaning}
                                </p>
                            </div>

                            {/* Footer row — rarity + power */}
                            <div className="flex items-center gap-3 flex-wrap">
                                {proverb.rarity && (
                                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1.5 rounded-full ${rarity.class}`}>
                                        <Star className="w-3 h-3" />
                                        {rarity.label}
                                    </span>
                                )}
                                {proverb.power && POWER_LABELS[proverb.power] && (
                                    <span className="inline-flex items-center gap-1.5 bg-[#006B3F]/10 text-[#006B3F] text-[11px] font-bold px-3 py-1.5 rounded-full">
                                        <Sparkles className="w-3 h-3" />
                                        {POWER_LABELS[proverb.power]}
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
