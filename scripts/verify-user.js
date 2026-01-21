const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc, updateDoc } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBxLZbl3B-kvIRI-cecc_Fn8SIJy4j8nJY",
    authDomain: "ghanry-web.firebaseapp.com",
    projectId: "ghanry-web",
    storageBucket: "ghanry-web.firebasestorage.app",
    messagingSenderId: "770525264308",
    appId: "1:770525264308:web:5002d93fc36a8ab21a9ae1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function verifyUser() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.error("Usage: node scripts/verify-user.js <passportId>");
        process.exit(1);
    }

    const passportId = args[0];

    try {
        const userRef = doc(db, "users", passportId);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            console.error(`User ${passportId} not found`);
            process.exit(1);
        }

        const data = docSnap.data();
        await updateDoc(userRef, { verified: true });

        console.log(`✅ Success!`);
        console.log(`User: ${data.nickname} (${passportId})`);
        console.log(`Status: VERIFIED (Blue Badge Applied)`);

    } catch (error) {
        console.error("❌ Error verifying user:", error);
    }
}

verifyUser();
