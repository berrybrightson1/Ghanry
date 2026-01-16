"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X } from 'lucide-react';
import { useStreak } from '@/hooks/useStreak';
import { usePWA } from '@/hooks/usePWA';
import { Download } from 'lucide-react';

export default function SettingsPage() {
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [sound, setSound] = useState(true);
    const { streak } = useStreak();
    const { isInstallable, handleInstall } = usePWA();

    useEffect(() => {
        const storedNick = localStorage.getItem('ghanry_nickname') || '';
        const storedSound = localStorage.getItem('ghanry_sound');
        setNickname(storedNick);
        setSound(storedSound !== 'false');
    }, []);

    const handleSave = () => {
        localStorage.setItem('ghanry_nickname', nickname);
        localStorage.setItem('ghanry_sound', sound.toString());
        router.push('/dashboard');
    };

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <h1 className="text-2xl font-epilogue font-bold mb-6">Settings</h1>
            <div className="space-y-4">
                <div>
                    <label htmlFor="nickname" className="block font-jakarta font-medium mb-1">Nickname</label>
                    <input
                        id="nickname"
                        type="text"
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                        className="w-full border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006B3F]"
                    />
                </div>
                <div className="flex items-center">
                    <label className="mr-2 font-jakarta font-medium" htmlFor="sound-toggle">Sound Effects</label>
                    <button
                        id="sound-toggle"
                        onClick={() => setSound(!sound)}
                        aria-pressed={sound}
                        aria-label={sound ? "Disable sound effects" : "Enable sound effects"}
                        className={`px-3 py-1 rounded-full ${sound ? 'bg-[#006B3F] text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                        {sound ? <Check size={16} /> : <X size={16} />}
                    </button>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                    <p className="text-gray-600 font-jakarta">Current streak: <span className="font-bold text-[#006B3F]">{streak}</span> days</p>
                </div>

                {isInstallable && (
                    <div className="mt-6 p-6 bg-[#006B3F] rounded-3xl text-white shadow-xl shadow-green-900/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col gap-4">
                            <div>
                                <h3 className="text-lg font-epilogue font-bold mb-1">Ghanry on your Home Screen</h3>
                                <p className="text-white/80 text-sm font-jakarta">Install the app for faster access and offline play!</p>
                            </div>
                            <button
                                onClick={handleInstall}
                                className="w-full py-3 bg-white text-[#006B3F] font-epilogue font-bold rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <Download size={18} />
                                Install Now
                            </button>
                        </div>
                    </div>
                )}
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-[#006B3F] text-white rounded-xl hover:bg-[#005a35] transition-colors"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => router.back()}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-xl hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
