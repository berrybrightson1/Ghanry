"use client";

import { User, Settings, MapPin, Award, Star, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
    const [userData, setUserData] = useState<{ nickname: string; region: string } | null>(null);

    useEffect(() => {
        const storedNickname = localStorage.getItem("ghanry_nickname") || "Guest User";
        const storedRegion = localStorage.getItem("ghanry_region") || "Ghana";
        setUserData({ nickname: storedNickname, region: storedRegion });
    }, []);

    if (!userData) return null;

    return (
        <div className="w-full min-h-screen bg-gray-50 pb-24 flex flex-col items-center">

            {/* Profile Header Card */}
            <div className="w-full bg-[#006B3F] pb-12 pt-8 px-6 rounded-b-[2.5rem] relative shadow-lg mb-16">
                <div className="max-w-md mx-auto flex flex-col items-center text-center">
                    <h1 className="text-white font-epilogue font-bold text-lg opacity-80 mb-6">Citizen Passport</h1>

                    <div className="w-24 h-24 bg-white rounded-full p-1 shadow-xl mb-4 relative">
                        <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center border-2 border-ghana-gold overflow-hidden">
                            <span className="text-3xl font-bold text-gray-400">{userData.nickname.slice(0, 2).toUpperCase()}</span>
                        </div>
                        <div className="absolute bottom-0 right-0 bg-ghana-gold border-2 border-white rounded-full p-1.5">
                            <ShieldCheck className="w-4 h-4 text-black" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-epilogue font-extrabold text-white mb-1">{userData.nickname}</h2>
                    <div className="flex items-center gap-2 text-white/80 font-bold text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                        <MapPin className="w-3 h-3" />
                        {userData.region}
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="w-full max-w-md px-6 -mt-8 mb-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1">
                    <div className="p-2 bg-yellow-50 rounded-full mb-1">
                        <Star className="w-5 h-5 text-yellow-600 fill-yellow-500" />
                    </div>
                    <span className="text-2xl font-epilogue font-extrabold text-gray-900">1,250</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total XP</span>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-1">
                    <div className="p-2 bg-blue-50 rounded-full mb-1">
                        <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-2xl font-epilogue font-extrabold text-gray-900">12</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Quizzes</span>
                </div>
            </div>

            {/* Menu Options */}
            <div className="w-full max-w-md px-6 space-y-3">
                <h3 className="text-gray-400 font-bold text-xs uppercase tracking-wider ml-2 mb-1">Account</h3>

                <button className="w-full p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-3 font-bold text-gray-700">
                        <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors"><User className="w-5 h-5" /></div>
                        Edit Profile
                    </div>
                </button>

                <button className="w-full p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-3 font-bold text-gray-700">
                        <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors"><Settings className="w-5 h-5" /></div>
                        Settings
                    </div>
                </button>
            </div>

            <div className="mt-8 text-center text-xs text-gray-300 font-bold">
                Member since Jan 2026
            </div>
        </div>
    );
}
