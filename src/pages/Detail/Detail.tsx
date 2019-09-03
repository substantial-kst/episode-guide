import React, { useContext } from 'react'
import { queryFetch, EpisodeQueryParams } from '../../utils/fetch'
import EpisodeIdentifier from '../../components/EpisodeIdentifier'
import EpisodeImage from '../../components/EpisodeImage'
import TextSummary from '../../components/TextSummary'
import BroadcastDate from '../../components/BroadcastDate'
import GuestStars from '../../components/GuestStars/GuestStars'
import LoadingIndicator from '../../components/LoadingIndicator'
import styled from '@emotion/styled'
import { RouteComponentProps } from 'react-router'
import { ThemeContext } from '../../context/ThemeContext'
import Basic from '../../layouts/Basic'
import ProgramHeader from '../../components/ProgramHeader'

interface MatchParams {
  episodeId: string
  programId: string
}

const Wrapper = styled.div`
  h1 {
    margin-top: 0;
  }
`

const Detail: React.FC<RouteComponentProps<MatchParams>> = props => {
  const { episodeId, programId } = props.match.params
  const Theme = useContext(ThemeContext)

  Theme.setTheme(programId)
  const [e, setEpisode] = React.useState<Episode | undefined>(undefined)

  const fetchEpisode = (providedEpisodeId: string): void => {
    const query: EpisodeQueryParams = {
      programId: programId,
      id: providedEpisodeId,
    }
    queryFetch(query).then(episodeJSON => setEpisode(episodeJSON[0]))
  }

  React.useEffect((): void => {
    fetchEpisode(episodeId)
  }, [episodeId])

  const renderDetails = (): JSX.Element => {
    if (!e) {
      return <LoadingIndicator />
    } else {
      console.log('E: ', e)
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

  return (
    <Basic data-theme-key={Theme.currentTheme.themeKey}>
      <ProgramHeader />
      <Wrapper>{renderDetails()}</Wrapper>
    </Basic>
  )
}

export default Detail
