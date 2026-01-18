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

    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const resp = await fetch(url);
        const data = await resp.json();

        if (data.models) {
            console.log("Available Models:");
            data.models.forEach(m => {
                if (m.supportedGenerationMethods.includes("generateContent")) {
                    console.log(`- ${m.name.replace('models/', '')}`);
                }
            });
        } else {
            console.log("Error response:", JSON.stringify(data));
        }
    } catch (e) {
        console.error("Fetch error:", e);
    }
}

main();
