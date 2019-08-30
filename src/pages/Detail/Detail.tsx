import React from 'react';
import { queryFetch, EpisodeQueryParams } from '../../utils/fetch';
import EpisodeIdentifier from '../../components/EpisodeIdentifier';
import EpisodeImage from '../../components/EpisodeImage';
import TextSummary from '../../components/TextSummary';
import BroadcastDate from '../../components/BroadcastDate';
import GuestStars from '../../components/GuestStars/GuestStars';
import LoadingIndicator from '../../components/LoadingIndicator';

interface Props {
  episode: Episode;
  id: string;
  programId: string;
}

const Detail: React.FC<Props> = ({ episode, id, programId }) => {
  const [e, setEpisode] = React.useState<Episode | null>(null);

  React.useEffect((): void => {
    fetchEpisode();
  }, []);

  const fetchEpisode = () => {
    if (episode === null) {
      let query: EpisodeQueryParams = {
        programId: programId,
        id: id,
      };

      queryFetch(query).then(episodeJSON => setEpisode(episodeJSON[0]));
    } else {
      setEpisode(episode);
    }
  };

  const renderDisplay = (): JSX.Element => {
    if (e === null) {
      return <LoadingIndicator />;
    } else {
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
          {e.characters.map((character: string, i: number) => (
            <span key={i}>{character}</span>
          ))}
          <GuestStars guests={e.guests} />
        </>
      );
    }
  };

  return renderDisplay();
};

export default Detail;
