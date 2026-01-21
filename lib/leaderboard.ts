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
    verified?: boolean;
}

export const LeaderboardService = {
    /**
     * Production-ready: Fetch real rankings from Firestore
     */
    getRankings: async (localNickname: string, localRegion: string, localXP: number, localVerified: boolean = false): Promise<LeaderboardEntry[]> => {
        try {
            const usersRef = collection(db, "users");
            // Secondary sort by nickname ensures stable ordering for tied XP
            const q = query(usersRef, orderBy("xp", "desc"), limit(20)); // Fetch slightly more to sort client-side
            const querySnapshot = await getDocs(q);

            let fetchedRankings: LeaderboardEntry[] = [];
            let currentFound = false;

            querySnapshot.forEach((doc) => {
                // EXCLUSION: Hide Dev Account
                if (doc.id === "GH-0020-C") return;

                const data = doc.data();
                const { rank: rankName } = calculateProgress(data.xp || 0);

                const entry: LeaderboardEntry = {
                    rank: 0, // Assigned after sort
                    nickname: data.nickname || "Anonymous",
                    region: data.region || "Unknown",
                    xp: data.xp || 0,
                    rankName: rankName,
                    isCurrentUser: data.nickname === localNickname && data.region === localRegion && data.xp === localXP,
                    verified: data.verified || false
                };

                if (entry.isCurrentUser) {
                    currentFound = true;
                    // Force local verified status if it's the current user (trust local over potentially stale cloud data for UI)
                    if (localVerified) entry.verified = true;
                }
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
                    isCurrentUser: true,
                    verified: localVerified // Use local status
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
                isCurrentUser: true,
                verified: localVerified
            }];
        }
    },

    /**
     * Get top player for a specific region
     */
    /**
     * Get top player for a specific region
     */
    getRegionRankings: async (region: string, localNickname?: string, localXP?: number, localVerified: boolean = false) => {
        try {
            const usersRef = collection(db, "users");
            // Note: This query requires a Firestore Composite Index (Region ASC, XP DESC)
            // If it fails, check browser console for the link to create it.
            const q = query(usersRef, where("region", "==", region), orderBy("xp", "desc"), limit(20));
            const querySnapshot = await getDocs(q);

            let fetchedRankings: LeaderboardEntry[] = [];
            let currentFound = false;

            querySnapshot.forEach((docSnap) => {
                // EXCLUSION: Hide Dev Account
                if (docSnap.id === "GH-0020-C") return;

                const data = docSnap.data();
                const { rank } = calculateProgress(data.xp || 0);
                const isCurrent = data.nickname === localNickname && data.xp === localXP;
                if (isCurrent) currentFound = true;

                fetchedRankings.push({
                    rank: 0,
                    nickname: data.nickname || "Citizen",
                    region: data.region || region,
                    xp: data.xp || 0,
                    rankName: rank,
                    isCurrentUser: isCurrent,
                    verified: (isCurrent && localVerified) ? true : (data.verified || false)
                });
            });

            // Fallback: If query return nothing (e.g. index missing) or empty, 
            // AND we have a local user in this region, show them!
            // This ensures "Be the first..." doesn't show if YOU are there.
            if ((!currentFound || fetchedRankings.length === 0) && localNickname && localXP !== undefined && localXP >= 0) {
                const { rank: localRankName } = calculateProgress(localXP);
                fetchedRankings.push({
                    rank: 99, // Temp
                    nickname: localNickname,
                    region: region,
                    xp: localXP,
                    rankName: localRankName,
                    isCurrentUser: true,
                    verified: localVerified
                });
            }

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
            console.error("Region query failed (likely missing index). Falling back to client-side filter.", error);

            // FALLBACK STRATEGY:
            // Fetch top 100 global users and filter client-side.
            // This bypasses the need for a composite index on (region, xp).
            try {
                const usersRef = collection(db, "users");
                // Single field index on 'xp' is usually auto-created or simple to manage
                const q = query(usersRef, orderBy("xp", "desc"), limit(100));
                const querySnapshot = await getDocs(q);

                const allUsers: LeaderboardEntry[] = [];
                querySnapshot.forEach((docSnap) => {
                    // EXCLUSION: Hide Dev Account
                    if (docSnap.id === "GH-0020-C") return;

                    const data = docSnap.data();
                    const { rank } = calculateProgress(data.xp || 0);
                    // Filter here
                    if (data.region === region) {
                        const isCurrent = data.nickname === localNickname && data.xp === localXP;
                        allUsers.push({
                            rank: 0,
                            nickname: data.nickname || "Citizen",
                            region: data.region,
                            xp: data.xp || 0,
                            rankName: rank,
                            isCurrentUser: isCurrent,
                            verified: (isCurrent && localVerified) ? true : (data.verified || false)
                        });
                    }
                });

                // Check if local user is in the filtered list
                const alreadyHasLocalUser = allUsers.some(u => u.isCurrentUser);

                // If local user is missing and valid, append them
                if (!alreadyHasLocalUser && localNickname && localXP !== undefined) {
                    const { rank: localRankName } = calculateProgress(localXP);
                    // Note: We might be appending them at the end even if they should be higher 
                    // if they weren't in the top 100 global. 
                    // But if they weren't in top 100 global, they are likely low rank anyway.
                    allUsers.push({
                        rank: 99,
                        nickname: localNickname,
                        region: region,
                        xp: localXP,
                        rankName: localRankName,
                        isCurrentUser: true,
                        verified: localVerified
                    });
                }

                // Sort correct
                allUsers.sort((a, b) => b.xp - a.xp);

                // Assign Rank
                return allUsers.slice(0, 10).map((entry, i) => ({
                    ...entry,
                    rank: i + 1
                }));

            } catch (fallbackError) {
                console.warn("Global fallback failed/empty, attempting unsorted region fetch:", fallbackError);
                // FALLBACK STRATEGY 2:
                // Fetch random 50 users from region (No Index Required for simple equality)
                // Then sort locally. This finds "local heroes" who aren't in Global Top 100.
                try {
                    const usersRef = collection(db, "users");
                    const q = query(usersRef, where("region", "==", region), limit(50));
                    const querySnapshot = await getDocs(q);

                    const allUsers: LeaderboardEntry[] = [];
                    querySnapshot.forEach((docSnap) => {
                        // EXCLUSION: Hide Dev Account
                        if (docSnap.id === "GH-0020-C") return;

                        const data = docSnap.data();
                        const { rank } = calculateProgress(data.xp || 0);
                        const isCurrent = data.nickname === localNickname && data.xp === localXP;
                        allUsers.push({
                            rank: 0,
                            nickname: data.nickname || "Citizen",
                            region: data.region,
                            xp: data.xp || 0,
                            rankName: rank,
                            isCurrentUser: isCurrent,
                            verified: (isCurrent && localVerified) ? true : (data.verified || false)
                        });
                    });

                    const alreadyHasLocalUser = allUsers.some(u => u.isCurrentUser);
                    if (!alreadyHasLocalUser && localNickname && localXP !== undefined) {
                        const { rank: localRankName } = calculateProgress(localXP);
                        allUsers.push({
                            rank: 99,
                            nickname: localNickname,
                            region: region,
                            xp: localXP,
                            rankName: localRankName,
                            isCurrentUser: true,
                            verified: localVerified
                        });
                    }

                    allUsers.sort((a, b) => b.xp - a.xp);

                    return allUsers.slice(0, 10).map((entry, i) => ({
                        ...entry,
                        rank: i + 1
                    }));
                } catch (finalError) {
                    console.error("All strategies failed:", finalError);
                    if (localNickname && localXP !== undefined) {
                        const { rank: localRankName } = calculateProgress(localXP);
                        return [{
                            rank: 1,
                            nickname: localNickname,
                            region: region,
                            xp: localXP,
                            rankName: localRankName,
                            isCurrentUser: true,
                            verified: localVerified
                        }];
                    }
                    return [];
                }
            }
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
        } catch (e) {
            console.error("Seeding failed", e);
        }
    }
};
