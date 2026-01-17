"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useSpeech(text: string) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    const stop = useCallback(() => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
            setIsPaused(false);
        }
    }, []);

    const play = useCallback(() => {
        if (typeof window === "undefined") return;

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utteranceRef.current = utterance;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
            setIsPaused(false);
        };
        utterance.onerror = () => {
            setIsSpeaking(false);
            setIsPaused(false);
        };

        window.speechSynthesis.speak(utterance);
    }, [text]);

    const pause = useCallback(() => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    }, []);

    const resume = useCallback(() => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.resume();
            setIsPaused(false);
        }
    }, []);

    const toggle = useCallback(() => {
        if (isSpeaking) {
            if (isPaused) {
                resume();
            } else {
                pause();
            }
        } else {
            play();
        }
    }, [isSpeaking, isPaused, play, pause, resume]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (typeof window !== "undefined") {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return {
        isSpeaking,
        isPaused,
        play,
        pause,
        resume,
        stop,
        toggle
    };
}
