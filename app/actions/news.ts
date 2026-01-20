"use server";

import { fetchNews as fetchNewsLib, NewsItem } from "@/lib/news";

export async function getGist(): Promise<NewsItem[]> {
    try {
        // console.log("Fetching Gist from Server...");
        const news = await fetchNewsLib();
        return news;
    } catch {
        // console.error("Server Action fetch failed:", error);
        return [];
    }
}
