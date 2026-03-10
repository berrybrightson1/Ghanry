"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NativeSheetProps {
  trigger: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const SPRING = { type: "spring" as const, damping: 30, stiffness: 320, mass: 0.8 };
const DRAG_CLOSE_THRESHOLD = 120; // px dragged down to dismiss

export default function NativeSheet({ trigger, title, children }: NativeSheetProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Trigger — wrapped in a div to capture click */}
      <div onClick={() => setOpen(true)} className="contents">
        {trigger}
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* ── Backdrop ── */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* ── Bottom Sheet ── */}
            <motion.div
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm z-50 flex flex-col bg-white rounded-t-[28px] shadow-2xl"
              style={{ height: "93dvh", maxHeight: "93dvh" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={SPRING}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0.05, bottom: 0.4 }}
              dragListener={true}
              onDragEnd={(_, info) => {
                if (info.offset.y > DRAG_CLOSE_THRESHOLD || info.velocity.y > 500) {
                  setOpen(false);
                }
              }}
            >
              {/* ── Drag Handle ── */}
              <div className="pt-3 pb-2 flex justify-center flex-shrink-0 cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>

              {/* ── Header ── */}
              <div className="flex items-center justify-between px-5 pb-4 flex-shrink-0 border-b border-gray-100">
                <h2 className="font-epilogue font-bold text-gray-900 text-base leading-snug flex-1 pr-3 line-clamp-1">
                  {title}
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 active:bg-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* ── Scrollable Content ── */}
              <div
                ref={contentRef}
                className="flex-1 overflow-y-auto overscroll-contain"
                // Allow touch scroll inside content without triggering sheet drag
                onPointerDown={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
