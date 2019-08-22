import React from 'react';
import EpisodeIdentifier from './EpisodeIdentifier';
import TextSummary from './TextSummary';

const EpisodePreview: React.FC<Episode> = props => {
  return (
    <div>
      <img alt="Episode Screencap" src={props.image} style={{ maxWidth: '350px' }} />
      <h3>{props.title}</h3>
      <EpisodeIdentifier episode={props.id} />
      <TextSummary summary={props.summary} />
    </div>
  );
};

export default EpisodePreview;
