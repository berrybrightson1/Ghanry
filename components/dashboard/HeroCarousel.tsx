"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DailyDropCard from "./DailyDropCard";
import RealQuizCard from "./RealQuizCard";
import { useDailyTrivia } from "@/hooks/useDailyTrivia";

export default function HeroCarousel() {
    const { isCompletedToday } = useDailyTrivia();
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide to Real Quiz if trivia is completed
    useEffect(() => {
        if (isCompletedToday) {
            setCurrentIndex(1);
        }
    }, [isCompletedToday]);

    const slides = [
        <DailyDropCard key="daily" isLocked={isCompletedToday} />,
        <RealQuizCard key="real" />
    ];

    return (
        <div className="w-full relative group">
            <div className="overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    >
                        {slides[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx
                            ? "w-8 bg-[#006B3F]"
                            : "w-2 bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                        title={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Hint for sliding */}
            <div className="hidden sm:block">
                {!isCompletedToday && currentIndex === 0 && (
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => setCurrentIndex(1)}
                            className="p-3 bg-white rounded-full shadow-2xl border border-gray-100 text-[#006B3F] hover:bg-gray-50 flex items-center justify-center transform active:scale-95 transition-transform"
                            aria-label="Next slide"
                            title="Next slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}
                {currentIndex === 1 && (
                    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => setCurrentIndex(0)}
                            className="p-3 bg-white rounded-full shadow-2xl border border-gray-100 text-[#006B3F] hover:bg-gray-50 flex items-center justify-center transform active:scale-95 transition-transform"
                            aria-label="Previous slide"
                            title="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Swipe Indicators / Arrows */}
            <div className="flex sm:hidden justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2">
                <button
                    onClick={() => setCurrentIndex(0)}
                    className={`p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg transition-opacity active:scale-95 ${currentIndex === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4 text-[#006B3F]" />
                </button>
                <button
                    onClick={() => setCurrentIndex(1)}
                    className={`p-2 bg-white/80 backdrop-blur-md rounded-full shadow-lg transition-opacity active:scale-95 ${currentIndex === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4 text-[#006B3F]" />
                </button>
            </div>
        </div>
    );
}
