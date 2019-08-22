import React from 'react';

interface Props {
  tags: string[];
}

const EpisodeTags: React.FC<Props> = props => {
  const { tags } = this.props;

  return tags.map((tag: string) => <span>{tag}</span>);
};

export default EpisodeTags;
