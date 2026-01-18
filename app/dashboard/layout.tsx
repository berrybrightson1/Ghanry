"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import Breadcrumbs from "@/components/dashboard/Breadcrumbs";
import { useEffect, useState } from "react";

import MobileSidebar from "@/components/dashboard/MobileSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [userData, setUserData] = useState<{ nickname: string; region: string; isGuest: boolean } | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Basic auth/data check
        const storedNickname = localStorage.getItem("ghanry_nickname") || "Guest";
        const storedRegion = localStorage.getItem("ghanry_region") || "Ghana";
        const isGuest = !localStorage.getItem("ghanry_passport_id");
        setUserData({ nickname: storedNickname, region: storedRegion, isGuest });
    }, []);

    if (!userData) return null;

    return (
        <div className="w-full flex-1 flex flex-col sm:flex-row overflow-hidden bg-gray-50 h-full">
            <MobileSidebar
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                nickname={userData.nickname}
            />

            {/* Desktop Sidebar (Hidden on Mobile) */}
            <div className="hidden sm:block w-[280px] h-full flex-shrink-0 shadow-xl z-20">
                <Sidebar nickname={userData.nickname} isGuest={userData.isGuest} />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 h-full relative flex flex-col overflow-hidden">
                {/* Fixed Header */}
                <div className="flex-shrink-0 sticky top-0 z-30 w-full bg-gray-50/90 backdrop-blur-md border-b border-gray-100/50">
                    <Breadcrumbs onMenuClick={() => setIsMobileMenuOpen(true)} />
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto relative">
                    <div className="min-h-full pb-24 sm:pb-8">
                        {children}
                    </div>
                </div>

                {/* Mobile Bottom Nav removed per user request */}
                {/* <div className="sm:hidden">
                    <BottomNav />
                </div> */}
            </div>

        </div>
    );
}
