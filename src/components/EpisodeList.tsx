import * as React from 'react'
import EpisodePreview from './EpisodePreview'
import styled from '@emotion/styled'
import LoadingIndicator from './LoadingIndicator'

interface Props {
  episodes: Episode[]
  message?: string
}

const Wrapper = styled.div`
  width: 80%;

  h5 {
    margin: 1rem 5%;
  }
`

const renderEpisodePreviews = (props: Props) => {
  if (props.episodes.length === 0) {
    if (!props.message) {
      return <LoadingIndicator />
    } else {
      return <h5>{props.message}</h5>
    }
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
