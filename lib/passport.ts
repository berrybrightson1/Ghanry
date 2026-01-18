import { db } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";



/**
 * Generates a unique Passport ID in the format: GH-XXXX-Y
 * Example: GH-4921-Z
 */
export const generatePassportID = async (): Promise<string> => {
    let isUnique = false;
    let passportId = "";

    // Keep generating until we find a unique one (collision check)
    while (!isUnique) {
        const numbers = Math.floor(1000 + Math.random() * 9000); // 4 digit number
        const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random A-Z
        passportId = `GH-${numbers}-${letter}`;

        // Check if exists in DB
        const docRef = doc(db, "users", passportId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            isUnique = true;
        }
    }

    return passportId;
};

/**
 * Creates a new Citizen Account in Firestore
 */
export const createAccount = async (nickname: string, region: string, pin: string, status: 'citizen' | 'tourist' = 'citizen') => {
    try {
        const passportId = await generatePassportID();
        const joinedAt = new Date().toISOString();
        const initialRank = status === 'citizen' ? "Ghanaian" : "Tourist";

        // Data to save
        const userData = {
            passportId,
            nickname,
            region,
            pin, // Note: In a real production app, you should hash this PIN before saving
            xp: 0,
            rank: initialRank,
            touristVisaUsed: status === 'tourist',
            joinedAt,
            badges: status === 'citizen' ? ["Citizen"] : ["New Arrival"],
            avatar: status === 'citizen' ? undefined : undefined // Default to initials for now, or icon later
        };

        // Save to "users" collection with passportId as the Document ID
        await setDoc(doc(db, "users", passportId), userData);

        return { success: true, passportId, user: userData };
    } catch (error) {
        console.error("Error creating account:", error);
        return { success: false, error: error };
    }
};

export const verifyUser = async (passportId: string, pin: string) => {
    try {
        const docRef = doc(db, "users", passportId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return { success: false, error: "Passport ID not found." };
        }

        const data = docSnap.data();
        if (data.pin !== pin) {
            return { success: false, error: "Incorrect PIN." };
        }

        return { success: true, user: data };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, error: "System error. Try again." };
    }
};

export const getUser = async (passportId: string) => {
    try {
        console.log("Looking up user:", passportId); // Debug log
        const docRef = doc(db, "users", passportId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { success: true, user: docSnap.data() };
        } else {
            return { success: false, error: "Not Found" };
        }
    } catch (error) {
        return { success: false, error };
    }
}
