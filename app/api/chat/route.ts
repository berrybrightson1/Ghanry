import { NextResponse } from "next/server";
import perplexity from "@/lib/perplexity"; // Assuming you also want to use the shared client, or import OpenAI directly here if preferred. 
// Using the shared client is cleaner if we exported it correctly. 
// Let's assume we import the client we just created.

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

FORMATTING RULES (CRITICAL):
- **WhatsApp Style**: Keep responses concise and easy to read on mobile.
- **Short Paragraphs**: Max 2-3 sentences per block. Break text often.
- **Use Lists**: Use bullet points for multiple items.
- **No Walls of Text**: Never output huge blocks of text.
- **Emojis**: Use them naturally but don't overdo it.

Start every response with confidence.
`;


interface Message {
    role: "user" | "bot" | "system" | "assistant";
    content: string;
}

export async function POST(req: Request) {
    try {
        return new Response("Feature Disabled", { status: 403 });

        const { messages } = await req.json();

        if (!process.env.PERPLEXITY_API_KEY) {
            return NextResponse.json(
                { error: "API Key not configured. Please add PERPLEXITY_API_KEY to your environment variables." },
                { status: 500 }
            );
        }

        // OpenAI/Perplexity format expects 'system' as a role in the messages array
        // We prepend the system prompt to the message history

        const formattedMessages = messages.map((m: Message) => ({
            role: m.role === "bot" ? "assistant" : m.role,
            content: m.content
        }));

        // CRITICAL: Perplexity/OpenAI often requires the conversation to start with 'user' after 'system'.
        // If the first regular message is 'assistant' (e.g. welcome msg), ignore it.
        if (formattedMessages.length > 0 && formattedMessages[0].role === "assistant") {
            formattedMessages.shift();
        }

        const apiMessages = [
            { role: "system", content: SYSTEM_PROMPT },
            ...formattedMessages
        ];

        const completion = await perplexity.chat.completions.create({
            model: "sonar",
            messages: apiMessages,
            max_tokens: 500, // equivalent to maxOutputTokens
        });

        const text = completion.choices[0]?.message?.content || "";

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
