"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CustomSelect from "@/components/CustomSelect";
import {
  Loader2, Sparkles, Lock, ShieldCheck,
  ArrowLeft, CheckCircle2, Copy, KeyRound, AlertTriangle, MapPin, Plane
} from "lucide-react";
import Link from "next/link";
import { createAccount, verifyUser, getUser } from "@/lib/passport";
import { getRandomChallenge, Question } from "@/lib/quiz";

type View = "signup" | "login" | "success" | "recovery" | "locked";

export default function AuthPage() {
  const router = useRouter();

  const [viewMode, setViewMode] = useState<View>("signup");
  const [activeTab, setActiveTab] = useState<"signup" | "login">("signup");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Registration
  const [nickname, setNickname] = useState("");
  const [location, setLocation] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [locationStatus, setLocationStatus] = useState<"citizen" | "tourist" | null>(null);
  const [pin, setPin] = useState("");

  const [confirmPin, setConfirmPin] = useState("");
  const [newPassportId, setNewPassportId] = useState("");

  // Login
  const [loginId, setLoginId] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);

  // Recovery
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [recoveredPin, setRecoveredPin] = useState<string | null>(null);

  // ── Redirect logic ─────────────────────────────────────────────────────────
  useEffect(() => {
    // Already logged in → dashboard
    const pid = localStorage.getItem("ghanry_passport_id");
    const nick = localStorage.getItem("ghanry_nickname");
    const reg = localStorage.getItem("ghanry_region");
    if (pid && nick && reg) {
      router.replace("/dashboard");
      return;
    }
    // Lockout check (preserve locked state for when they return from onboarding)
    const lockoutStr = localStorage.getItem("ghanry_lockout_until");
    if (lockoutStr && Date.now() < parseInt(lockoutStr)) {
      setViewMode("locked");
      return;
    }

    // Bypass redirect if they just finished onboarding
    if (window.location.search.includes("onboarded=true")) {
      return;
    }

    // Not signed in → always show onboarding first
    router.replace("/onboarding");
  }, [router]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const formatPassportId = (value: string) => {
    const clean = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    const core = clean.startsWith("GH") ? clean.substring(2) : clean;
    if (core.length === 0 && clean.length > 0 && clean.length <= 2) return clean;
    if (core.length === 0) return "";
    let formatted = "GH";
    if (core.length > 0) formatted += "-" + core.substring(0, 4);
    if (core.length > 4) formatted += "-" + core.substring(4, 5);
    return formatted;
  };

  const regions = [
    "Greater Accra", "Ashanti", "Volta", "Northern", "Central", "Eastern",
    "Western", "Western North", "Upper East", "Upper West", "Oti", "Bono",
    "Bono East", "Ahafo", "North East", "Savannah",
  ];
  const diasporaLocations = ["Global Diaspora", "USA", "UK", "Europe", "Rest of World"];

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleSignUp = async () => {
    if (!nickname.trim() || nickname.length < 3) return toast.error("Valid nickname required.");
    if (!location.trim()) return toast.error("City / Location required.");
    if (!selectedRegion) return toast.error("Home Region required.");
    if (!locationStatus) return toast.error("Status required.");
    if (pin.length !== 4) return toast.error("PIN must be 4 digits.");
    if (pin !== confirmPin) return toast.error("PINs do not match.");

    setIsSubmitting(true);
    const result = await createAccount(nickname, selectedRegion, pin, locationStatus);
    setIsSubmitting(false);

    if (result.success && result.passportId) {
      setNewPassportId(result.passportId);
      localStorage.setItem("ghanry_passport_id", result.passportId);
      localStorage.setItem("ghanry_status", "citizen");
      localStorage.setItem("ghanry_nickname", nickname);
      localStorage.setItem("ghanry_region", selectedRegion);
      localStorage.setItem("ghanry_location", location.trim());
      setViewMode("success");
      toast.success("Passport Issued Successfully!");
    } else {
      toast.error(`Registration failed: ${result.error?.toString() ?? "Unknown error"}`);
    }
  };

  const handleLogin = async () => {
    if (!loginId.trim()) return toast.error("Enter Passport ID");
    if (loginPin.length !== 4) return toast.error("Enter 4-digit PIN");

    setIsSubmitting(true);
    const result = await verifyUser(loginId.toUpperCase(), loginPin);
    setIsSubmitting(false);

    if (result.success) {
      localStorage.setItem("ghanry_passport_id", loginId.toUpperCase());
      localStorage.setItem("ghanry_status", "citizen");
      localStorage.setItem("ghanry_nickname", result.user?.nickname ?? "Citizen");
      localStorage.setItem("ghanry_region", result.user?.region ?? "Greater Accra");
      if (result.user?.avatar) localStorage.setItem("ghanry_avatar", result.user.avatar);
      if (result.user?.xp !== undefined) localStorage.setItem("ghanry_xp", result.user.xp.toString());
      if (result.user?.verified) localStorage.setItem("ghanry_verified", "true");
      setLoginAttempts(0);
      toast.success(`Welcome back, ${result.user?.nickname ?? "Citizen"}!`);
      router.push("/dashboard");
    } else {
      setLoginAttempts(prev => prev + 1);
      toast.error(result.error as string);
    }
  };

  const initiateRecovery = async () => {
    if (!loginId.trim()) return toast.error("Please enter your Passport ID first.");
    setIsSubmitting(true);
    const userCheck = await getUser(loginId.toUpperCase());
    setIsSubmitting(false);
    if (userCheck.success) {
      setQuizQuestions(getRandomChallenge(3));
      setCurrentQuestionIndex(0);
      setWrongAnswers(0);
      setRecoveredPin(userCheck.user?.pin ?? null);
      setViewMode("recovery");
    } else {
      toast.error("Passport ID not found.");
    }
  };

  const handleQuizAnswer = (selected: string) => {
    const currentQ = quizQuestions[currentQuestionIndex];
    if (selected === currentQ.answer) {
      if (currentQuestionIndex < 2) setCurrentQuestionIndex(p => p + 1);
      else setCurrentQuestionIndex(3);
    } else {
      const newWrongs = wrongAnswers + 1;
      setWrongAnswers(newWrongs);
      if (newWrongs >= 2) {
        localStorage.setItem("ghanry_lockout_until", (Date.now() + 2 * 60 * 60 * 1000).toString());
        setViewMode("locked");
        toast.error("Security Failed. Account Locked for 2 hours.");
      } else {
        toast.error("Wrong! Answer carefully.", { duration: 3000 });
        if (currentQuestionIndex < 2) setCurrentQuestionIndex(p => p + 1);
        else setCurrentQuestionIndex(3);
      }
    }
  };

  const copyPassportID = () => {
    navigator.clipboard.writeText(newPassportId);
    toast.success("Passport ID copied!");
  };

  // ── Render ─────────────────────────────────────────────────────────────────

  // ── LOCKED ──────────────────────────────────────────────────────
  if (viewMode === "locked") {
    return (
      <div className="w-full flex-1 flex flex-col items-center justify-center px-6 gap-6 text-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        <h2 className="text-2xl font-epilogue font-bold text-red-600">Account Locked</h2>
        <p className="text-gray-500 font-jakarta text-sm leading-relaxed">
          You failed the security challenge twice. For your protection, recovery is disabled for 2 hours.
        </p>
        <div className="px-4 py-3 bg-gray-100 rounded-xl text-sm font-mono text-gray-500 w-full">
          Cooldown Active
        </div>
      </div>
    );
  }

  // ── SUCCESS ──────────────────────────────────────────────────────
  if (viewMode === "success") {
    return (
      <div className="w-full flex-1 flex flex-col items-center justify-center px-6 gap-6">
        <div className="w-full space-y-5">
          <div className="bg-green-50 border border-green-100 p-8 rounded-2xl flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#006B3F]" />
            </div>
            <div>
              <h3 className="font-epilogue font-bold text-green-900 text-2xl mb-1">Welcome, Citizen!</h3>
              <p className="text-green-700 font-jakarta text-sm">Your Ghana Card has been issued.</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Your Passport ID</p>
            <button
              onClick={copyPassportID}
              className="w-full bg-gray-900 text-white p-6 rounded-2xl font-mono text-3xl font-bold tracking-wider text-center flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              {newPassportId}
              <span className="flex items-center gap-2 text-xs text-gray-500 font-sans font-bold uppercase tracking-widest">
                <Copy className="w-3 h-3" /> Tap to Copy
              </span>
            </button>
            <p className="text-xs text-red-500 text-center font-bold bg-red-50 py-3 px-4 rounded-xl border border-red-100">
              ⚠️ Save this ID. We can&apos;t recover it without a quiz.
            </p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="w-full py-4 bg-[#FCD116] text-gray-900 font-epilogue font-extrabold text-lg rounded-2xl shadow-lg active:scale-95 transition-transform"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // ── RECOVERY ──────────────────────────────────────────────────────
  if (viewMode === "recovery") {
    return (
      <div className="w-full flex-1 flex flex-col px-6 py-8 gap-6">
        <button
          onClick={() => setViewMode("login")}
          className="text-gray-400 flex items-center gap-2 text-sm font-bold font-jakarta self-start"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {currentQuestionIndex < 3 ? (
          <>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h1 className="text-2xl font-epilogue font-extrabold text-[#006B3F]">Security Challenge</h1>
                <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded-lg text-gray-500">
                  {currentQuestionIndex + 1}/3
                </span>
              </div>
              <p className="text-gray-400 font-jakarta text-sm">Answer 3 questions correctly to reveal your PIN.</p>
            </div>
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-2xl space-y-4">
              <p className="font-epilogue font-bold text-gray-900">{quizQuestions[currentQuestionIndex]?.question}</p>
              <div className="grid gap-3">
                {quizQuestions[currentQuestionIndex]?.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => handleQuizAnswer(opt)}
                    className="w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:border-[#FCD116] hover:bg-yellow-50 transition-all font-jakarta text-sm font-medium active:scale-[0.98]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : wrongAnswers === 0 ? (
          <div className="bg-green-50 border border-green-100 p-8 rounded-2xl flex flex-col items-center text-center gap-5">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
              <KeyRound className="w-7 h-7 text-[#006B3F]" />
            </div>
            <div>
              <h3 className="font-epilogue font-bold text-green-900 text-xl">Identity Verified</h3>
              <p className="text-green-700 text-sm">Your PIN has been recovered.</p>
            </div>
            <div className="text-4xl font-mono font-bold tracking-[0.5em] text-gray-900 bg-white px-8 py-4 rounded-xl border border-gray-200">
              {recoveredPin}
            </div>
            <button onClick={() => setViewMode("login")} className="text-sm font-bold text-[#006B3F]">
              Back to Login
            </button>
          </div>
        ) : (
          <div className="bg-red-50 border border-red-100 p-8 rounded-2xl flex flex-col items-center text-center gap-5">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-red-600" />
            </div>
            <div>
              <h3 className="font-epilogue font-bold text-red-900 text-xl">Verification Failed</h3>
              <p className="text-red-700 text-sm">You didn&apos;t pass the challenge.</p>
            </div>
            <button
              onClick={() => setViewMode("signup")}
              className="w-full py-3 bg-red-600 text-white font-bold rounded-xl"
            >
              Return to Menu
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── MAIN AUTH SCREEN ──────────────────────────────────────────────
  return (
    <div className="w-full flex-1 flex flex-col overflow-hidden">

      {/* ── Brand header ── */}
      <div className="flex-shrink-0 pt-12 pb-6 px-6 flex flex-col items-center gap-1">
        {/* Ghana flag accent stripe */}
        <div className="flex h-1 w-16 rounded-full overflow-hidden mb-4">
          <div className="flex-1 bg-[#CE1126]" />
          <div className="flex-1 bg-[#FCD116]" />
          <div className="flex-1 bg-[#006B3F]" />
        </div>

        <h1 className="font-epilogue font-extrabold text-5xl tracking-tight">
          <span className="text-gray-900">Gha</span>
          <span className="text-[#006B3F]">nry</span>
        </h1>
        <p className="text-gray-400 font-jakarta text-sm">
          {activeTab === "signup" ? "Create your passport." : "Welcome back, Citizen."}
        </p>
      </div>

      {/* ── Tab switcher ── */}
      <div className="flex-shrink-0 px-6 mb-6">
        <div className="bg-gray-100 rounded-2xl p-1 flex">
          <button
            onClick={() => { setActiveTab("signup"); setViewMode("signup"); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold font-jakarta transition-all ${activeTab === "signup"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-400"
              }`}
          >
            New Citizen
          </button>
          <button
            onClick={() => { setActiveTab("login"); setViewMode("login"); }}
            className={`flex-1 py-3 rounded-xl text-sm font-bold font-jakarta transition-all ${activeTab === "login"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-400"
              }`}
          >
            Login
          </button>
        </div>
      </div>

      {/* ── Forms (scrollable) ── */}
      <div className="flex-1 overflow-y-auto px-6 pb-12">

        {/* ── SIGNUP FORM ── */}
        {activeTab === "signup" && (
          <div className="space-y-5">
            {/* Nickname */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                What should we call you?
              </label>
              <input
                type="text"
                value={nickname}
                onChange={e => setNickname(e.target.value)}
                placeholder="e.g. Kwame Jet"
                disabled={isSubmitting}
                className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-jakarta font-bold text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
              />
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Your City / Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="e.g. Accra, London, New York"
                  disabled={isSubmitting}
                  className="w-full pl-9 pr-3.5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-jakarta font-bold text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
                />
              </div>
            </div>

            {/* Citizenship type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Citizenship Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setLocationStatus("citizen"); setSelectedRegion(""); }}
                  className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 transition-all ${locationStatus === "citizen"
                    ? "bg-[#006B3F]/10 border-[#006B3F] text-[#006B3F]"
                    : "bg-gray-50 border-gray-200 text-gray-400"
                    }`}
                >
                  <MapPin className="w-5 h-5" />
                  <span className="font-epilogue font-bold text-sm">Home-based</span>
                </button>
                <button
                  onClick={() => { setLocationStatus("tourist"); setSelectedRegion(""); }}
                  className={`p-3.5 rounded-2xl border flex flex-col items-center gap-2 transition-all ${locationStatus === "tourist"
                    ? "bg-[#006B3F]/10 border-[#006B3F] text-[#006B3F]"
                    : "bg-gray-50 border-gray-200 text-gray-400"
                    }`}
                >
                  <Plane className="w-5 h-5" />
                  <span className="font-epilogue font-bold text-sm">Diaspora</span>
                </button>
              </div>
            </div>

            {/* Region */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Home Region
              </label>
              <CustomSelect
                options={locationStatus === "tourist" ? diasporaLocations : regions}
                placeholder={locationStatus === "tourist" ? "Select your base" : "Select Region"}
                value={selectedRegion}
                onChange={setSelectedRegion}
              />
            </div>

            {/* PINs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Create PIN</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="password"
                    maxLength={4}
                    value={pin}
                    onChange={e => setPin(e.target.value.replace(/\D/g, ""))}
                    className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-base tracking-[0.2em] text-center focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F]"
                    placeholder="••••"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Confirm PIN</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="password"
                    maxLength={4}
                    value={confirmPin}
                    onChange={e => setConfirmPin(e.target.value.replace(/\D/g, ""))}
                    className={`w-full pl-9 pr-3 py-3 bg-gray-50 border rounded-2xl font-bold text-base tracking-[0.2em] text-center focus:outline-none focus:ring-2 transition-colors ${confirmPin.length > 0
                      ? pin === confirmPin
                        ? "border-green-500 text-green-700 bg-green-50"
                        : "border-red-400 text-red-600 bg-red-50"
                      : "border-gray-200 focus:border-[#006B3F] focus:ring-[#006B3F]/20"
                      }`}
                    placeholder="••••"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSignUp}
              disabled={isSubmitting}
              className="w-full py-4 bg-[#006B3F] text-white font-epilogue font-extrabold text-base rounded-2xl shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98] transition-transform"
            >
              {isSubmitting
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Creating...</>
                : <><ShieldCheck className="w-5 h-5" /> Create Account</>}
            </button>
          </div>
        )}

        {/* ── LOGIN FORM ── */}
        {activeTab === "login" && (
          <div className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Passport ID</label>
              <input
                type="text"
                value={loginId}
                onChange={e => setLoginId(formatPassportId(e.target.value))}
                placeholder="GH-XXXX-X"
                className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-mono font-bold text-gray-900 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] uppercase tracking-widest"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">PIN</label>
                {loginAttempts >= 2 && (
                  <button
                    onClick={initiateRecovery}
                    className="text-xs font-bold text-[#FCD116]"
                  >
                    Forgot PIN?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                <input
                  type="password"
                  maxLength={4}
                  value={loginPin}
                  onChange={e => setLoginPin(e.target.value.replace(/\D/g, ""))}
                  className="w-full pl-9 pr-3 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-lg tracking-[0.3em] text-center focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F]"
                  placeholder="••••"
                />
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={isSubmitting}
              className="w-full py-4 bg-[#006B3F] text-white font-epilogue font-extrabold text-base rounded-2xl shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 disabled:opacity-70 active:scale-[0.98] transition-transform"
            >
              {isSubmitting
                ? <><Loader2 className="w-5 h-5 animate-spin" /> Verifying...</>
                : "Access Dashboard"}
            </button>

            <div className="pt-2">
              <button
                onClick={() => { setActiveTab("signup"); setViewMode("signup"); }}
                className="w-full text-center text-sm font-bold text-gray-400 font-jakarta"
              >
                No account yet?{" "}
                <span className="text-[#006B3F]">Create one →</span>
              </button>
            </div>
          </div>
        )}

        {/* Guest mode link → separate page */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 font-jakarta mb-3">Just exploring?</p>
          <Link
            href="/guest"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 font-jakarta"
          >
            <Sparkles className="w-3.5 h-3.5" /> Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
