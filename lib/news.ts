import Parser from 'rss-parser';

const parser = new Parser();

export interface NewsItem {
    id: string;
    title: string;
    link: string;
    contentSnippet: string;
    source: string;
    tag: string;
    pubDate: string;
    isoDate: string;
    image?: string;
}

const FEEDS = [
    { url: 'https://ameyawdebrah.com/feed/', source: 'Ameyaw Debrah', tag: 'Gist' },
    { url: 'https://www.ghanaweb.com/GhanaHomePage/rss/rss.xml', source: 'GhanaWeb', tag: 'News' },
    { url: 'https://www.peacefmonline.com/rss/', source: 'Peace FM', tag: 'Showbiz' },
    { url: 'https://citinewsroom.com/feed/', source: 'Citi News', tag: 'General' },
    { url: 'https://www.myjoyonline.com/feed/', source: 'Joy Online', tag: 'Politics' },
];

export const fetchNews = async (): Promise<NewsItem[]> => {
    try {
        const feedPromises = FEEDS.map(async (feed) => {
            try {
                const parsed = await parser.parseURL(feed.url);
                return parsed.items.map((item) => {
                    // Extract image from content:encoded or common RSS structures if needed
                    // For now, rely on what rss-parser finds or simple heuristics
                    // Note: rss-parser doesn't always automatically find images in 'content'.
                    // We might need regex if the image is embedded in HTML content.

                    let image = undefined;
                    if (item.enclosure?.url) {
                        image = item.enclosure.url;
                    } else if (item.content?.match(/<img[^>]+src="([^">]+)"/)) {
                        image = item.content?.match(/<img[^>]+src="([^">]+)"/)?.[1];
                    }

                    return {
                        id: item.guid || item.link || Math.random().toString(36),
                        title: item.title || 'Untitled',
                        link: item.link || '#',
                        contentSnippet: (item.contentSnippet || item.content || '').substring(0, 100) + '...',
                        source: feed.source,
                        tag: feed.tag,
                        pubDate: item.pubDate || new Date().toISOString(),
                        isoDate: item.isoDate || new Date().toISOString(),
                        image,
                    } as NewsItem;
                });
            } catch (err) {
                console.warn(`Failed to fetch feed ${feed.source}:`, err);
                return [];
            }
        });

        const results = await Promise.all(feedPromises);
        const allNews = results.flat();

        return shuffleArray(allNews);

    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
};

// Fisher-Yates Shuffle
const shuffleArray = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
