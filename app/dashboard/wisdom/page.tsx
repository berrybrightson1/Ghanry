"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Coins, Trophy, Brain, Skull } from "lucide-react";
import Link from "next/link";
import { useXP } from "@/hooks/useXP";
import { toast } from "sonner";
import { getRandomChallenge, Question } from "@/lib/quiz";

// Configure Stakes
const STAKES = [
    { xp: 50, reward: 250, multiplier: 5, label: "Novice", questions: 3, description: "3 Questions. Low Risk." },
    { xp: 200, reward: 1000, multiplier: 5, label: "Warrior", questions: 5, description: "5 Questions. High Risk." },
    { xp: 500, reward: 5000, multiplier: 10, label: "Legend", questions: 7, description: "7 Questions. Sudden Death." }
];

export default function WisdomPotPage() {
    const { xp, spendXP, addXP } = useXP();
    const [gameState, setGameState] = useState<"lobby" | "playing" | "victory" | "gameover">("lobby");
    const [selectedStake, setSelectedStake] = useState<typeof STAKES[0] | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    useEffect(() => {
        if (gameState === "playing" && questions[currentIndex]) {
            // Shuffle options when question changes
            const q = questions[currentIndex];
            setShuffledOptions([...q.options].sort(() => Math.random() - 0.5));
        }
    }, [gameState, currentIndex, questions]);

    const startGame = (stakeIndex: number) => {
        const stake = STAKES[stakeIndex];

        if (xp < stake.xp) {
            toast.error("Not enough XP!", { description: `You need ${stake.xp} XP to enter.` });
            return;
        }

        if (spendXP(stake.xp)) {
            setSelectedStake(stake);
            const gameQuestions = getRandomChallenge(stake.questions);
            setQuestions(gameQuestions);
            setCurrentIndex(0);
            setGameState("playing");
            toast.info(`Entered the Arena! -${stake.xp} XP`);
        }
    };

    const handleAnswer = (option: string) => {
        const currentQ = questions[currentIndex];

        if (option === currentQ.answer) {
            // Correct
            if (currentIndex + 1 >= questions.length) {
                // Victory!
                setGameState("victory");
                const reward = selectedStake!.reward;
                addXP(reward);
                toast.success(`JACKPOT! +${reward} XP`, {
                    description: "You survived the Gauntlet!",
                    duration: 5000
                });
            } else {
                // Next Question
                setCurrentIndex(prev => prev + 1);
                toast.success("Correct! Keep going...", { duration: 1000 });
            }
        } else {
            // Wrong - Sudden Death
            setGameState("gameover");
            toast.error("WRONG ANSWER!", {
                description: `The correct answer was: ${currentQ.answer}`,
                duration: 4000
            });
        }
    };

    const resetGame = () => {
        setGameState("lobby");
        setSelectedStake(null);
        setQuestions([]);
        setCurrentIndex(0);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pb-24 font-jakarta">
            {/* Header */}
            <div className="bg-black/40 backdrop-blur-md border-b border-white/5 p-6 sticky top-0 z-30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/60">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-epilogue font-extrabold text-[#FCD116] flex items-center gap-2">
                            The Gauntlet
                        </h1>
                        <p className="text-white/40 font-jakarta text-[10px] uppercase tracking-widest">High Stakes Knowledge</p>
                    </div>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#FCD116]" />
                    <span className="font-epilogue font-black text-[#FCD116]">{xp} XP</span>
                </div>
            </div>

            <div className="max-w-md mx-auto px-4 py-8">

                {/* LOBBY: SELECT STAKE */}
                {gameState === "lobby" && (
                    <div className="space-y-6">
                        <div className="text-center py-6">
                            <Skull className="w-16 h-16 text-red-500 mx-auto mb-4 opacity-80" />
                            <h2 className="text-3xl font-epilogue font-black text-white mb-2">Choose Your Risk</h2>
                            <p className="text-gray-400 text-sm">One wrong answer and you lose it all.<br />Survive the sequence to multiply your XP.</p>
                        </div>

                        <div className="space-y-4">
                            {STAKES.map((stake, index) => (
                                <button
                                    key={index}
                                    onClick={() => startGame(index)}
                                    className="w-full relative group overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FCD116] rounded-2xl p-6 transition-all text-left"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${index === 0 ? 'bg-blue-500/20 text-blue-400' :
                                                index === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-red-500/20 text-red-400'
                                                }`}>
                                                {stake.label}
                                            </span>
                                            <span className="text-xs text-gray-500 font-mono">{stake.questions} Qs</span>
                                        </div>
                                        <span className="font-epilogue font-bold text-[#FCD116] text-xl">x{stake.multiplier}</span>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-white font-bold text-lg mb-0.5">Bet {stake.xp} XP</p>
                                            <p className="text-gray-500 text-xs">Win {stake.reward} XP</p>
                                        </div>
                                        <Brain className={`w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all ${index === 2 ? 'text-red-500' : 'text-white'
                                            }`} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* PLAYING */}
                {gameState === "playing" && questions[currentIndex] && (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center px-2">
                            <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                                <span>Q{currentIndex + 1}/{questions.length}</span>
                                <span className="text-red-500 font-bold">SUDDEN DEATH</span>
                            </div>
                            <div className="text-[#FCD116] font-bold text-sm">
                                Prize: {selectedStake?.reward} XP
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                                <div
                                    className="h-full bg-[#FCD116] transition-all duration-500 ease-out"
                                    style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                                />
                            </div>

                            <h3 className="text-xl font-epilogue font-bold text-white mb-8 leading-relaxed mt-4">
                                {questions[currentIndex].question}
                            </h3>

                            <div className="space-y-3">
                                {shuffledOptions.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(opt)}
                                        className="w-full p-4 text-left bg-black/40 hover:bg-[#FCD116] hover:text-black rounded-xl border border-white/10 hover:border-[#FCD116] transition-all font-jakarta text-sm font-medium active:scale-[0.98]"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* VICTORY */}
                {gameState === "victory" && (
                    <div className="text-center py-12 space-y-8 animate-in zoom-in duration-300">
                        <Trophy className="w-24 h-24 text-[#FCD116] mx-auto drop-shadow-[0_0_30px_rgba(252,209,22,0.6)]" />
                        <div>
                            <h2 className="text-4xl font-epilogue font-black text-white mb-2">VICTORY!</h2>
                            <p className="text-gray-400">You conquered the Gauntlet.</p>
                        </div>
                        <div className="bg-[#FCD116]/20 border border-[#FCD116] p-6 rounded-2xl max-w-xs mx-auto">
                            <p className="text-[#FCD116] text-sm font-bold uppercase tracking-wider mb-1">Total Reward</p>
                            <p className="text-4xl font-epilogue font-black text-white">+{selectedStake?.reward} XP</p>
                        </div>
                        <button
                            onClick={resetGame}
                            className="w-full py-4 bg-[#FCD116] text-black font-bold rounded-xl hover:scale-105 transition-transform"
                        >
                            Play Again
                        </button>
                    </div>
                )}

                {/* GAME OVER */}
                {gameState === "gameover" && (
                    <div className="text-center py-12 space-y-8 animate-in zoom-in duration-300">
                        <Skull className="w-24 h-24 text-red-500 mx-auto drop-shadow-[0_0_30px_rgba(239,68,68,0.4)]" />
                        <div>
                            <h2 className="text-4xl font-epilogue font-black text-red-500 mb-2">DEFEAT</h2>
                            <p className="text-gray-400">The ancestors are disappointed.</p>
                        </div>
                        <div className="p-6 rounded-2xl max-w-xs mx-auto bg-red-900/20 border border-red-900/50">
                            <p className="text-red-400 text-sm font-bold uppercase tracking-wider mb-1">Loss</p>
                            <p className="text-2xl font-epilogue font-black text-white">-{selectedStake?.xp} XP</p>
                        </div>
                        <button
                            onClick={resetGame}
                            className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
}
