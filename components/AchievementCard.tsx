import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Flame, Crown, BadgeCheck } from "lucide-react";

interface AchievementCardProps {
    type: "streak" | "rank";
    value: string | number;
    title: string;
    message: string;
    onClose?: () => void;
    isVerified?: boolean;
}

const AchievementCard = forwardRef<HTMLDivElement, AchievementCardProps>(({ type, value, title, message, onClose, isVerified }, ref) => {
    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full aspect-square bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 flex flex-col justify-between group cursor-pointer active:scale-[0.98] transition-all"
            onClick={onClose}
        >
            {/* Background Decorative Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-2/3 h-2/3 bg-ghana-gold/20 rounded-full blur-3xl group-hover:bg-ghana-gold/30 transition-colors" />
            <div className="absolute bottom-[-5%] right-[20%] w-1/3 h-1/3 bg-[#CE1126]/10 rounded-full blur-2xl" />

            {/* Top Branding/Title */}
            <div className="relative z-10">
                <p className="text-[#006B3F] font-jakarta font-bold uppercase tracking-widest text-sm mb-1">
                    {title}
                </p>
                <div className="h-1.5 w-12 bg-ghana-gold rounded-full" />
            </div>

            {/* Main Content: Large Value/Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-4">
                <div className="relative">
                    {type === "streak" ? (
                        <div className="relative">
                            <span className="text-[120px] font-epilogue font-black text-[#FCD116] leading-none drop-shadow-xl">
                                {value}
                            </span>
                            <Flame className="absolute -top-4 -right-8 w-16 h-16 text-[#CE1126] fill-[#CE1126] animate-bounce" />
                        </div>
                    ) : (
                        <div className="relative">
                            <Crown className="w-32 h-32 text-ghana-gold fill-ghana-gold drop-shadow-lg" />
                            <div className="absolute inset-0 flex items-center justify-center pt-8">
                                <span className="text-2xl font-epilogue font-black text-green-900 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                                    {value}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom: Message & Logo */}
            <div className="relative z-10 space-y-4">
                <p className="text-gray-800 font-jakarta font-bold text-xl leading-tight">
                    &ldquo;{message}&rdquo;
                </p>

                <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                    <span className="text-2xl font-epilogue font-black text-[#006B3F] tracking-tighter flex items-center gap-1">
                        Ghanry
                        {isVerified && <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500/10" />}
                    </span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#CE1126]" />
                        <div className="w-2 h-2 rounded-full bg-[#FCD116]" />
                        <div className="w-2 h-2 rounded-full bg-[#006B3F]" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

AchievementCard.displayName = "AchievementCard";

export default AchievementCard;
