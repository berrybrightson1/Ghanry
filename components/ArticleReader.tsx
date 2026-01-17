"use client";

import { useSpeech } from "@/hooks/useSpeech";
import { Volume2, Pause, Square } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ArticleReaderProps {
    title: string;
    content: string;
}

export default function ArticleReader({ title, content }: ArticleReaderProps) {
    // Combine title and content for a natural reading flow
    const fullText = `${title}. ${content}`;
    const { isSpeaking, isPaused, toggle, stop } = useSpeech(fullText);

    return (
        <div className="flex items-center gap-2">
            <AnimatePresence>
                {isSpeaking && !isPaused && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="flex gap-1 items-center px-2 py-1 bg-green-50 rounded-full border border-green-100"
                    >
                        <span className="text-[10px] font-bold text-[#006B3F] uppercase tracking-tighter mr-1">Reading</span>
                        <motion.div
                            animate={{ height: [4, 10, 4] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                            className="w-0.5 bg-[#006B3F] rounded-full"
                        />
                        <motion.div
                            animate={{ height: [4, 14, 4] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.1 }}
                            className="w-0.5 bg-[#006B3F] rounded-full"
                        />
                        <motion.div
                            animate={{ height: [4, 8, 4] }}
                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                            className="w-0.5 bg-[#006B3F] rounded-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
                <button
                    onClick={toggle}
                    className={`p-2 rounded-full transition-all ${isSpeaking && !isPaused
                            ? "bg-[#006B3F] text-white shadow-md scale-105"
                            : "text-gray-400 hover:text-[#006B3F] hover:bg-white"
                        }`}
                    title={isSpeaking ? (isPaused ? "Resume" : "Pause") : "Read Aloud"}
                >
                    {isSpeaking && !isPaused ? (
                        <Pause className="w-4 h-4" />
                    ) : (
                        <Volume2 className="w-4 h-4" />
                    )}
                </button>

                {isSpeaking && (
                    <button
                        onClick={stop}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                        title="Stop"
                    >
                        <Square className="w-3 h-3 fill-current" />
                    </button>
                )}
            </div>
        </div>
    );
}
