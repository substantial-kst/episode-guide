interface Episode {
    episode: number;
    id: string;
    broadcast: {
        year: string;
        month: string;
        date: string;
    }
    title: string;
    summary: string;
    characters: string[];
    tags: string[];
    guests: string[];
    image: string;
    poster: string;
}