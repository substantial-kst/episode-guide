import React from 'react'
import { queryFetch, EpisodeQueryParams } from '../../utils/fetch'
import EpisodeIdentifier from '../../components/EpisodeIdentifier'
import EpisodeImage from '../../components/EpisodeImage'
import TextSummary from '../../components/TextSummary'
import BroadcastDate from '../../components/BroadcastDate'
import GuestStars from '../../components/GuestStars/GuestStars'
import LoadingIndicator from '../../components/LoadingIndicator'
import styled from '@emotion/styled'

interface Props {
  episode: Episode | null
  id: string
  programId: string
}

const Wrapper = styled.div`
  h1 {
    margin-top: 0;
  }
`

const Detail: React.FC<Props> = ({ episode, id, programId }) => {
  const [e, setEpisode] = React.useState<Episode | null>(null)

  const fetchEpisode = (providedEpisode: Episode | null) => {
    if (providedEpisode === null) {
      let query: EpisodeQueryParams = {
        programId: programId,
        id: id,
      }

      queryFetch(query).then(episodeJSON => setEpisode(episodeJSON[0]))
    } else {
      setEpisode(providedEpisode)
    }
  }

  React.useEffect((): void => {
    fetchEpisode(episode)
  }, [episode])

  const renderDisplay = (): JSX.Element => {
    if (e === null) {
      return <LoadingIndicator />
    } else {
      return (
        <Wrapper>
          <h1>{e.title}</h1>
          <EpisodeImage imageUrl={e.image} />
          <BroadcastDate
            year={e.broadcast.year}
            month={e.broadcast.month}
            date={e.broadcast.date}
          />
          <EpisodeIdentifier idString={e.id} />
          <TextSummary summary={e.summary} />
          {e.characters.map((character: string, i: number) => (
            <span key={i}>{character}</span>
          ))}
          <GuestStars guests={e.guests} />
        </Wrapper>
      )
    }
  }

  return renderDisplay()
}

export default Detail
