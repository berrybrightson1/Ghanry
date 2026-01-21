"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Star, Menu, BadgeCheck } from "lucide-react";
import { useXP } from "@/hooks/useXP";
import { useState, useEffect } from "react";

interface BreadcrumbsProps {
    onMenuClick?: () => void;
}

export default function Breadcrumbs({ onMenuClick }: BreadcrumbsProps) {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);
    const { xp } = useXP();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const checkVerified = () => {
            const isVerified = localStorage.getItem('ghanry_verified') === 'true';
            setVerified(isVerified);
        };
        checkVerified();

        window.addEventListener('ghanry_profile_update', checkVerified);
        return () => window.removeEventListener('ghanry_profile_update', checkVerified);
    }, []);

    return (
        <div className="w-full px-6 py-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0">
                {/* Mobile Menu Trigger */}
                <button
                    onClick={onMenuClick}
                    aria-label="Open mobile menu"
                    title="Open mobile menu"
                    className="sm:hidden h-12 w-12 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm transition-all active:scale-95 flex-shrink-0"
                >
                    <Menu className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-1.5 px-4 h-12 bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-sm text-sm font-jakarta overflow-hidden min-w-0 max-w-full">
                    <Link href="/dashboard" className="text-gray-400 font-bold hover:text-[#006B3F] transition-colors flex-shrink-0">
                        Ghanry
                    </Link>

                    {(() => {
                        // If path is too long, show only last 2 segments
                        const displayPaths = paths.length > 2 ? paths.slice(-2) : paths;
                        const isTruncated = paths.length > 2;

                        return (
                            <>
                                {isTruncated && <span className="text-gray-300">...</span>}
                                {displayPaths.map((path, index) => {
                                    const actualIndex = isTruncated ? paths.length - 2 + index : index;
                                    const isLast = actualIndex === paths.length - 1;
                                    const href = `/${paths.slice(0, actualIndex + 1).join("/")}`;
                                    const displayName = path.length > 10 ? "..." : path; // Truncate more on mobile

                                    return (
                                        <div key={path} className="flex items-center gap-1.5 min-w-0 flex-shrink">
                                            <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                                            {isLast ? (
                                                <span className="text-[#006B3F] font-extrabold capitalize truncate">
                                                    {path.length > 10 ? "..." : path}
                                                </span>
                                            ) : (
                                                <Link href={href} className="text-gray-500 font-bold hover:text-gray-800 capitalize transition-colors truncate">
                                                    {displayName}
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                            </>
                        );
                    })()}
                </div>
            </div>

            {/* XP Badge & Verification - Always visible now */}
            <div className="flex items-center gap-2">
                {verified && (
                    <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-100 text-blue-500 shadow-sm animate-in fade-in zoom-in duration-300">
                        <BadgeCheck className="w-5 h-5 fill-blue-500/10" />
                    </div>
                )}

                <div className="inline-flex items-center gap-2 px-3 h-12 bg-yellow-50 border border-yellow-200 rounded-xl shadow-sm text-yellow-700 text-xs font-bold font-jakarta flex-shrink-0">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-600" />
                    <span>{xp} XP</span>
                </div>
            </div>
        </div>
    );
}
