import { useState, useEffect } from 'react';

/**
 * useDailyTrivia hook tracks whether the user has completed the daily trivia.
 * It uses localStorage to persist the date of the last successful completion.
 */
export function useDailyTrivia() {
    const [isCompletedToday, setIsCompletedToday] = useState<boolean>(false);

    useEffect(() => {
        const checkCompletion = () => {
            const lastTriviaDate = localStorage.getItem('ghanry_lastTriviaDate');
            const today = new Date().toDateString();
            setIsCompletedToday(lastTriviaDate === today);
        };

        checkCompletion();
        // Check every minute in case the day flips while the app is open
        const interval = setInterval(checkCompletion, 60000);
        return () => clearInterval(interval);
    }, []);

    const markAsCompleted = () => {
        const today = new Date().toDateString();
        localStorage.setItem('ghanry_lastTriviaDate', today);
        setIsCompletedToday(true);
    };

    return { isCompletedToday, markAsCompleted };
}
