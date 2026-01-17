import { NextResponse } from "next/server";

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

        // Use Groq API Key
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Groq API Key not configured. Please add GROQ_API_KEY to your environment variables." },
                { status: 500 }
            );
        }

        // Format history for Groq (OpenAI format)
        const formattedMessages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m) => ({
                role: m.role === "user" ? "user" : "assistant",
                content: m.content,
            })),
        ];

        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: formattedMessages,
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || `Groq API Error: ${response.statusText}`);
        }

        const text = data.choices[0]?.message?.content || "Sorry, I couldn't think of anything to say.";

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
