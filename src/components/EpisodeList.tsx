import * as React from 'react';
import EpisodePreview from './EpisodePreview';
import styled from '@emotion/styled';

interface Props {
  episodes: Episode[];
}

const Wrapper = styled.div`
  width: 70%;
`;

export default (props: Props) => {
  return (
    <Wrapper>
      {props.episodes.map((ep: Episode, i: number) => (
        <EpisodePreview episode={ep} key={i} />
      ))}
    </Wrapper>
  );
};
