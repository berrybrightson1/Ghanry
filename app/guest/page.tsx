"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2, MapPin, Plane, ArrowLeft, Sparkles } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";

const regions = [
  "Greater Accra", "Ashanti", "Volta", "Northern", "Central", "Eastern",
  "Western", "Western North", "Upper East", "Upper West", "Oti", "Bono",
  "Bono East", "Ahafo", "North East", "Savannah",
];
const diasporaLocations = ["Global Diaspora", "USA", "UK", "Europe", "Rest of World"];

export default function GuestPage() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [locationStatus, setLocationStatus] = useState<"citizen" | "tourist" | null>(null);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Already logged in → dashboard
    const pid  = localStorage.getItem("ghanry_passport_id");
    const nick = localStorage.getItem("ghanry_nickname");
    const reg  = localStorage.getItem("ghanry_region");
    if (pid && nick && reg) {
      router.replace("/dashboard");
    }
  }, [router]);

  const handleEnter = async () => {
    if (!nickname.trim() || nickname.length < 3) return toast.error("Nickname must be at least 3 characters.");
    if (!locationStatus)                         return toast.error("Tell us where you are.");
    if (!selectedRegion)                         return toast.error("Select a region.");

    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 900));

    localStorage.setItem("ghanry_nickname", nickname.trim());
    localStorage.setItem("ghanry_region", selectedRegion);
    localStorage.setItem("ghanry_status", locationStatus);
    localStorage.removeItem("ghanry_passport_id");
    localStorage.removeItem("ghanry_verified");
    localStorage.removeItem("ghanry_avatar");

    setIsSubmitting(false);
    toast.success(`Welcome, ${nickname.trim()}!`);
    router.push("/dashboard");
  };

  return (
    <div className="w-full flex-1 flex flex-col overflow-hidden">

      {/* ── Header ── */}
      <div className="flex-shrink-0 px-6 pt-14 pb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-400 font-jakarta font-bold text-sm mb-8 active:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gray-100 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-gray-500" />
          </div>
          <h1 className="font-epilogue font-extrabold text-3xl text-gray-900">Guest Visit</h1>
        </div>
        <p className="text-gray-400 font-jakarta text-sm leading-relaxed">
          No account needed. Your progress won&apos;t be saved, but you can explore freely.
        </p>
      </div>

      {/* ── Form ── */}
      <div className="flex-1 overflow-y-auto px-6 pb-12 space-y-6">

        {/* Nickname */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            What should we call you?
          </label>
          <input
            type="text"
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="e.g. Kofi Anan"
            autoFocus
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-jakarta font-bold text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-400 transition-all text-base"
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            Where are you right now?
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => { setLocationStatus("citizen"); setSelectedRegion(""); }}
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all active:scale-95 ${
                locationStatus === "citizen"
                  ? "border-[#006B3F] bg-[#006B3F]/5 text-[#006B3F]"
                  : "border-gray-100 bg-gray-50 text-gray-400"
              }`}
            >
              <MapPin className="w-6 h-6" />
              <span className="font-epilogue font-bold text-sm">In Ghana</span>
            </button>
            <button
              onClick={() => { setLocationStatus("tourist"); setSelectedRegion(""); }}
              className={`p-4 rounded-2xl border-2 flex flex-col items-center gap-2 transition-all active:scale-95 ${
                locationStatus === "tourist"
                  ? "border-[#006B3F] bg-[#006B3F]/5 text-[#006B3F]"
                  : "border-gray-100 bg-gray-50 text-gray-400"
              }`}
            >
              <Plane className="w-6 h-6" />
              <span className="font-epilogue font-bold text-sm">Abroad</span>
            </button>
          </div>
        </div>

        {/* Region */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            {locationStatus === "tourist" ? "Your Base" : "Home Region"}
          </label>
          <CustomSelect
            options={locationStatus === "tourist" ? diasporaLocations : regions}
            placeholder={locationStatus === "tourist" ? "Select your base" : "Select Region"}
            value={selectedRegion}
            onChange={setSelectedRegion}
          />
        </div>

        {/* Guest disclaimer */}
        <div className="flex gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
          <Sparkles className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-amber-700 font-jakarta text-xs leading-relaxed">
            Guest progress is stored locally and cleared when you log out.
            Create a free account anytime to save your XP and rank.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleEnter}
          disabled={isSubmitting}
          className="w-full py-4 bg-gray-900 text-white font-epilogue font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 disabled:opacity-60 active:scale-[0.98] transition-transform"
        >
          {isSubmitting
            ? <><Loader2 className="w-5 h-5 animate-spin" /> Entering...</>
            : <><Sparkles className="w-5 h-5" /> Enter as Guest</>}
        </button>

        {/* Upgrade nudge */}
        <button
          onClick={() => router.push("/")}
          className="w-full text-center text-sm font-bold text-gray-400 font-jakarta pt-2"
        >
          Want to save progress?{" "}
          <span className="text-[#006B3F]">Create an account →</span>
        </button>
      </div>
    </div>
  );
}
