const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function main() {
    // Read .env manually
    let apiKey = "";
    try {
        const envPath = path.resolve(process.cwd(), '.env');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf8');
            const match = envContent.match(/GOOGLE_GEMINI_API_KEY=(.*)/);
            if (match && match[1]) {
                apiKey = match[1].trim().replace(/["']/g, ""); // Remove quotes if any
            }
        }
    } catch (err) {
        console.error("Error reading .env", err);
    }

    if (!apiKey) {
        console.error("No API KEY found in .env");
        return;
    }

    console.log("Found API Key length:", apiKey.length);

    const genAI = new GoogleGenerativeAI(apiKey);

    const models = ["gemini-1.5-flash", "gemini-1.5-flash-latest", "gemini-1.5-pro", "gemini-pro", "gemini-1.0-pro"];

    console.log("Testing models...");

    for (const m of models) {
        try {
            const model = genAI.getGenerativeModel({ model: m });
            // Minimal generation
            const result = await model.generateContent("Hi");
            const response = await result.response;
            console.log(`✅ SUCCESS: ${m}`);
            // If we found one, we could stop, but let's see which ones work.
        } catch (e) {
            console.log(`❌ FAILED: ${m} - ${e.message ? e.message.split('\n')[0] : e}`);
        }
    }
}

main();
