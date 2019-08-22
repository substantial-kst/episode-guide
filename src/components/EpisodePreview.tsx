import React from 'react';
import EpisodeIdentifier from './EpisodeIdentifier';
import TextSummary from './TextSummary';

interface Props {
    episode: Episode
}

const EpisodePreview: React.FC<Props> = ({ episode }) => {
  return (
    <div>
      <img
        alt="Episode Screencap"
        src={episode.image}
        style={{ maxWidth: '350px' }}
      />
      <h3>{episode.title}</h3>
      <EpisodeIdentifier episode={episode.id} />
      <TextSummary summary={episode.summary} />
    </div>
  );
};

export default EpisodePreview;
