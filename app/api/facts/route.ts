import { NextResponse, NextRequest } from "next/server";
import { getDidYouKnowFact } from "@/lib/ai-facts";
import { ghanaFactsPool } from "@/lib/ghana-facts-expanded";

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    try {
        const excludeParam = req.nextUrl.searchParams.get("exclude") ?? "";
        const excludeIds = excludeParam
            ? excludeParam.split(",").map(Number).filter(Boolean)
            : [];

        const fact = getDidYouKnowFact(excludeIds);
        
        return NextResponse.json({ 
            fact,
            totalCount: ghanaFactsPool.length 
        });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Failed to fetch fact" }, { status: 500 });
    }
}
