import * as React from 'react'
import EpisodePreview from './EpisodePreview'
import styled from '@emotion/styled'
import LoadingIndicator from './LoadingIndicator'

interface Props {
  episodes: Episode[]
}

const Wrapper = styled.div`
  width: 80%;
`

const renderEpisodePreviews = (props: Props) => {
  if (props.episodes.length === 0) {
    return <LoadingIndicator />
  } else {
    return props.episodes.map((ep: Episode, i: number) => (
      <EpisodePreview episode={ep} key={i} />
    ))
  }
}

const EpisodeList = (props: Props) => (
  <Wrapper>{renderEpisodePreviews(props)}</Wrapper>
)

export default EpisodeList
