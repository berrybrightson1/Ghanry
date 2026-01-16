import { useEffect, useState } from 'react';

/**
 * useXP hook tracks the global XP of the user.
 * It stores the total XP in localStorage.
 */
/**
 * useXP hook tracks the global XP of the user and calculates Level.
 * Formula: Level = floor(XP / 500) + 1
 */
export function useXP() {
    const [xp, setXp] = useState<number>(0);
    const XP_PER_LEVEL = 500;

    // Load XP on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedXP = Number(localStorage.getItem('ghanry_xp') || '0');
            setXp(storedXP);
        }
    }, []);

    const level = Math.floor(xp / XP_PER_LEVEL) + 1;
    const progressInLevel = (xp % XP_PER_LEVEL);
    const levelProgressPercent = (progressInLevel / XP_PER_LEVEL) * 100;
    const xpToNextLevel = XP_PER_LEVEL - progressInLevel;

    // Add XP and persist
    const addXP = (amount: number) => {
        const newXP = xp + amount;
        setXp(newXP);
        localStorage.setItem('ghanry_xp', newXP.toString());
    };

    return {
        xp,
        addXP,
        level,
        levelProgressPercent,
        xpToNextLevel,
        XP_PER_LEVEL
    };
}
