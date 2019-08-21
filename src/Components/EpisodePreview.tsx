import * as React from 'react';
import EpisodeIdentifier from './EpisodeIdentifier';
import TextSummary from './TextSummary';

export interface Props {
  image: string;
  title: string;
  summary: string;
  episode: string;
}

const EpisodePreview = ({ image, title, summary, episode }: Props) => {
  return (
    <div>
      <img src={image} />
      <h2>{title}</h2>
      <EpisodeIdentifier episode={episode} />
      <TextSummary summary={summary} />
    </div>
  );
};

export default EpisodePreview;
