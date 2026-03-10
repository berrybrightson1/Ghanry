"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap, ShieldCheck, Sparkles,
  ChevronRight, Zap, Trophy, BookOpen,
  Users, Calendar, ArrowRight,
} from "lucide-react";

const slides = [
  { id: 0, type: "hero" as const },
  {
    id: 1,
    type: "content" as const,
    label: "Gamified Heritage",
    title: "More than a\nquiz app.",
    body: "Ghanry is a living heritage platform for Ghanaians everywhere. Earn XP, climb the ranks, and prove how deep your roots run.",
    ranks: [
      { label: "Tourist", sub: "Start here", color: "bg-white/15 border-white/20", text: "text-white/80", dot: "bg-white/40" },
      { label: "Citizen", sub: "Earn your badge", color: "bg-[#FCD116]/15 border-[#FCD116]/30", text: "text-[#FCD116]", dot: "bg-[#FCD116]" },
      { label: "Legend", sub: "Hall of fame", color: "bg-[#CE1126]/15 border-[#CE1126]/30", text: "text-[#CE1126]", dot: "bg-[#CE1126]" },
    ],
  },
  {
    id: 2,
    type: "features" as const,
    label: "What's inside",
    title: "Built for the Diaspora.",
    body: "Everything you need to stay connected to your roots.",
    features: [
      { icon: <Calendar className="w-5 h-5 text-[#FCD116]" />, label: "Daily Drops", desc: "Fresh questions every day" },
      { icon: <Zap className="w-5 h-5 text-blue-400" />, label: "Earn XP", desc: "Points for every right answer" },
      { icon: <Trophy className="w-5 h-5 text-[#FCD116]" />, label: "Rank Up", desc: "Tourist all the way to Legend" },
      { icon: <Users className="w-5 h-5 text-green-400" />, label: "Leaderboard", desc: "Compete with the diaspora" },
      { icon: <BookOpen className="w-5 h-5 text-[#CE1126]" />, label: "Lore & Gist", desc: "Proverbs, stories and history" },
      { icon: <Sparkles className="w-5 h-5 text-pink-400" />, label: "Badges", desc: "Unlock exclusive achievements" },
    ],
  },
  {
    id: 3,
    type: "cta" as const,
    label: "Are you ready?",
    title: "Claim your\nheritage.",
    body: "Every correct answer brings you closer to Citizen status. The Motherland is waiting — will you answer the call?",
  },
];

const VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function OnboardingPage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  // Onboarding always shows on every visit — no redirect

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  const finish = () => {
    localStorage.setItem("ghanry_onboarded", "true");
    router.push("/?onboarded=true");
  };

  const isLast = index === slides.length - 1;
  const slide = slides[index];

  return (
    <div className="relative w-full h-full bg-[#006B3F] overflow-hidden flex flex-col select-none">

      {/* Skip button */}
      {!isLast && (
        <button
          onClick={finish}
          className="absolute top-5 right-5 z-30 text-white/60 font-jakarta font-bold text-sm px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
        >
          Skip
        </button>
      )}

      {/* Slides */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={slide.id}
            custom={dir}
            variants={VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.9 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60 && index < slides.length - 1) go(index + 1);
              if (info.offset.x > 60 && index > 0) go(index - 1);
            }}
            className="absolute inset-0 flex flex-col"
          >

            {/* ── SLIDE 0: Hero ── */}
            {slide.type === "hero" && (
              <div className="relative w-full h-full flex flex-col items-center justify-between pt-16 pb-4">
                <Image
                  src="/Slider-1.webp"
                  alt="Ghanry"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#006B3F]" />

                {/* Wordmark */}
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <h1 className="font-epilogue font-extrabold tracking-tight text-7xl drop-shadow-2xl">
                    <span className="text-white">Gha</span>
                    <span className="text-[#FCD116]">nry</span>
                  </h1>
                  <p className="text-white/60 font-jakarta text-xs uppercase tracking-widest">
                    Know your roots
                  </p>
                </div>

                {/* Welcome in Ghanaian languages */}
                <div className="relative z-10 w-full px-6 flex flex-col gap-2.5">
                  <p className="text-white/40 font-jakarta text-[10px] uppercase tracking-widest text-center mb-1">
                    Welcome in Ghana&apos;s languages
                  </p>
                  {[
                    { word: "Akwaaba", lang: "Twi", align: "justify-start" },
                    { word: "Obaake", lang: "Ga", align: "justify-center" },
                    { word: "Woezo", lang: "Ewe", align: "justify-end" },
                    { word: "Naa", lang: "Dagbani", align: "justify-start" },
                    { word: "Maraba", lang: "Hausa", align: "justify-center" },
                    { word: "Ogya", lang: "Fante", align: "justify-end" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.word}
                      initial={{ opacity: 0, x: item.align === "justify-end" ? 20 : item.align === "justify-start" ? -20 : 0, y: 8 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1, type: "spring", bounce: 0.3 }}
                      className={`flex ${item.align}`}
                    >
                      <div className="flex items-baseline gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl px-4 py-2">
                        <span className="font-epilogue font-extrabold text-white text-lg leading-none">
                          {item.word}
                        </span>
                        <span className="font-jakarta text-white/50 text-[10px] font-bold uppercase tracking-wider">
                          {item.lang}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── SLIDE 1: What is Ghanry ── */}
            {slide.type === "content" && (
              <div className="flex-1 flex flex-col justify-between px-8 pt-16 pb-6 relative overflow-hidden">
                {/* Ambient glow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.28, 0.12] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-24 -left-24 w-80 h-80 bg-[#FCD116] rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
                  transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#CE1126] rounded-full blur-[100px] pointer-events-none"
                />

                {/* Top content */}
                <div className="relative z-10 flex flex-col gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05, type: "spring" }}
                    className="p-4 bg-white/10 rounded-2xl border border-white/10 w-fit"
                  >
                    <GraduationCap className="w-10 h-10 text-[#FCD116]" />
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/50 font-jakarta font-bold text-xs uppercase tracking-widest"
                  >
                    {slide.label}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, type: "spring" }}
                    className="font-epilogue font-extrabold text-white text-4xl leading-tight"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-jakarta text-white/70 text-base leading-relaxed"
                  >
                    {slide.body}
                  </motion.p>
                </div>

                {/* Rank progression */}
                <div className="relative z-10 flex flex-col gap-3">
                  <p className="text-white/40 font-jakarta text-[10px] uppercase tracking-widest">
                    Your path
                  </p>
                  <div className="flex items-center gap-2">
                    {slide.ranks?.map((rank, i) => (
                      <div key={rank.label} className="flex items-center gap-2 flex-1">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1, type: "spring", bounce: 0.4 }}
                          className={`flex-1 flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl border ${rank.color}`}
                        >
                          <div className={`w-2 h-2 rounded-full ${rank.dot}`} />
                          <span className={`font-epilogue font-extrabold text-sm ${rank.text}`}>
                            {rank.label}
                          </span>
                          <span className="font-jakarta text-white/40 text-[9px] text-center leading-tight">
                            {rank.sub}
                          </span>
                        </motion.div>
                        {i < (slide.ranks?.length ?? 0) - 1 && (
                          <ArrowRight className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SLIDE 2: Features ── */}
            {slide.type === "features" && (
              <div className="flex-1 flex flex-col justify-between px-8 pt-16 pb-6 relative overflow-hidden">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.22, 0.1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#CE1126] rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.14, 0.06] }}
                  transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                  className="absolute -top-16 -left-16 w-60 h-60 bg-[#FCD116] rounded-full blur-[100px] pointer-events-none"
                />

                {/* Header */}
                <div className="relative z-10 flex flex-col gap-4">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-white/50 font-jakarta font-bold text-xs uppercase tracking-widest"
                  >
                    {slide.label}
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="font-epilogue font-extrabold text-white text-4xl leading-tight"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="font-jakarta text-white/60 text-sm"
                  >
                    {slide.body}
                  </motion.p>
                </div>

                {/* Feature grid */}
                <div className="relative z-10 grid grid-cols-2 gap-2.5">
                  {slide.features?.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.06, type: "spring", bounce: 0.3 }}
                      className="flex flex-col gap-2 p-3.5 rounded-2xl bg-white/10 border border-white/8"
                    >
                      <div className="p-2 rounded-xl bg-white/10 w-fit">{f.icon}</div>
                      <div>
                        <p className="text-white font-jakarta font-bold text-sm leading-tight">{f.label}</p>
                        <p className="text-white/45 font-jakarta text-[11px] leading-tight mt-0.5">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── SLIDE 3: CTA ── */}
            {slide.type === "cta" && (
              <div className="flex-1 flex flex-col justify-between px-8 pt-16 pb-6 relative overflow-hidden">
                {/* Ambient glow — centered gold */}
                <motion.div
                  animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FCD116] rounded-full blur-[130px] pointer-events-none"
                />

                {/* Top: Ghana flag stripe + icon */}
                <div className="relative z-10 flex flex-col gap-6">
                  {/* Ghana flag stripe */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                    className="flex h-1.5 rounded-full overflow-hidden w-28 origin-left"
                  >
                    <div className="flex-1 bg-[#CE1126]" />
                    <div className="flex-1 bg-[#FCD116]" />
                    <div className="flex-1 bg-[#006B3F]" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", bounce: 0.4 }}
                    className="p-4 bg-white/10 rounded-2xl border border-white/10 w-fit"
                  >
                    <ShieldCheck className="w-10 h-10 text-[#CE1126]" />
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/50 font-jakarta font-bold text-xs uppercase tracking-widest"
                  >
                    {slide.label}
                  </motion.span>

                  <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, type: "spring" }}
                    className="font-epilogue font-extrabold text-white text-5xl leading-tight"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {slide.title}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-jakarta text-white/70 text-base leading-relaxed"
                  >
                    {slide.body}
                  </motion.p>
                </div>

                {/* Bottom: rank badges preview */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="relative z-10 flex items-center gap-2"
                >
                  {[
                    { label: "Tourist", bg: "bg-white/12 border-white/20", text: "text-white/70" },
                    { label: "Citizen", bg: "bg-[#FCD116]/15 border-[#FCD116]/30", text: "text-[#FCD116]" },
                    { label: "Legend", bg: "bg-[#CE1126]/15 border-[#CE1126]/30", text: "text-[#CE1126]" },
                  ].map((r, i) => (
                    <motion.div
                      key={r.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.08, type: "spring" }}
                      className={`flex-1 text-center py-2.5 px-3 rounded-2xl border ${r.bg}`}
                    >
                      <span className={`font-epilogue font-extrabold text-sm ${r.text}`}>
                        {r.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom bar: dots + action ── */}
      <div className="relative z-20 flex items-center justify-between px-8 pb-12 pt-4">
        {/* Dot indicators */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#FCD116]" : "w-2 bg-white/25"
                }`}
            />
          ))}
        </div>

        {/* Next / Get Started */}
        <motion.button
          whileTap={{ scale: 0.93 }}
          onClick={isLast ? finish : () => go(index + 1)}
          className={`flex items-center gap-2 font-epilogue font-extrabold rounded-full px-6 py-3.5 shadow-xl transition-colors ${isLast
            ? "bg-[#FCD116] text-gray-900 text-base"
            : "bg-white/15 text-white text-sm border border-white/20"
            }`}
        >
          {isLast ? "Get Started" : "Next"}
          <ChevronRight className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}
