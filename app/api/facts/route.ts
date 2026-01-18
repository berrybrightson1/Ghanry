import { NextResponse } from "next/server";
import { getDidYouKnowFact } from "@/lib/ai-facts";

export const dynamic = 'force-dynamic'; // Ensure new fact on every request

export async function GET() {
    try {
        const fact = await getDidYouKnowFact(); // Fetch random fact
        return NextResponse.json({ fact });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch fact" },
            { status: 500 }
        );
    }
}
