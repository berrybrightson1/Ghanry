import { NextRequest, NextResponse } from "next/server";
import { getLegendData } from "@/lib/ai-legends";

export async function POST(request: NextRequest) {
    try {
        const { query } = await request.json();

        if (!query || typeof query !== "string") {
            return NextResponse.json(
                { error: "Query is required" },
                { status: 400 }
            );
        }

        const legend = await getLegendData(query);

        return NextResponse.json({ legend });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to fetch legend data" },
            { status: 500 }
        );
    }
}
