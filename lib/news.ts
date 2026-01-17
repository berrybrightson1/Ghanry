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

// Cache for articles (in-memory for now)
let articlesCache: NewsItem[] = [];

export const fetchNews = async (): Promise<NewsItem[]> => {
    try {
        const feedPromises = FEEDS.map(async (feed) => {
            try {
                const parsed = await parser.parseURL(feed.url);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return parsed.items.map((item: any) => {
                    // Aggressive Image Extraction
                    let image = undefined;

                    // 1. Try 'enclosure'
                    if (item.enclosure?.url) {
                        image = item.enclosure.url;
                    }
                    // 2. Try 'media:content' (often an object or array)
                    else if (item['media:content']) {
                        const media = item['media:content'];
                        if (Array.isArray(media)) {
                            image = media[0]?.['$']?.url;
                        } else {
                            image = media?.['$']?.url;
                        }
                    }
                    // 3. Try 'media:thumbnail'
                    else if (item['media:thumbnail']) {
                        const media = item['media:thumbnail'];
                        if (Array.isArray(media)) {
                            image = media[0]?.['$']?.url;
                        } else {
                            image = media?.['$']?.url; // or media.url directly
                            if (!image && media.url) image = media.url;
                        }
                    }
                    // 4. Regex in content/contentSnippet/description
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
                        contentSnippet: (item.contentSnippet || item.content || '').substring(0, 150) + '...',
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
        articlesCache = allNews; // Update cache

        return shuffleArray(allNews);

    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
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

// Fisher-Yates Shuffle
const shuffleArray = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
