"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import CustomSelect from "@/components/CustomSelect";
import { Loader2, Sparkles, MapPin, Plane, Lock, ShieldCheck, ArrowLeft, CheckCircle2, Copy, CreditCard, KeyRound, AlertTriangle } from "lucide-react";
import OnboardingSlider from "@/components/OnboardingSlider";
import { createAccount, verifyUser, getUser } from "@/lib/passport";
import { getRandomChallenge, Question } from "@/lib/quiz";

export default function Home() {
  const router = useRouter();

  // --- STATE ---
  const [viewMode, setViewMode] = useState<"guest" | "signup" | "success" | "login" | "recovery" | "locked">("guest");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Registration / Guest
  const [selectedRegion, setSelectedRegion] = useState("");
  const [nickname, setNickname] = useState("");
  const [locationStatus, setLocationStatus] = useState<"citizen" | "tourist" | null>(null);
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [newPassportId, setNewPassportId] = useState("");

  // Login
  const [loginId, setLoginId] = useState("");
  const [loginPin, setLoginPin] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);

  // Recovery (Quiz)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [recoveredPin, setRecoveredPin] = useState<string | null>(null);

  // --- LOCKOUT CHECK & AUTO-LOGIN ---
  useEffect(() => {
    // Auto-Login Check
    const pid = localStorage.getItem("ghanry_passport_id");
    const nick = localStorage.getItem("ghanry_nickname");
    const reg = localStorage.getItem("ghanry_region");
    if (pid && nick && reg) {
      router.push("/dashboard");
      return;
    }

    const checkLockout = () => {
      const lockoutStr = localStorage.getItem("ghanry_lockout_until");
      if (lockoutStr) {
        const lockoutTime = parseInt(lockoutStr);
        if (Date.now() < lockoutTime) {
          setViewMode("locked");
        } else {
          localStorage.removeItem("ghanry_lockout_until");
          if (viewMode === 'locked') setViewMode("guest");
        }
      }
    };

    checkLockout();
    // Re-check every minute just in case
    const interval = setInterval(checkLockout, 60000);
    return () => clearInterval(interval);
  }, [viewMode, router]);

  // --- HELPERS ---
  const formatPassportId = (value: string) => {
    // Remove non-alphanumeric
    const clean = value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

    // Handle "GH" prefix logic
    let core = clean;
    if (clean.startsWith("GH")) {
      core = clean.substring(2);
    }

    // If just starting, allow "G", "GH"
    if (core.length === 0 && clean.length > 0 && clean.length <= 2) return clean;
    if (core.length === 0) return "";

    // Format: GH-XXXX-X
    let formatted = "GH";
    if (core.length > 0) {
      formatted += "-" + core.substring(0, 4);
    }
    if (core.length > 4) {
      formatted += "-" + core.substring(4, 5);
    }
    return formatted;
  };

  // --- HANDLERS ---

  const handleGuestStart = async () => {
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

  const handleSignUp = async () => {
    if (!nickname.trim() || nickname.length < 3) return toast.error("Valid nickname required.");
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
      setViewMode("success");
      toast.success("Passport Issued Successfully!");
    } else {
      toast.error(`Registration failed: ${result.error?.toString() || "Unknown error"}`);
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
      localStorage.setItem("ghanry_nickname", result.user?.nickname || "Citizen");
      localStorage.setItem("ghanry_region", result.user?.region || "Greater Accra");

      if (result.user?.avatar) {
        localStorage.setItem("ghanry_avatar", result.user.avatar);
      }
      if (result.user?.xp !== undefined) {
        localStorage.setItem("ghanry_xp", result.user.xp.toString());
      }

      // Only sync verification status from database (don't auto-verify)
      if (result.user?.verified) {
        localStorage.setItem("ghanry_verified", "true");
      }

      setLoginAttempts(0);
      toast.success(`Welcome back, ${result.user?.nickname || 'Citizen'}!`);
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
      // Start Quiz
      setQuizQuestions(getRandomChallenge(3));
      setCurrentQuestionIndex(0);
      setWrongAnswers(0);
      setRecoveredPin(userCheck.user?.pin || null); // Store specifically for reveal
      setViewMode("recovery");
      toast.info("Security Challenge Initiated");
    } else {
      toast.error("Passport ID not found.");
    }
  };

  const handleQuizAnswer = (selectedOption: string) => {
    const currentQ = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQ.answer;

    if (isCorrect) {
      toast.success("Correct!", { duration: 1000 });
      if (currentQuestionIndex < 2) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // PASSED ALL 3
        toast.success("Identity Verified!");
        setCurrentQuestionIndex(3); // 3 = Finished
      }
    } else {
      const newWrongs = wrongAnswers + 1;
      setWrongAnswers(newWrongs);

      if (newWrongs >= 2) {
        // LOCKOUT
        const lockUntil = Date.now() + (2 * 60 * 60 * 1000); // 2 hours
        localStorage.setItem("ghanry_lockout_until", lockUntil.toString());
        setViewMode("locked");
        toast.error("Security Failed. Account Locked for 2 hours.");
      } else {
        toast.error(`Wrong! Answer carefully.`, { duration: 3000 });
        // If they fail, we can move next or keep same. Let's move next to prevent retries on same Q.
        if (currentQuestionIndex < 2) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          // Failed last Q but wrongAnswers < 2? (Means they got 2 right, 1 wrong).
          // Loop ends. They don't see success screen (index 3).
          setCurrentQuestionIndex(3); // End state, logic in render will handle success/fail display
        }
      }
    }
  };

  const copyPassportID = () => {
    navigator.clipboard.writeText(newPassportId);
    toast.success("Passport ID copied!");
  };

  // --- RENDER HELPERS ---
  const regions = ["Greater Accra", "Ashanti", "Volta", "Northern", "Central", "Eastern", "Western", "Western North", "Upper East", "Upper West", "Oti", "Bono", "Bono East", "Ahafo", "North East", "Savannah"];
  const diasporaLocations = ["Global Diaspora", "USA", "UK", "Europe", "Rest of World"];

  return (
    <div className="w-full flex-1 flex flex-col md:flex-row h-full">
      <div className="w-full h-[500px] md:h-auto md:w-1/2 relative overflow-hidden bg-[#006B3F] shrink-0">
        <OnboardingSlider />
      </div>

      <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center items-start gap-6 relative">

        {/* Back Button */}
        {viewMode !== "guest" && viewMode !== "locked" && viewMode !== "success" && (
          <button
            onClick={() => setViewMode("guest")}
            className="text-gray-400 hover:text-gray-900 flex items-center gap-2 transition-colors font-jakarta text-sm font-bold mb-4 self-start"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        )}

        {/* --- VIEW: LOCKED --- */}
        {viewMode === "locked" && (
          <div className="w-full max-w-sm text-center space-y-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-2xl font-epilogue font-bold text-red-600">Account Locked</h2>
            <p className="text-gray-600 font-jakarta">
              You failed the security challenge twice. For your protection, recovery is disabled for 2 hours.
            </p>
            <div className="p-4 bg-gray-100 rounded-xl text-sm font-mono text-gray-500">
              Calculated Cool-down Active
            </div>
          </div>
        )}

        {/* --- VIEW: SUCCESS REGISTRATION --- */}
        {viewMode === "success" && (
          <div className="w-full max-w-sm space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-green-50 border border-green-100 p-8 rounded-2xl flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#006B3F]" />
              </div>
              <div>
                <h3 className="font-epilogue font-bold text-green-900 text-2xl mb-2">Welcome, Citizen!</h3>
                <p className="text-green-700 font-jakarta">Your official Ghana Card has been issued.</p>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block text-center">Your Passport ID</label>
              <button
                onClick={copyPassportID}
                className="w-full bg-gray-900 text-white p-6 rounded-xl font-mono text-3xl font-bold tracking-wider text-center relative overflow-hidden shadow-xl group hover:scale-[1.02] transition-transform active:scale-95 cursor-pointer flex flex-col items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <span className="relative z-10">{newPassportId}</span>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-sans font-bold uppercase tracking-widest group-hover:text-white transition-colors relative z-10">
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </div>
              </button>
              <p className="text-xs text-red-500 text-center font-bold bg-red-50 py-3 px-4 rounded-lg border border-red-100">
                ⚠️ PLEASE SAVE THIS ID. WE CANNOT RECOVER IT WITHOUT A QUIZ.
              </p>
            </div>
            <button onClick={() => router.push("/dashboard")} className="w-full py-4 bg-[#FCD116] text-black font-epilogue font-extrabold text-lg rounded-xl shadow-lg hover:scale-[1.02] transition-all">
              Continue to Dashboard
            </button>
          </div>
        )}

        {/* --- VIEW: RECOVERY (QUIZ) --- */}
        {viewMode === "recovery" && (
          <div className="w-full max-w-sm space-y-6">
            {currentQuestionIndex < 3 ? (
              <>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-epilogue font-extrabold text-[#006B3F]">Security Challenge</h1>
                    <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded text-gray-500">{currentQuestionIndex + 1}/3</span>
                  </div>
                  <p className="text-gray-500 font-jakarta text-sm">
                    Answer 3 questions correctly to reveal your PIN. One mistake allowed.
                  </p>
                </div>

                <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl space-y-4">
                  <p className="font-epilogue font-bold text-lg text-gray-900">
                    {quizQuestions[currentQuestionIndex]?.question}
                  </p>
                  <div className="grid gap-3">
                    {quizQuestions[currentQuestionIndex]?.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizAnswer(opt)}
                        className="w-full p-4 text-left bg-white border border-gray-200 rounded-xl hover:border-[#FCD116] hover:bg-yellow-50 transition-all font-jakarta text-sm font-medium"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // FINISHED QUIZ
              wrongAnswers === 0 ? (
                <div className="bg-green-50 border border-green-100 p-8 rounded-2xl flex flex-col items-center text-center gap-6 animate-in zoom-in-95">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <KeyRound className="w-8 h-8 text-[#006B3F]" />
                  </div>
                  <div>
                    <h3 className="font-epilogue font-bold text-green-900 text-xl">Identity Verified</h3>
                    <p className="text-green-700 text-sm">Your PIN has been recovered.</p>
                  </div>
                  <div className="text-4xl font-mono font-bold tracking-[0.5em] text-gray-900 bg-white px-8 py-4 rounded-xl border border-gray-200 shadow-sm">
                    {recoveredPin}
                  </div>
                  <button onClick={() => setViewMode('login')} className="text-sm font-bold text-[#006B3F] hover:underline">
                    Back to Login
                  </button>
                </div>
              ) : (
                <div className="bg-red-50 border border-red-100 p-8 rounded-2xl flex flex-col items-center text-center gap-6 animate-in zoom-in-95">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-epilogue font-bold text-red-900 text-xl">Verification Failed</h3>
                    <p className="text-red-700 text-sm">You did not pass the challenge perfectly.</p>
                  </div>
                  <button onClick={() => setViewMode('guest')} className="w-full py-3 bg-red-600 text-white font-bold rounded-xl shadow-lg hover:bg-red-700">
                    Return to Menu
                  </button>
                </div>
              )
            )}
          </div>
        )}

        {/* --- VIEW: LOGIN --- */}
        {viewMode === "login" && (
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-epilogue font-extrabold text-gray-900">Citizen Login</h1>
              <p className="text-gray-500 font-jakarta">Enter your credentials to access your passport.</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">Passport ID</label>
                <input
                  type="text"
                  value={loginId}
                  onChange={(e) => setLoginId(formatPassportId(e.target.value))}
                  placeholder="GH-XXXX-X"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-mono font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] uppercase"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider">PIN</label>
                  {loginAttempts >= 2 && (
                    <button onClick={initiateRecovery} className="text-xs font-bold text-[#FCD116] hover:text-[#eec308] hover:underline animate-in fade-in duration-500">
                      Forgot PIN?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="password"
                    maxLength={4}
                    value={loginPin}
                    onChange={(e) => setLoginPin(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl font-epilogue font-bold text-lg tracking-[0.2em] text-center focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F]"
                    placeholder="••••"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleLogin}
              disabled={isSubmitting}
              className="w-full py-4 bg-[#006B3F] hover:bg-[#005a35] disabled:opacity-80 disabled:cursor-wait text-white font-epilogue font-extrabold text-lg rounded-xl shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <span>Access Dashboard</span>}
            </button>
          </div>
        )}

        {/* --- VIEW: GUEST & SIGNUP (Existing) --- */}
        {(viewMode === "guest" || viewMode === "signup") && (
          <div className="w-full max-w-sm space-y-6">

            {/* Header */}
            <div className="space-y-1">
              <h1 className="text-3xl font-epilogue font-extrabold text-gray-900">
                {viewMode === 'guest' ? 'Welcome to Ghanry' : 'Passport Application'}
              </h1>
              <p className="text-gray-500 font-jakarta">
                {viewMode === 'guest' ? 'Begin your journey through Ghana.' : 'Become a verified citizen to sync progress.'}
              </p>
            </div>

            {/* Nickname */}
            <div className="space-y-2">
              <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">What should we call you?</label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="e.g. Kwame Jet"
                disabled={isSubmitting}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl font-epilogue font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all"
              />
            </div>

            {/* Location Status */}
            <div className="space-y-2">
              <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">
                {viewMode === 'signup' ? "Citizenship Type" : "Where are you right now?"}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => { setLocationStatus('citizen'); setSelectedRegion(""); }} className={`p-3 rounded-xl border flex flex-row items-center justify-center gap-2 transition-all ${locationStatus === 'citizen' ? "bg-[#006B3F]/10 border-[#006B3F] text-[#006B3F]" : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"}`}>
                  <MapPin className="w-4 h-4" />
                  <span className="font-epilogue font-bold text-sm">{viewMode === 'signup' ? "Home-based" : "In Ghana"}</span>
                </button>
                <button onClick={() => { setLocationStatus('tourist'); setSelectedRegion(""); }} className={`p-3 rounded-xl border flex flex-row items-center justify-center gap-2 transition-all ${locationStatus === 'tourist' ? "bg-[#006B3F]/10 border-[#006B3F] text-[#006B3F]" : "bg-white border-gray-100 text-gray-400 hover:border-gray-200"}`}>
                  <Plane className="w-4 h-4" />
                  <span className="font-epilogue font-bold text-sm">{viewMode === 'signup' ? "Diaspora" : "Abroad"}</span>
                </button>
              </div>
            </div>

            {/* Region Select */}
            <div className="space-y-2">
              <label className="text-sm font-jakarta font-bold text-gray-500 uppercase tracking-wider ml-1">
                {viewMode === 'signup' ? "Home Region" : (locationStatus === 'tourist' ? "Select your base" : "Home Region")}
              </label>
              <CustomSelect
                options={locationStatus === 'tourist' ? diasporaLocations : regions}
                placeholder={locationStatus === 'tourist' ? "Select your base" : "Select Region"}
                value={selectedRegion}
                onChange={setSelectedRegion}
              />
            </div>

            {/* PIN Creation (Signup Only) */}
            {viewMode === 'signup' && (
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Create PIN</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="password" maxLength={4} value={pin} onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))} className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl font-epilogue font-bold text-base tracking-[0.2em] text-center focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F]" placeholder="••••" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Confirm PIN</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="password"
                      maxLength={4}
                      value={confirmPin}
                      onChange={(e) => setConfirmPin(e.target.value.replace(/[^0-9]/g, ''))}
                      className={`w-full pl-9 pr-3 py-2.5 bg-gray-50 border rounded-xl font-epilogue font-bold text-base tracking-[0.2em] text-center focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 transition-colors ${confirmPin.length > 0
                        ? pin === confirmPin
                          ? "border-green-500 text-green-700 bg-green-50"
                          : "border-red-500 text-red-700 bg-red-50"
                        : "border-gray-200 focus:border-[#006B3F]"
                        }`}
                      placeholder="••••"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            {viewMode === 'guest' ? (
              <button onClick={handleGuestStart} disabled={isSubmitting} className="w-full py-4 bg-[#FCD116] hover:bg-[#eec308] disabled:opacity-80 disabled:cursor-wait text-black font-epilogue font-extrabold text-lg rounded-xl shadow-lg shadow-yellow-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-4">
                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /><span>Entering...</span></> : <><span>Enter as Guest</span><Sparkles className="w-5 h-5 opacity-40" /></>}
              </button>
            ) : (
              <button onClick={handleSignUp} disabled={isSubmitting} className="w-full py-4 bg-[#006B3F] hover:bg-[#005a35] disabled:opacity-80 disabled:cursor-wait text-white font-epilogue font-extrabold text-lg rounded-xl shadow-lg shadow-green-900/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-4">
                {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /><span>Issuing ID...</span></> : <><span>Issue Passport</span><ShieldCheck className="w-5 h-5 opacity-80" /></>}
              </button>
            )}

            {/* Function Toggles */}
            <div className="pt-4 border-t border-gray-100 w-full space-y-3">
              {viewMode === 'guest' ? (
                <button onClick={() => setViewMode("signup")} className="group w-full p-4 rounded-2xl border border-gray-200 bg-[#006B3F]/5 hover:bg-[#006B3F]/10 transition-all flex items-center justify-between text-left shadow-sm hover:shadow-md">
                  <div className="flex flex-col gap-1">
                    <span className="font-epilogue font-bold text-[#006B3F] flex items-center gap-2"><CreditCard className="w-4 h-4" /> Get a Ghana Card</span>
                    <span className="text-xs text-gray-600 font-jakarta leading-tight">Sign up to sync your XP across devices.</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#006B3F]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-4 h-4 text-[#006B3F]" />
                  </div>
                </button>
              ) : (
                <div className="flex justify-center">
                  <span className="text-xs text-gray-400 font-jakarta">Guest accounts are local to this device.</span>
                </div>
              )}

              <div className="flex justify-center">
                <button onClick={() => setViewMode("login")} className="text-sm font-bold text-gray-500 hover:text-[#006B3F] transition-colors flex items-center gap-2">
                  Already a citizen? <span className="underline decoration-2 underline-offset-2">Login here</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
