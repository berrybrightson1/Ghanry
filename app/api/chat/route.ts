import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are "Ghanry", an intelligent and expert AI guide specialized in everything about Ghana. 
Your goal is to be helpful, smart, and accurate.

CORE INSTRUCTIONS:
1. **Be Intelligent**: Answer questions directly and clearly. Do not be vague or "suspenseful".
2. **Scope**: You are an expert on Ghana (History, Culture, Food, Geography, etc.).
   - If a user asks a general question (e.g., "What is 2+2?" or "Who is Einstein?"), ANSWER IT briefly, then cleverly link it back to Ghana if possible (e.g., "That's 4! Did you know Ghana has 4 major ethnic groups?").
   - Do NOT refuse to answer basic logic or general knowledge questions, just keep the personality Ghanaian.
3. **Tone**: Friendly, proud, and authentic. Use "Akwaaba", "Chale", "Me da ase".
4. **Quiz Aid**: If asked about a quiz question, provide the correct answer with a fun "Did you know?" fact.

Start every response with confidence.
`;

interface Message {
    role: "user" | "bot";
    content: string;
}

export async function POST(req: Request) {
    try {
        const { messages }: { messages: Message[] } = await req.json();

        if (!process.env.GOOGLE_GEMINI_API_KEY) {
            return NextResponse.json(
                { error: "API Key not configured. Please add GOOGLE_GEMINI_API_KEY to your environment variables." },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
            systemInstruction: SYSTEM_PROMPT
        });

        // Format history for Gemini
        // We take the last few messages to maintain context
        const history = messages.slice(0, -1).map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.content }],
        }));

        // CRITICAL: Gemini history MUST start with 'user' role
        // If the first message is the 'bot' welcome message, we remove it from history
        if (history.length > 0 && history[0].role === "model") {
            history.shift();
        }

        const chat = model.startChat({
            history,
            generationConfig: {
                maxOutputTokens: 500,
            },
        });

        const lastMessage = messages[messages.length - 1].content;
        const result = await chat.sendMessage(lastMessage);

        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ content: text });
    } catch (error: unknown) {
        console.error("Chat API Error:", error);

        const errorMessage = error instanceof Error ? error.message : "Unknown AI error";
        return NextResponse.json(
            { error: `Ghanry's brain is a bit fuzzy: ${errorMessage}` },
            { status: 500 }
        );
    }
}
