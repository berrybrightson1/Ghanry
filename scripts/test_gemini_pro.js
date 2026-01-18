const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

async function main() {
    let apiKey = "";
    try {
        const envPath = path.resolve(process.cwd(), '.env');
        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf8');
            const match = envContent.match(/GOOGLE_GEMINI_API_KEY=(.*)/);
            if (match && match[1]) {
                apiKey = match[1].trim().replace(/["']/g, "");
            }
        }
    } catch (err) { }

    if (!apiKey) { console.error("No API KEY"); return; }

    const genAI = new GoogleGenerativeAI(apiKey);
    const modelName = "gemini-pro";

    console.log(`Testing ${modelName}...`);
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        const result = await model.generateContent("Hello");
        const response = await result.response;
        console.log(`✅ SUCCESS: ${modelName}`);
        console.log("Response:", response.text());
    } catch (e) {
        console.log(`❌ FAILED: ${modelName}`);
        console.log(e.message);
    }
}

main();
