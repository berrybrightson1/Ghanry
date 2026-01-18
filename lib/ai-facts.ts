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
const FALLBACK_FACTS: FactData[] = [
    {
        category: "History",
        title: "The Golden Stool",
        fact: "The Golden Stool (Sika Dwa Kofi) of the Ashanti Empire is so sacred that not even the King sits on it. It is believed to house the spirit of the Ashanti nation.",
        didYouKnow: "The Golden Stool was commanded down from the sky by Okomfo Anokye.",
        tags: ["Ashanti", "Royalty", "History"]
    },
    {
        category: "Nature",
        title: "Lake Bosomtwe",
        fact: "Lake Bosomtwe is Ghana's only natural lake and is situated within an ancient impact crater. The Ashanti people consider it sacred, believing souls bid farewell to the god Twi there.",
        didYouKnow: "It is one of only six major meteorite lakes in the world.",
        tags: ["Nature", "Ashanti", "Lake"]
    },
    {
        category: "Culture",
        title: "Kente Cloth",
        fact: "Kente is not just a cloth; every pattern has a name and a proverbial meaning. It was originally worn only by royalty during sacred occasions.",
        didYouKnow: "Legend says two friends learned to weave Kente by watching a spider spin its web.",
        tags: ["Art", "Fashion", "Culture"]
    }
];

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
        if (!process.env.GOOGLE_GEMINI_API_KEY) {
            console.warn("Missing Gemini API Key, using fallback.");
            return FALLBACK_FACTS[Math.floor(Math.random() * FALLBACK_FACTS.length)];
        }

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
        return FALLBACK_FACTS[Math.floor(Math.random() * FALLBACK_FACTS.length)];
    }
}
