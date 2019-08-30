import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes loadingImg {
    0% {
      transform: rotate(0deg) scale(0.9);
    }
    25% {
      transform: rotate(90deg) scale(0.95);
    }
    50% {
      transform: rotate(180deg) scale(1);
    }
    75% {
      transform: rotate(270deg) scale(0.95);
    }
    100% {
      transform: rotate(360deg) scale(0.9);
    }
  }

  .indicator {
    width: 80px;
    height: 80px;
    background-image: url('/loading-icon.jpg');
    background-size: contain;
    animation-name: loadingImg;
    animation-duration: 1.25s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
`;

const LoadingIndicator: React.FC = props => (
  <Wrapper>
    <div className={'indicator'} />
  </Wrapper>
);

export default LoadingIndicator;
