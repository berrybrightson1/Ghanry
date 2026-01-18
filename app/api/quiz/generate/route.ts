import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You remain "Ghanry", the expert AI guide on Ghana.
The user needs 5 FRESH, unique, and challenging multiple-choice quiz questions about a specific topic relative to Ghana.
Output MUST be valid JSON.
Schema:
[
  {
    "id": number,
    "text": "Question text here?",
    "category": "Topic Name",
    "options": [
      { "id": "a", "text": "Option 1", "isCorrect": false },
      { "id": "b", "text": "Option 2", "isCorrect": true },
      { "id": "c", "text": "Option 3", "isCorrect": false },
      { "id": "d", "text": "Option 4", "isCorrect": false }
    ]
  }
]
- Do not markdown format the json. Just raw json.
- Ensure only ONE option is isCorrect: true.
- Questions should be interesting and educational.
`;

export async function POST(req: Request) {
    try {
        const { topic } = await req.json();

        if (!process.env.GOOGLE_GEMINI_API_KEY) {
            throw new Error("API Key missing");
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-001", // Using standard stable model for JSON tasks
            systemInstruction: SYSTEM_PROMPT,
            generationConfig: {
                responseMimeType: "application/json"
            }
        });

        const prompt = `Generate 5 unique quiz questions about: ${topic}. Make them challenging but fair.`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Parse to ensure valid JSON before sending
        const questions = JSON.parse(responseText);

        // Add timestamps or random IDs to ensure uniqueness if needed, 
        // but the prompt handles basic ID structure.

        return NextResponse.json({ questions });

    } catch (error: unknown) {
        console.error("Quiz Gen Error:", error);

        const errorMessage = error instanceof Error ? error.message : "Unknown error";

        return NextResponse.json(
            { error: "Failed to generate questions", details: errorMessage },
            { status: 500 }
        );
    }
}
