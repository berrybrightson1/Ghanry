/**
 * Gamification System for Ghanry
 * Standardized leveling and XP calculation
 */

export interface LevelInfo {
    currentLevel: number;
    rank: string;
    progressPercent: number;
    xpToNextLevel: number;
    xpInCurrentLevel: number;
    totalXP: number;
}

export interface QuizReward {
    baseXP: number;
    correctAnswerXP: number;
    perfectScoreBonus: number;
    streakBonus: number;
    multiplier: number;
    totalXP: number;
}

/**
 * Calculate XP needed for a specific level
 * Progression: Each level takes more XP than the last
 */
function getXPForLevel(level: number): number {
    if (level <= 1) return 0;
    // Level 2: 200
    // Level 3: 500
    // Level 4: 900
    // formula: 100 * (L-1) * (1 + 0.1 * (L-1)) roughly, or just simple summation
    let total = 0;
    for (let i = 1; i < level; i++) {
        total += 100 + (i * 50);
    }
    return total;
}

/**
 * Get rank name based on level
 */
function getRankForLevel(level: number): string {
    if (level < 5) return "Tourist";
    if (level < 15) return "Expat";
    if (level < 30) return "Citizen";
    if (level < 45) return "Patriot";
    return "Legend";
}

/**
 * Calculate current level and progress from total XP
 */
export function calculateProgress(totalXP: number): LevelInfo {
    let currentLevel = 1;

    // Find the highest level where getXPForLevel(level) <= totalXP
    while (getXPForLevel(currentLevel + 1) <= totalXP && currentLevel < 100) {
        currentLevel++;
    }

    const rank = getRankForLevel(currentLevel);
    const xpForCurrent = getXPForLevel(currentLevel);
    const xpForNext = getXPForLevel(currentLevel + 1);

    const xpInCurrentLevel = totalXP - xpForCurrent;
    const xpNeededForLevel = xpForNext - xpForCurrent;
    const progressPercent = (xpInCurrentLevel / xpNeededForLevel) * 100;

    return {
        currentLevel,
        rank,
        progressPercent: Math.min(100, progressPercent),
        xpToNextLevel: xpForNext - totalXP,
        xpInCurrentLevel,
        totalXP
    };
}

/**
 * Calculate XP reward for completing a quiz
 */
export function calculateQuizReward(
    correctAnswers: number,
    totalQuestions: number,
    currentStreak: number,
    currentLevel: number,
    isTourist: boolean = false
): QuizReward {
    // Base XP: 50
    const baseXP = 50;

    // Correct answer XP: 10 per correct answer
    const correctAnswerXP = correctAnswers * 10;

    // Perfect score bonus: 50
    const perfectScoreBonus = (correctAnswers === totalQuestions && totalQuestions > 0) ? 50 : 0;

    // Streak bonus: 2 XP per streak day (max 50)
    const streakBonus = Math.min(currentStreak * 2, 50);

    // Multiplier for Tourists: 1.5x
    const multiplier = isTourist ? 1.5 : 1.0;

    const subtotal = baseXP + correctAnswerXP + perfectScoreBonus + streakBonus;
    const totalXP = Math.floor(subtotal * multiplier);

    return {
        baseXP,
        correctAnswerXP,
        perfectScoreBonus,
        streakBonus,
        multiplier,
        totalXP
    };
}

/**
 * Get rank color for UI display
 */
export function getRankColor(rank: string): string {
    switch (rank) {
        case "Tourist": return "text-blue-500";
        case "Expat": return "text-purple-500";
        case "Citizen": return "text-[#006B3F]";
        case "Patriot": return "text-red-500";
        case "Legend": return "text-ghana-gold";
        default: return "text-gray-500";
    }
}
