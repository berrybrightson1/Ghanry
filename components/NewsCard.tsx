"use client";

import { NewsItem } from "@/lib/news";
import { motion } from "framer-motion";
import {
  CalendarDays, ChevronRight, Mic2, Tv, Newspaper, Radio,
  ExternalLink, ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import NativeSheet from "@/components/NativeSheet";

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

const stripHTML = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export default function NewsCard({ item, index }: NewsCardProps) {
  const [imgSrc, setImgSrc] = useState(item.image);
  const [sheetImgSrc, setSheetImgSrc] = useState(item.image);

  const getPlaceholderIcon = (size: "sm" | "lg" = "sm") => {
    const cls = size === "lg" ? "w-16 h-16" : "w-12 h-12";
    switch (item.tag) {
      case "Showbiz": return <Mic2 className={`${cls} text-pink-500`} />;
      case "News":    return <Tv   className={`${cls} text-red-500`} />;
      case "Politics":return <Radio className={`${cls} text-blue-500`} />;
      default:        return <Newspaper className={`${cls} text-green-500`} />;
    }
  };

  // ── The card that acts as the sheet trigger ──────────────────────────────
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group block bg-white rounded-3xl shadow-sm active:shadow-md border border-gray-100 overflow-hidden transition-all duration-300 active:scale-[0.98] cursor-pointer"
    >
      {/* Image */}
      <div className="w-full aspect-video relative bg-gray-50 flex items-center justify-center border-b border-gray-100 overflow-hidden">
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgSrc(undefined)}
            unoptimized
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            {getPlaceholderIcon()}
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {item.tag}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#006B3F] bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm border border-white/20">
            {item.source}
          </span>
        </div>
      </div>

      {/* Meta + title */}
      <div className="p-5 flex flex-col gap-3">
        <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
          <CalendarDays className="w-3 h-3" />
          {formatDistanceToNow(new Date(item.pubDate), { addSuffix: true }).replace("about ", "")}
        </span>

        <h3 className="font-epilogue font-bold text-gray-900 leading-snug text-lg line-clamp-2 group-hover:text-[#006B3F] transition-colors">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 font-jakarta line-clamp-2 leading-relaxed">
          {item.contentSnippet}
        </p>

        <div className="pt-2 flex items-center justify-end">
          <span className="text-xs text-[#FCD116] font-bold flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-all">
            Read More <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );

  // ── Full article rendered inside the sheet ───────────────────────────────
  const articleContent = (
    <div className="pb-8">
      {/* Hero image */}
      <div className="w-full aspect-video relative bg-gray-50 flex items-center justify-center overflow-hidden">
        {sheetImgSrc ? (
          <Image
            src={sheetImgSrc}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-cover"
            onError={() => setSheetImgSrc(undefined)}
            unoptimized
            priority
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 h-full">
            {getPlaceholderIcon("lg")}
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
              {item.tag}
            </span>
          </div>
        )}
      </div>

      {/* Article meta & body */}
      <div className="px-5 pt-5 space-y-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest text-[#006B3F] bg-green-50 px-3 py-1 rounded-full border border-green-100">
            {item.source}
          </span>
          <span className="text-xs text-gray-400 font-bold flex items-center gap-1">
            <CalendarDays className="w-3 h-3" />
            {formatDistanceToNow(new Date(item.pubDate), { addSuffix: true }).replace("about ", "")}
          </span>
        </div>

        <h1 className="font-epilogue font-extrabold text-gray-900 leading-tight text-2xl">
          {item.title}
        </h1>

        <p className="font-jakarta text-gray-700 leading-relaxed text-base whitespace-pre-wrap">
          {stripHTML(item.fullContent || item.contentSnippet)}
        </p>
      </div>

      {/* Visit source CTA */}
      <div className="px-5 pt-6">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 bg-[#006B3F] text-white font-epilogue font-bold rounded-2xl hover:bg-[#005a35] active:bg-[#004d2f] transition-colors shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 group"
          onClick={(e) => e.stopPropagation()}
        >
          Visit Original Source
          <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
          <ExternalLink className="w-3 h-3" /> Opens {item.source}
        </p>
      </div>
    </div>
  );

  return (
    <NativeSheet trigger={card} title={item.title}>
      {articleContent}
    </NativeSheet>
  );
}
