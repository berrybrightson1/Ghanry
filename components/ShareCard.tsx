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
                className="fixed top-[200vh] left-0 w-[600px] h-[800px] pointer-events-none z-[-1]"
            >
                {/* Card Container */}
                <div className="w-full h-full bg-gradient-to-br from-green-900 via-green-800 to-green-950 relative overflow-hidden flex flex-col items-center justify-center p-12">
                    {/* Adinkra Overlay (Removed for capture stability) */}

                    {/* Content */}
                    <div className="relative z-10 text-center space-y-8 w-full max-w-lg">
                        {/* Flag Emoji */}
                        <div className="text-9xl mb-4">🇬🇭</div>

                        {/* Rank Badge */}
                        <div className="bg-white/10 border-2 border-white/20 rounded-[32px] px-8 py-6">
                            <p className="text-white/80 text-2xl font-jakarta mb-2">I am a Ghanry</p>
                            <h1 className="text-7xl font-epilogue font-extrabold text-[#FCD116] drop-shadow-md">
                                {rank}
                            </h1>
                            <p className="text-white/70 text-xl font-jakarta mt-2 tracking-widest uppercase font-bold">Level {level}</p>
                        </div>

                        {/* Score */}
                        <div className="bg-white/15 border-2 border-white/30 rounded-[32px] px-12 py-10">
                            <p className="text-white/80 text-2xl font-jakarta mb-3 uppercase tracking-tighter">Quiz Score</p>
                            <p className="text-white font-epilogue font-black text-8xl">
                                {score}/{totalQuestions}
                            </p>
                            <p className="text-white/80 text-xl font-jakarta mt-3">Correct Answers</p>
                        </div>

                        {/* Challenge Message */}
                        <div className="px-4">
                            <p className="text-white font-jakarta text-2xl leading-relaxed italic opacity-90">
                                &ldquo;I know more about Ghana than you. Prove me wrong.&rdquo;
                            </p>
                        </div>

                        {/* Footer */}
                        <div className="pt-8">
                            <div className="inline-block bg-[#FCD116] px-10 py-5 rounded-full shadow-2xl">
                                <p className="text-[#006B3F] font-epilogue font-black text-2xl tracking-tight">
                                    ghanry.vercel.app
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
