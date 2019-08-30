interface Episode {
  episode: number;
  id: string;
  broadcast: BroadcastDate;
  title: string;
  summary: string;
  characters: string[];
  tags: string[];
  guests: string[];
  image: string;
  poster: string;
  showCode: string;
}

interface BroadcastDate {
  year: string;
  month: string;
  date: string;
}
