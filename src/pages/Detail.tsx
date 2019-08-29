import React from 'react';
import { queryFetch } from '../utils/fetch';
import EpisodeIdentifier from '../components/EpisodeIdentifier';
import EpisodeImage from '../components/EpisodeImage';
import TextSummary from '../components/TextSummary';
import BroadcastDate from '../components/BroadcastDate';

const Detail: React.FC<{ episode: Episode; id: string; programId: string }> = ({
  episode,
  id,
  programId
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
    if (episode === null) {
      let query: {
        programId: string;
        id: string;
      } = {
        programId: programId,
        id: id
      };

      queryFetch(query).then(episode => setEpisode(episode[0]));
    } else {
      setEpisode(episode);
    }
  }, []);

  const guestStars = (e: Episode) => {
    if (e.guests && e.guests.length > 0) {
      return (
        <>
          <h2>Guest Starring:</h2>
          <ul>
            {e.guests.map((guest: string, i: number) => (
              <li key={i}>{guest}</li>
            ))}
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <h1>{e.title}</h1>
      <EpisodeImage imageUrl={e.image} />
      <BroadcastDate
        year={e.broadcast.year}
        month={e.broadcast.month}
        date={e.broadcast.date}
      />
      <EpisodeIdentifier idString={e.id} />
      <TextSummary summary={e.summary} />
      {e.characters.map((charcter: string, i: number) => (
        <span key={i}>{charcter}</span>
      ))}
      {guestStars(e)}
    </>
  );
};

export default Detail;
