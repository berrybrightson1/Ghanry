"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CustomSelect from "@/components/CustomSelect";
import { Loader2, Sparkles, MapPin, Plane } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [nickname, setNickname] = useState("");
  const [locationStatus, setLocationStatus] = useState<"citizen" | "tourist" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = async () => {
    // Validation
    if (!nickname.trim() || nickname.length < 3) {
      toast.error("Please enter a valid nickname (min 3 chars).");
      return;
    }
    if (!locationStatus) {
      toast.error("Please tell us if you are in Ghana or Abroad!");
      return;
    }
    if (!selectedRegion) {
      toast.error(locationStatus === 'citizen' ? "Please select your home region!" : "Please select the region you are visiting!");
      return;
    }

    setIsSubmitting(true);

    // Simulate "Joining Global Database" delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    localStorage.setItem("ghanry_nickname", nickname.trim());
    localStorage.setItem("ghanry_region", selectedRegion);
    localStorage.setItem("ghanry_status", locationStatus);

    const successMessage = locationStatus === 'citizen'
      ? 'Welcome Home, Citizen! Your ID is ready.'
      : 'Welcome to Ghana! Tourist Visa Granted.';

    toast.success(successMessage, {
      description: `Enjoy your stay, ${nickname}!`,
      duration: 4000
    });

    router.push("/dashboard");
  };

  return (
    <div className="w-full flex-1 flex flex-col md:flex-row h-full">

      {/* Left: Branding Section (Green) */}
      <div className="w-full md:w-1/2 bg-[#006B3F] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">

        {/* Abstract Pattern Overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-8">
            <span className="font-epilogue font-bold text-white text-xl">GH</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-epilogue font-extrabold text-white mb-4 leading-tight">
            Akwaaba!
          </h1>
          <p className="text-white/80 font-jakarta text-lg leading-relaxed max-w-sm">
            Test your knowledge of our motherland. Join the global ranks of citizens.
          </p>
        </div>

        {/* Footer Decor */}
        <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mt-8 md:mt-0">
          <div className="w-8 h-1 bg-[#FCD116] rounded-full" />
          <span>Official Portal</span>
        </div>
      </div>

      {/* Right: Action Section (White/Gray) */}
      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center items-start gap-6">

        {/* Form Container */}
        <div className="w-full max-w-sm space-y-5">

          {/* Nickname Input */}
          <div className="space-y-2">
            <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">
              What should we call you?
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="e.g. Kwame Jet"
              disabled={isSubmitting}
              className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl font-epilogue font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
            />
          </div>

          {/* Location Check (Tourist vs Citizen) */}
          <div className="space-y-2">
            <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">
              Where are you right now?
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setLocationStatus('citizen');
                  setSelectedRegion("");
                }}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${locationStatus === 'citizen'
                  ? "bg-[#006B3F]/10 border-[#006B3F] text-[#006B3F]"
                  : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                  }`}
              >
                <MapPin className="w-6 h-6" />
                <span className="font-epilogue font-bold text-sm">In Ghana</span>
              </button>
              <button
                onClick={() => {
                  setLocationStatus('tourist');
                  setSelectedRegion("");
                }}
                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${locationStatus === 'tourist'
                  ? "bg-[#006B3F]/10 border-[#006B3F] text-[#006B3F]"
                  : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"
                  }`}
              >
                <Plane className="w-6 h-6" />
                <span className="font-epilogue font-bold text-sm">Abroad</span>
              </button>
            </div>
          </div>

          {/* Region Select */}
          <div className="space-y-2">
            <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">
              {locationStatus === 'tourist' ? "Select your base" : "Home Region"}
            </label>
            <CustomSelect
              options={
                locationStatus === 'tourist'
                  ? ["Global Diaspora", "USA", "UK", "Europe", "Rest of World"]
                  : [
                    "Greater Accra", "Ashanti", "Volta", "Northern",
                    "Central", "Eastern", "Western", "Western North",
                    "Upper East", "Upper West", "Oti", "Bono",
                    "Bono East", "Ahafo", "North East", "Savannah"
                  ]
              }
              placeholder={locationStatus === 'tourist' ? "Select Location" : "Select Region"}
              value={selectedRegion}
              onChange={setSelectedRegion}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleStart}
            disabled={isSubmitting}
            className="w-full py-4 bg-[#FCD116] hover:bg-[#eec308] disabled:opacity-80 disabled:cursor-wait text-black font-epilogue font-extrabold text-lg rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing Visa...</span>
              </>
            ) : (
              <>
                <span>Enter Ghana</span>
                <Sparkles className="w-5 h-5 opacity-40" />
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-center w-full max-w-sm text-gray-400 font-jakarta mt-2">
          By joining, you agree to become a loyal citizen.
        </p>

      </div>
    </div>
  );
}
