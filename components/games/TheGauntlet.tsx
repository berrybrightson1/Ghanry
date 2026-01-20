"use client";

import { useState, useEffect } from "react";
import { Trophy, Brain, Skull } from "lucide-react";
import { useXP } from "@/hooks/useXP";
import { toast } from "sonner";
import { getRandomChallenge, Question } from "@/lib/quiz";

// Configure Stakes
const STAKES = [
    { xp: 50, reward: 250, multiplier: 5, label: "Novice", questions: 3, description: "3 Questions. Low Risk." },
    { xp: 200, reward: 1000, multiplier: 5, label: "Warrior", questions: 5, description: "5 Questions. High Risk." },
    { xp: 500, reward: 5000, multiplier: 10, label: "Legend", questions: 7, description: "7 Questions. Sudden Death." }
];

export default function TheGauntlet() {
    const { xp, spendXP, addXP } = useXP();
    const [gameState, setGameState] = useState<"lobby" | "playing" | "victory" | "gameover">("lobby");
    const [selectedStake, setSelectedStake] = useState<typeof STAKES[0] | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    // New State for persistence & rules
    const [seenQuestionIds, setSeenQuestionIds] = useState<number[]>([]);
    const [lastPlayed, setLastPlayed] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    // Load State on Mount
    useEffect(() => {
        const loadState = async () => {
            // 1. Load from LocalStorage
            const storedSeen = JSON.parse(localStorage.getItem("ghanry_seen_questions") || "[]");
            const storedLastPlayed = Number(localStorage.getItem("ghanry_gauntlet_last_played") || "0");

            setSeenQuestionIds(storedSeen);
            setLastPlayed(storedLastPlayed);

            // 2. If logged in, sync with Firestore (Strategy: Merge max)
            const passportId = localStorage.getItem("ghanry_passport_id");
            if (passportId && passportId !== "guest") {
                // We'll trust local for speed, but could fetch to sync up
                // Ideally this happens in a context, but here we can do a lazy fetch
                // skipping complicated merge logic for now to keep it snappy, 
                // assuming user mainly plays on one device or userSync handles it eventually.
            }
            setIsLoading(false);
        };
        loadState();
    }, []);



    // Effect 1: Shuffle Options when question changes
    useEffect(() => {
        if (gameState === "playing" && questions[currentIndex]) {
            const q = questions[currentIndex];
            setShuffledOptions([...q.options].sort(() => Math.random() - 0.5));
        }
    }, [gameState, currentIndex, questions]);

    // Effect 2: Mark Question as Seen
    useEffect(() => {
        if (gameState === "playing" && questions[currentIndex]) {
            const q = questions[currentIndex];
            // Mark as seen immediately when problem appears
            if (!seenQuestionIds.includes(q.id)) {
                const newSeen = [...seenQuestionIds, q.id];
                setSeenQuestionIds(newSeen);
                localStorage.setItem("ghanry_seen_questions", JSON.stringify(newSeen));
                // Sync logic handled by saveState calls elsewhere or eventually here
                // We keep it simple to fix the loop
            }
        }
    }, [gameState, currentIndex, questions, seenQuestionIds]);

    const getCooldownRemaining = () => {
        const now = Date.now();
        const diff = now - lastPlayed;
        const cooldown = 24 * 60 * 60 * 1000; // 24 hours
        if (diff < cooldown) {
            const remaining = cooldown - diff;
            const hours = Math.floor(remaining / (1000 * 60 * 60));
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            return `${hours}h ${minutes}m`;
        }
        return null;
    };

    const startGame = (stakeIndex: number) => {
        const stake = STAKES[stakeIndex];

        // 1. Check Cooldown
        const remaining = getCooldownRemaining();
        if (remaining) {
            toast.error("The Arena is closed.", {
                description: `You must rest, warrior. Return in ${remaining}.`,
                duration: 4000
            });
            return;
        }

        // 2. Check XP
        if (xp < stake.xp) {
            toast.error("Not enough XP!", { description: `You need ${stake.xp} XP to enter.` });
            return;
        }

        // 3. Get Questions (excluding seen)
        const gameQuestions = getRandomChallenge(stake.questions, seenQuestionIds);

        // 4. Check if we have enough questions
        if (gameQuestions.length < stake.questions) {
            toast.error("You have conquered The Gauntlet!", {
                description: "No new challenges available right now. The gods are crafting more...",
                duration: 5000
            });
            return;
        }

        // 5. Start Game
        if (spendXP(stake.xp)) {
            setSelectedStake(stake);
            setQuestions(gameQuestions);
            setCurrentIndex(0);
            setGameState("playing");

            // Set Last Played NOW to prevent refresh-scumming the cooldown? 
            // Better to set it here so they accept the contract of "One Attempt".
            // If they refresh, they lose the attempt + the XP (since XP is spent).
            const now = Date.now();
            setLastPlayed(now);
            localStorage.setItem("ghanry_gauntlet_last_played", now.toString());

            toast.info(`Entered the Arena! -${stake.xp} XP`);
        }
    };

    const handleAnswer = (option: string) => {
        const currentQ = questions[currentIndex];

        if (option === currentQ.answer) {
            if (currentIndex + 1 >= questions.length) {
                // Victory
                setGameState("victory");
                const reward = selectedStake!.reward;
                addXP(reward);
                toast.success(`JACKPOT! +${reward} XP`, {
                    description: "You survived the Gauntlet!",
                    duration: 5000
                });
            } else {
                // Next
                setCurrentIndex(prev => prev + 1);
                toast.success("Correct! Keep going...", { duration: 1000 });
            }
        } else {
            // Defeat
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

    if (isLoading) return <div className="p-10 text-center text-white/50">Loading Arena...</div>;

    const remainingTime = getCooldownRemaining();

    return (
        <div className="w-full max-w-md mx-auto py-8">
            {/* LOBBY */}
            {gameState === "lobby" && (
                <div className="space-y-6">
                    <div className="text-center py-6">
                        <Skull className={`w-16 h-16 mx-auto mb-4 opacity-80 ${remainingTime ? "text-gray-500" : "text-red-500"}`} />
                        <h2 className="text-3xl font-epilogue font-black text-white mb-2">
                            {remainingTime ? "Arena Closed" : "Choose Your Risk"}
                        </h2>
                        {remainingTime ? (
                            <p className="text-yellow-500 font-mono text-lg">Next Attempt: {remainingTime}</p>
                        ) : (
                            <p className="text-gray-400 text-sm">One wrong answer and you lose it all.<br />Survive the sequence to multiply your XP.</p>
                        )}
                    </div>

                    <div className="space-y-4">
                        {STAKES.map((stake, index) => (
                            <button
                                key={index}
                                onClick={() => startGame(index)}
                                disabled={!!remainingTime}
                                className={`w-full relative group overflow-hidden border rounded-2xl p-6 transition-all text-left 
                                    ${remainingTime
                                        ? "bg-white/5 border-white/5 opacity-50 cursor-not-allowed"
                                        : "bg-white/5 hover:bg-white/10 border-white/10 hover:border-[#FCD116]"
                                    }`}
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
                        Return to Lobby
                    </button>
                    {/* Cooldown reminder */}
                    <p className="text-xs text-gray-500 mt-4">You can challenge the Gauntlet again in 24 hours.</p>
                </div>
            )}
        </div>
    );
}
