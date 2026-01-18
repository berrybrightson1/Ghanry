import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

interface LegendData {
    name: string;
    role: string;
    years: string;
    achievements: string[];
    quote?: string;
    legacy: string;
}

/**
 * AI-Powered Hall of Fame Search
 * Queries Gemini for biographical data on Ghanaian legends
 */
export async function getLegendData(query: string): Promise<LegendData | null> {
    if (!query || query.trim().length < 2) {
        return null;
    }

    const prompt = `You are a historian specializing in Ghanaian history and culture.

User Query: "${query}"

Please provide detailed, accurate information about this Ghanaian figure. Return ONLY valid JSON in this exact format:

{
  "name": "Full Name",
  "role": "Primary title/role (e.g. First President, Musician, Activist)",
  "years": "Birth-Death or active years (e.g. 1909-1972 or b. 1985)",
  "achievements": ["achievement 1", "achievement 2", "achievement 3", "achievement 4"],
  "quote": "A famous quote by them (optional)",
  "legacy": "One sentence summarizing their lasting impact on Ghana"
}

Rules:
- Return ONLY the JSON object, no markdown formatting
- Include 4-6 key achievements
- Keep achievements concise (under 100 chars each)
- Legacy should be 1-2 sentences max
- If the person is not Ghanaian or not found, return: {"name": "Unknown", "role": "Not Found", "years": "", "achievements": [], "legacy": "No data available for this query."}`;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        // Clean up markdown code blocks if present
        const jsonText = text
            .replace(/```json\n?/g, "")
            .replace(/```\n?/g, "")
            .trim();

        const data: LegendData = JSON.parse(jsonText);

        // Validate essential fields
        if (!data.name || data.name === "Unknown") {
            return null;
        }

        return data;
    } catch (error) {
        console.error("Error fetching legend data:", error);
        return null;
    }
}
