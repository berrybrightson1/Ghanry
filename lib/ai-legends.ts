import perplexity from "./perplexity";

export async function getLegendData(name: string) {
    try {
        const completion = await perplexity.chat.completions.create({
            model: "sonar",
            messages: [
                {
                    role: "system",
                    content: `You are an expert historian specializing in Ghanaian legends and notable figures.
                    Output MUST be strict JSON matching this schema:
                    {
                        "name": string,
                        "role": string,
                        "years": string,
                        "category": string,
                        "achievements": string[],
                        "summary": string (max 2 sentences)
                    }
                    Ensure all facts are current as of 2026.
                    `
                },
                {
                    role: "user",
                    content: `Who is ${name}? Return strict JSON profile.`
                }
            ]
        });

        const content = completion.choices[0]?.message?.content || "{}";

        // Clean markdown code blocks if present to ensure valid JSON
        const jsonString = content.replace(/```json\n|\n```/g, "").trim();

        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Error fetching legend data:", error);
        return null;
    }
}
