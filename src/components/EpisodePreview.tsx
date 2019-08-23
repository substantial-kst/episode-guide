import React from 'react';
import { Link } from 'react-router-dom';
import EpisodeIdentifier from './EpisodeIdentifier';
import EpisodeImage from './EpisodeImage';
import TextSummary from './TextSummary';
import styled from '@emotion/styled';

interface Props {
  episode: Episode;
}

const Wrapper = styled.div`
  position: relative;
  padding: 20px 20px 0 300px;
  width: 90%;
  margin: 10px 5%;
  height: 180px;
  overflow: hidden;

  > * {
    line-height: 1.6em;
  }
`;

const EpisodePreview: React.FC<Props> = ({ episode }) => {
  return (
    <Wrapper>
      <Link to={`/${episode.showCode}/${episode.id}`}>
        <EpisodeImage imageUrl={episode.image} size={'thumbnail'} />
        <h3>{episode.title}</h3>
        <EpisodeIdentifier idString={episode.id} />
        <TextSummary summary={episode.summary} context={'preview'} />
      </Link>
    </Wrapper>
  );
};

export default EpisodePreview;
