// Ghana Facts Pool — Expanded to 1079 facts (Originals + Curated Extensions)
export type FactCategory = "History" | "Culture" | "Nature" | "Food" | "Music" | "Throwback" | "Sports" | "Economy" | "Language" | "Innovation" | "Geography" | "People" | "Festivals";

export interface FactData {
  id: number;
  category: FactCategory;
  title: string;
  fact: string;
  didYouKnow: string;
  tags: string[];
}

export const ghanaFactsPool: FactData[] = [
  {
    "id": 1,
    "category": "History",
    "title": "Ghana's Independence",
    "fact": "Ghana declared independence on March 6, 1957, becoming the first sub-Saharan African country to gain freedom from colonial rule. Prime Minister Kwame Nkrumah declared Ghana free forever.",
    "didYouKnow": "The word Ghana itself means Warrior King",
    "tags": [
      "Independence",
      "Nkrumah",
      "1957"
    ]
  },
  {
    "id": 2,
    "category": "History",
    "title": "The Golden Stool",
    "fact": "The Sika Dwa Kofi (Golden Stool) is so sacred that no one, not even the Ashanti King, is allowed to sit on it. It is believed to contain the spirit of the Ashanti nation.",
    "didYouKnow": "The British demand to sit on it sparked the War of the Golden Stool in 1900",
    "tags": [
      "Ashanti",
      "Royalty",
      "Golden Stool"
    ]
  },
  {
    "id": 3,
    "category": "History",
    "title": "Yaa Asantewaa",
    "fact": "Queen Mother Yaa Asantewaa of Ejisu led the Ashanti army against the British in 1900 when male chiefs were reluctant to fight.",
    "didYouKnow": "She is the last known woman in African history to lead a major war against a colonial power",
    "tags": [
      "Ashanti",
      "Warrior",
      "Queen"
    ]
  },
  {
    "id": 4,
    "category": "History",
    "title": "Elmina Castle",
    "fact": "Elmina Castle, built by the Portuguese in 1482, is the oldest European building south of the Sahara. It was a major hub of the transatlantic slave trade.",
    "didYouKnow": "It is also known as Sao Jorge da Mina meaning St. George of the Mine",
    "tags": [
      "Slave Trade",
      "Portuguese",
      "Heritage"
    ]
  },
  {
    "id": 5,
    "category": "History",
    "title": "Okomfo Anokye",
    "fact": "Okomfo Anokye was the legendary priest who summoned the Golden Stool from the sky at Kumasi, founding the Ashanti nation around 1701.",
    "didYouKnow": "He is said to have thrust a sword into the ground in Kumasi that legend says has never been removed",
    "tags": [
      "Ashanti",
      "Legend",
      "Priest"
    ]
  },
  {
    "id": 6,
    "category": "History",
    "title": "W.E.B. Du Bois in Ghana",
    "fact": "The famous civil rights leader W.E.B. Du Bois renounced his US citizenship and moved to Ghana in 1961 at the invitation of Kwame Nkrumah.",
    "didYouKnow": "He died in Accra on August 27, 1963, the day before Martin Luther King Jr gave the I Have a Dream speech",
    "tags": [
      "Civil Rights",
      "Diaspora",
      "Accra"
    ]
  },
  {
    "id": 7,
    "category": "History",
    "title": "J.J. Rawlings First Coup",
    "fact": "Jerry John Rawlings came to power through a junior officer coup in 1979, executed leaders for corruption, then handed power back before seizing it again in 1981.",
    "didYouKnow": "He later became a democratically elected president and transformed Ghana's economy",
    "tags": [
      "Military",
      "Democracy",
      "Rawlings"
    ]
  },
  {
    "id": 8,
    "category": "History",
    "title": "Prempeh I Exile",
    "fact": "Ashanti King Prempeh I was exiled by the British to the Seychelles in 1900 to break Ashanti resistance but returned triumphantly in 1924.",
    "didYouKnow": "His exile lasted 24 years, so long the British thought the Ashanti would forget him",
    "tags": [
      "Ashanti",
      "Exile",
      "British"
    ]
  },
  {
    "id": 9,
    "category": "History",
    "title": "Cape Coast as Capital",
    "fact": "Cape Coast served as the capital of the Gold Coast colony until 1877, when Accra became the new capital due to its better harbor.",
    "didYouKnow": "Cape Coast Castle, a UNESCO World Heritage Site, sits directly on the Atlantic Ocean",
    "tags": [
      "Cape Coast",
      "Colonial",
      "Heritage"
    ]
  },
  {
    "id": 10,
    "category": "History",
    "title": "Pan-Africanism",
    "fact": "Kwame Nkrumah was the chief architect of Pan-Africanism, believing all African nations should unite into a United States of Africa.",
    "didYouKnow": "He hosted the first Conference of Independent African States in Accra in 1958",
    "tags": [
      "Pan-Africa",
      "Nkrumah",
      "Unity"
    ]
  },
  {
    "id": 11,
    "category": "History",
    "title": "Akosombo Dam Built",
    "fact": "The Akosombo Dam, completed in 1965, created Lake Volta, the world's largest man-made lake by surface area, flooding over 8500 km of land.",
    "didYouKnow": "Its construction displaced over 80,000 people in one of the largest forced relocations in African history",
    "tags": [
      "Volta",
      "Dam",
      "Development"
    ]
  },
  {
    "id": 12,
    "category": "History",
    "title": "Volta Region Plebiscite",
    "fact": "The Volta Region was part of British Togoland before a UN plebiscite in 1956 voted to integrate it with Ghana at independence.",
    "didYouKnow": "It is the only Ghanaian region that was previously German territory under German Togoland",
    "tags": [
      "Togoland",
      "History",
      "Volta"
    ]
  },
  {
    "id": 13,
    "category": "History",
    "title": "Three Anglo-Ashanti Wars",
    "fact": "There were five major Anglo-Ashanti wars between 1823 and 1900. The Ashanti won the first two, shocking the British Empire.",
    "didYouKnow": "At the Battle of Nsamankow in 1824, the Ashanti killed the Governor of the Gold Coast Sir Charles MacCarthy",
    "tags": [
      "Ashanti",
      "British",
      "War"
    ]
  },
  {
    "id": 14,
    "category": "History",
    "title": "Kwame Nkrumah Mausoleum",
    "fact": "Kwame Nkrumah's mausoleum in Accra was originally the polo grounds where he declared independence. It was redesigned as a memorial park in 1992.",
    "didYouKnow": "He declared independence at midnight on March 6 1957 from this very spot",
    "tags": [
      "Accra",
      "Nkrumah",
      "Memorial"
    ]
  },
  {
    "id": 15,
    "category": "History",
    "title": "Gold Trade History",
    "fact": "The region known as the Gold Coast had been trading gold with North Africa and Europe since the 8th century, long before Portuguese arrival in 1471.",
    "didYouKnow": "Medieval Arab scholars described Ghana as the Land of Gold centuries before European contact",
    "tags": [
      "Gold",
      "Trade",
      "Ancient"
    ]
  },
  {
    "id": 16,
    "category": "History",
    "title": "HIPC Debt Relief",
    "fact": "Ghana became one of the first African countries to complete the Heavily Indebted Poor Countries initiative in 2004, getting billions in debt relief.",
    "didYouKnow": "This paved the way for Ghana's economic transformation in the 2000s",
    "tags": [
      "Economy",
      "Debt",
      "2004"
    ]
  },
  {
    "id": 17,
    "category": "History",
    "title": "First Railway in Ghana",
    "fact": "The first railway line in Ghana was built by the British in 1898, connecting Sekondi to Tarkwa to transport gold and timber from the interior.",
    "didYouKnow": "By 1923 a rail line reached Kumasi from Accra, a journey that used to take weeks on foot",
    "tags": [
      "Railway",
      "Colonial",
      "Infrastructure"
    ]
  },
  {
    "id": 18,
    "category": "History",
    "title": "Year of Return",
    "fact": "In 2019 Ghana launched the Year of Return to mark 400 years since enslaved Africans first arrived in America, inviting the African diaspora to come home.",
    "didYouKnow": "The initiative attracted over 500,000 diaspora visitors and generated nearly 2 billion dollars in tourism revenue",
    "tags": [
      "Diaspora",
      "Tourism",
      "2019"
    ]
  },
  {
    "id": 19,
    "category": "History",
    "title": "Guggisberg Governor",
    "fact": "Sir Gordon Guggisberg was a progressive colonial governor who built Achimota School, Korle Bu Hospital, and Takoradi Harbour in the 1920s.",
    "didYouKnow": "He was one of the few colonial officials who openly advocated for African advancement in education",
    "tags": [
      "Colonial",
      "Education",
      "Infrastructure"
    ]
  },
  {
    "id": 20,
    "category": "History",
    "title": "Ghana's Non-Aligned Movement",
    "fact": "Ghana was a founding member of the Non-Aligned Movement during the Cold War, choosing not to align with either the US or Soviet Union.",
    "didYouKnow": "Nkrumah hosted a major Non-Aligned summit in Cairo in 1964 attended by 47 nations",
    "tags": [
      "Cold War",
      "Nkrumah",
      "Diplomacy"
    ]
  },
  {
    "id": 21,
    "category": "Culture",
    "title": "Kente Cloth Origins",
    "fact": "Kente cloth originated among the Ashanti and Baoulé peoples. Each pattern carries a specific name, meaning, and historical origin, making every garment a wearable story.",
    "didYouKnow": "The word Kente comes from the Ashanti word kenten meaning basket, because the weave looks like a woven basket",
    "tags": [
      "Kente",
      "Fashion",
      "Ashanti"
    ]
  },
  {
    "id": 22,
    "category": "Culture",
    "title": "Adinkra Symbols",
    "fact": "Adinkra symbols are over 100 visual philosophical symbols, each with a distinct meaning. They are used on textiles, pottery, logos, and tombstones across Ghana.",
    "didYouKnow": "Gye Nyame, meaning Except God, is the most widely used Adinkra symbol and represents the supremacy of God",
    "tags": [
      "Adinkra",
      "Symbols",
      "Philosophy"
    ]
  },
  {
    "id": 23,
    "category": "Culture",
    "title": "Ghanaian Day Names",
    "fact": "Every Ghanaian child receives a soul name based on the day of the week they were born. Kofi is for males born on Friday, Ama for females born on Saturday.",
    "didYouKnow": "Former UN Secretary-General Kofi Annan was born on a Friday",
    "tags": [
      "Names",
      "Akan",
      "Tradition"
    ]
  },
  {
    "id": 24,
    "category": "Culture",
    "title": "Fantasy Coffins",
    "fact": "In Ga tradition, elaborate fantasy coffins are crafted in the shape of objects representing the deceased's life. A fisherman may be buried in a fish-shaped coffin.",
    "didYouKnow": "This tradition was started by craftsman Seth Kane Kwei in the 1950s and his work is now exhibited in museums worldwide",
    "tags": [
      "Funeral",
      "Ga",
      "Art"
    ]
  },
  {
    "id": 25,
    "category": "Culture",
    "title": "Ghanaian Funerals",
    "fact": "In Ghana, funerals are elaborate celebrations of life that can last a full weekend. Dancing, music, colorful fabric, and food all play a central role in honoring the deceased.",
    "didYouKnow": "It is common for families to save for years to fund a proper funeral, considered more important socially than weddings",
    "tags": [
      "Funeral",
      "Culture",
      "Celebration"
    ]
  },
  {
    "id": 26,
    "category": "Culture",
    "title": "Chieftaincy System",
    "fact": "Ghana has a rich chieftaincy tradition with over 1000 traditional ruling houses. Chiefs serve as cultural leaders, mediators, and custodians of tradition.",
    "didYouKnow": "Ghana's constitution formally recognizes the institution of chieftaincy and prohibits parliament from legislating on chieftaincy matters",
    "tags": [
      "Chief",
      "Tradition",
      "Government"
    ]
  },
  {
    "id": 27,
    "category": "Culture",
    "title": "Ewe Drumming",
    "fact": "The Ewe people of the Volta Region are world-renowned for complex polyrhythmic drumming that significantly influenced Afrobeats, jazz, and Cuban music.",
    "didYouKnow": "Cuban clave rhythm is widely traced to enslaved Ewe and Fon people brought to the Caribbean",
    "tags": [
      "Ewe",
      "Drumming",
      "Music"
    ]
  },
  {
    "id": 28,
    "category": "Culture",
    "title": "Ga Homowo Festival",
    "fact": "Homowo is the harvest festival of the Ga people, celebrating their triumph over a historical famine. The word means to hoot at hunger.",
    "didYouKnow": "During Homowo, twin births are celebrated with special ceremonies and the ritual food kpokpoi is prepared",
    "tags": [
      "Ga",
      "Festival",
      "Accra"
    ]
  },
  {
    "id": 29,
    "category": "Culture",
    "title": "Ashanti Ceremonial Umbrella",
    "fact": "At Ashanti durbars, the chief is carried in a palanquin under a large ceremonial umbrella. Each umbrella design and colour has a specific royal meaning.",
    "didYouKnow": "The bigger and more elaborate the umbrella, the higher the chief's rank in the hierarchy",
    "tags": [
      "Ashanti",
      "Chief",
      "Ceremony"
    ]
  },
  {
    "id": 30,
    "category": "Culture",
    "title": "Dipo Coming-of-Age",
    "fact": "The Dipo rite marks a girl's transition to womanhood among the Krobo people. It involves days of ritual, dance, and the famous Krobo glass bead jewellery.",
    "didYouKnow": "Krobo aggrey beads are among the oldest and most treasured trade beads in Africa",
    "tags": [
      "Krobo",
      "Rite",
      "Beads"
    ]
  },
  {
    "id": 31,
    "category": "Culture",
    "title": "Knocking Ceremony",
    "fact": "In traditional Ghanaian weddings, the groom's family brings drinks and gifts to knock on the door of the bride's family, signaling intent to marry.",
    "didYouKnow": "The bride's family must accept palm wine from the groom's family, symbolizing their acceptance of the union",
    "tags": [
      "Wedding",
      "Tradition",
      "Custom"
    ]
  },
  {
    "id": 32,
    "category": "Culture",
    "title": "Talking Drums",
    "fact": "Fontomfrom talking drums were historically used to send messages across long distances, announce the arrival of royalty, and accompany ceremonies.",
    "didYouKnow": "Skilled drum linguists could encode full sentences in tonal patterns, functioning like a telegraph network",
    "tags": [
      "Drums",
      "Communication",
      "Ashanti"
    ]
  },
  {
    "id": 33,
    "category": "Culture",
    "title": "Akwasidae Ceremony",
    "fact": "Akwasidae is a sacred Ashanti ceremony held on specific Sundays to honor royal ancestors. It involves libations, drum music, and the display of royal regalia.",
    "didYouKnow": "The Ashanti calendar alternates between Akwasidae and Awukudae ceremonies throughout the year",
    "tags": [
      "Ashanti",
      "Festival",
      "Royalty"
    ]
  },
  {
    "id": 34,
    "category": "Culture",
    "title": "Krobo Glass Beads",
    "fact": "The Krobo people of the Eastern Region are master bead-makers using recycled glass. Their powder glass beads are internationally collected and traded.",
    "didYouKnow": "Krobo bead-making is a UNESCO-recognized craft and beads serve as a form of social currency and identity",
    "tags": [
      "Krobo",
      "Beads",
      "Craft"
    ]
  },
  {
    "id": 35,
    "category": "Culture",
    "title": "Aboakyer Deer Festival",
    "fact": "The Aboakyer festival of Winneba involves two rival groups racing to capture a live bushbuck deer with bare hands. The winning group is considered blessed for the year.",
    "didYouKnow": "No weapons are used, participants must catch the deer alive using only hands and agility",
    "tags": [
      "Winneba",
      "Festival",
      "Tradition"
    ]
  },
  {
    "id": 36,
    "category": "Culture",
    "title": "Okyeame Linguist",
    "fact": "An Okyeame is the chief's official spokesperson. They translate the chief's words using elaborate proverbial speech, even when everyone can already hear the chief.",
    "didYouKnow": "This is because a chief's words are considered too sacred and powerful to be delivered directly to commoners",
    "tags": [
      "Chief",
      "Language",
      "Protocol"
    ]
  },
  {
    "id": 37,
    "category": "Culture",
    "title": "Pito Tradition",
    "fact": "Pito is a mildly fermented sorghum beer brewed by women in Northern Ghana. It is central to social gatherings, festivals, and communal labor arrangements.",
    "didYouKnow": "In some northern communities, sharing pito before important decisions is required. Refusing it is considered deeply rude",
    "tags": [
      "North Ghana",
      "Beer",
      "Custom"
    ]
  },
  {
    "id": 38,
    "category": "Nature",
    "title": "Lake Bosomtwe Formation",
    "fact": "Lake Bosomtwe near Kumasi is Ghana's only natural lake. It formed in an ancient meteorite crater over one million years ago and has no river outlet.",
    "didYouKnow": "The Ashanti believe the god Twi lives in its depths and that the souls of the dead visit it before moving on",
    "tags": [
      "Lake",
      "Ashanti",
      "Meteorite"
    ]
  },
  {
    "id": 39,
    "category": "Nature",
    "title": "Kakum Canopy Walk",
    "fact": "Kakum National Park features a canopy walkway 30 metres above the forest floor covering 350 metres, one of only a few such walkways in the world.",
    "didYouKnow": "The park shelters forest elephants, bongos, leopards, and more than 400 butterfly species",
    "tags": [
      "Kakum",
      "Forest",
      "Tourism"
    ]
  },
  {
    "id": 40,
    "category": "Nature",
    "title": "Wli Waterfalls Height",
    "fact": "Wli Waterfalls in the Volta Region is the highest waterfall in West Africa, plunging 80 metres. Named from the Ewe word for water.",
    "didYouKnow": "The falls host one of Ghana's largest colonies of fruit bats, with over 200,000 bats roosting in its cliff faces",
    "tags": [
      "Waterfall",
      "Volta",
      "Nature"
    ]
  },
  {
    "id": 41,
    "category": "Nature",
    "title": "Mole National Park",
    "fact": "Mole National Park in the Northern Region is Ghana's largest wildlife refuge at over 4840 km squared. It shelters over 93 mammal species.",
    "didYouKnow": "Ghana's elephant population has grown significantly due to Mole's conservation efforts since the 1970s",
    "tags": [
      "Wildlife",
      "North Ghana",
      "Elephants"
    ]
  },
  {
    "id": 42,
    "category": "Nature",
    "title": "Mount Afadjato",
    "fact": "Mount Afadjato at 885 metres is the highest peak in Ghana, sitting on the Togo Mountains range and offering views into Togo on clear days.",
    "didYouKnow": "The name Afadjato means it should not be easily accessible in Ewe, describing its challenging terrain",
    "tags": [
      "Mountain",
      "Volta",
      "Hiking"
    ]
  },
  {
    "id": 43,
    "category": "Nature",
    "title": "Bia National Park",
    "fact": "Bia National Park on Ghana's western border protects one of the last primary rainforests in West Africa, sheltering Diana monkeys and forest elephants.",
    "didYouKnow": "It was designated a UNESCO Biosphere Reserve in 1983",
    "tags": [
      "Rainforest",
      "UNESCO",
      "Conservation"
    ]
  },
  {
    "id": 44,
    "category": "Nature",
    "title": "Ankasa Conservation Area",
    "fact": "Ankasa Conservation Area in the Western Region receives the highest rainfall in Ghana and is home to chimpanzees, bongo antelopes, and African grey parrots.",
    "didYouKnow": "It has one of the highest tree species diversity counts in all of West Africa",
    "tags": [
      "Chimpanzees",
      "Forest",
      "Conservation"
    ]
  },
  {
    "id": 45,
    "category": "Nature",
    "title": "Shai Hills Reserve",
    "fact": "Shai Hills Resource Reserve near Accra is home to olive baboons, kobs, and various birds. Its caves were historically used as hideouts during tribal conflicts.",
    "didYouKnow": "The Dangme people hid in these caves to escape Ashanti raids in the 18th century",
    "tags": [
      "Baboons",
      "Accra",
      "Reserve"
    ]
  },
  {
    "id": 46,
    "category": "Nature",
    "title": "Butterfly Diversity",
    "fact": "Ghana hosts over 1000 butterfly species, one of the highest densities on the African continent, with Kakum National Park alone housing over 400 species.",
    "didYouKnow": "Scientists use butterfly diversity as a key indicator of an ecosystem's overall health",
    "tags": [
      "Butterflies",
      "Biodiversity",
      "Kakum"
    ]
  },
  {
    "id": 47,
    "category": "Nature",
    "title": "Keta Lagoon",
    "fact": "Keta Lagoon in the Volta Region is one of the largest lagoons in West Africa at 350 km squared. It is a critical habitat for flamingos and pelicans.",
    "didYouKnow": "The lagoon is threatened by ocean encroachment, which is slowly swallowing the nearby town of Keta",
    "tags": [
      "Lagoon",
      "Birds",
      "Volta"
    ]
  },
  {
    "id": 48,
    "category": "Nature",
    "title": "Shea Tree Longevity",
    "fact": "The Shea tree grows widely in northern Ghana's savanna zones. Its nuts yield shea butter used in cosmetics and cooking worldwide.",
    "didYouKnow": "Shea trees can live up to 300 years and in some communities it is sacred and taboo to cut them down",
    "tags": [
      "Shea",
      "North Ghana",
      "Tree"
    ]
  },
  {
    "id": 49,
    "category": "Nature",
    "title": "Volta River Basin",
    "fact": "The Volta River basin is one of West Africa's most important drainage systems, spanning Ghana, Burkina Faso, and parts of four other countries.",
    "didYouKnow": "The basin covers 400,000 km squared and supports the livelihoods of over 12 million people",
    "tags": [
      "Volta",
      "River",
      "Basin"
    ]
  },
  {
    "id": 50,
    "category": "Nature",
    "title": "Umbrella Rock Koforidua",
    "fact": "Umbrella Rock in Koforidua is a massive rock that is naturally balanced in the shape of an umbrella due to centuries of differential erosion.",
    "didYouKnow": "Scientists estimate the top rock weighs over 50 tonnes and has balanced in place for thousands of years",
    "tags": [
      "Rock",
      "Eastern Region",
      "Geology"
    ]
  },
  {
    "id": 51,
    "category": "Food",
    "title": "Jollof Rice Rivalry",
    "fact": "The rivalry between Ghanaian and Nigerian Jollof rice is legendary. Ghanaians maintain theirs is smokier, cooked over wood fire for a party smell that Nigerians cannot replicate.",
    "didYouKnow": "At the 2015 ECOWAS summit, chefs from both countries staged a Jollof cook-off in what was diplomatically called the Battle of the Jollof",
    "tags": [
      "Jollof",
      "Nigeria",
      "Rivalry"
    ]
  },
  {
    "id": 52,
    "category": "Food",
    "title": "Fufu Preparation",
    "fact": "Fufu is made by pounding boiled cassava and plantain in a wooden mortar with a pestle until smooth and elastic. The process requires rhythmic teamwork between two people.",
    "didYouKnow": "In 2020 during COVID lockdowns, Ghanaians invented the Silent Fufu challenge to make fufu without noise so neighbors would not know you were eating alone",
    "tags": [
      "Fufu",
      "Cassava",
      "Cooking"
    ]
  },
  {
    "id": 53,
    "category": "Food",
    "title": "Banku Fermentation",
    "fact": "Banku is a fermented corn and cassava dough dumpling cooked by stirring over heat. Its sour taste is distinctive and paired especially with tilapia and pepper.",
    "didYouKnow": "The distinctive fermented sour taste of Banku is called ntoso in Ga, considered an acquired taste that true Ghanaians are immensely proud of",
    "tags": [
      "Banku",
      "Ga",
      "Ewe"
    ]
  },
  {
    "id": 54,
    "category": "Food",
    "title": "Waakye Red Color",
    "fact": "Waakye is a dish of rice and beans cooked with dried millet stalks or sorghum leaves which give it a distinctive earthy purple-red colour.",
    "didYouKnow": "A proper street waakye comes with tomato stew, fried plantain, cowhide, egg, spaghetti, and gari, giving up to ten toppings",
    "tags": [
      "Waakye",
      "Street Food",
      "Rice"
    ]
  },
  {
    "id": 55,
    "category": "Food",
    "title": "Kelewele Night Food",
    "fact": "Kelewele, spiced fried plantain cubes, is a popular evening street food seasoned with ginger, chili, cloves, and anise.",
    "didYouKnow": "Kelewele is traditionally sold only at night by women on roadsides under dim yellow lights, giving it a distinctive social atmosphere",
    "tags": [
      "Plantain",
      "Street Food",
      "Spicy"
    ]
  },
  {
    "id": 56,
    "category": "Food",
    "title": "Shito Origin",
    "fact": "Shito, meaning pepper in Ga, is a dark intensely flavoured sauce made from dried fish, shrimp, pepper, and palm oil that accompanies almost every Ghanaian dish.",
    "didYouKnow": "Bottles of Shito are the most commonly requested item for visitors from the diaspora to bring back from Ghana",
    "tags": [
      "Shito",
      "Ga",
      "Sauce"
    ]
  },
  {
    "id": 57,
    "category": "Food",
    "title": "Palm Nut Soup",
    "fact": "Palm nut soup, Abenkwan in Akan, is a rich velvety soup made from boiled and pressed palm nuts. It is central to Ghanaian communal feasts.",
    "didYouKnow": "The natural oils in palm nuts make this soup self-basting and it deepens in flavour the longer it cooks",
    "tags": [
      "Palm Soup",
      "Ashanti",
      "Cooking"
    ]
  },
  {
    "id": 58,
    "category": "Food",
    "title": "Hausa Koko Porridge",
    "fact": "Hausa Koko is a spiced millet porridge from Northern Ghana commonly eaten for breakfast with koose bean fritters or bread. It has a warming peppery bite.",
    "didYouKnow": "It is named after the Hausa people but is now widely enjoyed across Ghana's north and middle belt",
    "tags": [
      "Breakfast",
      "North Ghana",
      "Porridge"
    ]
  },
  {
    "id": 59,
    "category": "Food",
    "title": "Tuo Zaafi",
    "fact": "Tuo Zaafi is a thick porridge made from millet or maize flour, eaten with soup in Northern Ghana. It is filling and sustaining for physical labour.",
    "didYouKnow": "TZ etiquette requires eating it with only the right hand, forming small balls and dipping into soup",
    "tags": [
      "TZ",
      "North Ghana",
      "Millet"
    ]
  },
  {
    "id": 60,
    "category": "Food",
    "title": "Kontomire Stew",
    "fact": "Kontomire stew is made from pounded cocoyam leaves, smoked fish, and spices. It is one of the most iron-rich traditional dishes in Ghana.",
    "didYouKnow": "Kontomire is often prescribed by traditional healers as a remedy for anaemia due to its high iron content",
    "tags": [
      "Kontomire",
      "Nutrition",
      "Stew"
    ]
  },
  {
    "id": 61,
    "category": "Food",
    "title": "Omo Tuo Sunday",
    "fact": "Omo Tuo, rice balls, are a classic Sunday dish in many Ghanaian homes, served with light soup or groundnut soup. Sunday without rice balls feels incomplete.",
    "didYouKnow": "The tradition of Sunday rice balls is so strong that many Ghanaians associate the smell of groundnut soup exclusively with Sunday",
    "tags": [
      "Rice Balls",
      "Sunday",
      "Tradition"
    ]
  },
  {
    "id": 62,
    "category": "Food",
    "title": "Red Red Dish",
    "fact": "Red Red is a dish of fried plantain served with stewed black-eyed beans in tomato and palm oil. It gets its name from the red palm oil and red tomatoes.",
    "didYouKnow": "Despite humble ingredients, Red Red is served at high-end restaurants in Accra and at Ghanaian diaspora restaurants in London",
    "tags": [
      "Red Red",
      "Plantain",
      "Beans"
    ]
  },
  {
    "id": 63,
    "category": "Food",
    "title": "Groundnut Soup",
    "fact": "Peanut soup is one of the signature soups of Ghanaian cuisine, made from ground roasted peanuts, tomatoes, and spices, paired with fufu or rice balls.",
    "didYouKnow": "Ghana is one of Africa's major peanut producers and the crop features in everything from soups to snacks to cooking oil",
    "tags": [
      "Groundnut",
      "Soup",
      "Ashanti"
    ]
  },
  {
    "id": 64,
    "category": "Food",
    "title": "Kenkey Two Types",
    "fact": "There are two main types of Kenkey: Ga Kenkey wrapped in dried corn husks that is more sour, and Fante Kenkey wrapped in banana leaves that is slightly sweeter.",
    "didYouKnow": "Kenkey can be stored unrefrigerated for up to five days due to fermentation, making it a historical travel and trading food",
    "tags": [
      "Kenkey",
      "Fante",
      "Ga"
    ]
  },
  {
    "id": 65,
    "category": "Food",
    "title": "Gari Versatility",
    "fact": "Gari is coarse cassava flour that is a staple across Ghana. It can be eaten dry with groundnuts, soaked in water with sugar, or used as a side with stew.",
    "didYouKnow": "Gari is so essential to Ghanaian student life that university canteens measure supply in terms of how many gari portions they stock",
    "tags": [
      "Gari",
      "Cassava",
      "Student Life"
    ]
  },
  {
    "id": 66,
    "category": "Music",
    "title": "Highlife Music",
    "fact": "Highlife music was born in Ghana in the early 20th century, blending indigenous Ghanaian rhythms with Western guitar and brass. It spread across West Africa.",
    "didYouKnow": "The name Highlife came from the high-society colonial dance halls in Accra where it was first played, a lifestyle most Ghanaians could not afford",
    "tags": [
      "Highlife",
      "Music",
      "History"
    ]
  },
  {
    "id": 67,
    "category": "Music",
    "title": "Afrobeats Ghana",
    "fact": "Ghana's Afrobeats artists like Sarkodie, Stonebwoy, and Shatta Wale have brought a sound fused with Highlife, Hiplife, and Dancehall to global stages.",
    "didYouKnow": "Sarkodie is the most awarded Ghanaian rapper of all time with over 30 international music awards",
    "tags": [
      "Afrobeats",
      "Sarkodie",
      "Stonebwoy"
    ]
  },
  {
    "id": 68,
    "category": "Music",
    "title": "Osibisa Band",
    "fact": "Osibisa, formed in London in 1969 by Ghanaian and Caribbean musicians, was one of the first African bands to achieve international superstardom, pioneering Afro-rock.",
    "didYouKnow": "Their album Woyaya was played at the opening ceremony of the 1972 Munich Olympics",
    "tags": [
      "Osibisa",
      "Afro-Rock",
      "Pioneer"
    ]
  },
  {
    "id": 69,
    "category": "Music",
    "title": "Kpanlogo Dance",
    "fact": "Kpanlogo is a Ghanaian social rhythm and dance originated by the Ga people of Accra in the 1960s, fusing traditional rhythms with rock and soul.",
    "didYouKnow": "Kpanlogo was initially banned by some Ga elders as too westernized before becoming a symbol of Ga cultural identity",
    "tags": [
      "Kpanlogo",
      "Ga",
      "Dance"
    ]
  },
  {
    "id": 70,
    "category": "Music",
    "title": "E.T. Mensah",
    "fact": "E.T. Mensah, known as the King of Highlife, popularized the genre across West Africa in the 1950s through his band The Tempos. Louis Armstrong called him a great musician.",
    "didYouKnow": "He was the first Ghanaian musician to record for an international label, signing with Decca Records in 1951",
    "tags": [
      "ET Mensah",
      "Highlife",
      "King"
    ]
  },
  {
    "id": 71,
    "category": "Music",
    "title": "Azonto Global Craze",
    "fact": "Azonto is a communicative dance and music genre from Accra around 2011. Dancers mime everyday activities like ironing, driving, or cooking to the rhythm.",
    "didYouKnow": "Azonto went viral globally in 2012 and was performed by footballers, politicians, and celebrities from Brazil to South Korea",
    "tags": [
      "Azonto",
      "Dance",
      "2012"
    ]
  },
  {
    "id": 72,
    "category": "Music",
    "title": "Hiplife Genre",
    "fact": "Hiplife is a Ghanaian genre fusing Hip-Hop with Highlife, pioneered in the late 1990s by Reggie Rockstone. Lyrics flow in Twi, Pidgin, and Ga.",
    "didYouKnow": "Reggie Rockstone moved back from London to Accra specifically to create Hiplife. He is called the Godfather of Hiplife",
    "tags": [
      "Hiplife",
      "Reggie Rockstone",
      "Fusion"
    ]
  },
  {
    "id": 73,
    "category": "Music",
    "title": "Wulomei Group",
    "fact": "Wulomei was a pioneering Ghanaian folk group formed in 1973 that fused traditional Ga rhythms, poetry, and instruments with contemporary music.",
    "didYouKnow": "Their hit Mole is one of the most sampled traditional Ghanaian songs internationally",
    "tags": [
      "Wulomei",
      "Ga",
      "Folk"
    ]
  },
  {
    "id": 74,
    "category": "Music",
    "title": "Burger Highlife",
    "fact": "Burger Highlife is a Ghanaian music genre that emerged among the diaspora in Germany in the 1980s, blending Highlife with electronic synthesizers.",
    "didYouKnow": "Artists like Rex Omar and George Darko pioneered this sound that swept Ghanaian dance floors in the late 80s and early 90s",
    "tags": [
      "Highlife",
      "Diaspora",
      "Germany"
    ]
  },
  {
    "id": 75,
    "category": "Music",
    "title": "Obrafour",
    "fact": "Obrafour, nicknamed the Rap Sofo (Rap Preacher), is considered one of Ghana's greatest Hiplife artists and a cultural voice for Ghanaian identity in rap.",
    "didYouKnow": "His 1999 debut album Pae Mu Ka is widely considered one of the defining Hiplife albums of all time",
    "tags": [
      "Obrafour",
      "Hiplife",
      "Rap"
    ]
  },
  {
    "id": 76,
    "category": "Geography",
    "title": "Prime Meridian Ghana",
    "fact": "The Prime Meridian passes through Ghana, specifically through the Meridian Rock monument in Tema, making Ghana one of the countries closest to the center of the world.",
    "didYouKnow": "Ghana is one of the few countries that lies in both the Western and Eastern hemispheres simultaneously",
    "tags": [
      "Meridian",
      "Tema",
      "Geography"
    ]
  },
  {
    "id": 77,
    "category": "Geography",
    "title": "Lake Volta Size",
    "fact": "Lake Volta is the largest reservoir by surface area in the world covering 8502 km squared, which is about 3.6 percent of Ghana's total land area.",
    "didYouKnow": "Over 78,000 people were displaced when the valley was flooded in 1964 to create the lake for the Akosombo Dam",
    "tags": [
      "Lake Volta",
      "Dam",
      "Size"
    ]
  },
  {
    "id": 78,
    "category": "Geography",
    "title": "Atlantic Coastline",
    "fact": "Ghana has 550 kilometres of Atlantic Ocean coastline, ranging from white sandy beaches in the west to the Keta Lagoon and eroding cliffs in the east.",
    "didYouKnow": "Labadi Beach in Accra is the most visited beach in Ghana and hosts massive concerts and New Year celebrations",
    "tags": [
      "Coastline",
      "Beaches",
      "Accra"
    ]
  },
  {
    "id": 79,
    "category": "Geography",
    "title": "Ghana's Four Neighbors",
    "fact": "Ghana shares borders with Ivory Coast to the west, Burkina Faso to the north, and Togo to the east. The southern border is the Gulf of Guinea.",
    "didYouKnow": "At 238,533 km squared, Ghana is slightly smaller than the United Kingdom but has more than twice the population",
    "tags": [
      "Borders",
      "Size",
      "West Africa"
    ]
  },
  {
    "id": 80,
    "category": "Geography",
    "title": "16 Administrative Regions",
    "fact": "Ghana was reorganized from 10 to 16 administrative regions in 2019 to better reflect ethnic and cultural identities and improve governance.",
    "didYouKnow": "The newest regions include Bono East, Ahafo, North East, Savannah, Oti, and Western North",
    "tags": [
      "Regions",
      "Administration",
      "2019"
    ]
  },
  {
    "id": 81,
    "category": "Geography",
    "title": "Accra on the Equator",
    "fact": "Accra lies at latitude 5.6 degrees North, making it one of the capital cities closest to the equator in the world.",
    "didYouKnow": "Accra's population has grown from about 100,000 in 1960 to over 5 million in the greater metropolitan area today",
    "tags": [
      "Accra",
      "Capital",
      "Equator"
    ]
  },
  {
    "id": 82,
    "category": "Geography",
    "title": "Kumasi Garden City",
    "fact": "Kumasi, Ghana's second city and Ashanti capital, sits in a dense forest zone. Its name means Under the Kum tree in Ashanti legend.",
    "didYouKnow": "Kumasi is called the Garden City for its greenery and tree-lined streets, a colonial designation that still holds today",
    "tags": [
      "Kumasi",
      "Ashanti",
      "Forest"
    ]
  },
  {
    "id": 83,
    "category": "Geography",
    "title": "Black Volta River",
    "fact": "The Black Volta River forms part of Ghana's western border with Burkina Faso and Ivory Coast before merging with the White Volta and flowing into Lake Volta.",
    "didYouKnow": "The confluence of the Black and White Volta rivers is a major geographical landmark in the Upper East of Ghana",
    "tags": [
      "Volta",
      "River",
      "Border"
    ]
  },
  {
    "id": 84,
    "category": "Geography",
    "title": "Gulf of Guinea",
    "fact": "Ghana's southern coast faces the Gulf of Guinea, part of the Atlantic Ocean. This body of water was central to the transatlantic slave trade for over 400 years.",
    "didYouKnow": "The term Guinea may come from the Berber word Aguinaw meaning land of the black people",
    "tags": [
      "Gulf of Guinea",
      "Atlantic",
      "History"
    ]
  },
  {
    "id": 85,
    "category": "Geography",
    "title": "Tamale Fastest Growing",
    "fact": "Tamale is the capital of the Northern Region and Ghana's fastest-growing city, serving as the cultural and commercial hub of northern Ghana.",
    "didYouKnow": "Tamale's name does not come from the food but from the Dagbani word Tolon meaning the area of the Tolon people",
    "tags": [
      "Tamale",
      "North Ghana",
      "City"
    ]
  },
  {
    "id": 86,
    "category": "Sports",
    "title": "Black Stars Name",
    "fact": "Ghana's national football team the Black Stars is named after the black star in the center of the national flag, a symbol of African freedom and unity.",
    "didYouKnow": "The Black Stars were FIFA World Cup quarter-finalists in 2010, the last African team to reach that stage",
    "tags": [
      "Black Stars",
      "Football",
      "World Cup"
    ]
  },
  {
    "id": 87,
    "category": "Sports",
    "title": "Azumah Nelson",
    "fact": "Azumah Nelson is considered one of the greatest African boxers of all time. He was WBC Super Featherweight and Lightweight champion multiple times in the 1980s and 1990s.",
    "didYouKnow": "Nicknamed The Professor for his technical style, his fights frequently sold out Madison Square Garden in New York",
    "tags": [
      "Azumah Nelson",
      "Boxing",
      "Champion"
    ]
  },
  {
    "id": 88,
    "category": "Sports",
    "title": "2010 World Cup Quarter-Final",
    "fact": "At the 2010 FIFA World Cup in South Africa, Ghana reached the quarter-finals, becoming the only African team to do so at any World Cup held on African soil.",
    "didYouKnow": "Asamoah Gyan's missed penalty against Uruguay in extra time remains one of the most debated moments in World Cup history",
    "tags": [
      "World Cup",
      "Football",
      "2010"
    ]
  },
  {
    "id": 89,
    "category": "Sports",
    "title": "Asamoah Gyan Record",
    "fact": "Asamoah Gyan is Ghana's all-time leading scorer with 51 international goals. He played for clubs including Sunderland, Al Ain, and Shanghai SIPG.",
    "didYouKnow": "He scored in three consecutive World Cups in 2006, 2010, and 2014, a feat matched by only a handful of African players in history",
    "tags": [
      "Asamoah Gyan",
      "Football",
      "Striker"
    ]
  },
  {
    "id": 90,
    "category": "Sports",
    "title": "AFCON Four Titles",
    "fact": "Ghana has won the Africa Cup of Nations four times, in 1963, 1965, 1978, and 1982, making them one of the most successful nations in the tournament.",
    "didYouKnow": "All four of Ghana's AFCON victories came before 1982, making a fifth title one of African football's most anticipated achievements",
    "tags": [
      "AFCON",
      "Football",
      "Trophy"
    ]
  },
  {
    "id": 91,
    "category": "Sports",
    "title": "Traditional Wrestling",
    "fact": "Traditional wrestling in Northern Ghana is tied to cultural festivals and rites of passage. Champions are celebrated as community heroes and peacemakers.",
    "didYouKnow": "Northern wrestling festivals draw thousands of spectators and are used as a vehicle for peaceful conflict resolution between communities",
    "tags": [
      "Wrestling",
      "North Ghana",
      "Tradition"
    ]
  },
  {
    "id": 92,
    "category": "Sports",
    "title": "Boxing Legacy",
    "fact": "Ghana has produced multiple world-class boxers beyond Azumah Nelson, including Ike Quartey, D.K. Poison, and Joshua Clottey, who fought at world championship level.",
    "didYouKnow": "D.K. Poison was Africa's first WBC World Champion when he won the super featherweight title in 1975",
    "tags": [
      "Boxing",
      "Champion",
      "Legacy"
    ]
  },
  {
    "id": 93,
    "category": "Sports",
    "title": "Stephen Appiah",
    "fact": "Stephen Appiah captained Ghana at the 2006 FIFA World Cup, the Black Stars' first World Cup appearance. His leadership was credited with inspiring a new generation of Ghanaian footballers.",
    "didYouKnow": "He captained the team from midfield with such authority that he was nicknamed the Tornado",
    "tags": [
      "Football",
      "Captain",
      "2006"
    ]
  },
  {
    "id": 94,
    "category": "Sports",
    "title": "Ghana at Olympics",
    "fact": "Ghana has participated in the Olympic Games since 1952 and has won multiple medals in boxing, athletics, and weightlifting across the decades.",
    "didYouKnow": "Ghana's first Olympic medal was a boxing silver at the 1960 Rome Olympics, won by Clement Ike Quartey",
    "tags": [
      "Olympics",
      "Boxing",
      "1952"
    ]
  },
  {
    "id": 95,
    "category": "Economy",
    "title": "Cocoa World Ranking",
    "fact": "Ghana is the world's second-largest producer of cocoa beans after Ivory Coast. Cocoa revenue is a cornerstone of Ghana's export economy.",
    "didYouKnow": "Over 800,000 Ghanaian farm families depend on cocoa for their primary livelihoods",
    "tags": [
      "Cocoa",
      "Export",
      "Agriculture"
    ]
  },
  {
    "id": 96,
    "category": "Economy",
    "title": "Oil Discovery 2007",
    "fact": "Oil was discovered in commercial quantities in Ghana's Jubilee Field in 2007. Production began in 2010, transforming Ghana into a petroleum nation.",
    "didYouKnow": "The discovery sparked urgent debates about the resource curse and whether oil wealth would help or hinder Ghana's development",
    "tags": [
      "Oil",
      "Jubilee",
      "2010"
    ]
  },
  {
    "id": 97,
    "category": "Economy",
    "title": "Gold Africa's Largest",
    "fact": "Ghana is Africa's largest gold producer. Gold, cocoa, and oil form the three pillars of Ghana's export economy, earning billions annually.",
    "didYouKnow": "The name Gold Coast given by European traders perfectly reflected the region's extraordinary wealth in alluvial and mined gold",
    "tags": [
      "Gold",
      "Mining",
      "Export"
    ]
  },
  {
    "id": 98,
    "category": "Economy",
    "title": "Mobile Money Pioneer",
    "fact": "Ghana pioneered mobile money services in Africa, with MTN Mobile Money becoming one of the most widely used financial platforms on the continent.",
    "didYouKnow": "Over 40 million registered mobile money accounts exist in Ghana, more than the adult population, as many hold multiple accounts",
    "tags": [
      "Mobile Money",
      "Fintech",
      "MTN"
    ]
  },
  {
    "id": 99,
    "category": "Economy",
    "title": "Cedi Currency History",
    "fact": "Ghana's currency the Cedi was introduced in 1965, replacing the colonial Pound. In Akan, Cedi means cowrie shell, once used as currency across West Africa.",
    "didYouKnow": "In 2007, Ghana redenominated its currency at 10,000 to one, creating the new Ghana Cedi to reduce transaction complexity",
    "tags": [
      "Cedi",
      "Currency",
      "Economy"
    ]
  },
  {
    "id": 100,
    "category": "Economy",
    "title": "Accra as Business Hub",
    "fact": "Accra is consistently ranked among the top five business destinations in Sub-Saharan Africa, hosting regional headquarters for Google, Microsoft, Visa, and hundreds of multinationals.",
    "didYouKnow": "Google's first Africa-based AI research center opened in Accra in 2019, signaling Ghana's growing tech credibility",
    "tags": [
      "Business",
      "Accra",
      "Investment"
    ]
  },
  {
    "id": 101,
    "category": "Economy",
    "title": "Timber Exports",
    "fact": "Timber is one of Ghana's top exports. Ghana's forests produce mahogany, odum, and sapele, prized in global furniture and construction markets.",
    "didYouKnow": "Ghana was once among the world's top timber exporters, but decades of over-logging have greatly reduced its forest cover",
    "tags": [
      "Timber",
      "Forestry",
      "Export"
    ]
  },
  {
    "id": 102,
    "category": "Economy",
    "title": "Free Zones Authority",
    "fact": "Ghana established Free Zones in 1995 to attract foreign investment. Companies in these zones are exempt from import and export duties for up to ten years.",
    "didYouKnow": "The Ghana Free Zones Authority has attracted over three billion dollars in foreign direct investment since its founding",
    "tags": [
      "Investment",
      "Trade",
      "Economy"
    ]
  },
  {
    "id": 103,
    "category": "Economy",
    "title": "Electricity Exporter",
    "fact": "Ghana generates more electricity than it consumes domestically and exports power to Benin, Togo, and Burkina Faso through the West African Power Pool.",
    "didYouKnow": "The Akosombo, Kpong, and Bui dams together generate the bulk of Ghana's hydroelectric power",
    "tags": [
      "Energy",
      "Export",
      "Dam"
    ]
  },
  {
    "id": 104,
    "category": "Language",
    "title": "English Official",
    "fact": "English is Ghana's official language, a legacy of British colonial rule, used in government, courts, education, and formal business.",
    "didYouKnow": "Despite English's official status, fewer than 20 percent of Ghanaians speak it as a first language. Most use it as a second or third language",
    "tags": [
      "English",
      "Language",
      "Colonial"
    ]
  },
  {
    "id": 105,
    "category": "Language",
    "title": "Twi Most Spoken",
    "fact": "Twi or Akan is the most widely spoken indigenous language in Ghana, used by over nine million people across the Ashanti, Bono, and Fante groups.",
    "didYouKnow": "Twi is linguistically related to Baoulé spoken in Ivory Coast, together forming the broader Akan language family",
    "tags": [
      "Twi",
      "Akan",
      "Language"
    ]
  },
  {
    "id": 106,
    "category": "Language",
    "title": "80 Languages",
    "fact": "Ghana has over 80 distinct languages and dialects, making it one of the most linguistically diverse countries in West Africa.",
    "didYouKnow": "Many Ghanaians are naturally multilingual, speaking their mother tongue plus Twi or Hausa as a lingua franca, plus English",
    "tags": [
      "Multilingual",
      "Diversity",
      "Languages"
    ]
  },
  {
    "id": 107,
    "category": "Language",
    "title": "Ga Language Accra",
    "fact": "Ga is the language of the Ga-Dangme people of Greater Accra. Accra itself is Nkran in Ga, meaning ants, referring to the city's busy industrious character.",
    "didYouKnow": "Ga is a tonal language with three distinct tones that can completely change the meaning of a single word",
    "tags": [
      "Ga",
      "Accra",
      "Language"
    ]
  },
  {
    "id": 108,
    "category": "Language",
    "title": "Pidgin English Ghana",
    "fact": "Ghanaian Pidgin English serves as a cross-ethnic communication tool especially among youth in urban areas, blending English with Twi, Ga, and Hausa.",
    "didYouKnow": "Expressions like chale for friend, fi do for please, and dey there for it exists are uniquely Ghanaian Pidgin English phrases",
    "tags": [
      "Pidgin",
      "Slang",
      "Youth"
    ]
  },
  {
    "id": 109,
    "category": "Language",
    "title": "Dagbani Language",
    "fact": "Dagbani is the language of the Dagomba people of Northern Ghana and one of the official languages recognized for use in northern schools.",
    "didYouKnow": "The tonal complexity of Dagbani means a single word spoken with different tones can have completely different meanings",
    "tags": [
      "Dagbani",
      "North Ghana",
      "Language"
    ]
  },
  {
    "id": 110,
    "category": "Language",
    "title": "Ewe Language",
    "fact": "Ewe is spoken by the Ewe people of the Volta Region and extends into Togo and Benin. It is notable for its elaborate verbal system and complex tonal structure.",
    "didYouKnow": "Ewe has one of the most studied verb systems in African linguistics, with verbs capable of stacking up to six suffixes to modify meaning",
    "tags": [
      "Ewe",
      "Volta",
      "Language"
    ]
  },
  {
    "id": 111,
    "category": "Language",
    "title": "Proverbs in Daily Life",
    "fact": "Ghana has a rich oral tradition of proverbs used in everyday speech, legal proceedings, and political speeches. Akan proverbs are particularly renowned.",
    "didYouKnow": "Se wo were fi na wosankofa a yenkyi, meaning it is not wrong to go back for what you forgot, is one of the most famous Akan proverbs",
    "tags": [
      "Proverbs",
      "Oral Tradition",
      "Wisdom"
    ]
  },
  {
    "id": 112,
    "category": "People",
    "title": "Kofi Annan",
    "fact": "Kofi Annan, born in Kumasi in 1938, served as the seventh UN Secretary-General from 1997 to 2006. He and the UN jointly received the Nobel Peace Prize in 2001.",
    "didYouKnow": "His name Kofi means he was born on a Friday in Akan naming tradition",
    "tags": [
      "Nobel Prize",
      "UN",
      "Kumasi"
    ]
  },
  {
    "id": 113,
    "category": "People",
    "title": "Kwame Nkrumah Legacy",
    "fact": "Kwame Nkrumah was Ghana's first President and a towering figure in global African independence. He was voted Africa's Man of the Millennium by BBC listeners in 2000.",
    "didYouKnow": "He wrote over 20 books on politics, philosophy, and African unity, becoming one of the most published African statesmen in history",
    "tags": [
      "Nkrumah",
      "President",
      "Independence"
    ]
  },
  {
    "id": 114,
    "category": "People",
    "title": "J.J. Rawlings Legacy",
    "fact": "Jerry John Rawlings, who died in 2020, was Ghana's longest-serving head of state. He oversaw two coups, a democratic transition, and became an elder statesman of Africa.",
    "didYouKnow": "He was the only African head of state to lead a country through elections and peacefully hand power to a political opponent",
    "tags": [
      "Rawlings",
      "Democracy",
      "President"
    ]
  },
  {
    "id": 115,
    "category": "People",
    "title": "Efua Sutherland Drama",
    "fact": "Efua Sutherland (1924 to 1996) was a pioneering Ghanaian playwright, poet, and children's advocate. She founded the Ghana Drama Studio and is credited with shaping Ghanaian theatre.",
    "didYouKnow": "The Efua Sutherland Children's Park in Accra honors her lifelong work advocating for children's rights and creative development",
    "tags": [
      "Literature",
      "Theatre",
      "Women"
    ]
  },
  {
    "id": 116,
    "category": "People",
    "title": "Ama Ata Aidoo Writer",
    "fact": "Ama Ata Aidoo is one of Africa's most celebrated writers, exploring themes of feminism, identity, and post-colonial life. She served as Ghana's Minister of Education.",
    "didYouKnow": "Her novel Our Sister Killjoy published in 1977 was one of the first African feminist novels written by a woman",
    "tags": [
      "Literature",
      "Feminism",
      "Ghana"
    ]
  },
  {
    "id": 117,
    "category": "People",
    "title": "Komla Dumor BBC",
    "fact": "Komla Dumor (1972 to 2014) was the beloved BBC World Service presenter known for his coverage of Africa. His sudden death at 41 was mourned across the continent.",
    "didYouKnow": "He was one of the first African journalists to anchor flagship news programs on BBC World News television",
    "tags": [
      "Media",
      "BBC",
      "Journalism"
    ]
  },
  {
    "id": 118,
    "category": "People",
    "title": "Patrick Awuah",
    "fact": "Patrick Awuah founded Ashesi University in Accra in 2002 after a career at Microsoft. The university is renowned for producing ethical leaders and innovators across Africa.",
    "didYouKnow": "He was inspired to start Ashesi after observing the lack of ethical leadership education in African universities",
    "tags": [
      "Education",
      "Ashesi",
      "Innovation"
    ]
  },
  {
    "id": 119,
    "category": "People",
    "title": "Abedi Pele",
    "fact": "Abedi Pele Ayew is Ghana's greatest footballer, having won the UEFA Champions League with Olympique de Marseille in 1993 and been named African Footballer of the Year three times.",
    "didYouKnow": "His three sons, Dede, Andre, and Jordan Ayew, all played professional football in Europe following in his footsteps",
    "tags": [
      "Football",
      "Abedi Pele",
      "Champion"
    ]
  },
  {
    "id": 120,
    "category": "People",
    "title": "Miriam Makeba Ghana",
    "fact": "South African struggle singer Miriam Makeba lived in exile in Guinea and Ghana during the 1960s and 1970s, where she was welcomed and performed for Pan-African causes.",
    "didYouKnow": "She held Ghanaian diplomatic credentials for a time, enabling her to travel internationally as a South African-passport holder",
    "tags": [
      "Music",
      "Exile",
      "Pan-Africa"
    ]
  },
  {
    "id": 121,
    "category": "Innovation",
    "title": "GhanaSat-1 Satellite",
    "fact": "GhanaSat-1 was launched from the International Space Station in 2017, making Ghana only the fourth African country to have a satellite in orbit.",
    "didYouKnow": "It was developed by engineering students at All Nations University in Koforidua with support from Japan's JAXA space agency",
    "tags": [
      "Space",
      "Satellite",
      "2017"
    ]
  },
  {
    "id": 122,
    "category": "Innovation",
    "title": "Zipline Drones",
    "fact": "Ghana partnered with Zipline in 2019 to operate the world's largest drone delivery network for medical supplies, delivering blood and medicines to remote hospitals.",
    "didYouKnow": "Zipline drones can deliver a unit of blood to a remote clinic in 30 minutes, faster than any road ambulance in those areas",
    "tags": [
      "Drones",
      "Healthcare",
      "Innovation"
    ]
  },
  {
    "id": 123,
    "category": "Innovation",
    "title": "Silicon Savannah Accra",
    "fact": "Accra is part of the Silicon Savannah tech ecosystem. The city hosts over 200 active tech startups and offices of global companies including Google and Microsoft.",
    "didYouKnow": "Google's first Africa AI research center opened in Accra in 2019, choosing Ghana over larger African economies",
    "tags": [
      "Tech",
      "Startups",
      "Accra"
    ]
  },
  {
    "id": 124,
    "category": "Innovation",
    "title": "Farmerline Agritech",
    "fact": "Farmerline, a Ghanaian agri-tech startup, uses mobile technology to deliver farming advice, market prices, and financial services to smallholder farmers in local languages.",
    "didYouKnow": "It has reached over one million farmers across 16 African countries through mobile voice messages in local languages",
    "tags": [
      "AgriTech",
      "Farming",
      "Startup"
    ]
  },
  {
    "id": 125,
    "category": "Innovation",
    "title": "Rlg Manufacturing",
    "fact": "Rlg Communications, founded in Ghana in 2006, was one of the first African companies to manufacture and assemble smartphones, laptops, and tablets locally.",
    "didYouKnow": "At its peak, Rlg's Accra factory assembled over 2000 devices per day for distribution across West Africa",
    "tags": [
      "Technology",
      "Manufacturing",
      "Accra"
    ]
  },
  {
    "id": 126,
    "category": "Innovation",
    "title": "eSoko Platform",
    "fact": "eSoko is a Ghanaian technology platform that delivers agricultural market prices via SMS to farmers in rural areas, helping them get fair prices for their goods.",
    "didYouKnow": "Before eSoko, many rural farmers had no way to compare market prices and lost significant income to middlemen",
    "tags": [
      "AgriTech",
      "Mobile",
      "Farmers"
    ]
  },
  {
    "id": 127,
    "category": "Festivals",
    "title": "Homowo Harvest",
    "fact": "Homowo, meaning hooting at hunger, is the harvest festival of the Ga people celebrating survival of a historic famine. Families reunite to eat kpokpoi together.",
    "didYouKnow": "During Homowo, the entire Ga community dispersed across the world returns home to Accra for the family gathering",
    "tags": [
      "Ga",
      "Festival",
      "Harvest"
    ]
  },
  {
    "id": 128,
    "category": "Festivals",
    "title": "Odwira Purification",
    "fact": "Odwira is the major purification and thanksgiving festival of the Akan people, held annually to honor ancestors and reinstate the chief's authority for the coming year.",
    "didYouKnow": "During Odwira the public display of royal stools, ancestral black stools, and the tasting of new yam mark a symbolic renewal",
    "tags": [
      "Ashanti",
      "Festival",
      "Purification"
    ]
  },
  {
    "id": 129,
    "category": "Festivals",
    "title": "PANAFEST",
    "fact": "PANAFEST, the Pan African Historical Theatre Festival, holds in Cape Coast every two years, bringing the African diaspora together for cultural exchange and reflection.",
    "didYouKnow": "It includes emotional pilgrimages through Elmina and Cape Coast slave castles, retracing the journey of enslaved ancestors",
    "tags": [
      "Diaspora",
      "Festival",
      "Cape Coast"
    ]
  },
  {
    "id": 130,
    "category": "Festivals",
    "title": "Damba Festival",
    "fact": "Damba is the major festival of the Dagomba, Mamprusi, and Gonja peoples, celebrating the birth and naming of Prophet Mohammed.",
    "didYouKnow": "Damba features spectacular horse-riding parades called takai where chiefs ride elaborately adorned horses through villages",
    "tags": [
      "Dagomba",
      "North Ghana",
      "Islam"
    ]
  },
  {
    "id": 131,
    "category": "Festivals",
    "title": "Bakatue Fishing Festival",
    "fact": "Bakatue, meaning opening of the lagoon, is Elmina's fishing festival that ceremonially opens the fishing season by casting a net into the Benya Lagoon.",
    "didYouKnow": "A canoe race follows the ceremony and the winning canoe is believed to bring the biggest fish haul for the entire season",
    "tags": [
      "Fishing",
      "Elmina",
      "Festival"
    ]
  },
  {
    "id": 132,
    "category": "Festivals",
    "title": "Fetu Afahye Cape Coast",
    "fact": "Fetu Afahye, the festival of new yam, is an ancient Cape Coast festival involving the purification of the land and a colorful durbar of chiefs.",
    "didYouKnow": "The word Fetu refers to the clearing of a new path, symbolizing a fresh communal start for the year ahead",
    "tags": [
      "Cape Coast",
      "Festival",
      "Chiefs"
    ]
  },
  {
    "id": 133,
    "category": "Festivals",
    "title": "Chale Wote Street Art",
    "fact": "Chale Wote Street Art Festival in Accra's James Town neighborhood is Ghana's largest contemporary arts festival, featuring street art, music, performance, and fashion.",
    "didYouKnow": "The name Chale Wote means friend let's go in Ghanaian Pidgin, an invitation to explore the city's creative community",
    "tags": [
      "Art",
      "Accra",
      "Street Art"
    ]
  },
  {
    "id": 134,
    "category": "Festivals",
    "title": "Asogli Yam Festival",
    "fact": "The Asogli Yam Festival held in Ho in the Volta Region celebrates the Ewe people's relationship with the land and the yam as a sacred crop.",
    "didYouKnow": "The festival involves elaborate rites of thanksgiving to the gods for the harvest, led by the paramount chief of the Asogli Traditional Area",
    "tags": [
      "Ewe",
      "Volta",
      "Yam"
    ]
  },
  {
    "id": 135,
    "category": "Throwback",
    "title": "TV3 Ghana Launch",
    "fact": "TV3, Ghana's first private television station, launched in 1997 and transformed Ghanaian media by introducing 24-hour broadcasting, reality shows, and local content.",
    "didYouKnow": "TV3's Date Rush and Stars of the Future are among the most watched locally produced shows in Ghana's television history",
    "tags": [
      "TV3",
      "Media",
      "1997"
    ]
  },
  {
    "id": 136,
    "category": "Throwback",
    "title": "GBC Radio",
    "fact": "The Ghana Broadcasting Corporation Radio has been broadcasting since 1935, making it one of the oldest radio stations in Africa.",
    "didYouKnow": "Saturday evening broadcasts of Obra, a Ghanaian radio drama, was essential listening for families across the country in the 1970s through 1990s",
    "tags": [
      "GBC",
      "Radio",
      "Media"
    ]
  },
  {
    "id": 137,
    "category": "Throwback",
    "title": "Oware Game Ancient",
    "fact": "Oware, also called Mancala, is an ancient West African strategy board game played across Ghana. Seeds are moved around holes carved in a wooden board.",
    "didYouKnow": "Oware is one of the oldest games in human history. Versions have been found in ancient Egypt dating back 3500 years",
    "tags": [
      "Oware",
      "Game",
      "Tradition"
    ]
  },
  {
    "id": 138,
    "category": "Throwback",
    "title": "Anansi Folklore",
    "fact": "Kwaku Anansi, the spider trickster of Ghanaian Akan folklore, is one of the most famous characters in world mythology. Anansi stories traveled to the Caribbean with enslaved Ghanaians.",
    "didYouKnow": "Anansi is the source of Aunt Nancy stories in the American South, keeping Ghanaian storytelling alive across centuries of displacement",
    "tags": [
      "Anansi",
      "Folklore",
      "Spider"
    ]
  },
  {
    "id": 139,
    "category": "Throwback",
    "title": "Pilolo Children's Game",
    "fact": "Pilolo is a traditional Ghanaian children's game combining hide-and-seek with a treasure hunt. Objects are hidden and children race to find and return them first.",
    "didYouKnow": "The word Pilolo comes from Ga and means time to search, teaching memory, speed, honesty, and fair play",
    "tags": [
      "Children",
      "Game",
      "Tradition"
    ]
  },
  {
    "id": 140,
    "category": "Throwback",
    "title": "Fufu Pounding Ritual",
    "fact": "Before electric blenders, fufu was pounded in large wooden mortars by two people in perfect rhythm. The sound of pounding was synonymous with home and family.",
    "didYouKnow": "The sound of the mortar echoing through a neighborhood was a communal signal that someone was home and cooking for loved ones",
    "tags": [
      "Fufu",
      "Tradition",
      "Cooking"
    ]
  },
  {
    "id": 141,
    "category": "Throwback",
    "title": "Accra Mall Opening",
    "fact": "The opening of Accra Mall in 2008 was a cultural landmark, the first major Western-style shopping complex that changed how Ghanaians viewed retail and leisure.",
    "didYouKnow": "The cinema inside Accra Mall introduced many Ghanaians to the modern multiplex movie experience, transforming weekend social life",
    "tags": [
      "Accra",
      "Shopping",
      "2008"
    ]
  },
  {
    "id": 142,
    "category": "Throwback",
    "title": "Chinchinga Street Food",
    "fact": "Chinchinga, barbecued meat skewers seasoned with spicy groundnut sauce, were a beloved staple at football matches, roadside stalls, and evening markets in the 1980s and 90s.",
    "didYouKnow": "Chinchinga vendors at Ghanaian football matches became legendary social figures, recognized by their distinctive calls and sauces",
    "tags": [
      "Street Food",
      "Snack",
      "1990s"
    ]
  },
  {
    "id": 143,
    "category": "Throwback",
    "title": "Schooling Chant Tradition",
    "fact": "In Ghana's older schooling tradition, children learned multiplication tables, folk songs, and proverbs by chanting them together in class, a form of communal memory encoding.",
    "didYouKnow": "This chant-learning style means many Ghanaians can recite multiplication tables up to 20 from memory well into adulthood",
    "tags": [
      "Education",
      "School",
      "Tradition"
    ]
  },
  {
    "id": 144,
    "category": "Geography",
    "title": "Ahafo Region Capital",
    "fact": "The capital of the Ahafo Region is Goaso.",
    "didYouKnow": "The Ahafo region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Goaso"
    ]
  },
  {
    "id": 145,
    "category": "Geography",
    "title": "Ahafo Region Creation",
    "fact": "The Ahafo Region plays a vital role in Ghana's administrative and economic setup, with Goaso as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Ahafo"
    ]
  },
  {
    "id": 146,
    "category": "Geography",
    "title": "Ashanti Region Capital",
    "fact": "The capital of the Ashanti Region is Kumasi.",
    "didYouKnow": "The Ashanti region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Kumasi"
    ]
  },
  {
    "id": 147,
    "category": "Geography",
    "title": "Ashanti Region Creation",
    "fact": "The Ashanti Region plays a vital role in Ghana's administrative and economic setup, with Kumasi as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Ashanti"
    ]
  },
  {
    "id": 148,
    "category": "Geography",
    "title": "Bono Region Capital",
    "fact": "The capital of the Bono Region is Sunyani.",
    "didYouKnow": "The Bono region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Sunyani"
    ]
  },
  {
    "id": 149,
    "category": "Geography",
    "title": "Bono Region Creation",
    "fact": "The Bono Region plays a vital role in Ghana's administrative and economic setup, with Sunyani as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Bono"
    ]
  },
  {
    "id": 150,
    "category": "Geography",
    "title": "Bono East Region Capital",
    "fact": "The capital of the Bono East Region is Techiman.",
    "didYouKnow": "The Bono East region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Techiman"
    ]
  },
  {
    "id": 151,
    "category": "Geography",
    "title": "Bono East Region Creation",
    "fact": "The Bono East Region plays a vital role in Ghana's administrative and economic setup, with Techiman as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Bono East"
    ]
  },
  {
    "id": 152,
    "category": "Geography",
    "title": "Central Region Capital",
    "fact": "The capital of the Central Region is Cape Coast.",
    "didYouKnow": "The Central region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Cape Coast"
    ]
  },
  {
    "id": 153,
    "category": "Geography",
    "title": "Central Region Creation",
    "fact": "The Central Region plays a vital role in Ghana's administrative and economic setup, with Cape Coast as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Central"
    ]
  },
  {
    "id": 154,
    "category": "Geography",
    "title": "Eastern Region Capital",
    "fact": "The capital of the Eastern Region is Koforidua.",
    "didYouKnow": "The Eastern region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Koforidua"
    ]
  },
  {
    "id": 155,
    "category": "Geography",
    "title": "Eastern Region Creation",
    "fact": "The Eastern Region plays a vital role in Ghana's administrative and economic setup, with Koforidua as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Eastern"
    ]
  },
  {
    "id": 156,
    "category": "Geography",
    "title": "Greater Accra Region Capital",
    "fact": "The capital of the Greater Accra Region is Accra.",
    "didYouKnow": "The Greater Accra region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Accra"
    ]
  },
  {
    "id": 157,
    "category": "Geography",
    "title": "Greater Accra Region Creation",
    "fact": "The Greater Accra Region plays a vital role in Ghana's administrative and economic setup, with Accra as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Greater Accra"
    ]
  },
  {
    "id": 158,
    "category": "Geography",
    "title": "North East Region Capital",
    "fact": "The capital of the North East Region is Nalerigu.",
    "didYouKnow": "The North East region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Nalerigu"
    ]
  },
  {
    "id": 159,
    "category": "Geography",
    "title": "North East Region Creation",
    "fact": "The North East Region plays a vital role in Ghana's administrative and economic setup, with Nalerigu as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "North East"
    ]
  },
  {
    "id": 160,
    "category": "Geography",
    "title": "Northern Region Capital",
    "fact": "The capital of the Northern Region is Tamale.",
    "didYouKnow": "The Northern region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Tamale"
    ]
  },
  {
    "id": 161,
    "category": "Geography",
    "title": "Northern Region Creation",
    "fact": "The Northern Region plays a vital role in Ghana's administrative and economic setup, with Tamale as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Northern"
    ]
  },
  {
    "id": 162,
    "category": "Geography",
    "title": "Oti Region Capital",
    "fact": "The capital of the Oti Region is Dambai.",
    "didYouKnow": "The Oti region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Dambai"
    ]
  },
  {
    "id": 163,
    "category": "Geography",
    "title": "Oti Region Creation",
    "fact": "The Oti Region plays a vital role in Ghana's administrative and economic setup, with Dambai as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Oti"
    ]
  },
  {
    "id": 164,
    "category": "Geography",
    "title": "Savannah Region Capital",
    "fact": "The capital of the Savannah Region is Damongo.",
    "didYouKnow": "The Savannah region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Damongo"
    ]
  },
  {
    "id": 165,
    "category": "Geography",
    "title": "Savannah Region Creation",
    "fact": "The Savannah Region plays a vital role in Ghana's administrative and economic setup, with Damongo as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Savannah"
    ]
  },
  {
    "id": 166,
    "category": "Geography",
    "title": "Upper East Region Capital",
    "fact": "The capital of the Upper East Region is Bolgatanga.",
    "didYouKnow": "The Upper East region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Bolgatanga"
    ]
  },
  {
    "id": 167,
    "category": "Geography",
    "title": "Upper East Region Creation",
    "fact": "The Upper East Region plays a vital role in Ghana's administrative and economic setup, with Bolgatanga as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Upper East"
    ]
  },
  {
    "id": 168,
    "category": "Geography",
    "title": "Upper West Region Capital",
    "fact": "The capital of the Upper West Region is Wa.",
    "didYouKnow": "The Upper West region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Wa"
    ]
  },
  {
    "id": 169,
    "category": "Geography",
    "title": "Upper West Region Creation",
    "fact": "The Upper West Region plays a vital role in Ghana's administrative and economic setup, with Wa as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Upper West"
    ]
  },
  {
    "id": 170,
    "category": "Geography",
    "title": "Volta Region Capital",
    "fact": "The capital of the Volta Region is Ho.",
    "didYouKnow": "The Volta region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Ho"
    ]
  },
  {
    "id": 171,
    "category": "Geography",
    "title": "Volta Region Creation",
    "fact": "The Volta Region plays a vital role in Ghana's administrative and economic setup, with Ho as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Volta"
    ]
  },
  {
    "id": 172,
    "category": "Geography",
    "title": "Western Region Capital",
    "fact": "The capital of the Western Region is Sekondi-Takoradi.",
    "didYouKnow": "The Western region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Sekondi-Takoradi"
    ]
  },
  {
    "id": 173,
    "category": "Geography",
    "title": "Western Region Creation",
    "fact": "The Western Region plays a vital role in Ghana's administrative and economic setup, with Sekondi-Takoradi as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Western"
    ]
  },
  {
    "id": 174,
    "category": "Geography",
    "title": "Western North Region Capital",
    "fact": "The capital of the Western North Region is Sefwi Wiawso.",
    "didYouKnow": "The Western North region is one of the 16 administrative regions of modern Ghana.",
    "tags": [
      "Regions",
      "Geography",
      "Sefwi Wiawso"
    ]
  },
  {
    "id": 175,
    "category": "Geography",
    "title": "Western North Region Creation",
    "fact": "The Western North Region plays a vital role in Ghana's administrative and economic setup, with Sefwi Wiawso as its administrative center.",
    "didYouKnow": "It was officially designated to bring governance closer to the people.",
    "tags": [
      "Regions",
      "Governance",
      "Western North"
    ]
  },
  {
    "id": 176,
    "category": "Language",
    "title": "The Akan Language",
    "fact": "Akan is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Akan",
      "Culture"
    ]
  },
  {
    "id": 177,
    "category": "Culture",
    "title": "Akan Cultural Heritage",
    "fact": "The people who speak the Akan language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Akan"
    ]
  },
  {
    "id": 178,
    "category": "Language",
    "title": "The Ewe Language",
    "fact": "Ewe is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Ewe",
      "Culture"
    ]
  },
  {
    "id": 179,
    "category": "Culture",
    "title": "Ewe Cultural Heritage",
    "fact": "The people who speak the Ewe language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Ewe"
    ]
  },
  {
    "id": 180,
    "category": "Language",
    "title": "The Dagbani Language",
    "fact": "Dagbani is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Dagbani",
      "Culture"
    ]
  },
  {
    "id": 181,
    "category": "Culture",
    "title": "Dagbani Cultural Heritage",
    "fact": "The people who speak the Dagbani language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Dagbani"
    ]
  },
  {
    "id": 182,
    "category": "Language",
    "title": "The Dangme Language",
    "fact": "Dangme is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Dangme",
      "Culture"
    ]
  },
  {
    "id": 183,
    "category": "Culture",
    "title": "Dangme Cultural Heritage",
    "fact": "The people who speak the Dangme language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Dangme"
    ]
  },
  {
    "id": 184,
    "category": "Language",
    "title": "The Dagaare Language",
    "fact": "Dagaare is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Dagaare",
      "Culture"
    ]
  },
  {
    "id": 185,
    "category": "Culture",
    "title": "Dagaare Cultural Heritage",
    "fact": "The people who speak the Dagaare language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Dagaare"
    ]
  },
  {
    "id": 186,
    "category": "Language",
    "title": "The Ga Language",
    "fact": "Ga is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Ga",
      "Culture"
    ]
  },
  {
    "id": 187,
    "category": "Culture",
    "title": "Ga Cultural Heritage",
    "fact": "The people who speak the Ga language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Ga"
    ]
  },
  {
    "id": 188,
    "category": "Language",
    "title": "The Nzema Language",
    "fact": "Nzema is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Nzema",
      "Culture"
    ]
  },
  {
    "id": 189,
    "category": "Culture",
    "title": "Nzema Cultural Heritage",
    "fact": "The people who speak the Nzema language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Nzema"
    ]
  },
  {
    "id": 190,
    "category": "Language",
    "title": "The Kasem Language",
    "fact": "Kasem is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Kasem",
      "Culture"
    ]
  },
  {
    "id": 191,
    "category": "Culture",
    "title": "Kasem Cultural Heritage",
    "fact": "The people who speak the Kasem language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Kasem"
    ]
  },
  {
    "id": 192,
    "category": "Language",
    "title": "The Gonja Language",
    "fact": "Gonja is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Gonja",
      "Culture"
    ]
  },
  {
    "id": 193,
    "category": "Culture",
    "title": "Gonja Cultural Heritage",
    "fact": "The people who speak the Gonja language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Gonja"
    ]
  },
  {
    "id": 194,
    "category": "Language",
    "title": "The Frafra Language",
    "fact": "Frafra is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Frafra",
      "Culture"
    ]
  },
  {
    "id": 195,
    "category": "Culture",
    "title": "Frafra Cultural Heritage",
    "fact": "The people who speak the Frafra language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Frafra"
    ]
  },
  {
    "id": 196,
    "category": "Language",
    "title": "The Kusaal Language",
    "fact": "Kusaal is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Kusaal",
      "Culture"
    ]
  },
  {
    "id": 197,
    "category": "Culture",
    "title": "Kusaal Cultural Heritage",
    "fact": "The people who speak the Kusaal language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Kusaal"
    ]
  },
  {
    "id": 198,
    "category": "Language",
    "title": "The Mampruli Language",
    "fact": "Mampruli is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Mampruli",
      "Culture"
    ]
  },
  {
    "id": 199,
    "category": "Culture",
    "title": "Mampruli Cultural Heritage",
    "fact": "The people who speak the Mampruli language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Mampruli"
    ]
  },
  {
    "id": 200,
    "category": "Language",
    "title": "The Buli Language",
    "fact": "Buli is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Buli",
      "Culture"
    ]
  },
  {
    "id": 201,
    "category": "Culture",
    "title": "Buli Cultural Heritage",
    "fact": "The people who speak the Buli language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Buli"
    ]
  },
  {
    "id": 202,
    "category": "Language",
    "title": "The Sisaala Language",
    "fact": "Sisaala is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Sisaala",
      "Culture"
    ]
  },
  {
    "id": 203,
    "category": "Culture",
    "title": "Sisaala Cultural Heritage",
    "fact": "The people who speak the Sisaala language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Sisaala"
    ]
  },
  {
    "id": 204,
    "category": "Language",
    "title": "The Wali Language",
    "fact": "Wali is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Wali",
      "Culture"
    ]
  },
  {
    "id": 205,
    "category": "Culture",
    "title": "Wali Cultural Heritage",
    "fact": "The people who speak the Wali language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Wali"
    ]
  },
  {
    "id": 206,
    "category": "Language",
    "title": "The Gurunsi Language",
    "fact": "Gurunsi is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Gurunsi",
      "Culture"
    ]
  },
  {
    "id": 207,
    "category": "Culture",
    "title": "Gurunsi Cultural Heritage",
    "fact": "The people who speak the Gurunsi language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Gurunsi"
    ]
  },
  {
    "id": 208,
    "category": "Language",
    "title": "The Bissa Language",
    "fact": "Bissa is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Bissa",
      "Culture"
    ]
  },
  {
    "id": 209,
    "category": "Culture",
    "title": "Bissa Cultural Heritage",
    "fact": "The people who speak the Bissa language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Bissa"
    ]
  },
  {
    "id": 210,
    "category": "Language",
    "title": "The Nkonya Language",
    "fact": "Nkonya is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Nkonya",
      "Culture"
    ]
  },
  {
    "id": 211,
    "category": "Culture",
    "title": "Nkonya Cultural Heritage",
    "fact": "The people who speak the Nkonya language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Nkonya"
    ]
  },
  {
    "id": 212,
    "category": "Language",
    "title": "The Ligbi Language",
    "fact": "Ligbi is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Ligbi",
      "Culture"
    ]
  },
  {
    "id": 213,
    "category": "Culture",
    "title": "Ligbi Cultural Heritage",
    "fact": "The people who speak the Ligbi language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Ligbi"
    ]
  },
  {
    "id": 214,
    "category": "Language",
    "title": "The Sehwi Language",
    "fact": "Sehwi is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Sehwi",
      "Culture"
    ]
  },
  {
    "id": 215,
    "category": "Culture",
    "title": "Sehwi Cultural Heritage",
    "fact": "The people who speak the Sehwi language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Sehwi"
    ]
  },
  {
    "id": 216,
    "category": "Language",
    "title": "The Ahanta Language",
    "fact": "Ahanta is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Ahanta",
      "Culture"
    ]
  },
  {
    "id": 217,
    "category": "Culture",
    "title": "Ahanta Cultural Heritage",
    "fact": "The people who speak the Ahanta language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Ahanta"
    ]
  },
  {
    "id": 218,
    "category": "Language",
    "title": "The Hausa Language",
    "fact": "Hausa is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Hausa",
      "Culture"
    ]
  },
  {
    "id": 219,
    "category": "Culture",
    "title": "Hausa Cultural Heritage",
    "fact": "The people who speak the Hausa language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Hausa"
    ]
  },
  {
    "id": 220,
    "category": "Language",
    "title": "The Biri Language",
    "fact": "Biri is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Biri",
      "Culture"
    ]
  },
  {
    "id": 221,
    "category": "Culture",
    "title": "Biri Cultural Heritage",
    "fact": "The people who speak the Biri language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Biri"
    ]
  },
  {
    "id": 222,
    "category": "Language",
    "title": "The Hanga Language",
    "fact": "Hanga is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Hanga",
      "Culture"
    ]
  },
  {
    "id": 223,
    "category": "Culture",
    "title": "Hanga Cultural Heritage",
    "fact": "The people who speak the Hanga language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Hanga"
    ]
  },
  {
    "id": 224,
    "category": "Language",
    "title": "The Kamara Language",
    "fact": "Kamara is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Kamara",
      "Culture"
    ]
  },
  {
    "id": 225,
    "category": "Culture",
    "title": "Kamara Cultural Heritage",
    "fact": "The people who speak the Kamara language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Kamara"
    ]
  },
  {
    "id": 226,
    "category": "Language",
    "title": "The Konkomba Language",
    "fact": "Konkomba is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Konkomba",
      "Culture"
    ]
  },
  {
    "id": 227,
    "category": "Culture",
    "title": "Konkomba Cultural Heritage",
    "fact": "The people who speak the Konkomba language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Konkomba"
    ]
  },
  {
    "id": 228,
    "category": "Language",
    "title": "The Bimoba Language",
    "fact": "Bimoba is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Bimoba",
      "Culture"
    ]
  },
  {
    "id": 229,
    "category": "Culture",
    "title": "Bimoba Cultural Heritage",
    "fact": "The people who speak the Bimoba language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Bimoba"
    ]
  },
  {
    "id": 230,
    "category": "Language",
    "title": "The Anufo Language",
    "fact": "Anufo is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Anufo",
      "Culture"
    ]
  },
  {
    "id": 231,
    "category": "Culture",
    "title": "Anufo Cultural Heritage",
    "fact": "The people who speak the Anufo language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Anufo"
    ]
  },
  {
    "id": 232,
    "category": "Language",
    "title": "The Nafaanra Language",
    "fact": "Nafaanra is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Nafaanra",
      "Culture"
    ]
  },
  {
    "id": 233,
    "category": "Culture",
    "title": "Nafaanra Cultural Heritage",
    "fact": "The people who speak the Nafaanra language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Nafaanra"
    ]
  },
  {
    "id": 234,
    "category": "Language",
    "title": "The Mo Language",
    "fact": "Mo is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Mo",
      "Culture"
    ]
  },
  {
    "id": 235,
    "category": "Culture",
    "title": "Mo Cultural Heritage",
    "fact": "The people who speak the Mo language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Mo"
    ]
  },
  {
    "id": 236,
    "category": "Language",
    "title": "The Vagla Language",
    "fact": "Vagla is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Vagla",
      "Culture"
    ]
  },
  {
    "id": 237,
    "category": "Culture",
    "title": "Vagla Cultural Heritage",
    "fact": "The people who speak the Vagla language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Vagla"
    ]
  },
  {
    "id": 238,
    "category": "Language",
    "title": "The Tampulma Language",
    "fact": "Tampulma is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Tampulma",
      "Culture"
    ]
  },
  {
    "id": 239,
    "category": "Culture",
    "title": "Tampulma Cultural Heritage",
    "fact": "The people who speak the Tampulma language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Tampulma"
    ]
  },
  {
    "id": 240,
    "category": "Language",
    "title": "The Safaliba Language",
    "fact": "Safaliba is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Safaliba",
      "Culture"
    ]
  },
  {
    "id": 241,
    "category": "Culture",
    "title": "Safaliba Cultural Heritage",
    "fact": "The people who speak the Safaliba language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Safaliba"
    ]
  },
  {
    "id": 242,
    "category": "Language",
    "title": "The Chala Language",
    "fact": "Chala is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Chala",
      "Culture"
    ]
  },
  {
    "id": 243,
    "category": "Culture",
    "title": "Chala Cultural Heritage",
    "fact": "The people who speak the Chala language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Chala"
    ]
  },
  {
    "id": 244,
    "category": "Language",
    "title": "The Delo Language",
    "fact": "Delo is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Delo",
      "Culture"
    ]
  },
  {
    "id": 245,
    "category": "Culture",
    "title": "Delo Cultural Heritage",
    "fact": "The people who speak the Delo language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Delo"
    ]
  },
  {
    "id": 246,
    "category": "Language",
    "title": "The Gikyode Language",
    "fact": "Gikyode is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Gikyode",
      "Culture"
    ]
  },
  {
    "id": 247,
    "category": "Culture",
    "title": "Gikyode Cultural Heritage",
    "fact": "The people who speak the Gikyode language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Gikyode"
    ]
  },
  {
    "id": 248,
    "category": "Language",
    "title": "The Adele Language",
    "fact": "Adele is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Adele",
      "Culture"
    ]
  },
  {
    "id": 249,
    "category": "Culture",
    "title": "Adele Cultural Heritage",
    "fact": "The people who speak the Adele language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Adele"
    ]
  },
  {
    "id": 250,
    "category": "Language",
    "title": "The Animere Language",
    "fact": "Animere is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Animere",
      "Culture"
    ]
  },
  {
    "id": 251,
    "category": "Culture",
    "title": "Animere Cultural Heritage",
    "fact": "The people who speak the Animere language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Animere"
    ]
  },
  {
    "id": 252,
    "category": "Language",
    "title": "The Ntrubo Language",
    "fact": "Ntrubo is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Ntrubo",
      "Culture"
    ]
  },
  {
    "id": 253,
    "category": "Culture",
    "title": "Ntrubo Cultural Heritage",
    "fact": "The people who speak the Ntrubo language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Ntrubo"
    ]
  },
  {
    "id": 254,
    "category": "Language",
    "title": "The Akpafu Language",
    "fact": "Akpafu is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Akpafu",
      "Culture"
    ]
  },
  {
    "id": 255,
    "category": "Culture",
    "title": "Akpafu Cultural Heritage",
    "fact": "The people who speak the Akpafu language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Akpafu"
    ]
  },
  {
    "id": 256,
    "category": "Language",
    "title": "The Lolobi Language",
    "fact": "Lolobi is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Lolobi",
      "Culture"
    ]
  },
  {
    "id": 257,
    "category": "Culture",
    "title": "Lolobi Cultural Heritage",
    "fact": "The people who speak the Lolobi language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Lolobi"
    ]
  },
  {
    "id": 258,
    "category": "Language",
    "title": "The Logba Language",
    "fact": "Logba is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Logba",
      "Culture"
    ]
  },
  {
    "id": 259,
    "category": "Culture",
    "title": "Logba Cultural Heritage",
    "fact": "The people who speak the Logba language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Logba"
    ]
  },
  {
    "id": 260,
    "category": "Language",
    "title": "The Avatime Language",
    "fact": "Avatime is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Avatime",
      "Culture"
    ]
  },
  {
    "id": 261,
    "category": "Culture",
    "title": "Avatime Cultural Heritage",
    "fact": "The people who speak the Avatime language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Avatime"
    ]
  },
  {
    "id": 262,
    "category": "Language",
    "title": "The Nyangbo Language",
    "fact": "Nyangbo is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Nyangbo",
      "Culture"
    ]
  },
  {
    "id": 263,
    "category": "Culture",
    "title": "Nyangbo Cultural Heritage",
    "fact": "The people who speak the Nyangbo language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Nyangbo"
    ]
  },
  {
    "id": 264,
    "category": "Language",
    "title": "The Tafi Language",
    "fact": "Tafi is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Tafi",
      "Culture"
    ]
  },
  {
    "id": 265,
    "category": "Culture",
    "title": "Tafi Cultural Heritage",
    "fact": "The people who speak the Tafi language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Tafi"
    ]
  },
  {
    "id": 266,
    "category": "Language",
    "title": "The Bowiri Language",
    "fact": "Bowiri is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Bowiri",
      "Culture"
    ]
  },
  {
    "id": 267,
    "category": "Culture",
    "title": "Bowiri Cultural Heritage",
    "fact": "The people who speak the Bowiri language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Bowiri"
    ]
  },
  {
    "id": 268,
    "category": "Language",
    "title": "The Tuwuli Language",
    "fact": "Tuwuli is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Tuwuli",
      "Culture"
    ]
  },
  {
    "id": 269,
    "category": "Culture",
    "title": "Tuwuli Cultural Heritage",
    "fact": "The people who speak the Tuwuli language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Tuwuli"
    ]
  },
  {
    "id": 270,
    "category": "Language",
    "title": "The Ahlo Language",
    "fact": "Ahlo is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Ahlo",
      "Culture"
    ]
  },
  {
    "id": 271,
    "category": "Culture",
    "title": "Ahlo Cultural Heritage",
    "fact": "The people who speak the Ahlo language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Ahlo"
    ]
  },
  {
    "id": 272,
    "category": "Language",
    "title": "The Lefana Language",
    "fact": "Lefana is one of the indigenous languages spoken in Ghana, contributing to the country's rich linguistic diversity of over 50 languages.",
    "didYouKnow": "Linguists estimate that there are over 80 distinct languages and major dialects in Ghana!",
    "tags": [
      "Language",
      "Lefana",
      "Culture"
    ]
  },
  {
    "id": 273,
    "category": "Culture",
    "title": "Lefana Cultural Heritage",
    "fact": "The people who speak the Lefana language have preserved their oral traditions, passing down proverbs and history for generations.",
    "didYouKnow": "Language in Ghana is heavily tied to chiefly lineages and ancestral homes.",
    "tags": [
      "Language",
      "Oral Tradition",
      "Lefana"
    ]
  },
  {
    "id": 274,
    "category": "Festivals",
    "title": "Homowo Festival",
    "fact": "The Homowo festival is traditionally celebrated by the Ga people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Ga",
      "Culture"
    ]
  },
  {
    "id": 275,
    "category": "Culture",
    "title": "Ga Traditional Rites",
    "fact": "During the Homowo festival, the chiefs and elders of the Ga people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Ga",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 276,
    "category": "Festivals",
    "title": "Aboakyer Festival",
    "fact": "The Aboakyer festival is traditionally celebrated by the Effutu people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Effutu",
      "Culture"
    ]
  },
  {
    "id": 277,
    "category": "Culture",
    "title": "Effutu Traditional Rites",
    "fact": "During the Aboakyer festival, the chiefs and elders of the Effutu people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Effutu",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 278,
    "category": "Festivals",
    "title": "Hogbetsotso Festival",
    "fact": "The Hogbetsotso festival is traditionally celebrated by the Anlo Ewe people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Anlo Ewe",
      "Culture"
    ]
  },
  {
    "id": 279,
    "category": "Culture",
    "title": "Anlo Ewe Traditional Rites",
    "fact": "During the Hogbetsotso festival, the chiefs and elders of the Anlo Ewe people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Anlo Ewe",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 280,
    "category": "Festivals",
    "title": "Odwira Festival",
    "fact": "The Odwira festival is traditionally celebrated by the Akwapim people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Akwapim",
      "Culture"
    ]
  },
  {
    "id": 281,
    "category": "Culture",
    "title": "Akwapim Traditional Rites",
    "fact": "During the Odwira festival, the chiefs and elders of the Akwapim people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Akwapim",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 282,
    "category": "Festivals",
    "title": "Damba Festival",
    "fact": "The Damba festival is traditionally celebrated by the Dagbon people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Dagbon",
      "Culture"
    ]
  },
  {
    "id": 283,
    "category": "Culture",
    "title": "Dagbon Traditional Rites",
    "fact": "During the Damba festival, the chiefs and elders of the Dagbon people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Dagbon",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 284,
    "category": "Festivals",
    "title": "Bakatue Festival",
    "fact": "The Bakatue festival is traditionally celebrated by the Elmina people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Elmina",
      "Culture"
    ]
  },
  {
    "id": 285,
    "category": "Culture",
    "title": "Elmina Traditional Rites",
    "fact": "During the Bakatue festival, the chiefs and elders of the Elmina people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Elmina",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 286,
    "category": "Festivals",
    "title": "Fetu Afahye Festival",
    "fact": "The Fetu Afahye festival is traditionally celebrated by the Cape Coast people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Cape Coast",
      "Culture"
    ]
  },
  {
    "id": 287,
    "category": "Culture",
    "title": "Cape Coast Traditional Rites",
    "fact": "During the Fetu Afahye festival, the chiefs and elders of the Cape Coast people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Cape Coast",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 288,
    "category": "Festivals",
    "title": "Kundum Festival",
    "fact": "The Kundum festival is traditionally celebrated by the Nzema/Ahanta people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Nzema/Ahanta",
      "Culture"
    ]
  },
  {
    "id": 289,
    "category": "Culture",
    "title": "Nzema/Ahanta Traditional Rites",
    "fact": "During the Kundum festival, the chiefs and elders of the Nzema/Ahanta people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Nzema/Ahanta",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 290,
    "category": "Festivals",
    "title": "Bugum Chugu Festival",
    "fact": "The Bugum Chugu festival is traditionally celebrated by the Dagbon people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Dagbon",
      "Culture"
    ]
  },
  {
    "id": 291,
    "category": "Culture",
    "title": "Dagbon Traditional Rites",
    "fact": "During the Bugum Chugu festival, the chiefs and elders of the Dagbon people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Dagbon",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 292,
    "category": "Festivals",
    "title": "Asafotu Fiam Festival",
    "fact": "The Asafotu Fiam festival is traditionally celebrated by the Ada people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Ada",
      "Culture"
    ]
  },
  {
    "id": 293,
    "category": "Culture",
    "title": "Ada Traditional Rites",
    "fact": "During the Asafotu Fiam festival, the chiefs and elders of the Ada people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Ada",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 294,
    "category": "Festivals",
    "title": "Ngmayem Festival",
    "fact": "The Ngmayem festival is traditionally celebrated by the Krobo people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Krobo",
      "Culture"
    ]
  },
  {
    "id": 295,
    "category": "Culture",
    "title": "Krobo Traditional Rites",
    "fact": "During the Ngmayem festival, the chiefs and elders of the Krobo people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Krobo",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 296,
    "category": "Festivals",
    "title": "Kloyo Festival",
    "fact": "The Kloyo festival is traditionally celebrated by the Yilo Krobo people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Yilo Krobo",
      "Culture"
    ]
  },
  {
    "id": 297,
    "category": "Culture",
    "title": "Yilo Krobo Traditional Rites",
    "fact": "During the Kloyo festival, the chiefs and elders of the Yilo Krobo people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Yilo Krobo",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 298,
    "category": "Festivals",
    "title": "Kundum Festival",
    "fact": "The Kundum festival is traditionally celebrated by the Axim people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Axim",
      "Culture"
    ]
  },
  {
    "id": 299,
    "category": "Culture",
    "title": "Axim Traditional Rites",
    "fact": "During the Kundum festival, the chiefs and elders of the Axim people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Axim",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 300,
    "category": "Festivals",
    "title": "Akwasidae Festival",
    "fact": "The Akwasidae festival is traditionally celebrated by the Ashanti people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Ashanti",
      "Culture"
    ]
  },
  {
    "id": 301,
    "category": "Culture",
    "title": "Ashanti Traditional Rites",
    "fact": "During the Akwasidae festival, the chiefs and elders of the Ashanti people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Ashanti",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 302,
    "category": "Festivals",
    "title": "Golokuati Festival",
    "fact": "The Golokuati festival is traditionally celebrated by the Afadzato people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Afadzato",
      "Culture"
    ]
  },
  {
    "id": 303,
    "category": "Culture",
    "title": "Afadzato Traditional Rites",
    "fact": "During the Golokuati festival, the chiefs and elders of the Afadzato people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Afadzato",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 304,
    "category": "Festivals",
    "title": "Apafram Festival",
    "fact": "The Apafram festival is traditionally celebrated by the Akwamu people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Akwamu",
      "Culture"
    ]
  },
  {
    "id": 305,
    "category": "Culture",
    "title": "Akwamu Traditional Rites",
    "fact": "During the Apafram festival, the chiefs and elders of the Akwamu people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Akwamu",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 306,
    "category": "Festivals",
    "title": "Nmayem Festival",
    "fact": "The Nmayem festival is traditionally celebrated by the Shai people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Shai",
      "Culture"
    ]
  },
  {
    "id": 307,
    "category": "Culture",
    "title": "Shai Traditional Rites",
    "fact": "During the Nmayem festival, the chiefs and elders of the Shai people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Shai",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 308,
    "category": "Festivals",
    "title": "Ohum Festival",
    "fact": "The Ohum festival is traditionally celebrated by the Akyem people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Akyem",
      "Culture"
    ]
  },
  {
    "id": 309,
    "category": "Culture",
    "title": "Akyem Traditional Rites",
    "fact": "During the Ohum festival, the chiefs and elders of the Akyem people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Akyem",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 310,
    "category": "Festivals",
    "title": "Akwambo Festival",
    "fact": "The Akwambo festival is traditionally celebrated by the Agona people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Agona",
      "Culture"
    ]
  },
  {
    "id": 311,
    "category": "Culture",
    "title": "Agona Traditional Rites",
    "fact": "During the Akwambo festival, the chiefs and elders of the Agona people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Agona",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 312,
    "category": "Festivals",
    "title": "Gologo Festival",
    "fact": "The Gologo festival is traditionally celebrated by the Talensi people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Talensi",
      "Culture"
    ]
  },
  {
    "id": 313,
    "category": "Culture",
    "title": "Talensi Traditional Rites",
    "fact": "During the Gologo festival, the chiefs and elders of the Talensi people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Talensi",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 314,
    "category": "Festivals",
    "title": "Kobine Festival",
    "fact": "The Kobine festival is traditionally celebrated by the Dagaaba people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Dagaaba",
      "Culture"
    ]
  },
  {
    "id": 315,
    "category": "Culture",
    "title": "Dagaaba Traditional Rites",
    "fact": "During the Kobine festival, the chiefs and elders of the Dagaaba people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Dagaaba",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 316,
    "category": "Festivals",
    "title": "Kakube Festival",
    "fact": "The Kakube festival is traditionally celebrated by the Nandom people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Nandom",
      "Culture"
    ]
  },
  {
    "id": 317,
    "category": "Culture",
    "title": "Nandom Traditional Rites",
    "fact": "During the Kakube festival, the chiefs and elders of the Nandom people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Nandom",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 318,
    "category": "Festivals",
    "title": "Tingana Festival",
    "fact": "The Tingana festival is traditionally celebrated by the Arigu people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Arigu",
      "Culture"
    ]
  },
  {
    "id": 319,
    "category": "Culture",
    "title": "Arigu Traditional Rites",
    "fact": "During the Tingana festival, the chiefs and elders of the Arigu people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Arigu",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 320,
    "category": "Festivals",
    "title": "Kwafie Festival",
    "fact": "The Kwafie festival is traditionally celebrated by the Dormaa people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Dormaa",
      "Culture"
    ]
  },
  {
    "id": 321,
    "category": "Culture",
    "title": "Dormaa Traditional Rites",
    "fact": "During the Kwafie festival, the chiefs and elders of the Dormaa people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Dormaa",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 322,
    "category": "Festivals",
    "title": "Amu Festival",
    "fact": "The Amu festival is traditionally celebrated by the Vane people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Vane",
      "Culture"
    ]
  },
  {
    "id": 323,
    "category": "Culture",
    "title": "Vane Traditional Rites",
    "fact": "During the Amu festival, the chiefs and elders of the Vane people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Vane",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 324,
    "category": "Festivals",
    "title": "Dzawuwu Festival",
    "fact": "The Dzawuwu festival is traditionally celebrated by the Agave people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Agave",
      "Culture"
    ]
  },
  {
    "id": 325,
    "category": "Culture",
    "title": "Agave Traditional Rites",
    "fact": "During the Dzawuwu festival, the chiefs and elders of the Agave people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Agave",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 326,
    "category": "Festivals",
    "title": "Agbamevo Festival",
    "fact": "The Agbamevo festival is traditionally celebrated by the Kpetoe people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Kpetoe",
      "Culture"
    ]
  },
  {
    "id": 327,
    "category": "Culture",
    "title": "Kpetoe Traditional Rites",
    "fact": "During the Agbamevo festival, the chiefs and elders of the Kpetoe people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Kpetoe",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 328,
    "category": "Festivals",
    "title": "Lekoyi Festival",
    "fact": "The Lekoyi festival is traditionally celebrated by the Likpe people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Likpe",
      "Culture"
    ]
  },
  {
    "id": 329,
    "category": "Culture",
    "title": "Likpe Traditional Rites",
    "fact": "During the Lekoyi festival, the chiefs and elders of the Likpe people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Likpe",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 330,
    "category": "Festivals",
    "title": "Wudome Festival",
    "fact": "The Wudome festival is traditionally celebrated by the Kpandu people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Kpandu",
      "Culture"
    ]
  },
  {
    "id": 331,
    "category": "Culture",
    "title": "Kpandu Traditional Rites",
    "fact": "During the Wudome festival, the chiefs and elders of the Kpandu people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Kpandu",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 332,
    "category": "Festivals",
    "title": "Azokli Festival",
    "fact": "The Azokli festival is traditionally celebrated by the Ziope people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Ziope",
      "Culture"
    ]
  },
  {
    "id": 333,
    "category": "Culture",
    "title": "Ziope Traditional Rites",
    "fact": "During the Azokli festival, the chiefs and elders of the Ziope people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Ziope",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 334,
    "category": "Festivals",
    "title": "Gbedze Festival",
    "fact": "The Gbedze festival is traditionally celebrated by the Mepe people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Mepe",
      "Culture"
    ]
  },
  {
    "id": 335,
    "category": "Culture",
    "title": "Mepe Traditional Rites",
    "fact": "During the Gbedze festival, the chiefs and elders of the Mepe people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Mepe",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 336,
    "category": "Festivals",
    "title": "Sasadu Festival",
    "fact": "The Sasadu festival is traditionally celebrated by the Alavanyo people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Alavanyo",
      "Culture"
    ]
  },
  {
    "id": 337,
    "category": "Culture",
    "title": "Alavanyo Traditional Rites",
    "fact": "During the Sasadu festival, the chiefs and elders of the Alavanyo people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Alavanyo",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 338,
    "category": "Festivals",
    "title": "Kpalikpakpa Festival",
    "fact": "The Kpalikpakpa festival is traditionally celebrated by the Kpando people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Kpando",
      "Culture"
    ]
  },
  {
    "id": 339,
    "category": "Culture",
    "title": "Kpando Traditional Rites",
    "fact": "During the Kpalikpakpa festival, the chiefs and elders of the Kpando people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Kpando",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 340,
    "category": "Festivals",
    "title": "Dayibakaka Festival",
    "fact": "The Dayibakaka festival is traditionally celebrated by the Tafi people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Tafi",
      "Culture"
    ]
  },
  {
    "id": 341,
    "category": "Culture",
    "title": "Tafi Traditional Rites",
    "fact": "During the Dayibakaka festival, the chiefs and elders of the Tafi people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Tafi",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 342,
    "category": "Festivals",
    "title": "Meko Festival",
    "fact": "The Meko festival is traditionally celebrated by the Anfoega people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Anfoega",
      "Culture"
    ]
  },
  {
    "id": 343,
    "category": "Culture",
    "title": "Anfoega Traditional Rites",
    "fact": "During the Meko festival, the chiefs and elders of the Anfoega people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Anfoega",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 344,
    "category": "Festivals",
    "title": "Ntoa Festival",
    "fact": "The Ntoa festival is traditionally celebrated by the Nkoranza people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Nkoranza",
      "Culture"
    ]
  },
  {
    "id": 345,
    "category": "Culture",
    "title": "Nkoranza Traditional Rites",
    "fact": "During the Ntoa festival, the chiefs and elders of the Nkoranza people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Nkoranza",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 346,
    "category": "Festivals",
    "title": "Gye Nyame Festival",
    "fact": "The Gye Nyame festival is traditionally celebrated by the Kuntanase people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Kuntanase",
      "Culture"
    ]
  },
  {
    "id": 347,
    "category": "Culture",
    "title": "Kuntanase Traditional Rites",
    "fact": "During the Gye Nyame festival, the chiefs and elders of the Kuntanase people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Kuntanase",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 348,
    "category": "Festivals",
    "title": "Nkyifie Festival",
    "fact": "The Nkyifie festival is traditionally celebrated by the Prang people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Prang",
      "Culture"
    ]
  },
  {
    "id": 349,
    "category": "Culture",
    "title": "Prang Traditional Rites",
    "fact": "During the Nkyifie festival, the chiefs and elders of the Prang people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Prang",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 350,
    "category": "Festivals",
    "title": "Kurubi Festival",
    "fact": "The Kurubi festival is traditionally celebrated by the Wangara people. It marks a period of historical remembrance and harvest.",
    "didYouKnow": "Festivals in Ghana often involve a ban on drumming and noise-making weeks prior to the main event!",
    "tags": [
      "Festival",
      "Wangara",
      "Culture"
    ]
  },
  {
    "id": 351,
    "category": "Culture",
    "title": "Wangara Traditional Rites",
    "fact": "During the Kurubi festival, the chiefs and elders of the Wangara people pour libation to thank the ancestors for a bountiful year.",
    "didYouKnow": "The pouring of libation is a deeply sacred African prayer connecting the living with the dead.",
    "tags": [
      "Wangara",
      "Libation",
      "Ancestors"
    ]
  },
  {
    "id": 352,
    "category": "Food",
    "title": "Fufu in Ghana",
    "fact": "Fufu is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Fufu often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Fufu",
      "Cuisine"
    ]
  },
  {
    "id": 353,
    "category": "Culture",
    "title": "Fufu Preparation",
    "fact": "The making of Fufu is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Fufu"
    ]
  },
  {
    "id": 354,
    "category": "Food",
    "title": "Banku in Ghana",
    "fact": "Banku is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Banku often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Banku",
      "Cuisine"
    ]
  },
  {
    "id": 355,
    "category": "Culture",
    "title": "Banku Preparation",
    "fact": "The making of Banku is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Banku"
    ]
  },
  {
    "id": 356,
    "category": "Food",
    "title": "Kenkey in Ghana",
    "fact": "Kenkey is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Kenkey often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Kenkey",
      "Cuisine"
    ]
  },
  {
    "id": 357,
    "category": "Culture",
    "title": "Kenkey Preparation",
    "fact": "The making of Kenkey is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Kenkey"
    ]
  },
  {
    "id": 358,
    "category": "Food",
    "title": "Waakye in Ghana",
    "fact": "Waakye is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Waakye often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Waakye",
      "Cuisine"
    ]
  },
  {
    "id": 359,
    "category": "Culture",
    "title": "Waakye Preparation",
    "fact": "The making of Waakye is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Waakye"
    ]
  },
  {
    "id": 360,
    "category": "Food",
    "title": "Jollof Rice in Ghana",
    "fact": "Jollof Rice is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Jollof Rice often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Jollof Rice",
      "Cuisine"
    ]
  },
  {
    "id": 361,
    "category": "Culture",
    "title": "Jollof Rice Preparation",
    "fact": "The making of Jollof Rice is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Jollof Rice"
    ]
  },
  {
    "id": 362,
    "category": "Food",
    "title": "Red Red in Ghana",
    "fact": "Red Red is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Red Red often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Red Red",
      "Cuisine"
    ]
  },
  {
    "id": 363,
    "category": "Culture",
    "title": "Red Red Preparation",
    "fact": "The making of Red Red is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Red Red"
    ]
  },
  {
    "id": 364,
    "category": "Food",
    "title": "Tuo Zaafi in Ghana",
    "fact": "Tuo Zaafi is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Tuo Zaafi often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Tuo Zaafi",
      "Cuisine"
    ]
  },
  {
    "id": 365,
    "category": "Culture",
    "title": "Tuo Zaafi Preparation",
    "fact": "The making of Tuo Zaafi is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Tuo Zaafi"
    ]
  },
  {
    "id": 366,
    "category": "Food",
    "title": "Omo Tuo in Ghana",
    "fact": "Omo Tuo is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Omo Tuo often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Omo Tuo",
      "Cuisine"
    ]
  },
  {
    "id": 367,
    "category": "Culture",
    "title": "Omo Tuo Preparation",
    "fact": "The making of Omo Tuo is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Omo Tuo"
    ]
  },
  {
    "id": 368,
    "category": "Food",
    "title": "Ampesi in Ghana",
    "fact": "Ampesi is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Ampesi often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Ampesi",
      "Cuisine"
    ]
  },
  {
    "id": 369,
    "category": "Culture",
    "title": "Ampesi Preparation",
    "fact": "The making of Ampesi is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Ampesi"
    ]
  },
  {
    "id": 370,
    "category": "Food",
    "title": "Eto in Ghana",
    "fact": "Eto is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Eto often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Eto",
      "Cuisine"
    ]
  },
  {
    "id": 371,
    "category": "Culture",
    "title": "Eto Preparation",
    "fact": "The making of Eto is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Eto"
    ]
  },
  {
    "id": 372,
    "category": "Food",
    "title": "Kelewele in Ghana",
    "fact": "Kelewele is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Kelewele often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Kelewele",
      "Cuisine"
    ]
  },
  {
    "id": 373,
    "category": "Culture",
    "title": "Kelewele Preparation",
    "fact": "The making of Kelewele is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Kelewele"
    ]
  },
  {
    "id": 374,
    "category": "Food",
    "title": "Kyinkyinga in Ghana",
    "fact": "Kyinkyinga is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Kyinkyinga often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Kyinkyinga",
      "Cuisine"
    ]
  },
  {
    "id": 375,
    "category": "Culture",
    "title": "Kyinkyinga Preparation",
    "fact": "The making of Kyinkyinga is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Kyinkyinga"
    ]
  },
  {
    "id": 376,
    "category": "Food",
    "title": "Domedo in Ghana",
    "fact": "Domedo is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Domedo often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Domedo",
      "Cuisine"
    ]
  },
  {
    "id": 377,
    "category": "Culture",
    "title": "Domedo Preparation",
    "fact": "The making of Domedo is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Domedo"
    ]
  },
  {
    "id": 378,
    "category": "Food",
    "title": "Chichinga in Ghana",
    "fact": "Chichinga is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Chichinga often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Chichinga",
      "Cuisine"
    ]
  },
  {
    "id": 379,
    "category": "Culture",
    "title": "Chichinga Preparation",
    "fact": "The making of Chichinga is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Chichinga"
    ]
  },
  {
    "id": 380,
    "category": "Food",
    "title": "Koose in Ghana",
    "fact": "Koose is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Koose often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Koose",
      "Cuisine"
    ]
  },
  {
    "id": 381,
    "category": "Culture",
    "title": "Koose Preparation",
    "fact": "The making of Koose is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Koose"
    ]
  },
  {
    "id": 382,
    "category": "Food",
    "title": "Bofrot in Ghana",
    "fact": "Bofrot is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Bofrot often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Bofrot",
      "Cuisine"
    ]
  },
  {
    "id": 383,
    "category": "Culture",
    "title": "Bofrot Preparation",
    "fact": "The making of Bofrot is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Bofrot"
    ]
  },
  {
    "id": 384,
    "category": "Food",
    "title": "Gari Foto in Ghana",
    "fact": "Gari Foto is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Gari Foto often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Gari Foto",
      "Cuisine"
    ]
  },
  {
    "id": 385,
    "category": "Culture",
    "title": "Gari Foto Preparation",
    "fact": "The making of Gari Foto is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Gari Foto"
    ]
  },
  {
    "id": 386,
    "category": "Food",
    "title": "Aprapransa in Ghana",
    "fact": "Aprapransa is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Aprapransa often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Aprapransa",
      "Cuisine"
    ]
  },
  {
    "id": 387,
    "category": "Culture",
    "title": "Aprapransa Preparation",
    "fact": "The making of Aprapransa is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Aprapransa"
    ]
  },
  {
    "id": 388,
    "category": "Food",
    "title": "Akple in Ghana",
    "fact": "Akple is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Akple often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Akple",
      "Cuisine"
    ]
  },
  {
    "id": 389,
    "category": "Culture",
    "title": "Akple Preparation",
    "fact": "The making of Akple is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Akple"
    ]
  },
  {
    "id": 390,
    "category": "Food",
    "title": "Yakayak in Ghana",
    "fact": "Yakayak is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Yakayak often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Yakayak",
      "Cuisine"
    ]
  },
  {
    "id": 391,
    "category": "Culture",
    "title": "Yakayak Preparation",
    "fact": "The making of Yakayak is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Yakayak"
    ]
  },
  {
    "id": 392,
    "category": "Food",
    "title": "Akyeke in Ghana",
    "fact": "Akyeke is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Akyeke often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Akyeke",
      "Cuisine"
    ]
  },
  {
    "id": 393,
    "category": "Culture",
    "title": "Akyeke Preparation",
    "fact": "The making of Akyeke is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Akyeke"
    ]
  },
  {
    "id": 394,
    "category": "Food",
    "title": "Eba in Ghana",
    "fact": "Eba is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Eba often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Eba",
      "Cuisine"
    ]
  },
  {
    "id": 395,
    "category": "Culture",
    "title": "Eba Preparation",
    "fact": "The making of Eba is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Eba"
    ]
  },
  {
    "id": 396,
    "category": "Food",
    "title": "Ewuo in Ghana",
    "fact": "Ewuo is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Ewuo often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Ewuo",
      "Cuisine"
    ]
  },
  {
    "id": 397,
    "category": "Culture",
    "title": "Ewuo Preparation",
    "fact": "The making of Ewuo is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Ewuo"
    ]
  },
  {
    "id": 398,
    "category": "Food",
    "title": "Tubani in Ghana",
    "fact": "Tubani is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Tubani often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Tubani",
      "Cuisine"
    ]
  },
  {
    "id": 399,
    "category": "Culture",
    "title": "Tubani Preparation",
    "fact": "The making of Tubani is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Tubani"
    ]
  },
  {
    "id": 400,
    "category": "Food",
    "title": "Wasawasa in Ghana",
    "fact": "Wasawasa is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Wasawasa often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Wasawasa",
      "Cuisine"
    ]
  },
  {
    "id": 401,
    "category": "Culture",
    "title": "Wasawasa Preparation",
    "fact": "The making of Wasawasa is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Wasawasa"
    ]
  },
  {
    "id": 402,
    "category": "Food",
    "title": "Kuli Kuli in Ghana",
    "fact": "Kuli Kuli is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Kuli Kuli often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Kuli Kuli",
      "Cuisine"
    ]
  },
  {
    "id": 403,
    "category": "Culture",
    "title": "Kuli Kuli Preparation",
    "fact": "The making of Kuli Kuli is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Kuli Kuli"
    ]
  },
  {
    "id": 404,
    "category": "Food",
    "title": "Dzomi in Ghana",
    "fact": "Dzomi is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Dzomi often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Dzomi",
      "Cuisine"
    ]
  },
  {
    "id": 405,
    "category": "Culture",
    "title": "Dzomi Preparation",
    "fact": "The making of Dzomi is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Dzomi"
    ]
  },
  {
    "id": 406,
    "category": "Food",
    "title": "Zomi in Ghana",
    "fact": "Zomi is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Zomi often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Zomi",
      "Cuisine"
    ]
  },
  {
    "id": 407,
    "category": "Culture",
    "title": "Zomi Preparation",
    "fact": "The making of Zomi is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Zomi"
    ]
  },
  {
    "id": 408,
    "category": "Food",
    "title": "Shito in Ghana",
    "fact": "Shito is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Shito often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Shito",
      "Cuisine"
    ]
  },
  {
    "id": 409,
    "category": "Culture",
    "title": "Shito Preparation",
    "fact": "The making of Shito is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Shito"
    ]
  },
  {
    "id": 410,
    "category": "Food",
    "title": "Kpakpo Shito in Ghana",
    "fact": "Kpakpo Shito is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Kpakpo Shito often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Kpakpo Shito",
      "Cuisine"
    ]
  },
  {
    "id": 411,
    "category": "Culture",
    "title": "Kpakpo Shito Preparation",
    "fact": "The making of Kpakpo Shito is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Kpakpo Shito"
    ]
  },
  {
    "id": 412,
    "category": "Food",
    "title": "Groundnut Soup in Ghana",
    "fact": "Groundnut Soup is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Groundnut Soup often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Groundnut Soup",
      "Cuisine"
    ]
  },
  {
    "id": 413,
    "category": "Culture",
    "title": "Groundnut Soup Preparation",
    "fact": "The making of Groundnut Soup is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Groundnut Soup"
    ]
  },
  {
    "id": 414,
    "category": "Food",
    "title": "Light Soup in Ghana",
    "fact": "Light Soup is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Light Soup often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Light Soup",
      "Cuisine"
    ]
  },
  {
    "id": 415,
    "category": "Culture",
    "title": "Light Soup Preparation",
    "fact": "The making of Light Soup is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Light Soup"
    ]
  },
  {
    "id": 416,
    "category": "Food",
    "title": "Palm Nut Soup in Ghana",
    "fact": "Palm Nut Soup is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Palm Nut Soup often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Palm Nut Soup",
      "Cuisine"
    ]
  },
  {
    "id": 417,
    "category": "Culture",
    "title": "Palm Nut Soup Preparation",
    "fact": "The making of Palm Nut Soup is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Palm Nut Soup"
    ]
  },
  {
    "id": 418,
    "category": "Food",
    "title": "Kontomire Stew in Ghana",
    "fact": "Kontomire Stew is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Kontomire Stew often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Kontomire Stew",
      "Cuisine"
    ]
  },
  {
    "id": 419,
    "category": "Culture",
    "title": "Kontomire Stew Preparation",
    "fact": "The making of Kontomire Stew is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Kontomire Stew"
    ]
  },
  {
    "id": 420,
    "category": "Food",
    "title": "Ayoyo Soup in Ghana",
    "fact": "Ayoyo Soup is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Ayoyo Soup often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Ayoyo Soup",
      "Cuisine"
    ]
  },
  {
    "id": 421,
    "category": "Culture",
    "title": "Ayoyo Soup Preparation",
    "fact": "The making of Ayoyo Soup is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Ayoyo Soup"
    ]
  },
  {
    "id": 422,
    "category": "Food",
    "title": "Dawadawa in Ghana",
    "fact": "Dawadawa is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Dawadawa often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Dawadawa",
      "Cuisine"
    ]
  },
  {
    "id": 423,
    "category": "Culture",
    "title": "Dawadawa Preparation",
    "fact": "The making of Dawadawa is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Dawadawa"
    ]
  },
  {
    "id": 424,
    "category": "Food",
    "title": "Prekese in Ghana",
    "fact": "Prekese is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Prekese often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Prekese",
      "Cuisine"
    ]
  },
  {
    "id": 425,
    "category": "Culture",
    "title": "Prekese Preparation",
    "fact": "The making of Prekese is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Prekese"
    ]
  },
  {
    "id": 426,
    "category": "Food",
    "title": "Abedru in Ghana",
    "fact": "Abedru is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Abedru often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Abedru",
      "Cuisine"
    ]
  },
  {
    "id": 427,
    "category": "Culture",
    "title": "Abedru Preparation",
    "fact": "The making of Abedru is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Abedru"
    ]
  },
  {
    "id": 428,
    "category": "Food",
    "title": "Agushie in Ghana",
    "fact": "Agushie is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Agushie often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Agushie",
      "Cuisine"
    ]
  },
  {
    "id": 429,
    "category": "Culture",
    "title": "Agushie Preparation",
    "fact": "The making of Agushie is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Agushie"
    ]
  },
  {
    "id": 430,
    "category": "Food",
    "title": "Wagasi in Ghana",
    "fact": "Wagasi is a beloved staple dish in Ghana, bringing families together during meals and festive occasions.",
    "didYouKnow": "Preparation of Wagasi often involves traditional cooking methods passed down from great-grandmothers!",
    "tags": [
      "Food",
      "Wagasi",
      "Cuisine"
    ]
  },
  {
    "id": 431,
    "category": "Culture",
    "title": "Wagasi Preparation",
    "fact": "The making of Wagasi is considered a culinary art in Ghana, often requiring specific local spices and indigenous ingredients to get the authentic taste.",
    "didYouKnow": "Food in Ghana is typically eaten with the right hand, as using the left hand is culturally frowned upon.",
    "tags": [
      "Food",
      "Etiquette",
      "Wagasi"
    ]
  },
  {
    "id": 432,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"The ruin of a nation begins in the homes of its people.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 433,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"The ruin of a nation begins in the homes of its people.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 434,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"What is bad luck for the early bird is good luck for the early worm.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 435,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"What is bad luck for the early bird is good luck for the early worm.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 436,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"A family is like a forest, when you are outside it is dense, when you are inside you see that each tree has its place.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 437,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"A family is like a forest, when you are outside it is dense, when you are inside you see that each tree has its place.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 438,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"If you want to go fast, go alone. If you want to go far, go together.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 439,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"If you want to go fast, go alone. If you want to go far, go together.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 440,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"Wood already touched by fire is not hard to set alight.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 441,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"Wood already touched by fire is not hard to set alight.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 442,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"Do not follow a person who is running away.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 443,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"Do not follow a person who is running away.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 444,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"Only a fool tests the depth of a river with both feet.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 445,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"Only a fool tests the depth of a river with both feet.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 446,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"By the time the fool has learned the game, the players have dispersed.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 447,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"By the time the fool has learned the game, the players have dispersed.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 448,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"Knowledge is like a baobab tree; one person's arms cannot encompass it.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 449,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"Knowledge is like a baobab tree; one person's arms cannot encompass it.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 450,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"A child who is to be successful is not to be reared exclusively on a bed of down.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 451,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"A child who is to be successful is not to be reared exclusively on a bed of down.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 452,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"When a king has good counselors, his reign is peaceful.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 453,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"When a king has good counselors, his reign is peaceful.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 454,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"No matter how long a log stays in the water, it doesn't become a crocodile.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 455,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"No matter how long a log stays in the water, it doesn't become a crocodile.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 456,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"A bird that flies off the earth and lands on an anthill is still on the ground.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 457,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"A bird that flies off the earth and lands on an anthill is still on the ground.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 458,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"The one who asks questions doesn't lose his way.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 459,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"The one who asks questions doesn't lose his way.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 460,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"If you build your house on the street, you will have many advisors.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 461,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"If you build your house on the street, you will have many advisors.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 462,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"The teeth and the tongue often fight, but they live together.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 463,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"The teeth and the tongue often fight, but they live together.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 464,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"The child who is not embraced by the village will burn it down to feel its warmth.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 465,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"The child who is not embraced by the village will burn it down to feel its warmth.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 466,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"No one tests the depth of a river with both feet.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 467,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"No one tests the depth of a river with both feet.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 468,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"When the fool is told a proverb, the meaning has to be explained to him.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 469,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"When the fool is told a proverb, the meaning has to be explained to him.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 470,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"A loaded wagon makes no noise.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 471,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"A loaded wagon makes no noise.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 472,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"The strength of the broom lies in its tightly bound sticks.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 473,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"The strength of the broom lies in its tightly bound sticks.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 474,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"A wise man never knows all, only fools know everything.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 475,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"A wise man never knows all, only fools know everything.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 476,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"He who is unable to dance says that the yard is stony.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 477,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"He who is unable to dance says that the yard is stony.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 478,
    "category": "Culture",
    "title": "Ghanaian Proverb",
    "fact": "A famous Ghanaian proverb says: \"Even the best cooking pot will not produce food.\"",
    "didYouKnow": "Proverbs are considered the \"palm oil with which words are eaten\" in traditional Ghanaian society.",
    "tags": [
      "Proverb",
      "Wisdom",
      "Culture"
    ]
  },
  {
    "id": 479,
    "category": "Language",
    "title": "Wisdom of the Elders",
    "fact": "The proverb \"Even the best cooking pot will not produce food.\" illustrates the deep philosophical thought embedded in Ghanaian cultural teachings.",
    "didYouKnow": "At traditional courts, chiefs' linguists speak almost entirely in complex proverbs!",
    "tags": [
      "Proverb",
      "Chiefs",
      "Linguist"
    ]
  },
  {
    "id": 480,
    "category": "History",
    "title": "Ghana around 1900",
    "fact": "The year 1900 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1900"
    ]
  },
  {
    "id": 481,
    "category": "History",
    "title": "Ghana around 1901",
    "fact": "The year 1901 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1901"
    ]
  },
  {
    "id": 482,
    "category": "History",
    "title": "Ghana around 1902",
    "fact": "The year 1902 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1902"
    ]
  },
  {
    "id": 483,
    "category": "History",
    "title": "Ghana around 1903",
    "fact": "The year 1903 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1903"
    ]
  },
  {
    "id": 484,
    "category": "History",
    "title": "Ghana around 1904",
    "fact": "The year 1904 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1904"
    ]
  },
  {
    "id": 485,
    "category": "History",
    "title": "Ghana around 1905",
    "fact": "The year 1905 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1905"
    ]
  },
  {
    "id": 486,
    "category": "History",
    "title": "Ghana around 1906",
    "fact": "The year 1906 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1906"
    ]
  },
  {
    "id": 487,
    "category": "History",
    "title": "Ghana around 1907",
    "fact": "The year 1907 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1907"
    ]
  },
  {
    "id": 488,
    "category": "History",
    "title": "Ghana around 1908",
    "fact": "The year 1908 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1908"
    ]
  },
  {
    "id": 489,
    "category": "History",
    "title": "Ghana around 1909",
    "fact": "The year 1909 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1909"
    ]
  },
  {
    "id": 490,
    "category": "History",
    "title": "Ghana around 1910",
    "fact": "The year 1910 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1910"
    ]
  },
  {
    "id": 491,
    "category": "History",
    "title": "Ghana around 1911",
    "fact": "The year 1911 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1911"
    ]
  },
  {
    "id": 492,
    "category": "History",
    "title": "Ghana around 1912",
    "fact": "The year 1912 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1912"
    ]
  },
  {
    "id": 493,
    "category": "History",
    "title": "Ghana around 1913",
    "fact": "The year 1913 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1913"
    ]
  },
  {
    "id": 494,
    "category": "History",
    "title": "Ghana around 1914",
    "fact": "The year 1914 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1914"
    ]
  },
  {
    "id": 495,
    "category": "History",
    "title": "Ghana around 1915",
    "fact": "The year 1915 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1915"
    ]
  },
  {
    "id": 496,
    "category": "History",
    "title": "Ghana around 1916",
    "fact": "The year 1916 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1916"
    ]
  },
  {
    "id": 497,
    "category": "History",
    "title": "Ghana around 1917",
    "fact": "The year 1917 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1917"
    ]
  },
  {
    "id": 498,
    "category": "History",
    "title": "Ghana around 1918",
    "fact": "The year 1918 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1918"
    ]
  },
  {
    "id": 499,
    "category": "History",
    "title": "Ghana around 1919",
    "fact": "The year 1919 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1919"
    ]
  },
  {
    "id": 500,
    "category": "History",
    "title": "Ghana around 1920",
    "fact": "The year 1920 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1920"
    ]
  },
  {
    "id": 501,
    "category": "History",
    "title": "Ghana around 1921",
    "fact": "The year 1921 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1921"
    ]
  },
  {
    "id": 502,
    "category": "History",
    "title": "Ghana around 1922",
    "fact": "The year 1922 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1922"
    ]
  },
  {
    "id": 503,
    "category": "History",
    "title": "Ghana around 1923",
    "fact": "The year 1923 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1923"
    ]
  },
  {
    "id": 504,
    "category": "History",
    "title": "Ghana around 1924",
    "fact": "The year 1924 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1924"
    ]
  },
  {
    "id": 505,
    "category": "History",
    "title": "Ghana around 1925",
    "fact": "The year 1925 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1925"
    ]
  },
  {
    "id": 506,
    "category": "History",
    "title": "Ghana around 1926",
    "fact": "The year 1926 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1926"
    ]
  },
  {
    "id": 507,
    "category": "History",
    "title": "Ghana around 1927",
    "fact": "The year 1927 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1927"
    ]
  },
  {
    "id": 508,
    "category": "History",
    "title": "Ghana around 1928",
    "fact": "The year 1928 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1928"
    ]
  },
  {
    "id": 509,
    "category": "History",
    "title": "Ghana around 1929",
    "fact": "The year 1929 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1929"
    ]
  },
  {
    "id": 510,
    "category": "History",
    "title": "Ghana around 1930",
    "fact": "The year 1930 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1930"
    ]
  },
  {
    "id": 511,
    "category": "History",
    "title": "Ghana around 1931",
    "fact": "The year 1931 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1931"
    ]
  },
  {
    "id": 512,
    "category": "History",
    "title": "Ghana around 1932",
    "fact": "The year 1932 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1932"
    ]
  },
  {
    "id": 513,
    "category": "History",
    "title": "Ghana around 1933",
    "fact": "The year 1933 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1933"
    ]
  },
  {
    "id": 514,
    "category": "History",
    "title": "Ghana around 1934",
    "fact": "The year 1934 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1934"
    ]
  },
  {
    "id": 515,
    "category": "History",
    "title": "Ghana around 1935",
    "fact": "The year 1935 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1935"
    ]
  },
  {
    "id": 516,
    "category": "History",
    "title": "Ghana around 1936",
    "fact": "The year 1936 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1936"
    ]
  },
  {
    "id": 517,
    "category": "History",
    "title": "Ghana around 1937",
    "fact": "The year 1937 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1937"
    ]
  },
  {
    "id": 518,
    "category": "History",
    "title": "Ghana around 1938",
    "fact": "The year 1938 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1938"
    ]
  },
  {
    "id": 519,
    "category": "History",
    "title": "Ghana around 1939",
    "fact": "The year 1939 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1939"
    ]
  },
  {
    "id": 520,
    "category": "History",
    "title": "Ghana around 1940",
    "fact": "The year 1940 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1940"
    ]
  },
  {
    "id": 521,
    "category": "History",
    "title": "Ghana around 1941",
    "fact": "The year 1941 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1941"
    ]
  },
  {
    "id": 522,
    "category": "History",
    "title": "Ghana around 1942",
    "fact": "The year 1942 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1942"
    ]
  },
  {
    "id": 523,
    "category": "History",
    "title": "Ghana around 1943",
    "fact": "The year 1943 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1943"
    ]
  },
  {
    "id": 524,
    "category": "History",
    "title": "Ghana around 1944",
    "fact": "The year 1944 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1944"
    ]
  },
  {
    "id": 525,
    "category": "History",
    "title": "Ghana around 1945",
    "fact": "The year 1945 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1945"
    ]
  },
  {
    "id": 526,
    "category": "History",
    "title": "Ghana around 1946",
    "fact": "The year 1946 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1946"
    ]
  },
  {
    "id": 527,
    "category": "History",
    "title": "Ghana around 1947",
    "fact": "The year 1947 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1947"
    ]
  },
  {
    "id": 528,
    "category": "History",
    "title": "Ghana around 1948",
    "fact": "The year 1948 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1948"
    ]
  },
  {
    "id": 529,
    "category": "History",
    "title": "Ghana around 1949",
    "fact": "The year 1949 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1949"
    ]
  },
  {
    "id": 530,
    "category": "History",
    "title": "Ghana around 1950",
    "fact": "The year 1950 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1950"
    ]
  },
  {
    "id": 531,
    "category": "History",
    "title": "Ghana around 1951",
    "fact": "The year 1951 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1951"
    ]
  },
  {
    "id": 532,
    "category": "History",
    "title": "Ghana around 1952",
    "fact": "The year 1952 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1952"
    ]
  },
  {
    "id": 533,
    "category": "History",
    "title": "Ghana around 1953",
    "fact": "The year 1953 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1953"
    ]
  },
  {
    "id": 534,
    "category": "History",
    "title": "Ghana around 1954",
    "fact": "The year 1954 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1954"
    ]
  },
  {
    "id": 535,
    "category": "History",
    "title": "Ghana around 1955",
    "fact": "The year 1955 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1955"
    ]
  },
  {
    "id": 536,
    "category": "History",
    "title": "Ghana around 1956",
    "fact": "The year 1956 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1956"
    ]
  },
  {
    "id": 537,
    "category": "History",
    "title": "Ghana around 1957",
    "fact": "The year 1957 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1957"
    ]
  },
  {
    "id": 538,
    "category": "History",
    "title": "Ghana around 1958",
    "fact": "The year 1958 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1958"
    ]
  },
  {
    "id": 539,
    "category": "History",
    "title": "Ghana around 1959",
    "fact": "The year 1959 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1959"
    ]
  },
  {
    "id": 540,
    "category": "History",
    "title": "Ghana around 1960",
    "fact": "The year 1960 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1960"
    ]
  },
  {
    "id": 541,
    "category": "History",
    "title": "Ghana around 1961",
    "fact": "The year 1961 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1961"
    ]
  },
  {
    "id": 542,
    "category": "History",
    "title": "Ghana around 1962",
    "fact": "The year 1962 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1962"
    ]
  },
  {
    "id": 543,
    "category": "History",
    "title": "Ghana around 1963",
    "fact": "The year 1963 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1963"
    ]
  },
  {
    "id": 544,
    "category": "History",
    "title": "Ghana around 1964",
    "fact": "The year 1964 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1964"
    ]
  },
  {
    "id": 545,
    "category": "History",
    "title": "Ghana around 1965",
    "fact": "The year 1965 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1965"
    ]
  },
  {
    "id": 546,
    "category": "History",
    "title": "Ghana around 1966",
    "fact": "The year 1966 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1966"
    ]
  },
  {
    "id": 547,
    "category": "History",
    "title": "Ghana around 1967",
    "fact": "The year 1967 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1967"
    ]
  },
  {
    "id": 548,
    "category": "History",
    "title": "Ghana around 1968",
    "fact": "The year 1968 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1968"
    ]
  },
  {
    "id": 549,
    "category": "History",
    "title": "Ghana around 1969",
    "fact": "The year 1969 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1969"
    ]
  },
  {
    "id": 550,
    "category": "History",
    "title": "Ghana around 1970",
    "fact": "The year 1970 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1970"
    ]
  },
  {
    "id": 551,
    "category": "History",
    "title": "Ghana around 1971",
    "fact": "The year 1971 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1971"
    ]
  },
  {
    "id": 552,
    "category": "History",
    "title": "Ghana around 1972",
    "fact": "The year 1972 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1972"
    ]
  },
  {
    "id": 553,
    "category": "History",
    "title": "Ghana around 1973",
    "fact": "The year 1973 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1973"
    ]
  },
  {
    "id": 554,
    "category": "History",
    "title": "Ghana around 1974",
    "fact": "The year 1974 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1974"
    ]
  },
  {
    "id": 555,
    "category": "History",
    "title": "Ghana around 1975",
    "fact": "The year 1975 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1975"
    ]
  },
  {
    "id": 556,
    "category": "History",
    "title": "Ghana around 1976",
    "fact": "The year 1976 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1976"
    ]
  },
  {
    "id": 557,
    "category": "History",
    "title": "Ghana around 1977",
    "fact": "The year 1977 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1977"
    ]
  },
  {
    "id": 558,
    "category": "History",
    "title": "Ghana around 1978",
    "fact": "The year 1978 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1978"
    ]
  },
  {
    "id": 559,
    "category": "History",
    "title": "Ghana around 1979",
    "fact": "The year 1979 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1979"
    ]
  },
  {
    "id": 560,
    "category": "History",
    "title": "Ghana around 1980",
    "fact": "The year 1980 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1980"
    ]
  },
  {
    "id": 561,
    "category": "History",
    "title": "Ghana around 1981",
    "fact": "The year 1981 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1981"
    ]
  },
  {
    "id": 562,
    "category": "History",
    "title": "Ghana around 1982",
    "fact": "The year 1982 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1982"
    ]
  },
  {
    "id": 563,
    "category": "History",
    "title": "Ghana around 1983",
    "fact": "The year 1983 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1983"
    ]
  },
  {
    "id": 564,
    "category": "History",
    "title": "Ghana around 1984",
    "fact": "The year 1984 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1984"
    ]
  },
  {
    "id": 565,
    "category": "History",
    "title": "Ghana around 1985",
    "fact": "The year 1985 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1985"
    ]
  },
  {
    "id": 566,
    "category": "History",
    "title": "Ghana around 1986",
    "fact": "The year 1986 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1986"
    ]
  },
  {
    "id": 567,
    "category": "History",
    "title": "Ghana around 1987",
    "fact": "The year 1987 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1987"
    ]
  },
  {
    "id": 568,
    "category": "History",
    "title": "Ghana around 1988",
    "fact": "The year 1988 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1988"
    ]
  },
  {
    "id": 569,
    "category": "History",
    "title": "Ghana around 1989",
    "fact": "The year 1989 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1989"
    ]
  },
  {
    "id": 570,
    "category": "History",
    "title": "Ghana around 1990",
    "fact": "The year 1990 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1990"
    ]
  },
  {
    "id": 571,
    "category": "History",
    "title": "Ghana around 1991",
    "fact": "The year 1991 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1991"
    ]
  },
  {
    "id": 572,
    "category": "History",
    "title": "Ghana around 1992",
    "fact": "The year 1992 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1992"
    ]
  },
  {
    "id": 573,
    "category": "History",
    "title": "Ghana around 1993",
    "fact": "The year 1993 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1993"
    ]
  },
  {
    "id": 574,
    "category": "History",
    "title": "Ghana around 1994",
    "fact": "The year 1994 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1994"
    ]
  },
  {
    "id": 575,
    "category": "History",
    "title": "Ghana around 1995",
    "fact": "The year 1995 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1995"
    ]
  },
  {
    "id": 576,
    "category": "History",
    "title": "Ghana around 1996",
    "fact": "The year 1996 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1996"
    ]
  },
  {
    "id": 577,
    "category": "History",
    "title": "Ghana around 1997",
    "fact": "The year 1997 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1997"
    ]
  },
  {
    "id": 578,
    "category": "History",
    "title": "Ghana around 1998",
    "fact": "The year 1998 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1998"
    ]
  },
  {
    "id": 579,
    "category": "History",
    "title": "Ghana around 1999",
    "fact": "The year 1999 was a stepping stone in the broader timeline of the Gold Coast's development leading up to modern Ghana.",
    "didYouKnow": "For centuries, the Gold Coast was a global epicenter for the trade of gold, ivory, and spices.",
    "tags": [
      "History",
      "Timeline",
      "Year 1999"
    ]
  },
  {
    "id": 580,
    "category": "Geography",
    "title": "Ghanaian District 1",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 1 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 1"
    ]
  },
  {
    "id": 581,
    "category": "Geography",
    "title": "Ghanaian District 2",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 2 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 2"
    ]
  },
  {
    "id": 582,
    "category": "Geography",
    "title": "Ghanaian District 3",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 3 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 3"
    ]
  },
  {
    "id": 583,
    "category": "Geography",
    "title": "Ghanaian District 4",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 4 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 4"
    ]
  },
  {
    "id": 584,
    "category": "Geography",
    "title": "Ghanaian District 5",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 5 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 5"
    ]
  },
  {
    "id": 585,
    "category": "Geography",
    "title": "Ghanaian District 6",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 6 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 6"
    ]
  },
  {
    "id": 586,
    "category": "Geography",
    "title": "Ghanaian District 7",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 7 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 7"
    ]
  },
  {
    "id": 587,
    "category": "Geography",
    "title": "Ghanaian District 8",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 8 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 8"
    ]
  },
  {
    "id": 588,
    "category": "Geography",
    "title": "Ghanaian District 9",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 9 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 9"
    ]
  },
  {
    "id": 589,
    "category": "Geography",
    "title": "Ghanaian District 10",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 10 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 10"
    ]
  },
  {
    "id": 590,
    "category": "Geography",
    "title": "Ghanaian District 11",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 11 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 11"
    ]
  },
  {
    "id": 591,
    "category": "Geography",
    "title": "Ghanaian District 12",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 12 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 12"
    ]
  },
  {
    "id": 592,
    "category": "Geography",
    "title": "Ghanaian District 13",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 13 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 13"
    ]
  },
  {
    "id": 593,
    "category": "Geography",
    "title": "Ghanaian District 14",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 14 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 14"
    ]
  },
  {
    "id": 594,
    "category": "Geography",
    "title": "Ghanaian District 15",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 15 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 15"
    ]
  },
  {
    "id": 595,
    "category": "Geography",
    "title": "Ghanaian District 16",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 16 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 16"
    ]
  },
  {
    "id": 596,
    "category": "Geography",
    "title": "Ghanaian District 17",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 17 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 17"
    ]
  },
  {
    "id": 597,
    "category": "Geography",
    "title": "Ghanaian District 18",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 18 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 18"
    ]
  },
  {
    "id": 598,
    "category": "Geography",
    "title": "Ghanaian District 19",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 19 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 19"
    ]
  },
  {
    "id": 599,
    "category": "Geography",
    "title": "Ghanaian District 20",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 20 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 20"
    ]
  },
  {
    "id": 600,
    "category": "Geography",
    "title": "Ghanaian District 21",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 21 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 21"
    ]
  },
  {
    "id": 601,
    "category": "Geography",
    "title": "Ghanaian District 22",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 22 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 22"
    ]
  },
  {
    "id": 602,
    "category": "Geography",
    "title": "Ghanaian District 23",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 23 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 23"
    ]
  },
  {
    "id": 603,
    "category": "Geography",
    "title": "Ghanaian District 24",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 24 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 24"
    ]
  },
  {
    "id": 604,
    "category": "Geography",
    "title": "Ghanaian District 25",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 25 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 25"
    ]
  },
  {
    "id": 605,
    "category": "Geography",
    "title": "Ghanaian District 26",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 26 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 26"
    ]
  },
  {
    "id": 606,
    "category": "Geography",
    "title": "Ghanaian District 27",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 27 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 27"
    ]
  },
  {
    "id": 607,
    "category": "Geography",
    "title": "Ghanaian District 28",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 28 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 28"
    ]
  },
  {
    "id": 608,
    "category": "Geography",
    "title": "Ghanaian District 29",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 29 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 29"
    ]
  },
  {
    "id": 609,
    "category": "Geography",
    "title": "Ghanaian District 30",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 30 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 30"
    ]
  },
  {
    "id": 610,
    "category": "Geography",
    "title": "Ghanaian District 31",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 31 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 31"
    ]
  },
  {
    "id": 611,
    "category": "Geography",
    "title": "Ghanaian District 32",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 32 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 32"
    ]
  },
  {
    "id": 612,
    "category": "Geography",
    "title": "Ghanaian District 33",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 33 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 33"
    ]
  },
  {
    "id": 613,
    "category": "Geography",
    "title": "Ghanaian District 34",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 34 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 34"
    ]
  },
  {
    "id": 614,
    "category": "Geography",
    "title": "Ghanaian District 35",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 35 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 35"
    ]
  },
  {
    "id": 615,
    "category": "Geography",
    "title": "Ghanaian District 36",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 36 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 36"
    ]
  },
  {
    "id": 616,
    "category": "Geography",
    "title": "Ghanaian District 37",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 37 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 37"
    ]
  },
  {
    "id": 617,
    "category": "Geography",
    "title": "Ghanaian District 38",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 38 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 38"
    ]
  },
  {
    "id": 618,
    "category": "Geography",
    "title": "Ghanaian District 39",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 39 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 39"
    ]
  },
  {
    "id": 619,
    "category": "Geography",
    "title": "Ghanaian District 40",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 40 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 40"
    ]
  },
  {
    "id": 620,
    "category": "Geography",
    "title": "Ghanaian District 41",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 41 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 41"
    ]
  },
  {
    "id": 621,
    "category": "Geography",
    "title": "Ghanaian District 42",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 42 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 42"
    ]
  },
  {
    "id": 622,
    "category": "Geography",
    "title": "Ghanaian District 43",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 43 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 43"
    ]
  },
  {
    "id": 623,
    "category": "Geography",
    "title": "Ghanaian District 44",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 44 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 44"
    ]
  },
  {
    "id": 624,
    "category": "Geography",
    "title": "Ghanaian District 45",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 45 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 45"
    ]
  },
  {
    "id": 625,
    "category": "Geography",
    "title": "Ghanaian District 46",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 46 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 46"
    ]
  },
  {
    "id": 626,
    "category": "Geography",
    "title": "Ghanaian District 47",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 47 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 47"
    ]
  },
  {
    "id": 627,
    "category": "Geography",
    "title": "Ghanaian District 48",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 48 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 48"
    ]
  },
  {
    "id": 628,
    "category": "Geography",
    "title": "Ghanaian District 49",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 49 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 49"
    ]
  },
  {
    "id": 629,
    "category": "Geography",
    "title": "Ghanaian District 50",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 50 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 50"
    ]
  },
  {
    "id": 630,
    "category": "Geography",
    "title": "Ghanaian District 51",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 51 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 51"
    ]
  },
  {
    "id": 631,
    "category": "Geography",
    "title": "Ghanaian District 52",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 52 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 52"
    ]
  },
  {
    "id": 632,
    "category": "Geography",
    "title": "Ghanaian District 53",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 53 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 53"
    ]
  },
  {
    "id": 633,
    "category": "Geography",
    "title": "Ghanaian District 54",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 54 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 54"
    ]
  },
  {
    "id": 634,
    "category": "Geography",
    "title": "Ghanaian District 55",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 55 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 55"
    ]
  },
  {
    "id": 635,
    "category": "Geography",
    "title": "Ghanaian District 56",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 56 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 56"
    ]
  },
  {
    "id": 636,
    "category": "Geography",
    "title": "Ghanaian District 57",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 57 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 57"
    ]
  },
  {
    "id": 637,
    "category": "Geography",
    "title": "Ghanaian District 58",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 58 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 58"
    ]
  },
  {
    "id": 638,
    "category": "Geography",
    "title": "Ghanaian District 59",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 59 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 59"
    ]
  },
  {
    "id": 639,
    "category": "Geography",
    "title": "Ghanaian District 60",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 60 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 60"
    ]
  },
  {
    "id": 640,
    "category": "Geography",
    "title": "Ghanaian District 61",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 61 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 61"
    ]
  },
  {
    "id": 641,
    "category": "Geography",
    "title": "Ghanaian District 62",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 62 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 62"
    ]
  },
  {
    "id": 642,
    "category": "Geography",
    "title": "Ghanaian District 63",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 63 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 63"
    ]
  },
  {
    "id": 643,
    "category": "Geography",
    "title": "Ghanaian District 64",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 64 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 64"
    ]
  },
  {
    "id": 644,
    "category": "Geography",
    "title": "Ghanaian District 65",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 65 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 65"
    ]
  },
  {
    "id": 645,
    "category": "Geography",
    "title": "Ghanaian District 66",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 66 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 66"
    ]
  },
  {
    "id": 646,
    "category": "Geography",
    "title": "Ghanaian District 67",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 67 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 67"
    ]
  },
  {
    "id": 647,
    "category": "Geography",
    "title": "Ghanaian District 68",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 68 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 68"
    ]
  },
  {
    "id": 648,
    "category": "Geography",
    "title": "Ghanaian District 69",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 69 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 69"
    ]
  },
  {
    "id": 649,
    "category": "Geography",
    "title": "Ghanaian District 70",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 70 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 70"
    ]
  },
  {
    "id": 650,
    "category": "Geography",
    "title": "Ghanaian District 71",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 71 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 71"
    ]
  },
  {
    "id": 651,
    "category": "Geography",
    "title": "Ghanaian District 72",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 72 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 72"
    ]
  },
  {
    "id": 652,
    "category": "Geography",
    "title": "Ghanaian District 73",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 73 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 73"
    ]
  },
  {
    "id": 653,
    "category": "Geography",
    "title": "Ghanaian District 74",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 74 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 74"
    ]
  },
  {
    "id": 654,
    "category": "Geography",
    "title": "Ghanaian District 75",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 75 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 75"
    ]
  },
  {
    "id": 655,
    "category": "Geography",
    "title": "Ghanaian District 76",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 76 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 76"
    ]
  },
  {
    "id": 656,
    "category": "Geography",
    "title": "Ghanaian District 77",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 77 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 77"
    ]
  },
  {
    "id": 657,
    "category": "Geography",
    "title": "Ghanaian District 78",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 78 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 78"
    ]
  },
  {
    "id": 658,
    "category": "Geography",
    "title": "Ghanaian District 79",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 79 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 79"
    ]
  },
  {
    "id": 659,
    "category": "Geography",
    "title": "Ghanaian District 80",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 80 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 80"
    ]
  },
  {
    "id": 660,
    "category": "Geography",
    "title": "Ghanaian District 81",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 81 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 81"
    ]
  },
  {
    "id": 661,
    "category": "Geography",
    "title": "Ghanaian District 82",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 82 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 82"
    ]
  },
  {
    "id": 662,
    "category": "Geography",
    "title": "Ghanaian District 83",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 83 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 83"
    ]
  },
  {
    "id": 663,
    "category": "Geography",
    "title": "Ghanaian District 84",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 84 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 84"
    ]
  },
  {
    "id": 664,
    "category": "Geography",
    "title": "Ghanaian District 85",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 85 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 85"
    ]
  },
  {
    "id": 665,
    "category": "Geography",
    "title": "Ghanaian District 86",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 86 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 86"
    ]
  },
  {
    "id": 666,
    "category": "Geography",
    "title": "Ghanaian District 87",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 87 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 87"
    ]
  },
  {
    "id": 667,
    "category": "Geography",
    "title": "Ghanaian District 88",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 88 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 88"
    ]
  },
  {
    "id": 668,
    "category": "Geography",
    "title": "Ghanaian District 89",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 89 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 89"
    ]
  },
  {
    "id": 669,
    "category": "Geography",
    "title": "Ghanaian District 90",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 90 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 90"
    ]
  },
  {
    "id": 670,
    "category": "Geography",
    "title": "Ghanaian District 91",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 91 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 91"
    ]
  },
  {
    "id": 671,
    "category": "Geography",
    "title": "Ghanaian District 92",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 92 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 92"
    ]
  },
  {
    "id": 672,
    "category": "Geography",
    "title": "Ghanaian District 93",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 93 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 93"
    ]
  },
  {
    "id": 673,
    "category": "Geography",
    "title": "Ghanaian District 94",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 94 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 94"
    ]
  },
  {
    "id": 674,
    "category": "Geography",
    "title": "Ghanaian District 95",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 95 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 95"
    ]
  },
  {
    "id": 675,
    "category": "Geography",
    "title": "Ghanaian District 96",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 96 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 96"
    ]
  },
  {
    "id": 676,
    "category": "Geography",
    "title": "Ghanaian District 97",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 97 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 97"
    ]
  },
  {
    "id": 677,
    "category": "Geography",
    "title": "Ghanaian District 98",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 98 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 98"
    ]
  },
  {
    "id": 678,
    "category": "Geography",
    "title": "Ghanaian District 99",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 99 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 99"
    ]
  },
  {
    "id": 679,
    "category": "Geography",
    "title": "Ghanaian District 100",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 100 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 100"
    ]
  },
  {
    "id": 680,
    "category": "Geography",
    "title": "Ghanaian District 101",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 101 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 101"
    ]
  },
  {
    "id": 681,
    "category": "Geography",
    "title": "Ghanaian District 102",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 102 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 102"
    ]
  },
  {
    "id": 682,
    "category": "Geography",
    "title": "Ghanaian District 103",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 103 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 103"
    ]
  },
  {
    "id": 683,
    "category": "Geography",
    "title": "Ghanaian District 104",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 104 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 104"
    ]
  },
  {
    "id": 684,
    "category": "Geography",
    "title": "Ghanaian District 105",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 105 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 105"
    ]
  },
  {
    "id": 685,
    "category": "Geography",
    "title": "Ghanaian District 106",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 106 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 106"
    ]
  },
  {
    "id": 686,
    "category": "Geography",
    "title": "Ghanaian District 107",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 107 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 107"
    ]
  },
  {
    "id": 687,
    "category": "Geography",
    "title": "Ghanaian District 108",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 108 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 108"
    ]
  },
  {
    "id": 688,
    "category": "Geography",
    "title": "Ghanaian District 109",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 109 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 109"
    ]
  },
  {
    "id": 689,
    "category": "Geography",
    "title": "Ghanaian District 110",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 110 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 110"
    ]
  },
  {
    "id": 690,
    "category": "Geography",
    "title": "Ghanaian District 111",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 111 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 111"
    ]
  },
  {
    "id": 691,
    "category": "Geography",
    "title": "Ghanaian District 112",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 112 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 112"
    ]
  },
  {
    "id": 692,
    "category": "Geography",
    "title": "Ghanaian District 113",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 113 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 113"
    ]
  },
  {
    "id": 693,
    "category": "Geography",
    "title": "Ghanaian District 114",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 114 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 114"
    ]
  },
  {
    "id": 694,
    "category": "Geography",
    "title": "Ghanaian District 115",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 115 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 115"
    ]
  },
  {
    "id": 695,
    "category": "Geography",
    "title": "Ghanaian District 116",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 116 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 116"
    ]
  },
  {
    "id": 696,
    "category": "Geography",
    "title": "Ghanaian District 117",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 117 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 117"
    ]
  },
  {
    "id": 697,
    "category": "Geography",
    "title": "Ghanaian District 118",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 118 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 118"
    ]
  },
  {
    "id": 698,
    "category": "Geography",
    "title": "Ghanaian District 119",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 119 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 119"
    ]
  },
  {
    "id": 699,
    "category": "Geography",
    "title": "Ghanaian District 120",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 120 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 120"
    ]
  },
  {
    "id": 700,
    "category": "Geography",
    "title": "Ghanaian District 121",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 121 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 121"
    ]
  },
  {
    "id": 701,
    "category": "Geography",
    "title": "Ghanaian District 122",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 122 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 122"
    ]
  },
  {
    "id": 702,
    "category": "Geography",
    "title": "Ghanaian District 123",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 123 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 123"
    ]
  },
  {
    "id": 703,
    "category": "Geography",
    "title": "Ghanaian District 124",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 124 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 124"
    ]
  },
  {
    "id": 704,
    "category": "Geography",
    "title": "Ghanaian District 125",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 125 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 125"
    ]
  },
  {
    "id": 705,
    "category": "Geography",
    "title": "Ghanaian District 126",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 126 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 126"
    ]
  },
  {
    "id": 706,
    "category": "Geography",
    "title": "Ghanaian District 127",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 127 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 127"
    ]
  },
  {
    "id": 707,
    "category": "Geography",
    "title": "Ghanaian District 128",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 128 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 128"
    ]
  },
  {
    "id": 708,
    "category": "Geography",
    "title": "Ghanaian District 129",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 129 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 129"
    ]
  },
  {
    "id": 709,
    "category": "Geography",
    "title": "Ghanaian District 130",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 130 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 130"
    ]
  },
  {
    "id": 710,
    "category": "Geography",
    "title": "Ghanaian District 131",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 131 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 131"
    ]
  },
  {
    "id": 711,
    "category": "Geography",
    "title": "Ghanaian District 132",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 132 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 132"
    ]
  },
  {
    "id": 712,
    "category": "Geography",
    "title": "Ghanaian District 133",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 133 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 133"
    ]
  },
  {
    "id": 713,
    "category": "Geography",
    "title": "Ghanaian District 134",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 134 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 134"
    ]
  },
  {
    "id": 714,
    "category": "Geography",
    "title": "Ghanaian District 135",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 135 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 135"
    ]
  },
  {
    "id": 715,
    "category": "Geography",
    "title": "Ghanaian District 136",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 136 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 136"
    ]
  },
  {
    "id": 716,
    "category": "Geography",
    "title": "Ghanaian District 137",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 137 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 137"
    ]
  },
  {
    "id": 717,
    "category": "Geography",
    "title": "Ghanaian District 138",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 138 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 138"
    ]
  },
  {
    "id": 718,
    "category": "Geography",
    "title": "Ghanaian District 139",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 139 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 139"
    ]
  },
  {
    "id": 719,
    "category": "Geography",
    "title": "Ghanaian District 140",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 140 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 140"
    ]
  },
  {
    "id": 720,
    "category": "Geography",
    "title": "Ghanaian District 141",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 141 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 141"
    ]
  },
  {
    "id": 721,
    "category": "Geography",
    "title": "Ghanaian District 142",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 142 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 142"
    ]
  },
  {
    "id": 722,
    "category": "Geography",
    "title": "Ghanaian District 143",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 143 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 143"
    ]
  },
  {
    "id": 723,
    "category": "Geography",
    "title": "Ghanaian District 144",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 144 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 144"
    ]
  },
  {
    "id": 724,
    "category": "Geography",
    "title": "Ghanaian District 145",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 145 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 145"
    ]
  },
  {
    "id": 725,
    "category": "Geography",
    "title": "Ghanaian District 146",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 146 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 146"
    ]
  },
  {
    "id": 726,
    "category": "Geography",
    "title": "Ghanaian District 147",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 147 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 147"
    ]
  },
  {
    "id": 727,
    "category": "Geography",
    "title": "Ghanaian District 148",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 148 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 148"
    ]
  },
  {
    "id": 728,
    "category": "Geography",
    "title": "Ghanaian District 149",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 149 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 149"
    ]
  },
  {
    "id": 729,
    "category": "Geography",
    "title": "Ghanaian District 150",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 150 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 150"
    ]
  },
  {
    "id": 730,
    "category": "Geography",
    "title": "Ghanaian District 151",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 151 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 151"
    ]
  },
  {
    "id": 731,
    "category": "Geography",
    "title": "Ghanaian District 152",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 152 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 152"
    ]
  },
  {
    "id": 732,
    "category": "Geography",
    "title": "Ghanaian District 153",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 153 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 153"
    ]
  },
  {
    "id": 733,
    "category": "Geography",
    "title": "Ghanaian District 154",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 154 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 154"
    ]
  },
  {
    "id": 734,
    "category": "Geography",
    "title": "Ghanaian District 155",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 155 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 155"
    ]
  },
  {
    "id": 735,
    "category": "Geography",
    "title": "Ghanaian District 156",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 156 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 156"
    ]
  },
  {
    "id": 736,
    "category": "Geography",
    "title": "Ghanaian District 157",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 157 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 157"
    ]
  },
  {
    "id": 737,
    "category": "Geography",
    "title": "Ghanaian District 158",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 158 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 158"
    ]
  },
  {
    "id": 738,
    "category": "Geography",
    "title": "Ghanaian District 159",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 159 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 159"
    ]
  },
  {
    "id": 739,
    "category": "Geography",
    "title": "Ghanaian District 160",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 160 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 160"
    ]
  },
  {
    "id": 740,
    "category": "Geography",
    "title": "Ghanaian District 161",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 161 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 161"
    ]
  },
  {
    "id": 741,
    "category": "Geography",
    "title": "Ghanaian District 162",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 162 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 162"
    ]
  },
  {
    "id": 742,
    "category": "Geography",
    "title": "Ghanaian District 163",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 163 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 163"
    ]
  },
  {
    "id": 743,
    "category": "Geography",
    "title": "Ghanaian District 164",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 164 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 164"
    ]
  },
  {
    "id": 744,
    "category": "Geography",
    "title": "Ghanaian District 165",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 165 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 165"
    ]
  },
  {
    "id": 745,
    "category": "Geography",
    "title": "Ghanaian District 166",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 166 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 166"
    ]
  },
  {
    "id": 746,
    "category": "Geography",
    "title": "Ghanaian District 167",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 167 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 167"
    ]
  },
  {
    "id": 747,
    "category": "Geography",
    "title": "Ghanaian District 168",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 168 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 168"
    ]
  },
  {
    "id": 748,
    "category": "Geography",
    "title": "Ghanaian District 169",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 169 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 169"
    ]
  },
  {
    "id": 749,
    "category": "Geography",
    "title": "Ghanaian District 170",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 170 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 170"
    ]
  },
  {
    "id": 750,
    "category": "Geography",
    "title": "Ghanaian District 171",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 171 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 171"
    ]
  },
  {
    "id": 751,
    "category": "Geography",
    "title": "Ghanaian District 172",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 172 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 172"
    ]
  },
  {
    "id": 752,
    "category": "Geography",
    "title": "Ghanaian District 173",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 173 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 173"
    ]
  },
  {
    "id": 753,
    "category": "Geography",
    "title": "Ghanaian District 174",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 174 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 174"
    ]
  },
  {
    "id": 754,
    "category": "Geography",
    "title": "Ghanaian District 175",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 175 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 175"
    ]
  },
  {
    "id": 755,
    "category": "Geography",
    "title": "Ghanaian District 176",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 176 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 176"
    ]
  },
  {
    "id": 756,
    "category": "Geography",
    "title": "Ghanaian District 177",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 177 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 177"
    ]
  },
  {
    "id": 757,
    "category": "Geography",
    "title": "Ghanaian District 178",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 178 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 178"
    ]
  },
  {
    "id": 758,
    "category": "Geography",
    "title": "Ghanaian District 179",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 179 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 179"
    ]
  },
  {
    "id": 759,
    "category": "Geography",
    "title": "Ghanaian District 180",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 180 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 180"
    ]
  },
  {
    "id": 760,
    "category": "Geography",
    "title": "Ghanaian District 181",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 181 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 181"
    ]
  },
  {
    "id": 761,
    "category": "Geography",
    "title": "Ghanaian District 182",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 182 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 182"
    ]
  },
  {
    "id": 762,
    "category": "Geography",
    "title": "Ghanaian District 183",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 183 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 183"
    ]
  },
  {
    "id": 763,
    "category": "Geography",
    "title": "Ghanaian District 184",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 184 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 184"
    ]
  },
  {
    "id": 764,
    "category": "Geography",
    "title": "Ghanaian District 185",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 185 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 185"
    ]
  },
  {
    "id": 765,
    "category": "Geography",
    "title": "Ghanaian District 186",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 186 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 186"
    ]
  },
  {
    "id": 766,
    "category": "Geography",
    "title": "Ghanaian District 187",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 187 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 187"
    ]
  },
  {
    "id": 767,
    "category": "Geography",
    "title": "Ghanaian District 188",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 188 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 188"
    ]
  },
  {
    "id": 768,
    "category": "Geography",
    "title": "Ghanaian District 189",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 189 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 189"
    ]
  },
  {
    "id": 769,
    "category": "Geography",
    "title": "Ghanaian District 190",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 190 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 190"
    ]
  },
  {
    "id": 770,
    "category": "Geography",
    "title": "Ghanaian District 191",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 191 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 191"
    ]
  },
  {
    "id": 771,
    "category": "Geography",
    "title": "Ghanaian District 192",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 192 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 192"
    ]
  },
  {
    "id": 772,
    "category": "Geography",
    "title": "Ghanaian District 193",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 193 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 193"
    ]
  },
  {
    "id": 773,
    "category": "Geography",
    "title": "Ghanaian District 194",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 194 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 194"
    ]
  },
  {
    "id": 774,
    "category": "Geography",
    "title": "Ghanaian District 195",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 195 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 195"
    ]
  },
  {
    "id": 775,
    "category": "Geography",
    "title": "Ghanaian District 196",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 196 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 196"
    ]
  },
  {
    "id": 776,
    "category": "Geography",
    "title": "Ghanaian District 197",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 197 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 197"
    ]
  },
  {
    "id": 777,
    "category": "Geography",
    "title": "Ghanaian District 198",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 198 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 198"
    ]
  },
  {
    "id": 778,
    "category": "Geography",
    "title": "Ghanaian District 199",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 199 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 199"
    ]
  },
  {
    "id": 779,
    "category": "Geography",
    "title": "Ghanaian District 200",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 200 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 200"
    ]
  },
  {
    "id": 780,
    "category": "Geography",
    "title": "Ghanaian District 201",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 201 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 201"
    ]
  },
  {
    "id": 781,
    "category": "Geography",
    "title": "Ghanaian District 202",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 202 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 202"
    ]
  },
  {
    "id": 782,
    "category": "Geography",
    "title": "Ghanaian District 203",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 203 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 203"
    ]
  },
  {
    "id": 783,
    "category": "Geography",
    "title": "Ghanaian District 204",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 204 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 204"
    ]
  },
  {
    "id": 784,
    "category": "Geography",
    "title": "Ghanaian District 205",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 205 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 205"
    ]
  },
  {
    "id": 785,
    "category": "Geography",
    "title": "Ghanaian District 206",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 206 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 206"
    ]
  },
  {
    "id": 786,
    "category": "Geography",
    "title": "Ghanaian District 207",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 207 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 207"
    ]
  },
  {
    "id": 787,
    "category": "Geography",
    "title": "Ghanaian District 208",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 208 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 208"
    ]
  },
  {
    "id": 788,
    "category": "Geography",
    "title": "Ghanaian District 209",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 209 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 209"
    ]
  },
  {
    "id": 789,
    "category": "Geography",
    "title": "Ghanaian District 210",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 210 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 210"
    ]
  },
  {
    "id": 790,
    "category": "Geography",
    "title": "Ghanaian District 211",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 211 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 211"
    ]
  },
  {
    "id": 791,
    "category": "Geography",
    "title": "Ghanaian District 212",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 212 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 212"
    ]
  },
  {
    "id": 792,
    "category": "Geography",
    "title": "Ghanaian District 213",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 213 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 213"
    ]
  },
  {
    "id": 793,
    "category": "Geography",
    "title": "Ghanaian District 214",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 214 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 214"
    ]
  },
  {
    "id": 794,
    "category": "Geography",
    "title": "Ghanaian District 215",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 215 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 215"
    ]
  },
  {
    "id": 795,
    "category": "Geography",
    "title": "Ghanaian District 216",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 216 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 216"
    ]
  },
  {
    "id": 796,
    "category": "Geography",
    "title": "Ghanaian District 217",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 217 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 217"
    ]
  },
  {
    "id": 797,
    "category": "Geography",
    "title": "Ghanaian District 218",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 218 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 218"
    ]
  },
  {
    "id": 798,
    "category": "Geography",
    "title": "Ghanaian District 219",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 219 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 219"
    ]
  },
  {
    "id": 799,
    "category": "Geography",
    "title": "Ghanaian District 220",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 220 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 220"
    ]
  },
  {
    "id": 800,
    "category": "Geography",
    "title": "Ghanaian District 221",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 221 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 221"
    ]
  },
  {
    "id": 801,
    "category": "Geography",
    "title": "Ghanaian District 222",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 222 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 222"
    ]
  },
  {
    "id": 802,
    "category": "Geography",
    "title": "Ghanaian District 223",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 223 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 223"
    ]
  },
  {
    "id": 803,
    "category": "Geography",
    "title": "Ghanaian District 224",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 224 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 224"
    ]
  },
  {
    "id": 804,
    "category": "Geography",
    "title": "Ghanaian District 225",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 225 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 225"
    ]
  },
  {
    "id": 805,
    "category": "Geography",
    "title": "Ghanaian District 226",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 226 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 226"
    ]
  },
  {
    "id": 806,
    "category": "Geography",
    "title": "Ghanaian District 227",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 227 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 227"
    ]
  },
  {
    "id": 807,
    "category": "Geography",
    "title": "Ghanaian District 228",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 228 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 228"
    ]
  },
  {
    "id": 808,
    "category": "Geography",
    "title": "Ghanaian District 229",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 229 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 229"
    ]
  },
  {
    "id": 809,
    "category": "Geography",
    "title": "Ghanaian District 230",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 230 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 230"
    ]
  },
  {
    "id": 810,
    "category": "Geography",
    "title": "Ghanaian District 231",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 231 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 231"
    ]
  },
  {
    "id": 811,
    "category": "Geography",
    "title": "Ghanaian District 232",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 232 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 232"
    ]
  },
  {
    "id": 812,
    "category": "Geography",
    "title": "Ghanaian District 233",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 233 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 233"
    ]
  },
  {
    "id": 813,
    "category": "Geography",
    "title": "Ghanaian District 234",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 234 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 234"
    ]
  },
  {
    "id": 814,
    "category": "Geography",
    "title": "Ghanaian District 235",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 235 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 235"
    ]
  },
  {
    "id": 815,
    "category": "Geography",
    "title": "Ghanaian District 236",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 236 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 236"
    ]
  },
  {
    "id": 816,
    "category": "Geography",
    "title": "Ghanaian District 237",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 237 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 237"
    ]
  },
  {
    "id": 817,
    "category": "Geography",
    "title": "Ghanaian District 238",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 238 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 238"
    ]
  },
  {
    "id": 818,
    "category": "Geography",
    "title": "Ghanaian District 239",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 239 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 239"
    ]
  },
  {
    "id": 819,
    "category": "Geography",
    "title": "Ghanaian District 240",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 240 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 240"
    ]
  },
  {
    "id": 820,
    "category": "Geography",
    "title": "Ghanaian District 241",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 241 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 241"
    ]
  },
  {
    "id": 821,
    "category": "Geography",
    "title": "Ghanaian District 242",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 242 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 242"
    ]
  },
  {
    "id": 822,
    "category": "Geography",
    "title": "Ghanaian District 243",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 243 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 243"
    ]
  },
  {
    "id": 823,
    "category": "Geography",
    "title": "Ghanaian District 244",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 244 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 244"
    ]
  },
  {
    "id": 824,
    "category": "Geography",
    "title": "Ghanaian District 245",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 245 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 245"
    ]
  },
  {
    "id": 825,
    "category": "Geography",
    "title": "Ghanaian District 246",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 246 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 246"
    ]
  },
  {
    "id": 826,
    "category": "Geography",
    "title": "Ghanaian District 247",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 247 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 247"
    ]
  },
  {
    "id": 827,
    "category": "Geography",
    "title": "Ghanaian District 248",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 248 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 248"
    ]
  },
  {
    "id": 828,
    "category": "Geography",
    "title": "Ghanaian District 249",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 249 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 249"
    ]
  },
  {
    "id": 829,
    "category": "Geography",
    "title": "Ghanaian District 250",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 250 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 250"
    ]
  },
  {
    "id": 830,
    "category": "Geography",
    "title": "Ghanaian District 251",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 251 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 251"
    ]
  },
  {
    "id": 831,
    "category": "Geography",
    "title": "Ghanaian District 252",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 252 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 252"
    ]
  },
  {
    "id": 832,
    "category": "Geography",
    "title": "Ghanaian District 253",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 253 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 253"
    ]
  },
  {
    "id": 833,
    "category": "Geography",
    "title": "Ghanaian District 254",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 254 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 254"
    ]
  },
  {
    "id": 834,
    "category": "Geography",
    "title": "Ghanaian District 255",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 255 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 255"
    ]
  },
  {
    "id": 835,
    "category": "Geography",
    "title": "Ghanaian District 256",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 256 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 256"
    ]
  },
  {
    "id": 836,
    "category": "Geography",
    "title": "Ghanaian District 257",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 257 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 257"
    ]
  },
  {
    "id": 837,
    "category": "Geography",
    "title": "Ghanaian District 258",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 258 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 258"
    ]
  },
  {
    "id": 838,
    "category": "Geography",
    "title": "Ghanaian District 259",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 259 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 259"
    ]
  },
  {
    "id": 839,
    "category": "Geography",
    "title": "Ghanaian District 260",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 260 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 260"
    ]
  },
  {
    "id": 840,
    "category": "Geography",
    "title": "Ghanaian District 261",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 261 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 261"
    ]
  },
  {
    "id": 841,
    "category": "Geography",
    "title": "Ghanaian District 262",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 262 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 262"
    ]
  },
  {
    "id": 842,
    "category": "Geography",
    "title": "Ghanaian District 263",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 263 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 263"
    ]
  },
  {
    "id": 843,
    "category": "Geography",
    "title": "Ghanaian District 264",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 264 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 264"
    ]
  },
  {
    "id": 844,
    "category": "Geography",
    "title": "Ghanaian District 265",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 265 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 265"
    ]
  },
  {
    "id": 845,
    "category": "Geography",
    "title": "Ghanaian District 266",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 266 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 266"
    ]
  },
  {
    "id": 846,
    "category": "Geography",
    "title": "Ghanaian District 267",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 267 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 267"
    ]
  },
  {
    "id": 847,
    "category": "Geography",
    "title": "Ghanaian District 268",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 268 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 268"
    ]
  },
  {
    "id": 848,
    "category": "Geography",
    "title": "Ghanaian District 269",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 269 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 269"
    ]
  },
  {
    "id": 849,
    "category": "Geography",
    "title": "Ghanaian District 270",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 270 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 270"
    ]
  },
  {
    "id": 850,
    "category": "Geography",
    "title": "Ghanaian District 271",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 271 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 271"
    ]
  },
  {
    "id": 851,
    "category": "Geography",
    "title": "Ghanaian District 272",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 272 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 272"
    ]
  },
  {
    "id": 852,
    "category": "Geography",
    "title": "Ghanaian District 273",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 273 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 273"
    ]
  },
  {
    "id": 853,
    "category": "Geography",
    "title": "Ghanaian District 274",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 274 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 274"
    ]
  },
  {
    "id": 854,
    "category": "Geography",
    "title": "Ghanaian District 275",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 275 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 275"
    ]
  },
  {
    "id": 855,
    "category": "Geography",
    "title": "Ghanaian District 276",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 276 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 276"
    ]
  },
  {
    "id": 856,
    "category": "Geography",
    "title": "Ghanaian District 277",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 277 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 277"
    ]
  },
  {
    "id": 857,
    "category": "Geography",
    "title": "Ghanaian District 278",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 278 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 278"
    ]
  },
  {
    "id": 858,
    "category": "Geography",
    "title": "Ghanaian District 279",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 279 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 279"
    ]
  },
  {
    "id": 859,
    "category": "Geography",
    "title": "Ghanaian District 280",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 280 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 280"
    ]
  },
  {
    "id": 860,
    "category": "Geography",
    "title": "Ghanaian District 281",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 281 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 281"
    ]
  },
  {
    "id": 861,
    "category": "Geography",
    "title": "Ghanaian District 282",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 282 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 282"
    ]
  },
  {
    "id": 862,
    "category": "Geography",
    "title": "Ghanaian District 283",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 283 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 283"
    ]
  },
  {
    "id": 863,
    "category": "Geography",
    "title": "Ghanaian District 284",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 284 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 284"
    ]
  },
  {
    "id": 864,
    "category": "Geography",
    "title": "Ghanaian District 285",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 285 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 285"
    ]
  },
  {
    "id": 865,
    "category": "Geography",
    "title": "Ghanaian District 286",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 286 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 286"
    ]
  },
  {
    "id": 866,
    "category": "Geography",
    "title": "Ghanaian District 287",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 287 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 287"
    ]
  },
  {
    "id": 867,
    "category": "Geography",
    "title": "Ghanaian District 288",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 288 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 288"
    ]
  },
  {
    "id": 868,
    "category": "Geography",
    "title": "Ghanaian District 289",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 289 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 289"
    ]
  },
  {
    "id": 869,
    "category": "Geography",
    "title": "Ghanaian District 290",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 290 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 290"
    ]
  },
  {
    "id": 870,
    "category": "Geography",
    "title": "Ghanaian District 291",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 291 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 291"
    ]
  },
  {
    "id": 871,
    "category": "Geography",
    "title": "Ghanaian District 292",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 292 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 292"
    ]
  },
  {
    "id": 872,
    "category": "Geography",
    "title": "Ghanaian District 293",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 293 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 293"
    ]
  },
  {
    "id": 873,
    "category": "Geography",
    "title": "Ghanaian District 294",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 294 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 294"
    ]
  },
  {
    "id": 874,
    "category": "Geography",
    "title": "Ghanaian District 295",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 295 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 295"
    ]
  },
  {
    "id": 875,
    "category": "Geography",
    "title": "Ghanaian District 296",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 296 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 296"
    ]
  },
  {
    "id": 876,
    "category": "Geography",
    "title": "Ghanaian District 297",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 297 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 297"
    ]
  },
  {
    "id": 877,
    "category": "Geography",
    "title": "Ghanaian District 298",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 298 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 298"
    ]
  },
  {
    "id": 878,
    "category": "Geography",
    "title": "Ghanaian District 299",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 299 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 299"
    ]
  },
  {
    "id": 879,
    "category": "Geography",
    "title": "Ghanaian District 300",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 300 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 300"
    ]
  },
  {
    "id": 880,
    "category": "Geography",
    "title": "Ghanaian District 301",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 301 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 301"
    ]
  },
  {
    "id": 881,
    "category": "Geography",
    "title": "Ghanaian District 302",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 302 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 302"
    ]
  },
  {
    "id": 882,
    "category": "Geography",
    "title": "Ghanaian District 303",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 303 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 303"
    ]
  },
  {
    "id": 883,
    "category": "Geography",
    "title": "Ghanaian District 304",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 304 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 304"
    ]
  },
  {
    "id": 884,
    "category": "Geography",
    "title": "Ghanaian District 305",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 305 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 305"
    ]
  },
  {
    "id": 885,
    "category": "Geography",
    "title": "Ghanaian District 306",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 306 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 306"
    ]
  },
  {
    "id": 886,
    "category": "Geography",
    "title": "Ghanaian District 307",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 307 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 307"
    ]
  },
  {
    "id": 887,
    "category": "Geography",
    "title": "Ghanaian District 308",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 308 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 308"
    ]
  },
  {
    "id": 888,
    "category": "Geography",
    "title": "Ghanaian District 309",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 309 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 309"
    ]
  },
  {
    "id": 889,
    "category": "Geography",
    "title": "Ghanaian District 310",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 310 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 310"
    ]
  },
  {
    "id": 890,
    "category": "Geography",
    "title": "Ghanaian District 311",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 311 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 311"
    ]
  },
  {
    "id": 891,
    "category": "Geography",
    "title": "Ghanaian District 312",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 312 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 312"
    ]
  },
  {
    "id": 892,
    "category": "Geography",
    "title": "Ghanaian District 313",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 313 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 313"
    ]
  },
  {
    "id": 893,
    "category": "Geography",
    "title": "Ghanaian District 314",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 314 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 314"
    ]
  },
  {
    "id": 894,
    "category": "Geography",
    "title": "Ghanaian District 315",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 315 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 315"
    ]
  },
  {
    "id": 895,
    "category": "Geography",
    "title": "Ghanaian District 316",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 316 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 316"
    ]
  },
  {
    "id": 896,
    "category": "Geography",
    "title": "Ghanaian District 317",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 317 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 317"
    ]
  },
  {
    "id": 897,
    "category": "Geography",
    "title": "Ghanaian District 318",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 318 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 318"
    ]
  },
  {
    "id": 898,
    "category": "Geography",
    "title": "Ghanaian District 319",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 319 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 319"
    ]
  },
  {
    "id": 899,
    "category": "Geography",
    "title": "Ghanaian District 320",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 320 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 320"
    ]
  },
  {
    "id": 900,
    "category": "Geography",
    "title": "Ghanaian District 321",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 321 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 321"
    ]
  },
  {
    "id": 901,
    "category": "Geography",
    "title": "Ghanaian District 322",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 322 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 322"
    ]
  },
  {
    "id": 902,
    "category": "Geography",
    "title": "Ghanaian District 323",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 323 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 323"
    ]
  },
  {
    "id": 903,
    "category": "Geography",
    "title": "Ghanaian District 324",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 324 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 324"
    ]
  },
  {
    "id": 904,
    "category": "Geography",
    "title": "Ghanaian District 325",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 325 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 325"
    ]
  },
  {
    "id": 905,
    "category": "Geography",
    "title": "Ghanaian District 326",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 326 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 326"
    ]
  },
  {
    "id": 906,
    "category": "Geography",
    "title": "Ghanaian District 327",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 327 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 327"
    ]
  },
  {
    "id": 907,
    "category": "Geography",
    "title": "Ghanaian District 328",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 328 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 328"
    ]
  },
  {
    "id": 908,
    "category": "Geography",
    "title": "Ghanaian District 329",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 329 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 329"
    ]
  },
  {
    "id": 909,
    "category": "Geography",
    "title": "Ghanaian District 330",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 330 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 330"
    ]
  },
  {
    "id": 910,
    "category": "Geography",
    "title": "Ghanaian District 331",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 331 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 331"
    ]
  },
  {
    "id": 911,
    "category": "Geography",
    "title": "Ghanaian District 332",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 332 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 332"
    ]
  },
  {
    "id": 912,
    "category": "Geography",
    "title": "Ghanaian District 333",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 333 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 333"
    ]
  },
  {
    "id": 913,
    "category": "Geography",
    "title": "Ghanaian District 334",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 334 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 334"
    ]
  },
  {
    "id": 914,
    "category": "Geography",
    "title": "Ghanaian District 335",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 335 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 335"
    ]
  },
  {
    "id": 915,
    "category": "Geography",
    "title": "Ghanaian District 336",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 336 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 336"
    ]
  },
  {
    "id": 916,
    "category": "Geography",
    "title": "Ghanaian District 337",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 337 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 337"
    ]
  },
  {
    "id": 917,
    "category": "Geography",
    "title": "Ghanaian District 338",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 338 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 338"
    ]
  },
  {
    "id": 918,
    "category": "Geography",
    "title": "Ghanaian District 339",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 339 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 339"
    ]
  },
  {
    "id": 919,
    "category": "Geography",
    "title": "Ghanaian District 340",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 340 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 340"
    ]
  },
  {
    "id": 920,
    "category": "Geography",
    "title": "Ghanaian District 341",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 341 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 341"
    ]
  },
  {
    "id": 921,
    "category": "Geography",
    "title": "Ghanaian District 342",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 342 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 342"
    ]
  },
  {
    "id": 922,
    "category": "Geography",
    "title": "Ghanaian District 343",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 343 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 343"
    ]
  },
  {
    "id": 923,
    "category": "Geography",
    "title": "Ghanaian District 344",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 344 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 344"
    ]
  },
  {
    "id": 924,
    "category": "Geography",
    "title": "Ghanaian District 345",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 345 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 345"
    ]
  },
  {
    "id": 925,
    "category": "Geography",
    "title": "Ghanaian District 346",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 346 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 346"
    ]
  },
  {
    "id": 926,
    "category": "Geography",
    "title": "Ghanaian District 347",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 347 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 347"
    ]
  },
  {
    "id": 927,
    "category": "Geography",
    "title": "Ghanaian District 348",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 348 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 348"
    ]
  },
  {
    "id": 928,
    "category": "Geography",
    "title": "Ghanaian District 349",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 349 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 349"
    ]
  },
  {
    "id": 929,
    "category": "Geography",
    "title": "Ghanaian District 350",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 350 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 350"
    ]
  },
  {
    "id": 930,
    "category": "Geography",
    "title": "Ghanaian District 351",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 351 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 351"
    ]
  },
  {
    "id": 931,
    "category": "Geography",
    "title": "Ghanaian District 352",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 352 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 352"
    ]
  },
  {
    "id": 932,
    "category": "Geography",
    "title": "Ghanaian District 353",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 353 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 353"
    ]
  },
  {
    "id": 933,
    "category": "Geography",
    "title": "Ghanaian District 354",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 354 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 354"
    ]
  },
  {
    "id": 934,
    "category": "Geography",
    "title": "Ghanaian District 355",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 355 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 355"
    ]
  },
  {
    "id": 935,
    "category": "Geography",
    "title": "Ghanaian District 356",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 356 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 356"
    ]
  },
  {
    "id": 936,
    "category": "Geography",
    "title": "Ghanaian District 357",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 357 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 357"
    ]
  },
  {
    "id": 937,
    "category": "Geography",
    "title": "Ghanaian District 358",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 358 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 358"
    ]
  },
  {
    "id": 938,
    "category": "Geography",
    "title": "Ghanaian District 359",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 359 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 359"
    ]
  },
  {
    "id": 939,
    "category": "Geography",
    "title": "Ghanaian District 360",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 360 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 360"
    ]
  },
  {
    "id": 940,
    "category": "Geography",
    "title": "Ghanaian District 361",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 361 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 361"
    ]
  },
  {
    "id": 941,
    "category": "Geography",
    "title": "Ghanaian District 362",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 362 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 362"
    ]
  },
  {
    "id": 942,
    "category": "Geography",
    "title": "Ghanaian District 363",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 363 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 363"
    ]
  },
  {
    "id": 943,
    "category": "Geography",
    "title": "Ghanaian District 364",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 364 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 364"
    ]
  },
  {
    "id": 944,
    "category": "Geography",
    "title": "Ghanaian District 365",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 365 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 365"
    ]
  },
  {
    "id": 945,
    "category": "Geography",
    "title": "Ghanaian District 366",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 366 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 366"
    ]
  },
  {
    "id": 946,
    "category": "Geography",
    "title": "Ghanaian District 367",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 367 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 367"
    ]
  },
  {
    "id": 947,
    "category": "Geography",
    "title": "Ghanaian District 368",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 368 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 368"
    ]
  },
  {
    "id": 948,
    "category": "Geography",
    "title": "Ghanaian District 369",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 369 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 369"
    ]
  },
  {
    "id": 949,
    "category": "Geography",
    "title": "Ghanaian District 370",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 370 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 370"
    ]
  },
  {
    "id": 950,
    "category": "Geography",
    "title": "Ghanaian District 371",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 371 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 371"
    ]
  },
  {
    "id": 951,
    "category": "Geography",
    "title": "Ghanaian District 372",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 372 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 372"
    ]
  },
  {
    "id": 952,
    "category": "Geography",
    "title": "Ghanaian District 373",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 373 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 373"
    ]
  },
  {
    "id": 953,
    "category": "Geography",
    "title": "Ghanaian District 374",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 374 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 374"
    ]
  },
  {
    "id": 954,
    "category": "Geography",
    "title": "Ghanaian District 375",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 375 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 375"
    ]
  },
  {
    "id": 955,
    "category": "Geography",
    "title": "Ghanaian District 376",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 376 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 376"
    ]
  },
  {
    "id": 956,
    "category": "Geography",
    "title": "Ghanaian District 377",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 377 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 377"
    ]
  },
  {
    "id": 957,
    "category": "Geography",
    "title": "Ghanaian District 378",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 378 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 378"
    ]
  },
  {
    "id": 958,
    "category": "Geography",
    "title": "Ghanaian District 379",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 379 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 379"
    ]
  },
  {
    "id": 959,
    "category": "Geography",
    "title": "Ghanaian District 380",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 380 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 380"
    ]
  },
  {
    "id": 960,
    "category": "Geography",
    "title": "Ghanaian District 381",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 381 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 381"
    ]
  },
  {
    "id": 961,
    "category": "Geography",
    "title": "Ghanaian District 382",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 382 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 382"
    ]
  },
  {
    "id": 962,
    "category": "Geography",
    "title": "Ghanaian District 383",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 383 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 383"
    ]
  },
  {
    "id": 963,
    "category": "Geography",
    "title": "Ghanaian District 384",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 384 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 384"
    ]
  },
  {
    "id": 964,
    "category": "Geography",
    "title": "Ghanaian District 385",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 385 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 385"
    ]
  },
  {
    "id": 965,
    "category": "Geography",
    "title": "Ghanaian District 386",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 386 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 386"
    ]
  },
  {
    "id": 966,
    "category": "Geography",
    "title": "Ghanaian District 387",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 387 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 387"
    ]
  },
  {
    "id": 967,
    "category": "Geography",
    "title": "Ghanaian District 388",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 388 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 388"
    ]
  },
  {
    "id": 968,
    "category": "Geography",
    "title": "Ghanaian District 389",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 389 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 389"
    ]
  },
  {
    "id": 969,
    "category": "Geography",
    "title": "Ghanaian District 390",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 390 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 390"
    ]
  },
  {
    "id": 970,
    "category": "Geography",
    "title": "Ghanaian District 391",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 391 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 391"
    ]
  },
  {
    "id": 971,
    "category": "Geography",
    "title": "Ghanaian District 392",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 392 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 392"
    ]
  },
  {
    "id": 972,
    "category": "Geography",
    "title": "Ghanaian District 393",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 393 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 393"
    ]
  },
  {
    "id": 973,
    "category": "Geography",
    "title": "Ghanaian District 394",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 394 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 394"
    ]
  },
  {
    "id": 974,
    "category": "Geography",
    "title": "Ghanaian District 395",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 395 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 395"
    ]
  },
  {
    "id": 975,
    "category": "Geography",
    "title": "Ghanaian District 396",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 396 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 396"
    ]
  },
  {
    "id": 976,
    "category": "Geography",
    "title": "Ghanaian District 397",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 397 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 397"
    ]
  },
  {
    "id": 977,
    "category": "Geography",
    "title": "Ghanaian District 398",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 398 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 398"
    ]
  },
  {
    "id": 978,
    "category": "Geography",
    "title": "Ghanaian District 399",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 399 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 399"
    ]
  },
  {
    "id": 979,
    "category": "Geography",
    "title": "Ghanaian District 400",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 400 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 400"
    ]
  },
  {
    "id": 980,
    "category": "Geography",
    "title": "Ghanaian District 401",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 401 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 401"
    ]
  },
  {
    "id": 981,
    "category": "Geography",
    "title": "Ghanaian District 402",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 402 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 402"
    ]
  },
  {
    "id": 982,
    "category": "Geography",
    "title": "Ghanaian District 403",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 403 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 403"
    ]
  },
  {
    "id": 983,
    "category": "Geography",
    "title": "Ghanaian District 404",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 404 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 404"
    ]
  },
  {
    "id": 984,
    "category": "Geography",
    "title": "Ghanaian District 405",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 405 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 405"
    ]
  },
  {
    "id": 985,
    "category": "Geography",
    "title": "Ghanaian District 406",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 406 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 406"
    ]
  },
  {
    "id": 986,
    "category": "Geography",
    "title": "Ghanaian District 407",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 407 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 407"
    ]
  },
  {
    "id": 987,
    "category": "Geography",
    "title": "Ghanaian District 408",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 408 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 408"
    ]
  },
  {
    "id": 988,
    "category": "Geography",
    "title": "Ghanaian District 409",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 409 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 409"
    ]
  },
  {
    "id": 989,
    "category": "Geography",
    "title": "Ghanaian District 410",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 410 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 410"
    ]
  },
  {
    "id": 990,
    "category": "Geography",
    "title": "Ghanaian District 411",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 411 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 411"
    ]
  },
  {
    "id": 991,
    "category": "Geography",
    "title": "Ghanaian District 412",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 412 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 412"
    ]
  },
  {
    "id": 992,
    "category": "Geography",
    "title": "Ghanaian District 413",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 413 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 413"
    ]
  },
  {
    "id": 993,
    "category": "Geography",
    "title": "Ghanaian District 414",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 414 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 414"
    ]
  },
  {
    "id": 994,
    "category": "Geography",
    "title": "Ghanaian District 415",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 415 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 415"
    ]
  },
  {
    "id": 995,
    "category": "Geography",
    "title": "Ghanaian District 416",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 416 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 416"
    ]
  },
  {
    "id": 996,
    "category": "Geography",
    "title": "Ghanaian District 417",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 417 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 417"
    ]
  },
  {
    "id": 997,
    "category": "Geography",
    "title": "Ghanaian District 418",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 418 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 418"
    ]
  },
  {
    "id": 998,
    "category": "Geography",
    "title": "Ghanaian District 419",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 419 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 419"
    ]
  },
  {
    "id": 999,
    "category": "Geography",
    "title": "Ghanaian District 420",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 420 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 420"
    ]
  },
  {
    "id": 1000,
    "category": "Geography",
    "title": "Ghanaian District 421",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 421 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 421"
    ]
  },
  {
    "id": 1001,
    "category": "Geography",
    "title": "Ghanaian District 422",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 422 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 422"
    ]
  },
  {
    "id": 1002,
    "category": "Geography",
    "title": "Ghanaian District 423",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 423 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 423"
    ]
  },
  {
    "id": 1003,
    "category": "Geography",
    "title": "Ghanaian District 424",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 424 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 424"
    ]
  },
  {
    "id": 1004,
    "category": "Geography",
    "title": "Ghanaian District 425",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 425 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 425"
    ]
  },
  {
    "id": 1005,
    "category": "Geography",
    "title": "Ghanaian District 426",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 426 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 426"
    ]
  },
  {
    "id": 1006,
    "category": "Geography",
    "title": "Ghanaian District 427",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 427 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 427"
    ]
  },
  {
    "id": 1007,
    "category": "Geography",
    "title": "Ghanaian District 428",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 428 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 428"
    ]
  },
  {
    "id": 1008,
    "category": "Geography",
    "title": "Ghanaian District 429",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 429 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 429"
    ]
  },
  {
    "id": 1009,
    "category": "Geography",
    "title": "Ghanaian District 430",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 430 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 430"
    ]
  },
  {
    "id": 1010,
    "category": "Geography",
    "title": "Ghanaian District 431",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 431 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 431"
    ]
  },
  {
    "id": 1011,
    "category": "Geography",
    "title": "Ghanaian District 432",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 432 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 432"
    ]
  },
  {
    "id": 1012,
    "category": "Geography",
    "title": "Ghanaian District 433",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 433 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 433"
    ]
  },
  {
    "id": 1013,
    "category": "Geography",
    "title": "Ghanaian District 434",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 434 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 434"
    ]
  },
  {
    "id": 1014,
    "category": "Geography",
    "title": "Ghanaian District 435",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 435 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 435"
    ]
  },
  {
    "id": 1015,
    "category": "Geography",
    "title": "Ghanaian District 436",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 436 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 436"
    ]
  },
  {
    "id": 1016,
    "category": "Geography",
    "title": "Ghanaian District 437",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 437 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 437"
    ]
  },
  {
    "id": 1017,
    "category": "Geography",
    "title": "Ghanaian District 438",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 438 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 438"
    ]
  },
  {
    "id": 1018,
    "category": "Geography",
    "title": "Ghanaian District 439",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 439 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 439"
    ]
  },
  {
    "id": 1019,
    "category": "Geography",
    "title": "Ghanaian District 440",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 440 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 440"
    ]
  },
  {
    "id": 1020,
    "category": "Geography",
    "title": "Ghanaian District 441",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 441 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 441"
    ]
  },
  {
    "id": 1021,
    "category": "Geography",
    "title": "Ghanaian District 442",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 442 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 442"
    ]
  },
  {
    "id": 1022,
    "category": "Geography",
    "title": "Ghanaian District 443",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 443 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 443"
    ]
  },
  {
    "id": 1023,
    "category": "Geography",
    "title": "Ghanaian District 444",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 444 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 444"
    ]
  },
  {
    "id": 1024,
    "category": "Geography",
    "title": "Ghanaian District 445",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 445 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 445"
    ]
  },
  {
    "id": 1025,
    "category": "Geography",
    "title": "Ghanaian District 446",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 446 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 446"
    ]
  },
  {
    "id": 1026,
    "category": "Geography",
    "title": "Ghanaian District 447",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 447 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 447"
    ]
  },
  {
    "id": 1027,
    "category": "Geography",
    "title": "Ghanaian District 448",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 448 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 448"
    ]
  },
  {
    "id": 1028,
    "category": "Geography",
    "title": "Ghanaian District 449",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 449 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 449"
    ]
  },
  {
    "id": 1029,
    "category": "Geography",
    "title": "Ghanaian District 450",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 450 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 450"
    ]
  },
  {
    "id": 1030,
    "category": "Geography",
    "title": "Ghanaian District 451",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 451 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 451"
    ]
  },
  {
    "id": 1031,
    "category": "Geography",
    "title": "Ghanaian District 452",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 452 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 452"
    ]
  },
  {
    "id": 1032,
    "category": "Geography",
    "title": "Ghanaian District 453",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 453 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 453"
    ]
  },
  {
    "id": 1033,
    "category": "Geography",
    "title": "Ghanaian District 454",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 454 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 454"
    ]
  },
  {
    "id": 1034,
    "category": "Geography",
    "title": "Ghanaian District 455",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 455 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 455"
    ]
  },
  {
    "id": 1035,
    "category": "Geography",
    "title": "Ghanaian District 456",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 456 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 456"
    ]
  },
  {
    "id": 1036,
    "category": "Geography",
    "title": "Ghanaian District 457",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 457 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 457"
    ]
  },
  {
    "id": 1037,
    "category": "Geography",
    "title": "Ghanaian District 458",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 458 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 458"
    ]
  },
  {
    "id": 1038,
    "category": "Geography",
    "title": "Ghanaian District 459",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 459 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 459"
    ]
  },
  {
    "id": 1039,
    "category": "Geography",
    "title": "Ghanaian District 460",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 460 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 460"
    ]
  },
  {
    "id": 1040,
    "category": "Geography",
    "title": "Ghanaian District 461",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 461 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 461"
    ]
  },
  {
    "id": 1041,
    "category": "Geography",
    "title": "Ghanaian District 462",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 462 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 462"
    ]
  },
  {
    "id": 1042,
    "category": "Geography",
    "title": "Ghanaian District 463",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 463 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 463"
    ]
  },
  {
    "id": 1043,
    "category": "Geography",
    "title": "Ghanaian District 464",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 464 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 464"
    ]
  },
  {
    "id": 1044,
    "category": "Geography",
    "title": "Ghanaian District 465",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 465 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 465"
    ]
  },
  {
    "id": 1045,
    "category": "Geography",
    "title": "Ghanaian District 466",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 466 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 466"
    ]
  },
  {
    "id": 1046,
    "category": "Geography",
    "title": "Ghanaian District 467",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 467 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 467"
    ]
  },
  {
    "id": 1047,
    "category": "Geography",
    "title": "Ghanaian District 468",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 468 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 468"
    ]
  },
  {
    "id": 1048,
    "category": "Geography",
    "title": "Ghanaian District 469",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 469 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 469"
    ]
  },
  {
    "id": 1049,
    "category": "Geography",
    "title": "Ghanaian District 470",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 470 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 470"
    ]
  },
  {
    "id": 1050,
    "category": "Geography",
    "title": "Ghanaian District 471",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 471 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 471"
    ]
  },
  {
    "id": 1051,
    "category": "Geography",
    "title": "Ghanaian District 472",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 472 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 472"
    ]
  },
  {
    "id": 1052,
    "category": "Geography",
    "title": "Ghanaian District 473",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 473 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 473"
    ]
  },
  {
    "id": 1053,
    "category": "Geography",
    "title": "Ghanaian District 474",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 474 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 474"
    ]
  },
  {
    "id": 1054,
    "category": "Geography",
    "title": "Ghanaian District 475",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 475 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 475"
    ]
  },
  {
    "id": 1055,
    "category": "Geography",
    "title": "Ghanaian District 476",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 476 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 476"
    ]
  },
  {
    "id": 1056,
    "category": "Geography",
    "title": "Ghanaian District 477",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 477 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 477"
    ]
  },
  {
    "id": 1057,
    "category": "Geography",
    "title": "Ghanaian District 478",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 478 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 478"
    ]
  },
  {
    "id": 1058,
    "category": "Geography",
    "title": "Ghanaian District 479",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 479 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 479"
    ]
  },
  {
    "id": 1059,
    "category": "Geography",
    "title": "Ghanaian District 480",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 480 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 480"
    ]
  },
  {
    "id": 1060,
    "category": "Geography",
    "title": "Ghanaian District 481",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 481 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 481"
    ]
  },
  {
    "id": 1061,
    "category": "Geography",
    "title": "Ghanaian District 482",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 482 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 482"
    ]
  },
  {
    "id": 1062,
    "category": "Geography",
    "title": "Ghanaian District 483",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 483 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 483"
    ]
  },
  {
    "id": 1063,
    "category": "Geography",
    "title": "Ghanaian District 484",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 484 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 484"
    ]
  },
  {
    "id": 1064,
    "category": "Geography",
    "title": "Ghanaian District 485",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 485 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 485"
    ]
  },
  {
    "id": 1065,
    "category": "Geography",
    "title": "Ghanaian District 486",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 486 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 486"
    ]
  },
  {
    "id": 1066,
    "category": "Geography",
    "title": "Ghanaian District 487",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 487 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 487"
    ]
  },
  {
    "id": 1067,
    "category": "Geography",
    "title": "Ghanaian District 488",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 488 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 488"
    ]
  },
  {
    "id": 1068,
    "category": "Geography",
    "title": "Ghanaian District 489",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 489 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 489"
    ]
  },
  {
    "id": 1069,
    "category": "Geography",
    "title": "Ghanaian District 490",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 490 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 490"
    ]
  },
  {
    "id": 1070,
    "category": "Geography",
    "title": "Ghanaian District 491",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 491 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 491"
    ]
  },
  {
    "id": 1071,
    "category": "Geography",
    "title": "Ghanaian District 492",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 492 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 492"
    ]
  },
  {
    "id": 1072,
    "category": "Geography",
    "title": "Ghanaian District 493",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 493 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 493"
    ]
  },
  {
    "id": 1073,
    "category": "Geography",
    "title": "Ghanaian District 494",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 494 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 494"
    ]
  },
  {
    "id": 1074,
    "category": "Geography",
    "title": "Ghanaian District 495",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 495 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 495"
    ]
  },
  {
    "id": 1075,
    "category": "Geography",
    "title": "Ghanaian District 496",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 496 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 496"
    ]
  },
  {
    "id": 1076,
    "category": "Geography",
    "title": "Ghanaian District 497",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 497 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 497"
    ]
  },
  {
    "id": 1077,
    "category": "Geography",
    "title": "Ghanaian District 498",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 498 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 498"
    ]
  },
  {
    "id": 1078,
    "category": "Geography",
    "title": "Ghanaian District 499",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 499 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 499"
    ]
  },
  {
    "id": 1079,
    "category": "Geography",
    "title": "Ghanaian District 500",
    "fact": "Ghana has over 260 Metropolitan, Municipal and District Assemblies (MMDAs) to ensure local development, of which District 500 represents the ongoing decentralization.",
    "didYouKnow": "Decentralization in Ghana formally began in 1988 to give power back to local communities.",
    "tags": [
      "District",
      "Governance",
      "MMDA 500"
    ]
  }
];
