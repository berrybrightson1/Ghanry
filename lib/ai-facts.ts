import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

interface FactData {
    category: "History" | "Culture" | "Nature" | "Food" | "Music" | "Throwback";
    title: string;
    fact: string;
    didYouKnow: string; // The "Hook"
    tags: string[];
}

/**
 * AI-Powered "Did You Know" Generator
 * Generates random interesting facts about Ghana
 */
export async function getDidYouKnowFact(): Promise<FactData | null> {
    const categories = ["History", "Culture", "Nature", "Food", "Music", "Throwback Nostalgia"];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const prompt = `You are a knowledgeable Ghanaian historian and culture guide.
    
    Generate a fascinating, positive, or nostalgic "Did You Know?" fact about Ghana.
    Focus Category: ${randomCategory}
    
    Return ONLY valid JSON in this detailed format:
    {
      "category": "One of: History, Culture, Nature, Food, Music, Throwback",
      "title": "Short, catchy headline (max 5 words)",
      "fact": "The main detailed fact (2-3 sentences). Educational and engaging.",
      "didYouKnow": "A quick, surprising one-liner takeaway starting with 'Did you know...'",
      "tags": ["tag1", "tag2", "tag3"]
    }
    
    Rules:
    - Ensure the tone is positive, proud, and educational.
    - If "Throwback", mention specific nostalgic items/events from 80s/90s/00s Ghana.
    - Return ONLY the JSON object.`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        const jsonText = text
            .replace(/```json\n?/g, "")
            .replace(/```\n?/g, "")
            .trim();

        const data: FactData = JSON.parse(jsonText);
        return data;
    } catch (error) {
        console.error("Error fetching fact data:", error);
        return null;
    }
}
