const { initializeApp } = require('firebase/app');
const { getFirestore, collection, query, where, getDocs } = require('firebase/firestore');

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

async function findUser() {
    const args = process.argv.slice(2);
    if (args.length < 1) {
        console.error("Usage: node scripts/find-user.js <nickname>");
        process.exit(1);
    }

    const nicknameQuery = args[0];
    console.log(`Searching for user with nickname: "${nicknameQuery}"...`);

    try {
        const usersRef = collection(db, "users");
        // Note: This is case-sensitive and needs exact match if we use '=='
        // For broader search, we might just fetch a batch and filter, or assume exact match for now.

        // Exact match attempt
        const q = query(usersRef, where("nickname", "==", nicknameQuery));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log("No exact match found. Trying basic text search on recent users...");
            // Fallback: Fetch last 100 users and search manually
            // This is slow but useful for a script
            const qAll = query(usersRef);
            const allSnap = await getDocs(qAll);
            let found = false;

            allSnap.forEach(doc => {
                const data = doc.data();
                if (data.nickname && data.nickname.toLowerCase().includes(nicknameQuery.toLowerCase())) {
                    console.log(`\nFOUND MATCH:`);
                    console.log(`- Nickname: ${data.nickname}`);
                    console.log(`- Passport ID: ${doc.id}`);
                    console.log(`- XP: ${data.xp}`);
                    console.log(`- Verified: ${data.verified}`);
                    found = true;
                }
            });

            if (!found) console.log("❌ No user found.");
        } else {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                console.log(`\n✅ FOUND EXACT MATCH:`);
                console.log(`- Nickname: ${data.nickname}`);
                console.log(`- Passport ID: ${doc.id}`);
                console.log(`- XP: ${data.xp}`);
                console.log(`- Verified: ${data.verified}`);
            });
        }

    } catch (error) {
        console.error("❌ Error finding user:", error);
    }
}

findUser();
