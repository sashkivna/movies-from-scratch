import {InnerState} from "./HomePage/components/AddMovie/AddMovieForm";

export type Movies = Array<Movie | InnerState>

export type Movie = {
    "original_title": string,
    "overview": string,
    "popularity": number
}

export const mockedMovies: Movies = [
    {
        "original_title": "Cruella",
        "overview": "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella\u2019s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
        "popularity": 6107.84,
    },
    {
        "original_title": "The Unholy",
        "overview": "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
        "popularity": 3524.228,
    },
    {
        "original_title": "Army of the Dead",
        "overview": "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
        "popularity": 2837.585,
    },
    {
        "original_title": "Wrath of Man",
        "overview": "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman'assets ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.",
        "popularity": 3456.24,
    },
    {
        "original_title": "Mortal Kombat",
        "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung'assets best warrior, Sub-Zero, seeks out and trains with Earth'assets greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
        "popularity": 1721.224,
    },
    {
        "original_title": "I Am All Girls",
        "overview": "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.",
        "popularity": 1406.875,
    },
    {
        "original_title": "Tom Clancy'assets Without Remorse",
        "overview": "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
        "popularity": 1449.581,
    },
    {
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity\u2019s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 1417.39,
    },
    {
        "original_title": "Those Who Wish Me Dead",
        "overview": "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.",
        "popularity": 1377.769,
    },
    {
        "original_title": "The Virtuoso",
        "overview": "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he'assets been given is a time and location where to find his quarry. No name. No description. Nothing.",
        "popularity": 1257.853,
    },
    {
        "original_title": "Nobody",
        "overview": "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor \u2014 a \"nobody.\" When two thieves break into his home one night, Hutch'assets unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
        "popularity": 1069.612,
    },
    {
        "original_title": "Friends: The Reunion",
        "overview": "The cast of Friends reunites for a once-in-a-lifetime celebration of the hit series, an unforgettable evening filled with iconic memories, uncontrollable laughter, happy tears, and special guests.",
        "popularity": 1103.939,
    },
    {
        "original_title": "Vanquish",
        "overview": "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters\u2014or she may never see her child again.",
        "popularity": 892.043,
    },
    {
        "original_title": "Ferry",
        "overview": "Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested \u2014 and a love that alters his life.",
        "popularity": 958.662,
    },
    {
        "original_title": "\u5287\u5834\u7248\u300c\u9b3c\u6ec5\u306e\u5203\u300d\u7121\u9650\u5217\u8eca\u7de8",
        "overview": "Tanjir\u014d Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar'assets head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Ky\u014djur\u014d Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
        "popularity": 1049.135,
    },
    {
        "original_title": "A Quiet Place Part II",
        "overview": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
        "popularity": 1043.464,
    },
    {
        "original_title": "Monster Pets: A Hotel Transylvania Short",
        "overview": "Drac tries out some new monster pets to help occupy Tinkles for playtime.",
        "popularity": 981.665,
    },
    {
        "original_title": "Miraculous World : Shanghai, la l\u00e9gende de Ladydragon",
        "overview": "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!",
        "popularity": 1019.579,
    },
    {
        "original_title": "Raya and the Last Dragon",
        "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it\u2019s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
        "popularity": 1086.606,
    },
    {
        "original_title": "\uc11c\ubcf5",
        "overview": "A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.",
        "popularity": 810.864,
    }
]