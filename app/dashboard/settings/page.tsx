"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X, LogOut, Star, Eye, EyeOff } from 'lucide-react';
import { useStreak } from '@/hooks/useStreak';
import { usePWA } from '@/hooks/usePWA';
import { useXP } from '@/hooks/useXP';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

export default function SettingsPage() {
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [passportId, setPassportId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [sound, setSound] = useState(false); // Default to OFF
    const { streak } = useStreak();
    const { xp } = useXP();
    const { isInstallable, handleInstall } = usePWA();

    // Track original values for dirty state detection
    const [originalNickname, setOriginalNickname] = useState('');
    const [originalPassportId, setOriginalPassportId] = useState('');
    const [originalSound, setOriginalSound] = useState(false);

    useEffect(() => {
        const storedNick = localStorage.getItem('ghanry_nickname') || '';
        const storedId = localStorage.getItem('ghanry_passport_id') || '';
        const storedSound = localStorage.getItem('ghanry_sound');

        setNickname(storedNick);
        setPassportId(storedId);
        // Sound defaults to false (OFF)
        const soundValue = storedSound === 'true';
        setSound(soundValue);

        // Store original values
        setOriginalNickname(storedNick);
        setOriginalPassportId(storedId);
        setOriginalSound(soundValue);
    }, []);

    // Check if anything has changed
    const hasChanges =
        nickname !== originalNickname ||
        passportId !== originalPassportId ||
        sound !== originalSound ||
        password.trim() !== '';

    const handleSaveChanges = () => {
        // Validation
        if (!nickname.trim()) {
            toast.error('Nickname cannot be empty', { duration: 2000 });
            return;
        }

        if (!passportId.trim()) {
            toast.error('Passport ID cannot be empty', { duration: 2000 });
            return;
        }

        // Save changes
        localStorage.setItem('ghanry_nickname', nickname);
        localStorage.setItem('ghanry_passport_id', passportId);
        localStorage.setItem('ghanry_sound', sound.toString());

        if (password.trim()) {
            // Save password (in real app this would be hashed and sent to server)
            localStorage.setItem('ghanry_password', password);
            toast.success('Password updated successfully!', { duration: 2000 });
        }

        toast.success('Settings saved!', { duration: 2000 });

        // Update original values
        setOriginalNickname(nickname);
        setOriginalPassportId(passportId);
        setOriginalSound(sound);
        setPassword('');

        setTimeout(() => router.push('/dashboard'), 500);
    };

    const handleCancel = () => {
        // Revert to original values
        setNickname(originalNickname);
        setPassportId(originalPassportId);
        setSound(originalSound);
        setPassword('');
        router.back();
    };

    const handleLogout = () => {
        // Clear session
        localStorage.removeItem("ghanry_passport_id");
        localStorage.removeItem("ghanry_nickname");
        localStorage.removeItem("ghanry_region");
        localStorage.removeItem("ghanry_status");
        localStorage.removeItem("ghanry_password");
        router.push("/");
    };

    return (
        <div className="max-w-2xl mx-auto py-6 px-4 md:py-8">
            <h1 className="text-2xl font-epilogue font-bold mb-6 text-gray-900">Settings</h1>
            <div className="space-y-6">

                {/* Profile Section */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                    <h2 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Profile</h2>

                    <div>
                        <label htmlFor="nickname" className="block font-jakarta font-medium mb-1.5 text-sm text-gray-700">Nickname</label>
                        <input
                            id="nickname"
                            type="text"
                            value={nickname}
                            onChange={e => setNickname(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] font-epilogue font-bold text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="passport-id" className="block font-jakarta font-medium mb-1.5 text-sm text-gray-700">Passport ID</label>
                        <input
                            id="passport-id"
                            type="text"
                            value={passportId}
                            onChange={e => setPassportId(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] font-epilogue font-bold text-gray-900"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block font-jakarta font-medium mb-1.5 text-sm text-gray-700">Change Password</label>
                        <div className="relative">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter new password (optional)"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] font-epilogue font-bold text-gray-900"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                    <h2 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Preferences</h2>
                    <div className="flex items-center justify-between">
                        <label className="font-jakarta font-bold text-gray-700" htmlFor="sound-toggle">Sound Effects</label>
                        <button
                            id="sound-toggle"
                            onClick={() => setSound(!sound)}
                            aria-pressed={sound}
                            className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${sound ? 'bg-[#006B3F] text-white' : 'bg-gray-100 text-gray-500'}`}
                        >
                            <span className="text-xs font-bold mr-1">{sound ? "ON" : "OFF"}</span>
                            {sound ? <Check size={14} /> : <X size={14} />}
                        </button>
                    </div>
                </div>

                {/* Account Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex flex-col items-center justify-center gap-1">
                        <div className="text-xs font-bold text-green-600 uppercase tracking-wider">Current Streak</div>
                        <div className="text-2xl font-epilogue font-extrabold text-green-800">{streak} <span className="text-sm font-medium">days</span></div>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 flex flex-col items-center justify-center gap-1">
                        <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider flex items-center gap-1"><Star size={12} /> Total XP</div>
                        <div className="text-2xl font-epilogue font-extrabold text-yellow-800">{xp} <span className="text-sm font-medium">pts</span></div>
                    </div>
                </div>

                {/* App Install */}
                {isInstallable && (
                    <div className="p-6 bg-[#006B3F] rounded-3xl text-white shadow-xl shadow-green-900/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 flex flex-col gap-4">
                            <div>
                                <h3 className="text-lg font-epilogue font-bold mb-1">Install Ghanry</h3>
                                <p className="text-white/80 text-sm font-jakarta">Play offline and access faster.</p>
                            </div>
                            <button
                                onClick={handleInstall}
                                className="w-full py-3 bg-white text-[#006B3F] font-epilogue font-bold rounded-xl hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
                            >
                                <Download size={18} />
                                Install App
                            </button>
                        </div>
                    </div>
                )}

                {/* Actions - Only show if changes made */}
                {hasChanges && (
                    <div className="pt-4 flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveChanges}
                                className="px-4 py-3 bg-[#006B3F] text-white font-bold rounded-xl hover:bg-[#005a35] transition-colors shadow-lg shadow-green-900/10"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {/* Logout - Always visible */}
                <button
                    onClick={handleLogout}
                    className="w-full py-3 text-red-500 font-bold hover:bg-red-50 rounded-xl transition-colors flex items-center justify-center gap-2 group"
                >
                    <LogOut className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Log Out
                </button>
            </div>
        </div>
    );
}
