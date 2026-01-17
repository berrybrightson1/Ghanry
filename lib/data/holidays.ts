export interface Holiday {
    date: string;
    name: string;
    type: string;
    description: string;
    highlight?: boolean;
}

export const ghanaHolidays: Holiday[] = [
    { date: "Jan 1", name: "New Year's Day", type: "Public Holiday", description: "First day of the year." },
    { date: "Jan 7", name: "Constitution Day", type: "Statutory Holiday", description: "Marks the adoption of the 1992 Constitution." },
    { date: "Mar 6", name: "Independence Day", type: "National Day", description: "Commemorates Ghana's independence from British rule in 1957.", highlight: true },
    { date: "Apr 18", name: "Good Friday", type: "Religious", description: "Christian holiday observing the crucifixion of Jesus." },
    { date: "Apr 21", name: "Easter Monday", type: "Religious", description: "Day after Easter Sunday." },
    { date: "May 1", name: "May Day", type: "Public Holiday", description: "Workers' Day." },
    { date: "Aug 4", name: "Founders' Day", type: "National Day", description: "Honors the 'Big Six' and other contributors to independence.", highlight: true },
    { date: "Sep 21", name: "Kwame Nkrumah Memorial Day", type: "National Day", description: "Birthday of Ghana's first President." },
    { date: "Dec 5", name: "Farmer's Day", type: "National Recognition", description: "First Friday in December, honoring farmers and fishermen." },
    { date: "Dec 25", name: "Christmas Day", type: "Religious", description: "Celebration of the birth of Jesus Christ." },
    { date: "Dec 26", name: "Boxing Day", type: "Public Holiday", description: "Traditionally a day for giving gifts to the poor." },
];

export const worldCelebrations: Holiday[] = [
    { date: "Jan 1", name: "New Year's Day", type: "Global", description: "First day of the year celebrated worldwide." },
    { date: "Feb 14", name: "Valentine's Day", type: "Cultural", description: "Day of love and romance celebrated globally.", highlight: true },
    { date: "Mar 8", name: "International Women's Day", type: "Global", description: "Celebrating women's achievements and advocating for gender equality." },
    { date: "Mar 20", name: "International Day of Happiness", type: "UN Observance", description: "Recognizes the importance of happiness in people's lives." },
    { date: "Apr 22", name: "Earth Day", type: "Environmental", description: "Global event supporting environmental protection.", highlight: true },
    { date: "May 4", name: "Star Wars Day", type: "Cultural", description: "Pop culture celebration: 'May the Fourth be with you!'" },
    { date: "Jun 5", name: "World Environment Day", type: "UN Observance", description: "UN's principal vehicle for encouraging awareness of the environment." },
    { date: "Jul 30", name: "International Day of Friendship", type: "UN Observance", description: "Promotes friendship between peoples and countries." },
    { date: "Aug 12", name: "International Youth Day", type: "UN Observance", description: "Celebrates youth and their contributions to society." },
    { date: "Sep 21", name: "International Day of Peace", type: "UN Observance", description: "Devoted to strengthening ideals of peace.", highlight: true },
    { date: "Oct 1", name: "International Coffee Day", type: "Cultural", description: "Celebrates coffee and the millions who work in the industry." },
    { date: "Oct 4", name: "World Animal Day", type: "Animal Welfare", description: "Celebrates animal rights and welfare worldwide." },
    { date: "Oct 31", name: "Halloween", type: "Cultural", description: "Traditional celebration with costumes and trick-or-treating." },
    { date: "Nov 13", name: "World Kindness Day", type: "Cultural", description: "Encourages acts of kindness to create a more caring world." },
    { date: "Dec 10", name: "Human Rights Day", type: "UN Observance", description: "Commemorates the adoption of the Universal Declaration of Human Rights." },
    { date: "Dec 25", name: "Christmas Day", type: "Religious", description: "Christian celebration of the birth of Jesus Christ." },
];
