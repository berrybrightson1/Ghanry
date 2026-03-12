"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, MapPinOff, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-6 text-center bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 flex">
        <div className="flex-1 bg-[#CE1126]" />
        <div className="flex-1 bg-[#FCD116]" />
        <div className="flex-1 bg-[#006B3F]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center"
          >
            <MapPinOff className="w-12 h-12 text-[#CE1126]" />
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="absolute -top-2 -right-2 bg-[#FCD116] text-gray-900 font-epilogue font-bold text-xs px-3 py-1 rounded-full shadow-lg"
          >
            404
          </motion.div>
        </div>

        <div className="space-y-2">
          <h1 className="font-epilogue font-extrabold text-3xl text-gray-900 tracking-tight">
            Lost in the <span className="text-[#006B3F]">Savannah?</span>
          </h1>
          <p className="font-jakarta text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
            We couldn&apos;t find the page you&apos;re looking for. It might have moved or doesn&apos;t exist.
          </p>
        </div>

        <div className="w-full space-y-3 pt-4">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#006B3F] text-white font-epilogue font-bold rounded-2xl shadow-lg shadow-green-900/10 active:scale-95 transition-transform"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </Link>
          
          <Link
            href="/"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gray-50 text-gray-600 font-jakarta font-bold rounded-2xl border border-gray-100 active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-4 h-4" />
            Go to Welcome Page
          </Link>
        </div>
      </motion.div>

      {/* Flag Accent Stripe Footer */}
      <div className="absolute bottom-0 left-0 w-full h-1 flex opacity-20">
        <div className="flex-1 bg-[#CE1126]" />
        <div className="flex-1 bg-[#FCD116]" />
        <div className="flex-1 bg-[#006B3F]" />
      </div>
    </div>
  );
}
