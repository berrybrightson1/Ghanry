import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
You are "Ghanry", an expert AI guide specialized in everything about Ghana. 
Your mission is to help users learn about Ghanaian history, culture, geography, food, music, arts, and more.
Users might ask you for "quiz confirmation" - if they ask if an answer is correct, provide a detailed, accurate explanation.
Always be encouraging, friendly, and proud of Ghanaian heritage.
Use Ghanaian expressions like "Akwaaba" (Welcome), "Me da ase" (Thank you), or "Chale" (Friend) where appropriate to keep the tone authentic.
If a user asks a question not related to Ghana, politely bring the conversation back to Ghana.
Keep responses concise but informative.
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
                { error: "API Key not configured. Please add GOOGLE_GEMINI_API_KEY to your .env file." },
                { status: 500 }
            );
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash-latest",
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

        // Return a more descriptive error to help the user debug
        const errorMessage = error instanceof Error ? error.message : "Unknown AI error";
        return NextResponse.json(
            { error: `Ghanry's brain is a bit fuzzy: ${errorMessage}` },
            { status: 500 }
        );
    }
}
