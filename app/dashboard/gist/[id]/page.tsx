import { getArticleById } from "@/lib/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, ExternalLink, Mic2, Tv, Newspaper, Radio, ArrowLeft } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import ArticleReader from "@/components/ArticleReader";

interface ArticlePageProps {
    params: {
        id: string;
    };
}

export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }: ArticlePageProps) {
    const article = await getArticleById(params.id);

    if (!article) {
        notFound();
    }

    const getPlaceholderIcon = () => {
        switch (article.tag) {
            case 'Showbiz': return <Mic2 className="w-16 h-16 text-pink-500" />;
            case 'News': return <Tv className="w-16 h-16 text-red-500" />;
            case 'Politics': return <Radio className="w-16 h-16 text-blue-500" />;
            default: return <Newspaper className="w-16 h-16 text-green-500" />;
        }
    };

    // Strip HTML tags for clean text display
    const stripHTML = (html: string) => {
        return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    };

    return (
        <div className="max-w-[680px] mx-auto px-4 py-6">
            {/* Back Button & Read Aloud Header */}
            <div className="flex items-center justify-between mb-6">
                <Link
                    href="/dashboard/gist"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#006B3F] font-bold transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Gist Hub
                </Link>

                <ArticleReader
                    title={article.title}
                    content={stripHTML(article.fullContent)}
                />
            </div>

            {/* Article Header */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                {/* Featured Image */}
                <div className="w-full aspect-video relative bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                    {article.image ? (
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                            {getPlaceholderIcon()}
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{article.tag}</span>
                        </div>
                    )}
                </div>

                {/* Article Meta & Title */}
                <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#006B3F] bg-green-50 px-3 py-1 rounded-full border border-green-100">
                            {article.source}
                        </span>
                        <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
                            <CalendarDays className="w-3 h-3" />
                            {formatDistanceToNow(new Date(article.pubDate), { addSuffix: true }).replace("about ", "")}
                        </span>
                    </div>

                    <h1 className="font-epilogue font-extrabold text-gray-900 leading-tight text-3xl">
                        {article.title}
                    </h1>
                </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="prose prose-gray max-w-none">
                    <p className="font-jakarta text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
                        {stripHTML(article.fullContent)}
                    </p>
                </div>
            </div>

            {/* Visit Source Button */}
            <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#006B3F] text-white font-epilogue font-bold rounded-2xl hover:bg-[#005a35] transition-colors shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 group"
            >
                Visit Original Source
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
        </div>
    );
}
