export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export const hardGhanaQuestions: Question[] = [
    {
        id: 1,
        question: "Complete the proverb: 'Oba nyansafo...'",
        options: ["...yebu no be, yennka no asem", "...nim ne man", "...di ne fie", "...sua nyansa"],
        answer: "...yebu no be, yennka no asem"
    },
    {
        id: 2,
        question: "What is the name of the sword used by chiefs to swear the oath of allegiance to the Asantehene?",
        options: ["Afena", "Mponponsuo", "Akrafena", "Bosomfena"],
        answer: "Mponponsuo"
    },
    {
        id: 3,
        question: "Before 1957, Ghana was known as the Gold Coast. Which European nation built the first castle (Elmina) in 1482?",
        options: ["The British", "The Dutch", "The Portuguese", "The Danes"],
        answer: "The Portuguese"
    },
    {
        id: 4,
        question: "Which of these is NOT a region created in the 2018 referendum?",
        options: ["Oti", "Western North", "Bono East", "Upper Central"],
        answer: "Upper Central"
    },
    {
        id: 5,
        question: "What does the Adinkra symbol 'Gye Nyame' signify?",
        options: ["Unity", "Supremacy of God", "Wisdom", "Strength"],
        answer: "Supremacy of God"
    },
    {
        id: 6,
        question: "Which Ghanaian festival involves the 'Deer Hunt' (Aboakyir)?",
        options: ["Homowo", "Odwira", "Aboakyir", "Fetu Afahye"],
        answer: "Aboakyir"
    },
    {
        id: 7,
        question: "In which year did Ghana switch from driving on the left to driving on the right?",
        options: ["1957", "1960", "1974", "1982"],
        answer: "1974"
    },
    {
        id: 8,
        question: "Who composed the Ghana National Anthem 'God Bless Our Homeland Ghana'?",
        options: ["Ephraim Amu", "Philip Gbeho", "Mensah Sarbah", "J.H. Kwabena Nketia"],
        answer: "Philip Gbeho"
    },
    {
        id: 9,
        question: "What is the local name for the 'Golden Stool' of the Ashanti Kingdom?",
        options: ["Sika Dwa Kofi", "Okomfo Anokye Dwa", "Asante Kente", "Adinkra Dwa"],
        answer: "Sika Dwa Kofi"
    },
    {
        id: 10,
        question: "Which river forms the natural border between Ghana and Ivory Coast to the southwest?",
        options: ["Volta River", "Pra River", "Tano River", "Ankobra River"],
        answer: "Tano River"
    }
];

export const getRandomChallenge = (count: number = 3): Question[] => {
    // Shuffle and pick 'count' questions
    const shuffled = [...hardGhanaQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
