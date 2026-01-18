const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Initialize Firebase (using same config as your app)
const firebaseConfig = {
    apiKey: "AIzaSyDSomeExampleKeyHere",
    authDomain: "ghanry-app.firebaseapp.com",
    projectId: "ghanry-app",
    storageBucket: "ghanry-app.firebasestorage.app",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function createMasterAccount() {
    const masterAccount = {
        passportId: "GH-0020-C",
        nickname: "Berry (DEV)",
        region: "Greater Accra",
        pin: "0020", // WARNING: Plain text for dev only!
        xp: 100000, // Maxed out XP
        rank: "Legend",
        touristVisaUsed: false,
        joinedAt: new Date().toISOString(),
        verified: true, // ✅ Verified badge
        badges: [
            "Citizen",
            "Developer",
            "Legend",
            "Master",
            "Pioneer",
            "Elite"
        ],
        avatar: "icon:Crown", // Special dev avatar
        // Additional dev perks
        isDev: true,
        unlimitedXP: true,
        allCategoriesUnlocked: true
    };

    try {
        await setDoc(doc(db, "users", "GH-0020-C"), masterAccount);
        console.log("✅ Master account created successfully!");
        console.log("Passport ID: GH-0020-C");
        console.log("PIN: 0020");
        console.log("XP: 100,000");
        console.log("Rank: Legend");
        console.log("Status: Verified ✓");
    } catch (error) {
        console.error("❌ Error creating master account:", error);
    }
}

createMasterAccount();
