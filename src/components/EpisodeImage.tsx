import React from 'react'
import styled from '@emotion/styled'

interface Props {
  imageUrl: string
  size?: string
}

const Wrapper = styled.div<Props>`
  width: ${(props: Props) => (props.size === 'thumbnail' ? '240px' : '500px')};
  height: ${(props: Props) =>
    props.size === 'thumbnail' ? 'calc(100% - 20px)' : '300px'};
  position: ${(props: Props) =>
    props.size === 'thumbnail' ? 'absolute' : 'relative'};
  left: 0;
  top: 0;
  padding: 5px;
  border: 1px solid #999;
  margin: 10px 10px 0;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  div {
    background-image: url(${(props: Props) => props.imageUrl});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }

  img {
    display: none;
  }
`

const EpisodeImage: React.FC<Props> = ({ size, imageUrl }) => {
  return (
    <Wrapper size={size} imageUrl={imageUrl}>
      <div>
        <img alt="Episode Screencap" src={imageUrl} />
      </div>
    </Wrapper>
  )
}

export default EpisodeImage
