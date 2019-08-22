import * as React from 'react';

type Props = {
  episode: string;
};

const EpisodeIdentifier: React.FunctionComponent<Props> = props => (
  <p>{props.episode}</p>
);

export default EpisodeIdentifier;
