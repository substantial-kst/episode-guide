import * as React from 'react';

interface Props {
  episode: string;
}

const EpisodeIdentifier: React.FC<Props> = props => (
  <p>
    <i>{props.episode}</i>
  </p>
);

export default EpisodeIdentifier;
