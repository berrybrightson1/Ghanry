"use client";

import { forwardRef } from "react";

interface ShareCardProps {
    score: number;
    totalQuestions: number;
    rank: string;
    level: number;
}

const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
    ({ score, totalQuestions, rank, level }, ref) => {
        return (
            <div
                ref={ref}
                className="fixed top-0 left-[-9999px] w-[600px] h-[800px] pointer-events-none z-[-1] bg-[#1a5236]"
            >
                {/* Card Container */}
                <div className="w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-950 relative overflow-hidden flex flex-col items-center justify-center p-12">
                    {/* Background Adinkra Symbols */}
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 600 800">
                            {/* Gye Nyame Symbol (God is Supreme) */}
                            <text x="100" y="200" fontSize="120" fill="white" fontFamily="serif">☥</text>
                            <text x="400" y="600" fontSize="120" fill="white" fontFamily="serif">☥</text>
                        </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-8">
                        {/* Flag Emoji */}
                        <div className="text-8xl mb-4">🇬🇭</div>

                        {/* Rank Badge */}
                        <div className="inline-block bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl px-8 py-4">
                            <p className="text-white/70 text-2xl font-jakarta mb-2">I am a Ghanry</p>
                            <h1 className={`text-6xl font-epilogue font-extrabold text-ghana-gold drop-shadow-lg`}>
                                {rank}
                            </h1>
                            <p className="text-white/60 text-xl font-jakarta mt-2">Level {level}</p>
                        </div>

                        {/* Score */}
                        <div className="bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-2xl px-12 py-8">
                            <p className="text-white/80 text-2xl font-jakarta mb-3">Quiz Score</p>
                            <p className="text-white font-epilogue font-black text-7xl">
                                {score}/{totalQuestions}
                            </p>
                            <p className="text-white/80 text-2xl font-jakarta mt-3">Correct</p>
                        </div>

                        {/* Challenge Message */}
                        <div className="max-w-md mx-auto">
                            <p className="text-white font-jakarta text-2xl leading-relaxed italic">
                                &ldquo;I know more about Ghana than you. Prove me wrong.&rdquo;
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="pt-8">
                            <div className="inline-block bg-ghana-gold px-8 py-4 rounded-full shadow-2xl">
                                <p className="text-green-900 font-epilogue font-black text-2xl">
                                    Play at ghanry.vercel.app
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

ShareCard.displayName = "ShareCard";

export default ShareCard;
