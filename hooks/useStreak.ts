import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

/**
 * useStreak hook tracks consecutive days of quiz play.
 * It stores the last play date and current streak count in localStorage.
 */
export function useStreak() {
    const [streak, setStreak] = useState<number>(0);

    // Load streak on mount & Check Compensation
    useEffect(() => {
        const initializeStreak = async () => {
            const passportId = localStorage.getItem('ghanry_passport_id');
            const compensated = localStorage.getItem('ghanry_compensation_v1');

            // Compensation Logic: Restore 2-day streak for users > 2 days old
            if (passportId && !compensated) {
                try {
                    const docRef = doc(db, "users", passportId);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        const joinedAt = data.joinedAt ? new Date(data.joinedAt).getTime() : 0;
                        const twoDaysAgo = Date.now() - (48 * 60 * 60 * 1000);

                        if (joinedAt > 0 && joinedAt < twoDaysAgo) {
                            // User is older than 2 days. Restore streak to 2.
                            localStorage.setItem('ghanry_streak', '2');
                            // Set last play to yesterday so logic below thinks they played yesterday
                            const yesterday = new Date();
                            yesterday.setDate(yesterday.getDate() - 1);
                            localStorage.setItem('ghanry_lastPlayDate', yesterday.toDateString());
                            console.log("Streak compensation applied: Restored to 2.");
                        }
                    }
                    localStorage.setItem('ghanry_compensation_v1', 'true');
                } catch (e) {
                    console.error("Compensation check failed", e);
                }
            }

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
