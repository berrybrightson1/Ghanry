"use client";

import { useState, useEffect, useRef } from "react";
import { useXP } from "@/hooks/useXP";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Coins } from "lucide-react";

export default function TrotroRun() {
    const { xp, spendXP, addXP } = useXP();

    // Game States
    const [gameState, setGameState] = useState<"IDLE" | "BETTING" | "RUNNING" | "CRASHED">("IDLE");
    const [betAmount, setBetAmount] = useState<number>(100);
    const [multiplier, setMultiplier] = useState<number>(1.00);
    const [countdown, setCountdown] = useState<number>(0);
    const [cashedOutAt, setCashedOutAt] = useState<number | null>(null); // If user cashed out
    const [showWinModal, setShowWinModal] = useState<boolean>(false); // Transient modal state

    // Animation Refs
    const requestRef = useRef<number>();
    const startTimeRef = useRef<number>();
    const lastMultiplierRef = useRef<number>(1.00);
    const crashPointRef = useRef<number>(0); // Fix stale closure in game loop

    // BETTING PHASE
    const startBettingPhase = () => {
        setGameState("BETTING");
        setMultiplier(1.00);
        setCashedOutAt(null);
        setShowWinModal(false);
        const cp = generateCrashPoint();
        crashPointRef.current = cp; // Update ref for loop access

        let timeLeft = 5; // 5 seconds to bet
        setCountdown(timeLeft);

        const timer = setInterval(() => {
            timeLeft -= 1;
            setCountdown(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timer);
                // Validate Bet
                if (betAmount > xp) {
                    toast.error("Not enough XP!", { description: "Reduce your wager." });
                    setGameState("IDLE");
                    return;
                }

                if (spendXP(betAmount)) {
                    startGameRun();
                } else {
                    setGameState("IDLE");
                }
            }
        }, 1000);
    };

    // GENERATE CRASH POINT (Weighted Generosity)
    // 15% chance of valid high multiplier.
    const generateCrashPoint = () => {
        const r = Math.random();

        // 15% chance of a "Golden Ride" (guaranteed > 10x, up to 100x)
        if (r < 0.15) {
            return 10 + (Math.random() * 90);
        }

        // Standard inverse distribution
        const m = 1.00 / (1 - Math.random());
        // Force minimum 1.10x and CAP at 1000x to prevent infinite loops (User Report: "Never stops")
        return Math.min(1000, Math.max(1.10, Math.floor(m * 100) / 100));
    };

    // GAME LOOP
    const startGameRun = () => {
        setGameState("RUNNING");
        startTimeRef.current = Date.now();
        lastMultiplierRef.current = 1.00;
        requestRef.current = requestAnimationFrame(animateGame);
    };

    const animateGame = () => {
        if (!startTimeRef.current) return;

        // Read from REF to avoid stale closure
        const cp = crashPointRef.current;
        if (cp === 0) return;

        const now = Date.now();
        const elapsed = (now - startTimeRef.current) / 1000; // Seconds

        // Growth Function: Exponential
        const growth = Math.exp(0.15 * elapsed);
        const currentM = Math.floor(growth * 100) / 100;

        setMultiplier(currentM);
        lastMultiplierRef.current = currentM;

        if (currentM >= cp) {
            // CRASH!
            handleCrash(currentM);
        } else {
            requestRef.current = requestAnimationFrame(animateGame);
        }
    };

    const handleCrash = (finalM: number) => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        setGameState("CRASHED");
        setMultiplier(finalM); // Show final crash value

        if (!cashedOutAt) {
            toast.error("BUSTED!", { description: `Crashed at ${finalM.toFixed(2)}x` });
        }

        // Auto restart after 4s
        setTimeout(() => setGameState("IDLE"), 4000);
    };

    const handleCashOut = () => {
        if (gameState !== "RUNNING") return;
        if (cashedOutAt) return; // Already cashed out

        const winM = lastMultiplierRef.current;
        setCashedOutAt(winM);

        // 2x BOOST as requested ("times 2 by default")
        // User gets: Bet * Multiplier * 2
        const winnings = Math.floor(betAmount * winM * 2);
        addXP(winnings);

        // Show Win Modal Logic
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
        setShowWinModal(true);
        // Hide after 3 seconds
        setTimeout(() => setShowWinModal(false), 3000);
    };

    // Helper to determine text intensity based on multiplier
    const getIntensityStyles = (m: number) => {
        if (m < 2) return "text-[#FCD116]";
        if (m < 5) return "text-[#FCD116] scale-110 drop-shadow-[0_0_10px_rgba(252,209,22,0.8)]";
        if (m < 10) return "text-orange-400 scale-125 drop-shadow-[0_0_20px_rgba(251,146,60,0.8)] animate-pulse";
        return "text-red-500 scale-150 drop-shadow-[0_0_30px_rgba(239,68,68,1)] animate-bounce";
    };

    // Cleanup
    useEffect(() => {
        return () => cancelAnimationFrame(requestRef.current!);
    }, []);

    return (
        <div className="w-full max-w-md mx-auto py-8">
            {/* Game Screen */}
            <div className="relative h-64 bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-6 group">
                {/* Background (Moving Road) */}
                <div className={`absolute inset-0 bg-[#1a1a1a] transition-opacity ${gameState === "RUNNING" ? "opacity-100" : "opacity-50"}`}>
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-[#2a2a2a] border-t border-white/5">
                        <div className={`w-full h-full flex justify-around items-center ${gameState === "RUNNING" ? "animate-road-scroll" : ""}`}>
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-8 h-2 bg-yellow-500/50 rounded-full" />)}
                        </div>
                    </div>
                </div>

                {/* THE TROTRO */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className={`font-black font-mono transition-all duration-100 ${gameState === "CRASHED" ? "text-6xl text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,1)]" :
                        cashedOutAt ? "text-6xl text-green-400 opacity-50 blur-sm" :
                            `text-7xl ${getIntensityStyles(multiplier)}`
                        }`}>
                        {multiplier.toFixed(2)}x
                    </div>
                </div>

                {/* Bus Graphic */}
                <motion.div
                    animate={gameState === "RUNNING" ? {
                        y: [0, -2, 0],
                        x: [0, 1, 0]
                    } : gameState === "CRASHED" ? {
                        rotate: [0, 10, -5, 0],
                        scale: 0.9
                    } : {}}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-6xl"
                >
                    {gameState === "CRASHED" ? "🚓" : "🚐"}
                </motion.div>

                {/* Status Overlay: BETTING */}
                {gameState === "BETTING" && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-20 backdrop-blur-sm">
                        <div className="text-center">
                            <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-2">Departing In</p>
                            <div className="text-5xl font-black text-white">{countdown}</div>
                        </div>
                    </div>
                )}

                {/* Status Overlay: WIN (Transient Modal) */}
                {showWinModal && cashedOutAt && (
                    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                        <div className="bg-[#006B3F]/90 backdrop-blur-md p-6 rounded-3xl border-2 border-[#FCD116] shadow-[0_0_50px_rgba(252,209,22,0.4)] animate-in zoom-in duration-300 text-center transform scale-100">
                            <div className="bg-[#FCD116] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                                <Coins className="w-6 h-6 text-[#006B3F]" />
                            </div>
                            <div className="text-[#FCD116] text-xs font-bold uppercase tracking-widest mb-1">YOU ESCAPED!</div>
                            <div className="text-4xl font-black text-white mb-2 leading-none">+{Math.floor(betAmount * cashedOutAt * 2).toLocaleString()} XP</div>
                            <div className="bg-black/20 rounded-lg py-1 px-3 inline-block">
                                <div className="text-white/80 font-mono text-xs">@ {cashedOutAt.toFixed(2)}x (2x Boost)</div>
                            </div>
                        </div>
                    </div>
                )}

                {gameState === "CRASHED" && (
                    <div className="absolute inset-x-0 top-4 text-center z-20">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                            BUSTED
                        </span>
                    </div>
                )}
            </div>

            {/* Controls */}
            <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                    <div className="text-xs uppercase text-white/40 font-bold">Wager</div>
                    <div className="flex items-center gap-4">
                        <button onClick={() => setBetAmount(Math.max(10, betAmount - 10))} className="p-2 hover:bg-white/10 rounded-full text-white/60">-</button>
                        <div className="font-mono font-bold text-xl text-[#FCD116] w-20 text-center">{betAmount}</div>
                        <button onClick={() => setBetAmount(Math.min(xp, betAmount + 10))} className="p-2 hover:bg-white/10 rounded-full text-white/60">+</button>
                    </div>
                </div>

                {gameState === "RUNNING" ? (
                    <button
                        onClick={handleCashOut}
                        disabled={!!cashedOutAt}
                        className={`w-full py-6 rounded-2xl font-black text-2xl uppercase tracking-wider shadow-lg transition-all transform active:scale-95 flex flex-col items-center justify-center leading-none gap-1 ${cashedOutAt ? "bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-400 text-white shadow-orange-500/20"
                            }`}
                    >
                        {cashedOutAt ? "ALIGHTED" : "ALIGHT NOW"}
                        {!cashedOutAt && (
                            <span className="text-sm font-bold opacity-80 font-mono">
                                +{Math.floor(betAmount * multiplier * 2)} XP
                            </span>
                        )}
                    </button>
                ) : gameState === "BETTING" ? (
                    <button
                        disabled
                        className="w-full py-6 bg-gray-800 text-gray-400 rounded-2xl font-bold font-mono text-xl cursor-wait"
                    >
                        Loading Passengers...
                    </button>
                ) : (
                    <button
                        onClick={startBettingPhase}
                        className="w-full py-6 bg-[#006B3F] hover:bg-[#005a35] text-white rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg shadow-green-900/20 transition-all transform active:scale-95"
                    >
                        LOAD BUS ({betAmount} XP)
                    </button>
                )}

                {cashedOutAt && gameState === "RUNNING" && (
                    <div className="text-center text-green-400 font-bold text-sm animate-bounce">
                        Safe! Waiting for crash...
                    </div>
                )}
            </div>

            <style jsx global>{`
                @keyframes road-scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50px); }
                }
                .animate-road-scroll {
                    animation: road-scroll 0.2s linear infinite;
                }
            `}</style>
        </div>
    );
}
