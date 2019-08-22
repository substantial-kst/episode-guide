import * as React from 'react';
import EpisodeIdentifier from './EpisodeIdentifier';
import TextSummary from './TextSummary';

type Props = {
  image: string;
  title: string;
  summary: string;
  episode: string;
};

const EpisodePreview: React.FunctionComponent<Props> = props => {
  return (
    <div>
      <img src={props.image} style={{ maxWidth: '400px' }} />
      <h2>{props.title}</h2>
      <EpisodeIdentifier episode={props.episode} />
      <TextSummary summary={props.summary} />
    </div>
  );
};

export default EpisodePreview;
