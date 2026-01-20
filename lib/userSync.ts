import { db } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

/**
 * Checks if the current user is a guest or registered
 */
export const isGuestMode = (): boolean => {
    const passportId = localStorage.getItem("ghanry_passport_id");
    return !passportId || passportId === "guest";
};

/**
 * Syncs user data to Firestore (only for registered users)
 */
export const syncToFirestore = async (field: string, value: unknown): Promise<void> => {
    if (isGuestMode()) return; // Skip sync for guests

    try {
        const passportId = localStorage.getItem("ghanry_passport_id");
        if (!passportId) return;

        const userRef = doc(db, "users", passportId);
        await updateDoc(userRef, { [field]: value });
    } catch (error) {
        console.error(`Failed to sync ${field}:`, error);
    }
};

/**
 * Loads user data from Firestore on login
 */
export const loadFromFirestore = async (passportId: string): Promise<Record<string, unknown> | null> => {
    try {
        const userRef = doc(db, "users", passportId);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            return docSnap.data();
        }
        return null;
    } catch (error) {
        console.error("Failed to load user data:", error);
        return null;
    }
};

/**
 * Syncs XP to Firestore
 */
export const syncXP = async (xp: number): Promise<void> => {
    await syncToFirestore("xp", xp);
};

/**
 * Syncs chat messages to Firestore
 */
export const syncChatHistory = async (messages: Array<{ role: string; content: string }>): Promise<void> => {
    await syncToFirestore("chatHistory", messages);
};

/**
 * Syncs user settings to Firestore
 */
export const syncSettings = async (settings: Record<string, unknown>): Promise<void> => {
    await syncToFirestore("settings", settings);
};

/**
 * Syncs seen question IDs to Firestore
 */
export const syncAnsweredIds = async (ids: number[]): Promise<void> => {
    await syncToFirestore("answeredQuestions", ids);
};

/**
 * Syncs Gauntlet last played timestamp
 */
export const syncGauntletLastPlayed = async (timestamp: number): Promise<void> => {
    await syncToFirestore("gauntletLastPlayed", timestamp);
};

/**
 * Syncs verification status to Firestore
 */
export const syncVerification = async (isVerified: boolean): Promise<void> => {
    await syncToFirestore("verified", isVerified);
};
