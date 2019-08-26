import * as React from 'react';
import { fetchData } from '../utils/fetch';
import EpisodeIdentifier from '../components/EpisodeIdentifier';
import EpisodeImage from '../components/EpisodeImage';
import TextSummary from '../components/TextSummary';
import styled from '@emotion/styled';

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

      fetchData(query).then(episode => setEpisode(episode[0]));
    } else {
      setEpisode(episode);
    }
  }, []);

  const Wrapper = styled.div`
    position: relative;
    padding: 20pxv;
    width: 90%;
    margin: 10px 5%;
    overflow: hidden;

    > * {
      line-height: 1.6em;
    }
  `;

  return (
    <Wrapper>
      <EpisodeImage imageUrl={e.image} />
      <h3>{e.title}</h3>
      <EpisodeIdentifier idString={e.id} />
      <TextSummary summary={e.summary} />
      <p>
        {e.broadcast.month}/{e.broadcast.date}/{e.broadcast.year}
      </p>
      {e.characters.map((charcter: string, i: number) => (
        <span key={i}>{charcter}</span>
      ))}
      {e.guests.map((guest: string, i: number) => (
        <span key={i}>{guest}</span>
      ))}
    </Wrapper>
  );
};

export default Detail;
