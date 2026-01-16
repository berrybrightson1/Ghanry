"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, CheckCircle2 } from "lucide-react";

import { useEffect, useState } from "react";

export default function DailyDropCard({ isLocked }: { isLocked?: boolean }) {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const tomorrow = new Date();
            tomorrow.setHours(24, 0, 0, 0);

            const diff = tomorrow.getTime() - now.getTime();
            const h = Math.floor(diff / (1000 * 60 * 60));
            const m = Math.floor((diff / (1000 * 60)) % 60);
            const s = Math.floor((diff / 1000) % 60);

            setTimeLeft(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            whileHover={!isLocked ? { scale: 1.02 } : {}}
            className={`w-full rounded-3xl overflow-hidden relative shadow-lg group transition-all duration-300 ${isLocked ? "cursor-default" : "cursor-pointer"}`}
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isLocked ? "opacity-40" : "opacity-100"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#006B3F] to-[#004629]" />
            </div>

            {/* Gray Overlay for Locked State */}
            {isLocked && <div className="absolute inset-0 bg-gray-900/40 z-[1] backdrop-blur-[2px]" />}

            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-ghana-gold/10 blur-xl" />

            <div className="relative z-10 p-6 flex flex-col items-start justify-between min-h-[220px]">
                {/* Animated Background Shapes (Right Side) */}
                {!isLocked && (
                    <div className="absolute top-0 right-0 bottom-0 w-1/2 z-[-1] pointer-events-none overflow-hidden">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 45, 0],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-10 right-10 w-16 h-16 border-2 border-white/20 rounded-lg"
                        />
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [0, -45, 0],
                                opacity: [0.05, 0.15, 0.05]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="absolute bottom-10 right-20 w-12 h-12 border-2 border-yellow-400/20 rounded-full"
                        />
                    </div>
                )}

                <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full backdrop-blur-md border text-xs font-bold mb-4 transition-colors ${isLocked
                            ? "bg-green-500 text-white border-green-400"
                            : "bg-white/20 text-white border-white/10"
                        }`}>
                        {isLocked ? (
                            <CheckCircle2 className="w-3 h-3" />
                        ) : (
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        )}
                        {isLocked ? "Trivia Completed" : "Daily Trivia #42"}
                    </div>

                    <h3 className={`font-bold text-lg leading-tight mb-2 transition-colors ${isLocked ? "text-gray-300" : "text-white"}`}>
                        &apos;Ashanti Wars&apos;
                    </h3>
                    <h2 className={`text-2xl sm:text-3xl font-epilogue font-extrabold leading-tight mb-4 transition-colors ${isLocked ? "text-white/60" : "text-white"}`}>
                        The Ashanti Wars
                    </h2>
                </div>

                <div className="w-full">
                    {isLocked ? (
                        <div className="bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                            <p className="text-white font-bold text-sm text-center">Come back tomorrow for fresh trivia!</p>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center gap-2 text-white/60 text-[10px] font-bold mb-3 uppercase tracking-wider">
                                <Clock className="w-3.5 h-3.5" />
                                Ends in {timeLeft || "00:00:00"}
                            </div>

                            <Link href="/dashboard/quiz">
                                <button className="w-full py-3 bg-[#CE1126] hover:bg-red-600 text-white font-epilogue font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2">
                                    Start Quiz
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
