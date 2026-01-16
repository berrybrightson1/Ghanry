import { useState, useEffect } from "react";

/**
 * Hook to track which questions have been answered to prevent repetitions.
 */
export function useQuestionProgress() {
    const [answeredIds, setAnsweredIds] = useState<number[]>([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('ghanry_answered_questions');
            if (stored) {
                try {
                    setAnsweredIds(JSON.parse(stored));
                } catch (e) {
                    console.error("Failed to parse answered questions", e);
                }
            }
        }
    }, []);

    const markAsAnswered = (questionId: number) => {
        setAnsweredIds(prev => {
            if (prev.includes(questionId)) return prev;
            const updated = [...prev, questionId];
            localStorage.setItem('ghanry_answered_questions', JSON.stringify(updated));
            return updated;
        });
    };

    const isAnswered = (questionId: number) => answeredIds.includes(questionId);

    const resetProgress = () => {
        setAnsweredIds([]);
        localStorage.removeItem('ghanry_answered_questions');
    };

    return { answeredIds, markAsAnswered, isAnswered, resetProgress };
}
