"use client";

import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion"; // Removed for simplicity/stability
import { Send, Sparkles, Bot, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';

interface Message {
    role: "user" | "bot";
    content: string;
}

export default function AskGhanryPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

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
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
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
        <div className="h-[100dvh] flex flex-col bg-white">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 p-4 flex-shrink-0 flex items-center justify-between">
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
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scroll-smooth">
                {messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-50">
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-4xl">🇬🇭</span>
                        </div>
                        <p className="font-epilogue font-bold text-gray-500 text-lg">&quot;Chale, ask me anything about Ghana!&quot;</p>
                    </div>
                ) : (
                    <>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl text-sm md:text-base leading-relaxed ${msg.role === "user"
                                        ? "bg-[#006B3F] text-white rounded-br-none shadow-md"
                                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                                        }`}
                                >
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
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
                            </div>
                        )}
                    </>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 border-t border-gray-100 bg-white p-4 md:p-6 pb-24 md:pb-6 z-10 w-full">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        sendMessage();
                    }}
                    className="relative max-w-4xl mx-auto flex items-center gap-2"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything about Ghana..."
                        className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#006B3F]/20 focus:border-[#006B3F] transition-all font-jakarta text-gray-700"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        title="Send message"
                        className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all ${input.trim() && !isLoading
                            ? "bg-[#006B3F] text-white shadow-md shadow-green-900/20"
                            : "text-gray-300"
                            }`}
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
                <p className="text-[10px] text-center text-gray-400 mt-2 font-jakarta uppercase tracking-widest hidden md:block">
                    AI may make mistakes. Verify important info.
                </p>
            </div>
        </div>
    );
}
