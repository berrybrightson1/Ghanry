"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, Star, BadgeCheck } from "lucide-react";
import { useXP } from "@/hooks/useXP";
import { useState, useEffect } from "react";

// Which paths are "root" tabs — no back button, show brand mark
const PRIMARY_PATHS = new Set([
  "/dashboard",
  "/dashboard/categories",
  "/dashboard/gist",
  "/dashboard/leaderboard",
]);

const PAGE_TITLES: Record<string, string> = {
  "/dashboard":              "Home",
  "/dashboard/categories":   "Play Quiz",
  "/dashboard/gist":         "Ghana Now",
  "/dashboard/leaderboard":  "Leaderboard",
  "/dashboard/streak":       "My Journey",
  "/dashboard/holidays":     "Holidays",
  "/dashboard/games":        "Sika Fie Games",
  "/dashboard/settings":     "Settings",
};

function getTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) return PAGE_TITLES[pathname];
  // sub-pages like /dashboard/gist/[id] or /dashboard/categories/[slug]
  const parts = pathname.split("/").filter(Boolean);
  if (parts[1]) {
    const parent = `/${parts[0]}/${parts[1]}`;
    return PAGE_TITLES[parent] ?? parts[parts.length - 1];
  }
  return "Ghanry";
}

export default function TopBar() {
  const pathname  = usePathname();
  const router    = useRouter();
  const { xp }    = useXP();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const check = () => setVerified(localStorage.getItem("ghanry_verified") === "true");
    check();
    window.addEventListener("ghanry_profile_update", check);
    return () => window.removeEventListener("ghanry_profile_update", check);
  }, []);

  const isPrimary = PRIMARY_PATHS.has(pathname);
  const title     = getTitle(pathname);

  return (
    <div className="flex-shrink-0 h-14 px-4 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-gray-100/80">

      {/* Left — back or brand */}
      {isPrimary ? (
        <span className="font-epilogue font-extrabold text-xl tracking-tight">
          <span className="text-gray-900">Gha</span>
          <span className="text-[#006B3F]">nry</span>
        </span>
      ) : (
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 active:opacity-50 transition-opacity"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-jakarta font-bold text-sm text-gray-700">{title}</span>
        </button>
      )}

      {/* Right — XP + optional verified badge */}
      <div className="flex items-center gap-2">
        {verified && (
          <div className="h-8 w-8 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>
        )}
        <div className="flex items-center gap-1.5 px-3 h-8 bg-amber-50 border border-amber-200 rounded-xl">
          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
          <span className="font-jakarta font-bold text-xs text-amber-700">{xp} XP</span>
        </div>
      </div>
    </div>
  );
}
