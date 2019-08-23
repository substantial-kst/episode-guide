import * as React from 'react';
import { fetchData } from '../utils/fetch';

const Detail: React.FC<{ episode: Episode; id: string }> = ({
  episode,
  id
}) => {
  const emptyEpisode: Episode = {
    episode: 0,
    id: '',
    broadcast: {
      year: '',
      month: '',
      date: ''
    },
    title: '',
    summary: '',
    characters: [],
    tags: [],
    guests: [],
    image: '',
    poster: '',
    showCode: ''
  };

  const [e, setEpisode] = React.useState<Episode>(emptyEpisode);

  React.useEffect((): void => {
    let query: {
      programId: string;
      id: string;
    } = {
      programId: 'koth',
      id: id
    };

    fetchData(query).then(episode => setEpisode(episode[0]));
  }, []);

  return (
    <div>
      <img src={e.image} />
      <h2>{e.title}</h2>
      <p>{e.id}</p>
      <p>{e.summary}</p>
      <p>
        {e.broadcast.month}/{e.broadcast.date}/{e.broadcast.year}
      </p>
      {e.characters.map((charcter: string, i: number) => (
        <span key={i}>{charcter}</span>
      ))}
      {e.guests.map((guest: string, i: number) => (
        <span key={i}>{guest}</span>
      ))}
    </div>
  );
};

export default Detail;
