import React from 'react';

interface Props {
  tags: string[];
}

const EpisodeTags: React.FC<Props> = props => (
  // const { tags }: { tag: string} = this.props;

  tags.map( (tag: string) => <p>{tag}</p>;

);

export default EpisodeTags;
