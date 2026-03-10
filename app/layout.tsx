import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  adjustFontFallback: false,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Ghanry",
  description: "Gamified citizenship quiz for the Ghanaian Diaspora",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ghanry",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  icons: {
    apple: "/icons/icon-512.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#006B3F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*
        Desktop background: dark neutral so the app looks like a phone
        floating on a desk surface.
      */}
      <body
        className={`${epilogue.variable} ${jakarta.variable} antialiased bg-neutral-900 flex items-start justify-center min-h-screen`}
      >
        {/*
          Mobile-only app shell.
          - max-w-sm  →  caps at 384 px (phone width)
          - h-[100dvh] →  full dynamic viewport height, no address-bar flicker
          - overflow-hidden → clips everything; sheets/overlays use absolute positioning
          - relative → anchor for absolute-positioned overlays & sheets
          - w-full → fills narrower screens (real phones) edge-to-edge
        */}
        <div
          className={`
            w-full max-w-sm
            h-[100dvh]
            overflow-hidden
            bg-white
            shadow-2xl
            relative
            flex flex-col
            font-jakarta
          `}
        >
          {children}

          {/* Global toasts — offset clears the 60px bottom nav */}
          <Toaster
            position="bottom-center"
            offset="80px"
            toastOptions={{
              unstyled: true,
              classNames: {
                toast:
                  "flex items-start gap-3 w-full bg-gray-900 text-white rounded-2xl px-4 py-3 shadow-2xl shadow-black/40 font-jakarta",
                title:
                  "text-white font-bold text-sm leading-snug",
                description:
                  "text-white/60 text-xs font-medium leading-snug mt-0.5",
                actionButton:
                  "!bg-[#FCD116] !text-gray-900 !font-bold !text-xs !rounded-xl !px-3 !py-1.5 !ml-auto !flex-shrink-0",
                closeButton:
                  "!bg-white/10 !text-white/60 !rounded-xl",
              },
              duration: 2000,
            }}
          />
        </div>
      </body>
    </html>
  );
}
