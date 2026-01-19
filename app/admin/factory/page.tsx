"use client";

import { useState } from "react";
import { generateUniqueBatch } from "@/lib/question-factory";
import { Loader2, Database, Trophy, Beaker, Factory } from "lucide-react";
import { toast } from "sonner";

export default function FactoryPage() {
    const [loading, setLoading] = useState(false);
    const [lastReport, setLastReport] = useState<string | null>(null);

    const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);

    const handleGenerate = async (category: string) => {
        setLoading(true);
        setLastReport(null);
        setGeneratedQuestions([]);
        toast.info(`Spinning up the factory for ${category}...`);

        try {
            // Using server action directly
            const result = await generateUniqueBatch(category, 5); // Generate 5 at a time for speed

            if (result.success) {
                const savedCount = result.saved ?? 0;
                const msg = `Factory Report: ${result.generated} generated. ${savedCount > 0 ? `Saved ${savedCount} to DB.` : 'Check list below.'}`;
                setLastReport(msg);

                if (result.questions) {
                    setGeneratedQuestions(result.questions);
                }

                if (result.warning) {
                    toast.warning("Generated, but DB Save Failed", { description: result.warning });
                } else {
                    toast.success("Batch Complete!", { description: msg });
                }
            } else {
                toast.error("Factory Stalled", { description: result.message });
            }
        } catch (error) {
            console.error(error);
            const err = error as Error;
            toast.error("Critical Factory Failure", { description: err.message || "Unknown Network Error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 font-jakarta">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
                <div className="w-16 h-16 bg-[#006B3F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Factory className="w-8 h-8 text-[#006B3F]" />
                </div>

                <h1 className="text-2xl font-epilogue font-extrabold text-gray-900 mb-2">Question Factory</h1>
                <p className="text-gray-500 text-sm mb-8">
                    Generate unique, hard trivia questions. <br />
                    <span className="text-[#CE1126] font-bold">Zero Duplicates Guaranteed.</span>
                </p>

                <div className="space-y-4">
                    <button
                        onClick={() => handleGenerate("History")}
                        disabled={loading}
                        className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Database className="w-5 h-5" />}
                        Generate History Batch
                    </button>

                    <button
                        onClick={() => handleGenerate("Sports")}
                        disabled={loading}
                        className="w-full py-4 bg-[#FCD116] hover:bg-[#eec308] text-black font-bold rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-sm"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Trophy className="w-5 h-5" />}
                        Generate Sports Batch
                    </button>

                    <button
                        onClick={() => handleGenerate("Science")}
                        disabled={loading}
                        className="w-full py-4 bg-[#006B3F] hover:bg-[#005a35] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-50 shadow-sm"
                    >
                        {loading ? <Loader2 className="animate-spin" /> : <Beaker className="w-5 h-5" />}
                        Generate Science Batch
                    </button>
                </div>

                {lastReport && (
                    <div className="mt-8 p-4 bg-green-50 text-green-800 text-xs font-mono rounded-lg border border-green-200 animate-in fade-in slide-in-from-bottom-2">
                        {lastReport}
                    </div>
                )}
            </div>

            {/* Live Preview of Generated Content */}
            {generatedQuestions.length > 0 && (
                <div className="w-full max-w-4xl mt-12 space-y-4 animate-in fade-in slide-in-from-bottom-4">
                    <h2 className="text-xl font-bold text-gray-800 text-center mb-6">Fresh from the Factory 🏭</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {generatedQuestions.map((q, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 text-left">
                                <p className="font-epilogue font-bold text-gray-900">{q.question}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {q.options.map((opt: string, idx: number) => (
                                        <div key={idx} className={`text-xs p-2 rounded ${opt === q.answer ? 'bg-green-100 text-green-800 font-bold border border-green-200' : 'bg-gray-50 text-gray-500'}`}>
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 italic mt-2 border-t pt-2">{q.explanation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
