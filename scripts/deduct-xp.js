const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc, updateDoc } = require('firebase/firestore');

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

async function deductXP() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.error("Usage: node scripts/deduct-xp.js <passportId> <amount>");
        process.exit(1);
    }

    const passportId = args[0];
    const amount = parseInt(args[1], 10);

    if (isNaN(amount)) {
        console.error("Invalid amount");
        process.exit(1);
    }

    try {
        const userRef = doc(db, "users", passportId);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            console.error(`User ${passportId} not found`);
            process.exit(1);
        }

        const currentXP = docSnap.data().xp || 0;
        const newXP = Math.max(0, currentXP - amount);

        await updateDoc(userRef, { xp: newXP });
        console.log(`✅ Deducted ${amount} XP from ${passportId}`);
        console.log(`Old XP: ${currentXP} -> New XP: ${newXP}`);
    } catch (error) {
        console.error("❌ Error deducting XP:", error);
    }
}

deductXP();
