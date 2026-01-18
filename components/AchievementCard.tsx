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
            className="relative w-full aspect-square bg-white rounded-lg shadow-2xl overflow-hidden p-8 flex flex-col justify-between group cursor-pointer active:scale-[0.98] transition-all"
            onClick={onClose}
        >
            {/* Background Decorative Shapes */}
            <div className="absolute top-[-10%] right-[-10%] w-2/3 h-2/3 bg-ghana-gold/20 rounded-full blur-3xl group-hover:bg-ghana-gold/30 transition-colors" />
            <div className="absolute bottom-[-5%] right-[20%] w-1/3 h-1/3 bg-[#CE1126]/10 rounded-full blur-2xl" />

            {/* Top Title */}
            <div className="relative z-10">
                <p className="text-[#006B3F] font-jakarta font-bold uppercase tracking-widest text-sm mb-1">
                    {title}
                </p>
                <div className="h-1.5 w-12 bg-ghana-gold rounded-full" />
            </div>

            {/* Badge - Top Right Corner */}
            <div className="absolute top-6 right-6 z-20">
                {type === "streak" ? (
                    <div className="relative bg-[#FCD116] rounded-lg px-4 py-2 shadow-lg">
                        <span className="text-3xl font-epilogue font-black text-gray-900 leading-none">
                            {value}
                        </span>
                        <Flame className="absolute -top-2 -right-2 w-6 h-6 text-[#CE1126] fill-[#CE1126]" />
                    </div>
                ) : (
                    <div className="relative bg-ghana-gold/20 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border-2 border-ghana-gold">
                        <div className="flex items-center gap-2">
                            <Crown className="w-8 h-8 text-ghana-gold fill-ghana-gold" />
                            <span className="text-xl font-epilogue font-black text-green-900">
                                {value}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content: Message centered */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-8 px-4">
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
