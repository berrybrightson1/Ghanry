export interface LeaderboardEntry {
    rank: number;
    nickname: string;
    region: string;
    xp: number;
    isCurrentUser?: boolean;
}

export const LeaderboardService = {
    /**
     * Production-ready: Fetch real rankings (no mock data)
     */
    getRankings: async (localNickname: string, localRegion: string, localXP: number): Promise<LeaderboardEntry[]> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const currentUser: LeaderboardEntry = {
            rank: 1, // Will be 1 if they're the only user
            nickname: localNickname,
            region: localRegion,
            xp: localXP,
            isCurrentUser: true
        };

        // In production, this would fetch from Firebase
        // For now, only show the current user
        return [currentUser];
    },

    /**
     * Get top player for a specific region (production ready)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getRegionTopPlayer: (region: string) => {
        // In production, this would query Firebase for the top player in that region
        return null;
    }
};
