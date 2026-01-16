"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Landmark,
    Music,
    Utensils,
    Map,
    Crown,
    Palette,
    Trophy,
    BookOpen
} from "lucide-react";

const categories = [
    { id: "history", name: "History", icon: Landmark, color: "bg-red-50 text-red-600 border-red-200", quizzes: 12 },
    { id: "culture", name: "Culture & Tribes", icon: Crown, color: "bg-yellow-50 text-yellow-600 border-yellow-200", quizzes: 8 },
    { id: "geography", name: "Geography", icon: Map, color: "bg-green-50 text-green-600 border-green-200", quizzes: 15 },
    { id: "food", name: "Food & Lifestyle", icon: Utensils, color: "bg-orange-50 text-orange-600 border-orange-200", quizzes: 6 },
    { id: "music", name: "Music & Arts", icon: Music, color: "bg-purple-50 text-purple-600 border-purple-200", quizzes: 10 },
    { id: "arts", name: "Arts & Crafts", icon: Palette, color: "bg-pink-50 text-pink-600 border-pink-200", quizzes: 5 },
    { id: "sports", name: "Sports", icon: Trophy, color: "bg-blue-50 text-blue-600 border-blue-200", quizzes: 7 },
    { id: "general", name: "General Knowledge", icon: BookOpen, color: "bg-gray-50 text-gray-600 border-gray-200", quizzes: 20 },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function CategoriesPage() {
    return (
        <div className="p-6 sm:p-8 space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-epilogue font-bold text-gray-900">Explore Topics</h1>
                <p className="text-gray-500 font-jakarta">Choose a category to start learning.</p>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {categories.map((cat) => (
                    <Link key={cat.id} href={`/dashboard/categories/${cat.id}`}>
                        <motion.div
                            variants={item}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-6 rounded-2xl border-2 ${cat.color.replace("text-", "border-").split(" ")[2]} bg-white hover:shadow-lg transition-all cursor-pointer h-full flex flex-col justify-between group`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                                <cat.icon className="w-6 h-6" />
                            </div>

                            <div>
                                <h3 className="font-epilogue font-bold text-lg text-gray-900 mb-1 group-hover:text-[#006B3F] transition-colors">
                                    {cat.name}
                                </h3>
                                <span className="text-xs font-bold text-gray-400 font-jakarta">
                                    {cat.quizzes} Quizzes Available
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}
