"use client";

import { useEffect, useState, useCallback, useRef } from "react";

// Web Audio API context singleton (created lazily on first user interaction)
let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
        audioCtx.resume();
    }
    return audioCtx;
};

// Play a tone using basic oscillators
const playTone = (frequency: number, type: OscillatorType, duration: number, volumeLevel: number = 0.1) => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Envelope (Attack, Decay)
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(volumeLevel, ctx.currentTime + 0.05); // Attack
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration); // Decay

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
};

export function useSoundEffects() {
    const [soundEnabled, setSoundEnabled] = useState(false);
    // Use a ref to immediately reflect mute state in closures without needing to sync dependencies
    const soundEnabledRef = useRef(soundEnabled);

    // Load saved preference on mount and listen for changes
    useEffect(() => {
        if (typeof window === "undefined") return;

        const syncState = () => {
            const saved = localStorage.getItem("ghanry_sound");
            // Default to true if not set, else parse string
            const enabled = saved === null ? true : saved === "true";
            setSoundEnabled(enabled);
            soundEnabledRef.current = enabled;
        };

        syncState();

        window.addEventListener("ghanry_sound_update", syncState);
        return () => window.removeEventListener("ghanry_sound_update", syncState);
    }, []);

    const toggleSound = useCallback(() => {
        setSoundEnabled((prev) => {
            const newVal = !prev;
            soundEnabledRef.current = newVal;
            localStorage.setItem("ghanry_sound", newVal ? "true" : "false");
            window.dispatchEvent(new Event("ghanry_sound_update"));
            return newVal;
        });
    }, []);

    // ── Sounds ──
    const playCorrect = useCallback(() => {
        // If sound is NOT enabled, abort
        if (!soundEnabledRef.current) return;
        // Bright, pleasing chime (major 3rd interval)
        playTone(600, "sine", 0.1, 0.1);
        setTimeout(() => playTone(800, "sine", 0.3, 0.15), 100);
    }, []);

    const playWrong = useCallback(() => {
        if (!soundEnabledRef.current) return;
        // Low, thudding buzz
        playTone(150, "triangle", 0.15, 0.1);
        setTimeout(() => playTone(120, "sawtooth", 0.3, 0.15), 150);
    }, []);

    const playFanfare = useCallback(() => {
        if (!soundEnabledRef.current) return;
        // Joyful arpeggio for quiz completion!
        const ctx = getAudioContext();
        if (!ctx) return;
        
        const notes = [
            { freq: 440, delay: 0 },    // A4
            { freq: 554.37, delay: 100 }, // C#5
            { freq: 659.25, delay: 200 }, // E5
            { freq: 880, delay: 300 },    // A5 (held longer)
        ];

        notes.forEach(({ freq, delay }) => {
            setTimeout(() => {
                playTone(freq, "sine", delay === 300 ? 0.6 : 0.2, 0.15);
            }, delay);
        });
    }, []);

    return { 
        soundEnabled, 
        toggleSound, 
        playCorrect, 
        playWrong, 
        playFanfare 
    };
}
