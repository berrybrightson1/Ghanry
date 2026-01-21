"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    nickname: string;
    isGuest?: boolean;
    avatar?: string;
    status?: 'citizen' | 'tourist';
    verified?: boolean;
}

export default function MobileSidebar({ isOpen, onClose, nickname, isGuest, avatar, status, verified }: MobileSidebarProps) {
    const pathname = usePathname();

    // Close on route change
    useEffect(() => {
        if (isOpen) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 sm:hidden"
                    />

                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 sm:hidden shadow-2xl overflow-hidden"
                    >
                        {/* Close button - absolute for overlay */}
                        <div className="absolute top-4 right-4 z-[60]">
                            <button
                                onClick={onClose}
                                className="p-3 bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors shadow-sm"
                                aria-label="Close menu"
                                title="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Force full height for individual sidebar children */}
                        <Sidebar
                            nickname={nickname}
                            isGuest={isGuest}
                            avatar={avatar}
                            status={status}
                            verified={verified}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
