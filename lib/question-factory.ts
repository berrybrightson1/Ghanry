"use server";

import perplexity from "@/lib/perplexity";
import { prisma } from "@/lib/prisma";

// Define the shape of the question we expect from AI
interface GeneratedQuestion {
    question: string;
    options: string[];
    answer: string;
    fingerprint: string;
    explanation: string;
}

export async function generateUniqueBatch(category: string, count: number = 5) {
    try {
        console.log(`🏭 FACTORY: Starting batch generation for ${category} (${count} items)...`);

        const prompt = `
        Generate ${count} unique, hard trivia questions about ${category} in Ghana. 
        
        CRITICAL FORMATTING RULES:
        1. Return a STRICT JSON array of objects.
        2. Do NOT include markdown formatting (like '''json ... '''). Just the raw JSON string.
        3. Each object MUST have:
           - "question": The question text.
           - "options": Array of 4 string choices.
           - "answer": The correct string (must be one of the options).
           - "fingerprint": A unique, lowercase, underscore-separated slug of the core fact (e.g., 'capital_of_volta_region', 'year_ghana_joined_un'). This is used for de-duplication.
           - "explanation": A short 1-sentence fact snippet.
        4. Ensure facts are accurate for the GES (Ghana Education Service) Syllabus.
        `;

        const completion = await perplexity.chat.completions.create({
            model: "sonar", // Using the recommended online model
            messages: [
                { role: "system", content: "You are a precise JSON generator for a trivia database." },
                { role: "user", content: prompt }
            ],
            max_tokens: 3000,
        });

        const rawContent = completion.choices[0]?.message?.content || "[]";

        // Clean up markdown if Perplexity ignores the rule
        const jsonString = rawContent.replace(/```json/g, "").replace(/```/g, "").trim();

        let questions: GeneratedQuestion[] = [];
        try {
            questions = JSON.parse(jsonString);
        } catch (error) {
            console.error("Failed to parse JSON from AI", error);
            return { success: false, message: "AI Malformed JSON" };
        }

        // Validate structure (basic check)
        if (!Array.isArray(questions) || questions.length === 0) {
            return { success: false, message: "AI returned empty or invalid array" };
        }

        // Save to Database with SkipDuplicates
        let savedCount = 0;
        let dbError = null;

        try {
            // We'll add the category to each object before saving
            const dataToSave = questions.map(q => ({
                question: q.question,
                options: q.options,
                answer: q.answer,
                explanation: q.explanation,
                fingerprint: q.fingerprint,
                category: category
            }));

            const result = await prisma.question.createMany({
                data: dataToSave,
                skipDuplicates: true,
            });
            savedCount = result.count;
            console.log(`✅ FACTORY REPORT: Generated ${questions.length}, Saved ${savedCount}`);
        } catch (e) {
            console.error("⚠️ Database Save Failed (Skipping):", e);
            dbError = e instanceof Error ? e.message : "DB Error";
        }

        return {
            success: true,
            generated: questions.length,
            saved: savedCount,
            duplicates: questions.length - savedCount,
            questions: questions, // Return the raw questions so UI can display them even if save fails!
            warning: dbError
        };

    } catch (error) {
        console.error("Factory Error:", error);
        return { success: false, message: error instanceof Error ? error.message : "Unknown error" };
    }
}
