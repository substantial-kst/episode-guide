import * as React from 'react';
import EpisodeIdentifier from './EpisodeIdentifier';
import TextSummary from './TextSummary';

interface Props {
  image: string;
  title: string;
  summary: string;
  episode: string;
}

const EpisodePreview: React.FC<Props> = props => {
  return (
    <div>
      <img src={props.image} style={{ maxWidth: '350px' }} />
      <h3>{props.title}</h3>
      <EpisodeIdentifier episode={props.episode} />
      <TextSummary summary={props.summary} />
    </div>
  );
};

export default EpisodePreview;
