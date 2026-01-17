"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, Bot, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface Message {
    role: "user" | "bot";
    content: string;
}

export default function AskGhanryPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Load history from localStorage
    useEffect(() => {
        const savedMessages = localStorage.getItem("ghanry_chat_history");
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        } else {
            // Initial welcome message
            setMessages([
                {
                    role: "bot",
                    content: "Akwaaba! I am Ghanry, your expert guide to the Motherland. Ask me anything about Ghana's history, food, culture, or even a tricky quiz question you're stuck on! 🇬🇭✨"
                }
            ]);
        }
    }, []);

    // Save history to localStorage
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem("ghanry_chat_history", JSON.stringify(messages));
        }
    }, [messages]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { role: "user", content: input };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, content: m.content })) }),
            });

            const data = await response.json();

            if (data.error) {
                setMessages([...newMessages, { role: "bot", content: `Oh, chale! ${data.error}` }]);
            } else {
                setMessages([...newMessages, { role: "bot", content: data.content }]);
            }
        } catch {
            setMessages([...newMessages, { role: "bot", content: "Sorry, I had a brief connection issue. Let's try that again!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const confirmClear = () => {
        toast("Clear chat history?", {
            description: "Chale, this will delete our entire conversation history forever.",
            action: {
                label: "Delete",
                onClick: () => {
                    const initial = [{
                        role: "bot" as const,
                        content: "Akwaaba! I am Ghanry, your expert guide to the Motherland. Ask me anything about Ghana's history, food, culture, or even a tricky quiz question you're stuck on! 🇬🇭✨"
                    }];
                    setMessages(initial);
                    localStorage.setItem("ghanry_chat_history", JSON.stringify(initial));
                    toast.success("History cleared!");
                },
            },
            cancel: {
                label: "Keep it",
                onClick: () => { },
            }
        });
    };

    return (
        <div className="fixed inset-x-0 top-[70px] bottom-0 md:absolute md:inset-x-0 md:top-0 md:bottom-8 lg:bottom-12 flex flex-col mx-0 md:mx-4 bg-white md:bg-gray-50 rounded-none md:rounded-3xl overflow-hidden md:shadow-2xl border-0 md:border md:border-gray-100 z-[40]">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 p-4 sticky top-0 z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-xl transition-colors md:hidden">
                        <ArrowLeft className="w-5 h-5 text-gray-500" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-epilogue font-extrabold text-[#006B3F] flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-ghana-gold fill-current" />
                            Ask Ghanry
                        </h1>
                        <p className="text-[10px] text-gray-500 font-jakarta lowercase">your personal ghana expert.</p>
                    </div>
                </div>
                <button
                    onClick={confirmClear}
                    className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Clear Chat"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            {/* Chat Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 no-scrollbar"
            >
                <AnimatePresence initial={false}>
                    {messages.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`flex gap-3 max-w-[90%] md:max-w-[80%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === "user" ? "bg-[#006B3F] text-white" : "bg-ghana-gold text-green-900"
                                    }`}>
                                    {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
                                </div>
                                <div className={`p-4 rounded-2xl shadow-sm text-sm ${msg.role === "user"
                                    ? "bg-[#006B3F] text-white rounded-tr-none"
                                    : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
                                    }`}>
                                    <p className="font-jakarta leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-start"
                        >
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-xl bg-ghana-gold text-green-900 flex items-center justify-center shadow-sm">
                                    <Bot className="w-5 h-5 animate-bounce" />
                                </div>
                                <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
                                    <div className="flex gap-1 items-center h-4">
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100 relative z-20">
                <div className="max-w-4xl mx-auto flex gap-2">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            placeholder="Ask me anything..."
                            className="w-full p-4 pr-12 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#006B3F] focus:border-transparent transition-all font-jakarta text-sm"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !input.trim()}
                            aria-label="Send message"
                            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all ${input.trim() && !isLoading
                                ? "bg-[#006B3F] text-white shadow-md shadow-green-900/20"
                                : "text-gray-300"
                                }`}
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <p className="text-[10px] text-center text-gray-400 mt-2 font-jakarta uppercase tracking-widest">
                    AI may make mistakes. Verify important info.
                </p>
            </div>
        </div>
    );
}

