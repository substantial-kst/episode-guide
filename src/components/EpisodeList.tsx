import * as React from 'react';
import { useContext } from 'react';
import EpisodePreview from './EpisodePreview';
import styled from '@emotion/styled';
import LoadingIndicator from './LoadingIndicator';

interface Props {
  episodes: Episode[];
}

const Wrapper = styled.div`
  width: 70%;
`;

const renderEpisodePreviews = (props: Props) => {
  if (props.episodes.length === 0) {
    return <LoadingIndicator />;
  } else {
    return props.episodes.map((ep: Episode, i: number) => (
      <EpisodePreview episode={ep} key={i} />
    ));
  }
};

export default (props: Props) => {
  return <Wrapper>{renderEpisodePreviews(props)}</Wrapper>;
};
