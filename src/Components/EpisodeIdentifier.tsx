import * as React from 'react';

export interface Props {
  episode: string;
}

const EpisodeIdentifier = ({ episode }: Props) => <p>{episode}</p>;

export default EpisodeIdentifier;
