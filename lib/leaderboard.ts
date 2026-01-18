import { db } from "./firebase";
import { collection, query, orderBy, limit, getDocs, where } from "firebase/firestore";
import { calculateProgress } from "./gamification";

export interface LeaderboardEntry {
    rank: number;
    nickname: string;
    region: string;
    xp: number;
    rankName?: string;
    isCurrentUser?: boolean;
}

export const LeaderboardService = {
    /**
     * Production-ready: Fetch real rankings from Firestore
     */
    getRankings: async (localNickname: string, localRegion: string, localXP: number): Promise<LeaderboardEntry[]> => {
        try {
            const usersRef = collection(db, "users");
            const q = query(usersRef, orderBy("xp", "desc"), limit(10));
            const querySnapshot = await getDocs(q);

            const fetchedRankings: LeaderboardEntry[] = [];
            let currentFound = false;
            let index = 1;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const { rank: rankName } = calculateProgress(data.xp || 0);

                const entry: LeaderboardEntry = {
                    rank: index,
                    nickname: data.nickname || "Anonymous",
                    region: data.region || "Unknown",
                    xp: data.xp || 0,
                    rankName: rankName,
                    isCurrentUser: data.nickname === localNickname && data.region === localRegion && data.xp === localXP
                };

                if (entry.isCurrentUser) currentFound = true;
                fetchedRankings.push(entry);
                index++;
            });

            // If current user is not in top 10, we could theoretically fetch their personal rank
            // For now, if not found and they have XP, we can append them or just let the UI handle the "Your Rank" card
            if (!currentFound && localXP > 0) {
                const { rank: localRankName } = calculateProgress(localXP);
                fetchedRankings.push({
                    rank: 99, // Placeholder for "beyond top 10"
                    nickname: localNickname,
                    region: localRegion,
                    xp: localXP,
                    rankName: localRankName,
                    isCurrentUser: true
                });
            }

            return fetchedRankings;
        } catch (error) {
            console.error("Leaderboard Error:", error);
            // Fallback to local user only on error
            const { rank: localRankName } = calculateProgress(localXP);
            return [{
                rank: 1,
                nickname: localNickname,
                region: localRegion,
                xp: localXP,
                rankName: localRankName,
                isCurrentUser: true
            }];
        }
    },

    /**
     * Get top player for a specific region
     */
    getRegionRankings: async (region: string) => {
        try {
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("region", "==", region), orderBy("xp", "desc"), limit(10));
            const querySnapshot = await getDocs(q);

            const fetchedRankings: LeaderboardEntry[] = [];
            let index = 1;
            querySnapshot.forEach((docSnap) => {
                const data = docSnap.data();
                const { rank } = calculateProgress(data.xp || 0);
                fetchedRankings.push({
                    rank: index,
                    nickname: data.nickname || "Citizen",
                    region: data.region || region,
                    xp: data.xp || 0,
                    rankName: rank,
                    isCurrentUser: false // This will be handled in the component
                });
                index++;
            });

            return fetchedRankings;
        } catch (error) {
            console.error("Region player error:", error);
            return [];
        }
    }
};
