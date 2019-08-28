import React, { Fragment } from 'react';
import { queryFetch } from '../utils/fetch';
import EpisodeIdentifier from '../components/EpisodeIdentifier';
import EpisodeImage from '../components/EpisodeImage';
import TextSummary from '../components/TextSummary';
import styled from '@emotion/styled';
import { months, getOrdinal, stringLeadingZeros } from "../utils/DateFormatter";
import BroadcastDate from "../components/BroadcastDate";

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

  const Wrapper = styled.div`
    position: relative;
    padding: 40px 10%;
    width: 100%;
    
    h1, p {
      width: 100%;
      margin: 1em 0 .4em;
    }
    
    ul {
      padding-left: 2em;
      list-style-type: disc;    
    }
    
  `;

  const guestStars = (e:Episode) => {
    if (e.guests && e.guests.length > 0) {
      return (
          <Fragment>
            <h2>Guest Starring:</h2>
            <ul>
            {e.guests.map((guest: string, i: number) => (
                <li key={i}>{guest}</li>
            ))}
            </ul>
          </Fragment>
      )
    }
  };

  return (
    <Wrapper>
      <h1>{e.title}</h1>
      <EpisodeImage imageUrl={e.image} />
      <BroadcastDate year={e.broadcast.year} month={e.broadcast.month} date={e.broadcast.date}/>
      <EpisodeIdentifier idString={e.id} />
      <TextSummary summary={e.summary} />
      {e.characters.map((charcter: string, i: number) => (
        <span key={i}>{charcter}</span>
      ))}
      {guestStars(e)}

    </Wrapper>
  );
};

export default Detail;
