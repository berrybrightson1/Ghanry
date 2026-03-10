"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Gamepad2, Sparkles, Trophy } from "lucide-react";

const TABS = [
  { path: "/dashboard",             icon: Home,     label: "Home"  },
  { path: "/dashboard/categories",  icon: Gamepad2, label: "Play"  },
  { path: "/dashboard/gist",        icon: Sparkles, label: "Gist"  },
  { path: "/dashboard/leaderboard", icon: Trophy,   label: "Board" },
];

function isActive(path: string, pathname: string) {
  if (path === "/dashboard") return pathname === "/dashboard";
  return pathname.startsWith(path);
}

interface BottomNavProps {
  onProfileOpen: () => void;
  avatarInitials: string;
  isYouActive: boolean;
}

export default function BottomNav({ onProfileOpen, avatarInitials, isYouActive }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex-shrink-0 h-[60px] bg-white border-t border-gray-100/80 flex items-stretch px-1">
      {TABS.map(tab => {
        const active = isActive(tab.path, pathname);
        return (
          <Link
            key={tab.path}
            href={tab.path}
            className="flex-1 flex flex-col items-center justify-center gap-0.5"
          >
            {/* Icon with pill background when active */}
            <div className={`flex items-center justify-center w-12 h-8 rounded-2xl transition-all duration-200 ${
              active ? "bg-[#006B3F]/10" : ""
            }`}>
              <tab.icon
                className={`w-[21px] h-[21px] transition-colors duration-200 ${
                  active ? "text-[#006B3F]" : "text-gray-400"
                }`}
                strokeWidth={active ? 2.5 : 1.8}
              />
            </div>
            <span className={`text-[10px] font-bold font-jakarta leading-none transition-colors duration-200 ${
              active ? "text-[#006B3F]" : "text-gray-400"
            }`}>
              {tab.label}
            </span>
          </Link>
        );
      })}

      {/* You tab */}
      <button
        onClick={onProfileOpen}
        className="flex-1 flex flex-col items-center justify-center gap-0.5"
      >
        <div className={`flex items-center justify-center w-12 h-8 rounded-2xl transition-all duration-200 ${
          isYouActive ? "bg-[#006B3F]/10" : ""
        }`}>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-gray-100 border-[1.5px] transition-all duration-200 ${
            isYouActive ? "border-[#006B3F]" : "border-transparent"
          }`}>
            <span className={`font-bold text-[10px] leading-none transition-colors duration-200 ${
              isYouActive ? "text-[#006B3F]" : "text-gray-500"
            }`}>
              {avatarInitials}
            </span>
          </div>
        </div>
        <span className={`text-[10px] font-bold font-jakarta leading-none transition-colors duration-200 ${
          isYouActive ? "text-[#006B3F]" : "text-gray-400"
        }`}>
          You
        </span>
      </button>
    </nav>
  );
}
