"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame, Calendar, Settings, Gamepad2, LogOut, ChevronRight, BadgeCheck,
  Square, Circle, Triangle, Hexagon, Octagon, Star, Zap, Shield, Heart, Ghost,
} from "lucide-react";
import { useXP } from "@/hooks/useXP";
import { calculateProgress, getRankColor } from "@/lib/gamification";

const MORE_LINKS = [
  { path: "/dashboard/streak",   icon: Flame,    label: "My Journey"     },
  { path: "/dashboard/holidays", icon: Calendar, label: "Holidays"       },
  { path: "/dashboard/games",    icon: Gamepad2, label: "Sika Fie Games" },
  { path: "/dashboard/settings", icon: Settings, label: "Settings"       },
];

const SHAPE_ICONS: Record<string, React.ElementType> = {
  Square, Circle, Triangle, Hexagon, Octagon, Star, Zap, Shield, Heart, Ghost,
};

const SPRING = { type: "spring" as const, stiffness: 320, damping: 30, mass: 0.85 };

interface ProfileSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function ProfileSheet({ open, onClose }: ProfileSheetProps) {
  const router   = useRouter();
  const pathname = usePathname();
  const { xp }   = useXP();

  // State to avoid hydration mismatch
  const [userData, setUserData] = useState({
    nickname: "Guest",
    avatarRaw: undefined as string | undefined,
    passportId: null as string | null,
    status: undefined as string | undefined,
    verified: false,
    isGuest: true
  });

  useEffect(() => {
    const nick = localStorage.getItem("ghanry_nickname") ?? "Guest";
    const avatar = localStorage.getItem("ghanry_avatar") ?? undefined;
    const pid = localStorage.getItem("ghanry_passport_id");
    const stat = localStorage.getItem("ghanry_status") ?? undefined;
    const isVer = localStorage.getItem("ghanry_verified") === "true";
    
    setUserData({
      nickname: nick,
      avatarRaw: avatar,
      passportId: pid,
      status: stat,
      verified: isVer,
      isGuest: !pid
    });

    // Also close sheet on route change
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const { nickname, avatarRaw, status, verified, isGuest } = userData;

  const { rank, progressPercent } = calculateProgress(xp);
  let displayRank = rank;
  if (status === "citizen" && (rank === "Tourist" || rank === "Expat")) displayRank = "GHANAIAN";

  const handleSignOut = () => {
    onClose();
    ["ghanry_passport_id","ghanry_nickname","ghanry_region","ghanry_status",
     "ghanry_verified","ghanry_avatar","ghanry_xp"].forEach(k => localStorage.removeItem(k));
    router.push("/");
  };

  const AvatarDisplay = ({ size }: { size: "sm" | "lg" }) => {
    const dim = size === "lg" ? "text-2xl" : "text-sm";
    if (avatarRaw?.startsWith("icon:")) {
      const Icon = SHAPE_ICONS[avatarRaw.split(":")[1]];
      return Icon ? <Icon size={size === "lg" ? 28 : 18} className="text-[#006B3F]" /> : <span>?</span>;
    }
    return <span className={`font-epilogue font-extrabold ${dim} text-gray-700`}>{nickname.slice(0, 2).toUpperCase()}</span>;
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — absolute, fills the entire layout div */}
          <motion.div
            className="absolute inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Sheet — anchored to the bottom of the layout div */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-[28px] flex flex-col overflow-hidden"
            style={{ maxHeight: "82%" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={SPRING}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.04, bottom: 0.35 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 400) onClose();
            }}
          >
            {/* Drag handle */}
            <div
              className="pt-3 pb-2 flex justify-center flex-shrink-0 cursor-grab active:cursor-grabbing"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-10 h-1.5 bg-gray-200 rounded-full" />
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1" onPointerDown={e => e.stopPropagation()}>

              {/* ── User card ── */}
              <div className="px-5 pt-1 pb-5">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-[54px] h-[54px] rounded-2xl bg-white border-2 border-[#FCD116] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <AvatarDisplay size="lg" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-epilogue font-bold text-gray-900 truncate">
                        {nickname}
                      </span>
                      {verified && !isGuest && (
                        <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      )}
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider ${
                      isGuest ? "text-gray-400" : getRankColor(rank)
                    }`}>
                      {isGuest ? "Guest Account" : displayRank}
                    </span>

                    {!isGuest && (
                      <div className="mt-2">
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-[#006B3F] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercent}%` }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-[10px] text-gray-400 font-jakarta font-bold">{xp} XP</span>
                          <span className="text-[10px] text-gray-400 font-jakarta">
                            {Math.round(progressPercent)}% to next rank
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ── More links ── */}
              <div className="px-5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 px-1">
                  More
                </p>
                <div className="space-y-0.5">
                  {MORE_LINKS.map(item => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="flex items-center gap-3 px-3 py-3.5 rounded-2xl active:bg-gray-100 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-gray-500" />
                      </div>
                      <span className="flex-1 font-jakarta font-bold text-gray-800 text-sm">
                        {item.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Sign out ── */}
              <div className="px-5 pt-2 pb-8">
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-3 px-3 py-3.5 rounded-2xl active:bg-red-50 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <LogOut className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="font-jakarta font-bold text-sm text-red-500">Sign Out</span>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
