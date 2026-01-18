import { useEffect, useState } from 'react';

/**
 * useStreak hook tracks consecutive days of quiz play.
 * It stores the last play date and current streak count in localStorage.
 */
export function useStreak() {
    const [streak, setStreak] = useState<number>(0);

    // Load streak on mount
    useEffect(() => {
        const initializeStreak = async () => {
            // Standard Streak Logic
            const lastPlay = localStorage.getItem('ghanry_lastPlayDate');
            const storedStreak = Number(localStorage.getItem('ghanry_streak') || '0');
            const today = new Date().toDateString();

            if (lastPlay === today) {
                // Played today already
                setStreak(storedStreak);
            } else if (lastPlay) {
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);

                if (lastPlay === yesterday.toDateString()) {
                    // Played yesterday, so today is the next consecutive day (Streak + 1)
                    // We display the "current attempt" streak.
                    setStreak(storedStreak + 1);
                } else {
                    // Missed a day, reset to 1 (Day 1)
                    setStreak(1);
                }
            } else {
                // First time
                setStreak(1);
            }
        };

        initializeStreak();
    }, []);

    // Call this after a quiz finishes to update stored values
    const updateStreak = () => {
        const today = new Date().toDateString();
        localStorage.setItem('ghanry_lastPlayDate', today);
        localStorage.setItem('ghanry_streak', streak.toString());
    };

    return { streak, updateStreak };
}
