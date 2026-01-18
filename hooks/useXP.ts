import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

/**
 * useXP hook tracks the global XP of the user.
 * It stores the total XP in localStorage.
 */
export interface Buff {
    type: 'shield' | 'multiplier';
    value: number;
    expiresAt?: number;
}

export function useXP() {
    const [xp, setXp] = useState<number>(0);
    const [activeBuffs, setActiveBuffs] = useState<Buff[]>([]);
    const XP_PER_LEVEL = 500;

    // Load XP and Buffs on mount
    useEffect(() => {
        const loadXP = () => {
            if (typeof window !== 'undefined') {
                const storedXP = Number(localStorage.getItem('ghanry_xp') || '0');
                setXp(storedXP);

                const storedBuffs = localStorage.getItem('ghanry_buffs');
                if (storedBuffs) {
                    const parsed = JSON.parse(storedBuffs);
                    const now = Date.now();
                    const valid = parsed.filter((b: Buff) => !b.expiresAt || b.expiresAt > now);
                    setActiveBuffs(valid);
                }
            }
        };

        loadXP();
        window.addEventListener('ghanry_xp_update', loadXP);
        return () => window.removeEventListener('ghanry_xp_update', loadXP);
    }, []);

    // ... (keep remote sync logic separate or integrate if needed, but for UI sync local is fast)

    // Helper to sync with Firestore
    const syncXPToFirestore = async (newXP: number) => {
        if (typeof window !== 'undefined') {
            const passportId = localStorage.getItem('ghanry_passport_id');
            if (passportId) {
                try {
                    const { doc, updateDoc } = await import("firebase/firestore"); // Ensure import
                    const docRef = doc(db, "users", passportId);
                    await updateDoc(docRef, { xp: newXP });
                } catch (error) {
                    console.error("Firestore sync error:", error);
                }
            }
        }
    };

    const level = Math.floor(xp / XP_PER_LEVEL) + 1;
    const progressInLevel = (xp % XP_PER_LEVEL);
    const levelProgressPercent = (progressInLevel / XP_PER_LEVEL) * 100;
    const xpToNextLevel = XP_PER_LEVEL - progressInLevel;

    // Persist Buffs
    const saveBuffs = (buffs: Buff[]) => {
        setActiveBuffs(buffs);
        localStorage.setItem('ghanry_buffs', JSON.stringify(buffs));
    };

    // Add XP and persist
    const addXP = (amount: number) => {
        // Apply multiplier if active
        const multiplier = activeBuffs.find((b: Buff) => b.type === 'multiplier')?.value || 1;
        const totalAmount = amount * multiplier;

        const newXP = xp + totalAmount;
        setXp(newXP);
        localStorage.setItem('ghanry_xp', newXP.toString());
        syncXPToFirestore(newXP);
        window.dispatchEvent(new Event('ghanry_xp_update'));
        return totalAmount;
    };

    // Spend XP
    const spendXP = (amount: number) => {
        if (xp < amount) return false;
        const newXP = xp - amount;
        setXp(newXP);
        localStorage.setItem('ghanry_xp', newXP.toString());
        syncXPToFirestore(newXP);
        return true;
    };

    const addBuff = (buff: Buff) => {
        const newBuffs = [...activeBuffs, buff];
        saveBuffs(newBuffs);
    };

    const consumeShield = () => {
        const shieldIdx = activeBuffs.findIndex((b: Buff) => b.type === 'shield');
        if (shieldIdx > -1) {
            const newBuffs = [...activeBuffs];
            newBuffs.splice(shieldIdx, 1);
            saveBuffs(newBuffs);
            return true;
        }
        return false;
    };

    return {
        xp,
        addXP,
        spendXP,
        level,
        levelProgressPercent,
        xpToNextLevel,
        XP_PER_LEVEL,
        activeBuffs,
        addBuff,
        consumeShield
    };
}
