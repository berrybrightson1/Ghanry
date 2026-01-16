import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
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

      <body className={`${epilogue.variable} ${jakarta.variable} antialiased bg-gradient-to-br from-green-950 via-green-900 to-black min-h-screen flex flex-col items-center justify-start sm:justify-center overflow-y-auto`}
      >
        {/* Mobile Container Strategy */}
        <div className="w-full min-h-[100dvh] sm:min-h-[700px] sm:h-[85vh] sm:max-w-5xl sm:my-10 bg-white/20 backdrop-blur-3xl sm:rounded-3xl shadow-2xl overflow-hidden relative flex flex-col items-stretch font-jakarta border border-white/10">
          {children}

          {/* Global Toast Notification */}
          <div className="absolute bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="pointer-events-auto">
              <Toaster position="bottom-center" toastOptions={{
                className: 'bg-white text-gray-900 border border-gray-100 shadow-xl rounded-2xl px-4 py-3 font-jakarta',
                style: { marginBottom: '20px' },
              }} />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
