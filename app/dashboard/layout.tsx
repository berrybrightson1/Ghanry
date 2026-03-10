"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import TopBar from "@/components/dashboard/TopBar";
import BottomNav from "@/components/dashboard/BottomNav";
import ProfileSheet from "@/components/dashboard/ProfileSheet";
import ProverbSheet, { type Proverb } from "@/components/dashboard/ProverbSheet";
import Link from "next/link";
import { MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Tabs that have a dedicated bottom-nav button
const PRIMARY_TAB_PATHS = [
  "/dashboard",
  "/dashboard/categories",
  "/dashboard/gist",
  "/dashboard/leaderboard",
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname    = usePathname();
    const isChatPage  = pathname === "/dashboard/ask";
    const [showProfile, setShowProfile] = useState(false);
    const [avatarInitials, setAvatarInitials] = useState("ME");
    const [showLocationBanner, setShowLocationBanner] = useState(false);
    const [activeProverb, setActiveProverb] = useState<Proverb | null>(null);

    // "You" tab is visually active when on any non-primary-tab route
    const isYouActive = !PRIMARY_TAB_PATHS.some(p =>
        p === "/dashboard" ? pathname === "/dashboard" : pathname.startsWith(p)
    );

    useEffect(() => {
        const storedId       = localStorage.getItem("ghanry_passport_id");
        const storedNickname = localStorage.getItem("ghanry_nickname");

        if (!storedId && !storedNickname) {
            window.location.href = "/";
            return;
        }

        // Derive avatar initials
        setAvatarInitials((storedNickname ?? "ME").slice(0, 2).toUpperCase());

        // Prompt registered users who haven't set a location
        if (storedId && !localStorage.getItem("ghanry_location")) {
            setShowLocationBanner(true);
        }

        // Auto-verify owner
        if (storedId === "GH-1193-F" && !localStorage.getItem("ghanry_verified")) {
            localStorage.setItem("ghanry_verified", "true");
            window.dispatchEvent(new Event("ghanry_profile_update"));
        }

        // Dismiss location banner when user saves a location
        const handleLocationUpdate = () => setShowLocationBanner(false);
        window.addEventListener("ghanry_location_update", handleLocationUpdate);

        // Open proverb sheet from any page
        const handleProverbOpen = (e: Event) => {
            setActiveProverb((e as CustomEvent<Proverb>).detail);
        };
        window.addEventListener("ghanry_proverb_open", handleProverbOpen);

        // Background Firestore sync
        let timer: ReturnType<typeof setTimeout> | undefined;
        if (storedId) {
            timer = setTimeout(async () => {
                try {
                    const { loadFromFirestore } = await import("@/lib/userSync");
                    const data = await loadFromFirestore(storedId);
                    if (data) {
                        const currentVerified = localStorage.getItem("ghanry_verified") === "true";
                        if (data.verified && !currentVerified) {
                            localStorage.setItem("ghanry_verified", "true");
                            window.dispatchEvent(new Event("ghanry_profile_update"));
                        }
                        if (data.completedLevels) {
                            localStorage.setItem("ghanry_completed_levels", JSON.stringify(data.completedLevels));
                        }
                    }
                } catch (e) {
                    console.error("Background sync failed", e);
                }
            }, 2000);
        }

        return () => {
            window.removeEventListener("ghanry_location_update", handleLocationUpdate);
            window.removeEventListener("ghanry_proverb_open", handleProverbOpen);
            clearTimeout(timer);
        };
    }, []);

    return (
        /*
         * IMPORTANT: This div is `relative` but NOT `overflow-hidden`.
         * The ProfileSheet uses `absolute` positioning and needs to be
         * able to overlay the full phone shell without being clipped.
         * The app shell (in root layout.tsx) already provides overflow-hidden
         * as the visual boundary.
         */
        <div className="w-full flex-1 flex flex-col bg-gray-50 h-full relative">

            {/* ── Top bar ── */}
            <TopBar />

            {/* ── Scrollable page content ── */}
            <div className={`flex-1 relative ${
                isChatPage ? "overflow-hidden flex flex-col" : "overflow-y-auto"
            }`}>
                <div className={isChatPage ? "h-full flex flex-col" : "min-h-full"}>
                    {children}
                </div>
            </div>

            {/* ── Location toast ── */}
            <AnimatePresence>
                {showLocationBanner && (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                        className="absolute bottom-[72px] left-0 right-0 flex justify-center px-4 z-30 pointer-events-none"
                    >
                        <div className="pointer-events-auto flex items-center gap-2.5 bg-gray-900 text-white rounded-2xl px-4 py-3 shadow-2xl shadow-black/40 max-w-xs w-full">
                            <div className="w-7 h-7 rounded-full bg-[#FCD116]/20 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-3.5 h-3.5 text-[#FCD116]" />
                            </div>
                            <p className="flex-1 text-[12px] font-bold font-jakarta leading-tight">
                                Add your location to personalise results.{" "}
                                <Link href="/dashboard/settings" className="text-[#FCD116] underline-offset-2 underline">
                                    Update now
                                </Link>
                            </p>
                            <button
                                onClick={() => setShowLocationBanner(false)}
                                className="p-1 rounded-full text-white/40 active:text-white flex-shrink-0"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Bottom tab bar ── */}
            <BottomNav
                onProfileOpen={() => setShowProfile(true)}
                avatarInitials={avatarInitials}
                isYouActive={isYouActive}
            />

            {/*
             * Profile sheet is rendered HERE — as a direct child of this
             * `relative` container, after BottomNav in the DOM (higher stacking).
             * Uses `absolute bottom-0 left-0 right-0` so it fills the phone shell
             * exactly, regardless of desktop viewport size.
             */}
            <ProfileSheet
                open={showProfile}
                onClose={() => setShowProfile(false)}
            />

            <ProverbSheet
                proverb={activeProverb}
                onClose={() => setActiveProverb(null)}
            />
        </div>
    );
}
