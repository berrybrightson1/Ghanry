"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, Menu } from "lucide-react";

interface BreadcrumbsProps {
    xp?: number;
    onMenuClick?: () => void;
}

export default function Breadcrumbs({ xp = 0, onMenuClick }: BreadcrumbsProps) {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);

    return (
        <div className="w-full px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                {/* Mobile Menu Trigger */}
                <button
                    onClick={onMenuClick}
                    aria-label="Open mobile menu"
                    title="Open mobile menu"
                    className="sm:hidden h-12 w-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm transition-all active:scale-95 flex-shrink-0"
                >
                    <Menu className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-2 px-4 h-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm text-sm font-jakarta flex-1 overflow-hidden">
                    <Link href="/dashboard" className="text-gray-400 font-bold hover:text-[#006B3F] transition-colors flex-shrink-0">
                        Ghanry
                    </Link>

                    {paths.map((path, index) => {
                        const isLast = index === paths.length - 1;
                        const href = `/${paths.slice(0, index + 1).join("/")}`;

                        return (
                            <div key={path} className="flex items-center gap-2">
                                <ChevronRight className="w-3 h-3 text-gray-300" />
                                {isLast ? (
                                    <span className="text-[#006B3F] font-extrabold capitalize">
                                        {path}
                                    </span>
                                ) : (
                                    <Link href={href} className="text-gray-500 font-bold hover:text-gray-800 capitalize transition-colors">
                                        {path}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* XP Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 px-3 h-12 bg-yellow-50 border border-yellow-200 rounded-xl shadow-sm text-yellow-700 text-xs font-bold font-jakarta">
                <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-600" />
                <span>{xp} XP</span>
            </div>
        </div>
    );
}
