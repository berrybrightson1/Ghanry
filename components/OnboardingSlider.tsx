"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, GraduationCap, ShieldCheck, Scroll, Star } from "lucide-react";

export default function OnboardingSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            id: 0,
            type: "image",
            content: "Brand Image"
        },
        {
            id: 1,
            type: "summary",
            title: "What is this app?",
            description: "Ghanry is a gamified heritage platform. Play quizzes, learn history, earn XP to upgrade your citizenship status, and get featured on the global leaderboard.",
            icon: <GraduationCap className="w-12 h-12 text-[#FCD116]" />
        },
        {
            id: 2,
            type: "features",
            title: "How It Works",
            description: "A simple loop for mastery.",
            features: [
                { icon: <Image src="/Flame.svg" width={20} height={20} alt="Streak" />, label: "1. Play Daily" },
                { icon: <ShieldCheck className="w-5 h-5 text-blue-400" />, label: "2. Earn XP" },
                { icon: <Sparkles className="w-5 h-5 text-ghana-gold" />, label: "3. Rank Up" },
                { icon: <Globe className="w-5 h-5 text-green-400" />, label: "4. Compete" },
                { icon: <Scroll className="w-5 h-5 text-[#CE1126]" />, label: "5. Learn Lore" },
                { icon: <Star className="w-5 h-5 text-[#FCD116]" />, label: "6. Win Badges" },
            ]
        },
        {
            id: 3,
            type: "summary",
            title: "Claim Your Heritage",
            description: "Unlock the exclusive 'Citizen' status by proving your knowledge. Are you a Tourist or a Legend? Let's find out.",
            icon: <ShieldCheck className="w-12 h-12 text-[#CE1126]" />
        }
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    return (
        <div
            className="w-full h-full relative overflow-hidden bg-[#006B3F] flex flex-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ x: "100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset }) => {
                        const swipeThreshold = 50;
                        if (offset.x < -swipeThreshold) {
                            setCurrentSlide((prev) => (prev + 1) % slides.length);
                        } else if (offset.x > swipeThreshold) {
                            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                        }
                    }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                >
                    {slides[currentSlide].type === "image" && (
                        <div className="w-full h-full relative flex flex-col items-center justify-start pt-24 text-center">
                            <Image
                                src="/Slider-1.webp"
                                className="object-cover"
                                alt="Brand"
                                fill
                                priority
                            />

                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10" />

                            <div className="z-20 relative flex flex-col items-center gap-1">
                                <h1 className="text-6xl md:text-7xl font-epilogue font-extrabold tracking-tight mb-2 drop-shadow-2xl">
                                    <span className="text-white">Gha</span>
                                    <span className="text-[#FCD116]">nry</span>
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-epilogue font-bold text-white leading-tight drop-shadow-lg">
                                    Akwaaba!
                                </h2>
                                <p className="text-white/90 text-lg font-jakarta font-medium drop-shadow-md">
                                    Welcome Home
                                </p>
                            </div>
                        </div>
                    )}

                    {slides[currentSlide].type === "summary" && (
                        <div className="w-full h-full flex flex-col items-start justify-center relative z-10 p-8 md:p-12">
                            {/* Background Decor */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#FCD116] rounded-full blur-[80px] opacity-20 pointer-events-none"
                            />

                            <div className="mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
                                {slides[currentSlide].icon}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-epilogue font-bold text-white mb-6 leading-tight">
                                {slides[currentSlide].title}
                            </h2>
                            <p className="text-white/80 font-jakarta text-lg leading-relaxed max-w-sm">
                                {slides[currentSlide].description}
                            </p>
                        </div>
                    )}

                    {slides[currentSlide].type === "features" && (
                        <div className="w-full h-full flex flex-col items-start justify-center relative z-10 p-8 md:p-12">
                            {/* Background Decor */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-[-50px] right-[-50px] w-80 h-80 bg-[#CE1126] rounded-full blur-[100px] opacity-20 pointer-events-none"
                            />

                            <h2 className="text-2xl md:text-3xl font-epilogue font-bold text-white mb-8 leading-tight">
                                More Than A Quiz
                            </h2>

                            <div className="grid grid-cols-2 gap-4 w-full">
                                {slides[currentSlide].features?.map((feature, idx) => (
                                    <div key={idx} className="flex flex-col gap-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                                        <div className="p-2 w-fit rounded-lg bg-white/10">
                                            {feature.icon}
                                        </div>
                                        <span className="text-white font-jakarta font-bold text-sm">
                                            {feature.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-8 md:left-12 flex gap-2 z-20">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-[#FCD116]" : "w-2 bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
