import perplexity from "@/lib/perplexity";
import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are "Ghanry", the expert AI guide on Ghana.
The user needs 5 FRESH, unique, and challenging multiple-choice quiz questions about a specific topic relative to Ghana.

CRITICAL JSON FORMATTING:
1. Output MUST be a valid JSON array.
2. No markdown formatting (no \`\`\`json blocks).
3. Schema per object:
   {
     "id": number (1-5),
     "text": "Question string?",
     "category": "Topic Name",
     "options": [
       { "id": "a", "text": "Option 1", "isCorrect": false },
       { "id": "b", "text": "Option 2", "isCorrect": true },
       { "id": "c", "text": "Option 3", "isCorrect": false },
       { "id": "d", "text": "Option 4", "isCorrect": false }
     ]
   }
`;

// Define Interfaces
interface Option {
    id: string;
    text: string;
    isCorrect: boolean;
}

interface RawQuizQuestion {
    text: string;
    options: Option[];
    category?: string;
    id?: number | string;
}

interface QuizQuestion extends RawQuizQuestion {
    id: number;
    category: string;
}

export async function POST(req: Request) {
    try {
        const { topic } = await req.json();

        // 1. Validate API Key Availability
        if (!process.env.PERPLEXITY_API_KEY) {
            console.error("Missing PERPLEXITY_API_KEY");
            return NextResponse.json({ error: "Server Configuration Error: API Key Missing" }, { status: 500 });
        }

        const prompt = `Generate 5 unique quiz questions about: ${topic}. Make them challenging but fair. Return straight JSON.`;

        // 2. Call Perplexity
        const completion = await perplexity.chat.completions.create({
            model: "sonar",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: prompt }
            ],
            max_tokens: 3000,
            temperature: 0.7
        });

        const rawContent = completion.choices[0]?.message?.content || "[]";

        // 3. Clean and Parse JSON
        // Remove markdown code blocks if present
        const jsonString = rawContent.replace(/```json/g, "").replace(/```/g, "").trim();

        let rawQuestions: unknown; // Use unknown for initial parse result
        try {
            rawQuestions = JSON.parse(jsonString);
        } catch (e) {
            console.error("JSON Parse Error:", e, "Raw:", rawContent);
            return NextResponse.json({ error: "AI returned invalid JSON" }, { status: 500 });
        }

        // 4. Transform/Validate IDs
        const baseId = Date.now();
        const questions: QuizQuestion[] = Array.isArray(rawQuestions)
            ? rawQuestions.map((q: unknown, i): QuizQuestion => {
                // Type assert q to RawQuizQuestion for safe property access and spreading
                const typedQ = q as RawQuizQuestion;
                return {
                    ...typedQ, // Spread properties from the parsed object
                    id: baseId + i, // Ensure unique ID for React keys
                    category: topic // Override or set the category
                };
            })
            : [];

        if (questions.length === 0) {
            return NextResponse.json({ error: "No questions generated" }, { status: 500 });
        }

        return NextResponse.json({ questions });

    } catch (error: unknown) { // Use unknown for caught errors
        console.error("Perplexity API Error:", error);

        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: "Generation Failed", details: errorMessage },
            { status: 500 }
        );
    }
}
