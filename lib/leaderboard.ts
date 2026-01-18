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
            // Secondary sort by nickname ensures stable ordering for tied XP
            const q = query(usersRef, orderBy("xp", "desc"), limit(20)); // Fetch slightly more to sort client-side
            const querySnapshot = await getDocs(q);

            let fetchedRankings: LeaderboardEntry[] = [];
            let currentFound = false;

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const { rank: rankName } = calculateProgress(data.xp || 0);

                const entry: LeaderboardEntry = {
                    rank: 0, // Assigned after sort
                    nickname: data.nickname || "Anonymous",
                    region: data.region || "Unknown",
                    xp: data.xp || 0,
                    rankName: rankName,
                    isCurrentUser: data.nickname === localNickname && data.region === localRegion && data.xp === localXP
                };

                if (entry.isCurrentUser) currentFound = true;
                fetchedRankings.push(entry);
            });

            // Client-side Sort: XP Descending, then Nickname Ascending
            fetchedRankings.sort((a, b) => {
                if (b.xp !== a.xp) return b.xp - a.xp;
                return a.nickname.localeCompare(b.nickname);
            });

            // Re-assign ranks and limit to 10
            fetchedRankings = fetchedRankings.slice(0, 10).map((entry, i) => ({
                ...entry,
                rank: i + 1
            }));

            // If current user is not in top 10...
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
            // Removed secondary orderBy to avoid index error
            const q = query(usersRef, where("region", "==", region), orderBy("xp", "desc"), limit(20));
            const querySnapshot = await getDocs(q);

            let fetchedRankings: LeaderboardEntry[] = [];

            querySnapshot.forEach((docSnap) => {
                const data = docSnap.data();
                const { rank } = calculateProgress(data.xp || 0);
                fetchedRankings.push({
                    rank: 0,
                    nickname: data.nickname || "Citizen",
                    region: data.region || region,
                    xp: data.xp || 0,
                    rankName: rank,
                    isCurrentUser: false
                });
            });

            // Client-side Sort
            fetchedRankings.sort((a, b) => {
                if (b.xp !== a.xp) return b.xp - a.xp;
                return a.nickname.localeCompare(b.nickname);
            });

            // Apply Ranks
            fetchedRankings = fetchedRankings.slice(0, 10).map((entry, i) => ({
                ...entry,
                rank: i + 1
            }));

            return fetchedRankings;
        } catch (error) {
            console.error("Region player error:", error);
            return [];
        }
    },

    /**
     * seedMockData: (Dev Only) Populates Firestore with fake users
     */
    seedMockData: async () => {
        const { doc, setDoc } = await import("firebase/firestore");
        const MOCK_USERS = [
            { nickname: "Kwame Jet", region: "Greater Accra", xp: 45000 },
            { nickname: "Ama Ghana", region: "Greater Accra", xp: 32000 },
            { nickname: "Kofi King", region: "Ashanti", xp: 28000 },
            { nickname: "Adwoa Smart", region: "Greater Accra", xp: 15000 },
            { nickname: "Yaw Dabo", region: "Ashanti", xp: 12000 },
            { nickname: "Akosua Vee", region: "Volta", xp: 8500 },
            { nickname: "Kojo Antwi", region: "Greater Accra", xp: 5000 },
            { nickname: "Abena K", region: "Central", xp: 2500 },
            { nickname: "Kwaku T", region: "Greater Accra", xp: 1200 },
            { nickname: "Yaa Pono", region: "Eastern", xp: 500 },
        ];

        try {
            const promises = MOCK_USERS.map((u, i) => {
                const id = `MOCK_USER_${i}`;
                return setDoc(doc(db, "users", id), {
                    nickname: u.nickname,
                    region: u.region,
                    xp: u.xp,
                    pin: "1234",
                    createdAt: Date.now()
                });
            });
            await Promise.all(promises);
            console.log("Seeding complete!");
        } catch (e) {
            console.error("Seeding failed", e);
        }
    }
};
