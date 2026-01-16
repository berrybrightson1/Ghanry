export interface LeaderboardEntry {
    rank: number;
    nickname: string;
    region: string;
    xp: number;
    isCurrentUser?: boolean;
}

// Simulated "Global Database"
const MOCK_GLOBAL_PLAYERS: LeaderboardEntry[] = [
    { rank: 1, nickname: "Kwame_Star", region: "Ashanti", xp: 15400 },
    { rank: 2, nickname: "AccraBoy99", region: "Greater Accra", xp: 14200 },
    { rank: 3, nickname: "VoltaQueen", region: "Volta", xp: 13850 },
    { rank: 4, nickname: "NorthernKing", region: "Northern", xp: 12500 },
    { rank: 5, nickname: "Fanti_Vibes", region: "Central", xp: 11900 },
    { rank: 6, nickname: "KoforiduaGuy", region: "Eastern", xp: 11200 },
    { rank: 7, nickname: "TechimanPro", region: "Bono East", xp: 10500 },
    { rank: 8, nickname: "Sunyani_S", region: "Bono", xp: 9800 },
    { rank: 9, nickname: "Wa_Warrior", region: "Upper West", xp: 9200 },
    { rank: 10, nickname: "Bolga_Boss", region: "Upper East", xp: 8900 },
    // spread to simulate depth
    { rank: 45, nickname: "Oti_Hunter", region: "Oti", xp: 4500 },
    { rank: 88, nickname: "Western_Gold", region: "Western", xp: 2100 },
];

export const LeaderboardService = {
    /**
     * Simulates fetching global rankings and injecting the local user
     */
    getRankings: async (localNickname: string, localRegion: string, localXP: number): Promise<LeaderboardEntry[]> => {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        const currentUser: LeaderboardEntry = {
            rank: 0, // calculated below
            nickname: localNickname,
            region: localRegion,
            xp: localXP,
            isCurrentUser: true
        };

        // Combine and Sort
        const allPlayers = [...MOCK_GLOBAL_PLAYERS, currentUser].sort((a, b) => b.xp - a.xp);

        // Re-assign ranks
        return allPlayers.map((player, index) => ({
            ...player,
            rank: index + 1
        }));
    },

    /**
     * Get top player for a specific region
     */
    getRegionTopPlayer: (region: string) => {
        return MOCK_GLOBAL_PLAYERS.find(p => p.region === region);
    }
};
