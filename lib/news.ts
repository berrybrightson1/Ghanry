import Parser from 'rss-parser';

const parser = new Parser();

export interface NewsItem {
    id: string;
    title: string;
    link: string;
    contentSnippet: string;
    fullContent: string; // Full article content
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

// Helper to create URL-safe slug from title
const createSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .substring(0, 100);
};

// Cache for articles (in-memory persistent across requests in the same session)
let articlesCache: NewsItem[] = [];
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 15; // 15 minutes

export const fetchNews = async (forceRefresh: boolean = false): Promise<NewsItem[]> => {
    const now = Date.now();
    if (!forceRefresh && articlesCache.length > 0 && (now - lastFetchTime) < CACHE_DURATION) {
        return articlesCache;
    }

    try {
        const feedPromises = FEEDS.map(async (feed) => {
            try {
                // Use fetch with next: { revalidate } for built-in caching
                const response = await fetch(feed.url, {
                    next: { revalidate: 900 } // 15 minute revalidation
                });

                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

                const xml = await response.text();
                const parsed = await parser.parseString(xml);

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return parsed.items.map((item: any) => {
                    // Aggressive Image Extraction
                    let image = undefined;

                    if (item.enclosure?.url) {
                        image = item.enclosure.url;
                    } else if (item['media:content']) {
                        const media = item['media:content'];
                        if (Array.isArray(media)) {
                            image = media[0]?.['$']?.url;
                        } else {
                            image = media?.['$']?.url;
                        }
                    } else if (item['media:thumbnail']) {
                        const media = item['media:thumbnail'];
                        if (Array.isArray(media)) {
                            image = media[0]?.['$']?.url;
                        } else {
                            image = media?.['$']?.url;
                            if (!image && media.url) image = media.url;
                        }
                    }

                    if (!image) {
                        const htmlContent = item['content:encoded'] || item.content || item.description || '';
                        const imgMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch) {
                            image = imgMatch[1];
                        }
                    }

                    const fullContent = item['content:encoded'] || item.content || item.contentSnippet || item.description || '';
                    const slug = createSlug(item.title || 'untitled');

                    return {
                        id: slug,
                        title: item.title || 'Untitled',
                        link: item.link || '#',
                        contentSnippet: (item.contentSnippet || item.content || item.description || '').substring(0, 150) + '...',
                        fullContent: fullContent,
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

        // Final deduplication and sorting
        const uniqueNews = Array.from(new Map(allNews.map(item => [item.id, item])).values());
        uniqueNews.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());

        articlesCache = uniqueNews;
        lastFetchTime = now;

        return uniqueNews;

    } catch (error) {
        console.error("Error fetching news:", error);
        return articlesCache;
    }
};

// Get single article by ID
export const getArticleById = async (id: string): Promise<NewsItem | null> => {
    // Try cache first
    if (articlesCache.length > 0) {
        const article = articlesCache.find(item => item.id === id);
        if (article) return article;
    }

    // If not in cache, fetch fresh
    const allNews = await fetchNews();
    return allNews.find(item => item.id === id) || null;
};

