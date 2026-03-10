import fs from "fs";

const API_KEY = process.env.PERPLEXITY_API_KEY;
if (!API_KEY) throw new Error("Set PERPLEXITY_API_KEY env var before running this script.");

const THEMES = [
    "Animals and Wildlife", "Nature and the Elements", "Family and Relatives",
    "Leadership and Authority", "Patience and Time", "Wisdom and Foolishness",
    "Wealth and Poverty", "God and Spirituality", "Friendship and Enemies",
    "Hard work and Diligence", "Children and Parents", "Marriage and Love",
    "Death and Legacy", "Health and Sickness", "Community and Unity",
    "Truth and Lies", "Pride and Humility", "Speech and Silence",
    "Actions and Consequences", "Journeys and Travel", "Food and Hunger",
    "Courage and Fear", "Justice and Fairness", "Beauty and Appearance",
    "Hospitality and Guests", "Forgiveness and Revenge", "Youth and Old Age"
];

async function generateBatch(theme) {
    const prompt = `You are a Ghanaian cultural historian. Generate exactly 25 distinct and real authentic Ghanaian proverbs about "${theme}". 
Return a strictly valid JSON array of objects. 
Object format:
{
  "native": "The actual proverb in the local language",
  "language": "Twi or Ga or Ewe or Hausa or Fante or Dagbani etc.",
  "translation": "Literal English translation",
  "meaning": "The deeper meaning",
  "power": "One of: xp_refund, shield, xp_multiplier, theme_unlock, streak_boost",
  "powerValue": 50,
  "rarity": "One of: common, uncommon, rare, legendary"
}

Respond ONLY with the raw JSON array. No preamble.`;

    try {
        const res = await fetch("https://api.perplexity.ai/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "sonar-pro",
                messages: [{ role: "system", content: "You are a helpful API that returns strictly valid JSON arrays only." }, { role: "user", content: prompt }],
                temperature: 0.7
            })
        });

        if (!res.ok) {
            console.error(`Failed for theme ${theme}: ${res.statusText}`);
            return [];
        }

        const data = await res.json();
        let content = data.choices[0].message.content.trim();

        // Clean up markdown code blocks if present
        content = content.replace(/^```json\s*/, "").replace(/```$/, "").trim();

        try {
            return JSON.parse(content);
        } catch (e) {
            console.error(`JSON Parse error for theme ${theme}:`, e.message);
            // Fallback: try to find the array in the text
            const match = content.match(/\[\s*\{[\s\S]*\}\s*\]/);
            if (match) {
                try {
                    return JSON.parse(match[0]);
                } catch (innerE) {
                    return [];
                }
            }
            return [];
        }
    } catch (err) {
        console.error(`Error processing theme ${theme}:`, err.message);
        return [];
    }
}

async function main() {
    console.log("Starting generation of 500+ proverbs...");
    const allProverbs = [];
    let idCounter = 1;

    for (let i = 0; i < THEMES.length; i += 4) {
        const batchThemes = THEMES.slice(i, i + 4);
        console.log(`Processing themes: ${batchThemes.join(", ")}`);
        const results = await Promise.all(batchThemes.map(generateBatch));

        for (const batch of results) {
            if (Array.isArray(batch)) {
                for (const prov of batch) {
                    prov.id = idCounter++;
                    allProverbs.push(prov);
                }
            }
        }
    }

    console.log(`Generated ${allProverbs.length} proverbs successfully.`);
    if (allProverbs.length > 0) {
        fs.writeFileSync("data/proverbs.json", JSON.stringify(allProverbs, null, 2));
        console.log("Saved to data/proverbs.json");
    }
}

main();
