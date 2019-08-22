import * as React from 'react';
import EpisodePreview from './EpisodePreview';

interface Props {
  episodes: Episode[];
}

export default (props: Props) => {
  return (
    <div>
      {props.episodes.map((ep: Episode, i: number) => (
        <EpisodePreview {...ep} key={i} />
      ))}
    </div>
  );
};
