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
    totalXP: number;
}

// Level thresholds and ranks
const LEVEL_THRESHOLDS = [
    { level: 1, minXP: 0, maxXP: 500, rank: "Tourist" },
    { level: 2, minXP: 501, maxXP: 1200, rank: "Expat" },
    { level: 3, minXP: 1201, maxXP: 2000, rank: "Citizen" },
    { level: 4, minXP: 2001, maxXP: 3000, rank: "Citizen" },
    { level: 5, minXP: 3001, maxXP: 4200, rank: "Citizen" },
    { level: 6, minXP: 4201, maxXP: 5600, rank: "Citizen" },
    { level: 7, minXP: 5601, maxXP: 7200, rank: "Citizen" },
    { level: 8, minXP: 7201, maxXP: 9000, rank: "Patriot" },
    { level: 9, minXP: 9001, maxXP: 11000, rank: "Patriot" },
    { level: 10, minXP: 11001, maxXP: 999999, rank: "Legend" },
];

/**
 * Calculate current level and progress from total XP
 */
export function calculateProgress(totalXP: number): LevelInfo {
    // Find current level
    let currentLevel = 1;
    let rank = "Tourist";
    let xpToNextLevel = 500;
    let xpInCurrentLevel = totalXP;

    for (const threshold of LEVEL_THRESHOLDS) {
        if (totalXP >= threshold.minXP && totalXP <= threshold.maxXP) {
            currentLevel = threshold.level;
            rank = threshold.rank;
            xpInCurrentLevel = totalXP - threshold.minXP;

            // Find next level threshold
            const nextThreshold = LEVEL_THRESHOLDS.find(t => t.level === currentLevel + 1);
            if (nextThreshold) {
                const xpNeeded = nextThreshold.minXP - threshold.minXP;
                xpToNextLevel = nextThreshold.minXP - totalXP;
                const progressPercent = (xpInCurrentLevel / xpNeeded) * 100;

                return {
                    currentLevel,
                    rank,
                    progressPercent: Math.min(100, progressPercent),
                    xpToNextLevel,
                    xpInCurrentLevel,
                    totalXP
                };
            }
            break;
        }
    }

    // Max level reached
    return {
        currentLevel,
        rank,
        progressPercent: 100,
        xpToNextLevel: 0,
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
    currentLevel: number
): QuizReward {
    // Base XP formula: 100 + (10 * Level)
    const baseXP = 100 + (10 * currentLevel);

    // Correct answer XP: 20 per correct answer
    const correctAnswerXP = correctAnswers * 20;

    // Perfect score bonus
    const perfectScoreBonus = correctAnswers === totalQuestions ? 100 : 0;

    // Streak bonus: 5 XP per streak day
    const streakBonus = currentStreak * 5;

    const totalXP = baseXP + correctAnswerXP + perfectScoreBonus + streakBonus;

    return {
        baseXP,
        correctAnswerXP,
        perfectScoreBonus,
        streakBonus,
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
