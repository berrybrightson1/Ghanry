"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    ChevronDown, ChevronUp, Copy, AlertTriangle, Eye, EyeOff, Check, X, LogOut, Star,
    Square, Circle, Triangle, Hexagon, Octagon, Zap, Shield, Heart, Ghost
} from 'lucide-react';
import { useStreak } from '@/hooks/useStreak';
import { useXP } from '@/hooks/useXP';
import { toast } from 'sonner';

const SHAPES = [
    { name: 'Star', icon: Star },
    { name: 'Circle', icon: Circle },
    { name: 'Square', icon: Square },
    { name: 'Triangle', icon: Triangle },
    { name: 'Hexagon', icon: Hexagon },
    { name: 'Zap', icon: Zap },
    { name: 'Shield', icon: Shield },
    { name: 'Heart', icon: Heart },
    { name: 'Ghost', icon: Ghost },
    { name: 'Octagon', icon: Octagon },
];

export default function SettingsPage() {
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [passportId, setPassportId] = useState('');
    const [avatar, setAvatar] = useState('🇬🇭'); // Default

    // Password state
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [sound, setSound] = useState(false); // Default to OFF
    const { streak } = useStreak();
    const { xp } = useXP();
    const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

    // Track original values for dirty state detection
    const [originalNickname, setOriginalNickname] = useState('');
    const [originalPassportId, setOriginalPassportId] = useState('');
    const [originalAvatar, setOriginalAvatar] = useState('🇬🇭');
    const [originalSound, setOriginalSound] = useState(false);

    useEffect(() => {
        const storedNick = localStorage.getItem('ghanry_nickname') || '';
        const storedId = localStorage.getItem('ghanry_passport_id') || '';
        const storedSound = localStorage.getItem('ghanry_sound');
        const storedAvatar = localStorage.getItem('ghanry_avatar') || '🇬🇭';

        setNickname(storedNick);
        setPassportId(storedId);
        setAvatar(storedAvatar);
        // Sound defaults to false (OFF)
        const soundValue = storedSound === 'true';
        setSound(soundValue);

        // Store original values
        setOriginalNickname(storedNick);
        setOriginalPassportId(storedId);
        setOriginalAvatar(storedAvatar);
        setOriginalSound(soundValue);
    }, []);

    // Check if anything has changed
    const hasChanges =
        nickname !== originalNickname ||
        passportId !== originalPassportId ||
        avatar !== originalAvatar ||
        sound !== originalSound ||
        newPassword.trim() !== '';

    const handleCopyID = () => {
        navigator.clipboard.writeText(passportId);
        toast.success("Passport ID copied!");
    };

    const handleAvatarChange = (newAv: string) => {
        setAvatar(newAv);
        // Immediate visual feedback is handled by local state, 
        // but 'save' handles the persistent sync.
    };

    const handleSaveChanges = async () => {
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
        localStorage.setItem('ghanry_avatar', avatar);
        localStorage.setItem('ghanry_sound', sound.toString());

        // Dispatch Event for Sidebar Sync
        window.dispatchEvent(new Event('ghanry_profile_update'));

        // Sync with Firestore if connected
        if (passportId) {
            try {
                const { doc, updateDoc, getFirestore } = await import('firebase/firestore');
                const db = getFirestore();
                await updateDoc(doc(db, "users", passportId), {
                    nickname,
                    avatar
                });
            } catch (e) {
                console.warn("Could not sync profile to cloud", e);
            }
        }

        if (newPassword.trim()) {
            // Save password (in real app this would be hashed and sent to server)
            localStorage.setItem('ghanry_password', newPassword);
            toast.success('Password updated successfully!', { duration: 2000 });
        }

        // Minimal confirmation as requested
        toast.success('Settings Saved', {
            position: 'bottom-center',
            className: 'bg-black text-white border-0',
            duration: 1500
        });

        // Update original values
        setOriginalNickname(nickname);
        setOriginalPassportId(passportId);
        setOriginalAvatar(avatar);
        setOriginalSound(sound);
        setNewPassword('');
        setCurrentPassword('');

        // No forced redirect, let them stay
    };

    const handleCancel = () => {
        // Revert to original values
        setNickname(originalNickname);
        setPassportId(originalPassportId);
        setAvatar(originalAvatar);
        setSound(originalSound);
        setNewPassword('');
        setCurrentPassword('');
    };

    const handleDeleteAccount = () => {
        // Step 1: Prompt for reason (using Sonner for a simple inline-like flow or custom modal)
        // Since user asked for "answering 1 question or telling us why", we'll simulate this with a toast action for now 
        // or effectively we can assume the clicking of the button IS the start of that flow.

        // Let's implement a simple prompt using window.prompt or just a direct confirm for V1 efficiency 
        // respecting the "click to unfold then select delete" instruction.

        const reason = window.prompt("We're sad to see you go. Please tell us why you are leaving:");

        if (reason !== null) { // If they didn't cancel the prompt
            if (passportId) {
                // Delete logic
                toast("Deleting Account...", { description: "Goodbye, friend." });
                // Async delete...
                (async () => {
                    try {
                        const { deleteDoc, doc, getFirestore } = await import('firebase/firestore');
                        const db = getFirestore();
                        await deleteDoc(doc(db, "users", passportId));
                    } catch (e) { console.error(e) }
                    handleLogout();
                })();
            } else {
                handleLogout();
                toast.success("Guest Session Reset.");
            }
        }
    };

    const handleLogout = () => {
        // Clear session
        localStorage.removeItem("ghanry_passport_id");
        localStorage.removeItem("ghanry_nickname");
        localStorage.removeItem("ghanry_region");
        localStorage.removeItem("ghanry_status");
        localStorage.removeItem("ghanry_password");
        localStorage.removeItem("ghanry_avatar");
        // Dispatch cleanup
        window.dispatchEvent(new Event('ghanry_profile_update'));
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
                        <div className="relative">
                            <input
                                id="passport-id"
                                type="text"
                                value={passportId}
                                onChange={e => setPassportId(e.target.value)}
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] font-epilogue font-bold text-gray-900 uppercase"
                            />
                            <button
                                onClick={handleCopyID}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#006B3F] transition-colors"
                            >
                                <Copy size={18} />
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block font-jakarta font-medium mb-1.5 text-sm text-gray-700">Security</label>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={currentPassword}
                                    onChange={e => setCurrentPassword(e.target.value)}
                                    placeholder="Current Password"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] font-jakarta text-sm"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={newPassword}
                                    onChange={e => setNewPassword(e.target.value)}
                                    placeholder="New Password"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] font-jakarta text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Avatar Selection */}
                    <div>
                        <label className="block font-jakarta font-medium mb-1.5 text-sm text-gray-700">Profile Avatar</label>
                        <div className="grid grid-cols-5 gap-2">
                            {SHAPES.map((shape) => {
                                const value = `icon:${shape.name}`;
                                const isSelected = avatar === value;
                                return (
                                    <button
                                        key={shape.name}
                                        type="button"
                                        onClick={() => handleAvatarChange(value)}
                                        className={`aspect-square rounded-xl flex items-center justify-center transition-all ${isSelected
                                            ? "bg-[#006B3F] text-white border-2 border-[#FCD116] scale-110 shadow-md"
                                            : "bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100"
                                            }`}
                                    >
                                        <shape.icon size={24} />
                                    </button>
                                );
                            })}
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

                {/* Advanced Settings (Collapse) */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
                    <button
                        onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                        className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-bold text-gray-700 font-epilogue">Advanced Settings</span>
                        {isAdvancedOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>

                    {isAdvancedOpen && (
                        <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4 animate-in slide-in-from-top-2 duration-200">
                            {/* Danger Zone */}
                            <div className="space-y-4">
                                <h3 className="font-bold text-red-500 text-xs uppercase tracking-wider flex items-center gap-2">
                                    <AlertTriangle size={14} /> Danger Zone
                                </h3>
                                <p className="text-sm text-gray-500 font-jakarta">
                                    Once you delete your account, there is no going back. Please be certain.
                                </p>
                                <button
                                    onClick={handleDeleteAccount}
                                    className="w-full py-3 bg-white text-red-600 border border-red-200 font-bold rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                                >
                                    <LogOut size={16} />
                                    {passportId ? "Delete Account" : "Reset Guest Session"}
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Logout - Always visible */}
                <button
                    onClick={handleLogout}
                    className="w-full py-3 text-gray-400 font-bold hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-center gap-2 group text-sm"
                >
                    Log Out
                </button>
            </div>
        </div >
    );
}
