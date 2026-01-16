import { useEffect, useState } from 'react';

/**
 * useStreak hook tracks consecutive days of quiz play.
 * It stores the last play date and current streak count in localStorage.
 */
export function useStreak() {
    const [streak, setStreak] = useState<number>(0);

    // Load streak on mount
    useEffect(() => {
        const lastPlay = localStorage.getItem('ghanry_lastPlayDate');
        const storedStreak = Number(localStorage.getItem('ghanry_streak') || '0');
        const today = new Date().toDateString();
        if (lastPlay === today) {
            // Already played today, keep stored streak
            setStreak(storedStreak);
        } else if (lastPlay) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (lastPlay === yesterday.toDateString()) {
                // Consecutive day, increment
                setStreak(storedStreak + 1);
            } else {
                // Missed a day, reset
                setStreak(1);
            }
        } else {
            // First play ever
            setStreak(1);
        }
    }, []);

    // Call this after a quiz finishes to update stored values
    const updateStreak = () => {
        const today = new Date().toDateString();
        localStorage.setItem('ghanry_lastPlayDate', today);
        localStorage.setItem('ghanry_streak', streak.toString());
    };

    return { streak, updateStreak };
}
