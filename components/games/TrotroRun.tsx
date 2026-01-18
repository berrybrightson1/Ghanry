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

    // Betting State
    const [betAmount, setBetAmount] = useState<number | "">(""); // Allow empty string for input
    const [lockedBet, setLockedBet] = useState<number>(0); // The bet actually placed for the current run

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
        // Validate Bet Input
        const actualBet = Number(betAmount);
        if (!actualBet || actualBet <= 0) {
            toast.error("Invalid Wager", { description: "Please enter a valid amount." });
            return;
        }
        if (actualBet > xp) {
            toast.error("Not enough XP!", { description: "You cannot bet more than you have." });
            return;
        }

        setLockedBet(actualBet); // Lock the bet!
        setGameState("BETTING");
        setMultiplier(1.00);
        setCashedOutAt(null);
        setShowWinModal(false);
        const cp = generateCrashPoint();
        crashPointRef.current = cp; // Update ref for loop access

        let timeLeft = 3; // Reduced to 3s for snappier feel
        setCountdown(timeLeft);

        const timer = setInterval(() => {
            timeLeft -= 1;
            setCountdown(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timer);

                // Final Check before run
                // Note: We check against current XP again just in case.
                // We use 'lockedBet' for the deduction.
                if (spendXP(actualBet)) {
                    startGameRun();
                } else {
                    toast.error("Transaction Failed", { description: "Could not deduct XP." });
                    setGameState("IDLE");
                }
            }
        }, 1000);
    };

    // GENERATE CRASH POINT
    const generateCrashPoint = () => {
        // Standard Crash Game Distribution: E = 0.99 / (1 - U)
        // House Edge = 1%
        const r = Math.random();

        // 1.00x minimum implied by the formula logic (if r is low)
        // But we want to allow explicit instant crashes.

        // Use a simpler curve that feels "fair" but risky.
        // 3% chance of instant crash at 1.00x
        if (r < 0.03) return 1.00;

        // Otherwise generate multiplier
        // M = 1 / (1 - r) with limits
        // We adjust r range to be [0.03, 1] mapped to [0, 1] effectively?
        // Let's stick to standard Provably Fair style logic simplifed:

        const m = 0.97 / (1 - r);

        // Cap at 500x for sanity
        return Math.min(500, Math.max(1.00, Math.floor(m * 100) / 100));
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
        // Make it start slow and speed up
        const growth = Math.exp(0.18 * elapsed); // Slightly faster curve
        const currentM = Math.floor(growth * 100) / 100;

        setMultiplier(currentM);
        lastMultiplierRef.current = currentM;

        if (currentM >= cp) {
            // CRASH!
            handleCrash(cp);
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

        // Auto restart after 3s
        setTimeout(() => setGameState("IDLE"), 3000);
    };

    const handleCashOut = () => {
        if (gameState !== "RUNNING") return;
        if (cashedOutAt) return; // Already cashed out

        const winM = lastMultiplierRef.current;
        setCashedOutAt(winM);

        // Win Calculation using LOCKED BET
        const winnings = Math.floor(lockedBet * winM);
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

    // Helper for Input Change
    const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (val === "") {
            setBetAmount("");
            return;
        }
        const num = parseInt(val);
        if (!isNaN(num)) {
            setBetAmount(num);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto py-8">
            {/* Balance Display */}
            <div className="flex justify-between items-center mb-4 px-2">
                <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Your Balance</div>
                <div className="bg-white/10 px-4 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#FCD116]" />
                    <span className="font-mono font-bold text-white tracking-wide">{xp.toLocaleString()} XP</span>
                </div>
            </div>

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
                            <div className="text-[#FCD116] text-xs font-bold uppercase tracking-widest mb-1">{cashedOutAt.toFixed(2)}x CASHOUT</div>
                            <div className="text-4xl font-black text-white mb-2 leading-none">+{Math.floor(lockedBet * cashedOutAt).toLocaleString()} XP</div>
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
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center gap-4">
                    <div className="text-xs uppercase text-white/40 font-bold shrink-0">Wager</div>
                    <div className="flex-1">
                        <input
                            type="number"
                            value={betAmount}
                            onChange={handleBetChange}
                            disabled={gameState !== "IDLE"}
                            placeholder="Min 10"
                            className="w-full bg-transparent text-right font-mono font-bold text-xl text-[#FCD116] placeholder-white/20 focus:outline-none disabled:opacity-50"
                        />
                    </div>
                    <div className="flex gap-2 shrink-0">
                        <button
                            onClick={() => setBetAmount(Math.floor(xp / 2))}
                            disabled={gameState !== "IDLE"}
                            className="bg-white/10 hover:bg-white/20 text-white/60 text-[10px] font-bold px-2 py-1 rounded disabled:opacity-50"
                        >
                            1/2
                        </button>
                        <button
                            onClick={() => setBetAmount(xp)}
                            disabled={gameState !== "IDLE"}
                            className="bg-white/10 hover:bg-white/20 text-white/60 text-[10px] font-bold px-2 py-1 rounded disabled:opacity-50"
                        >
                            MAX
                        </button>
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
                                +{Math.floor(lockedBet * multiplier)} XP
                            </span>
                        )}
                    </button>
                ) : gameState === "BETTING" ? (
                    <button
                        disabled
                        className="w-full py-6 bg-gray-800 text-gray-400 rounded-2xl font-bold font-mono text-xl cursor-wait"
                    >
                        Departing...
                    </button>
                ) : (
                    <button
                        onClick={startBettingPhase}
                        disabled={!betAmount || Number(betAmount) <= 0}
                        className="w-full py-6 bg-[#006B3F] hover:bg-[#005a35] disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-2xl font-black text-xl uppercase tracking-wider shadow-lg shadow-green-900/20 transition-all transform active:scale-95"
                    >
                        START RIDE
                    </button>
                )}

                <div className="text-center">
                    <p className="text-[10px] text-white/20">
                        Input wager manually to play. Bus can crash at 1.00x.
                    </p>
                </div>
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
