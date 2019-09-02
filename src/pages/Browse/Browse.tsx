import React, { useEffect, useState } from 'react'
import { queryFetch, fetchSeasons } from '../../utils/fetch'
import SeasonList from '../../components/SeasonList'
import EpisodeList from '../../components/EpisodeList'
import styled from '@emotion/styled'
import { RouteComponentProps } from 'react-router'

interface Props {
  programId: string
  season: string
}

interface BrowseState {
  episodes: Episode[]
  seasons: Season[]
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  h2 {
    width: 100%;
    margin-bottom: 1em;
  }
`

const Browse: React.FC<RouteComponentProps<Props>> = props => {
  console.log('PROPS: ', props)
  const { programId, season } = props.match.params
  const initialState: BrowseState = {
    episodes: [],
    seasons: [],
  }
  const [seasons, setSeasons] = useState(initialState.seasons)
  const [episodes, setEpisodes] = useState(initialState.episodes)

  const loadSeasons = (): void => {
    if (programId) {
      fetchSeasons({ programId: programId }).then(apiResults => {
        setSeasons(apiResults)
      })
    }
  }

  const loadEpisodes = (seasonNumber: string): void => {
    interface SeasonQuery {
      programId: string
      season: number
    }

    const q: SeasonQuery = {
      programId: programId,
      season: parseInt(seasonNumber),
    }

    queryFetch(q).then(apiResults => {
      setEpisodes(apiResults)
    })
  }

  useEffect(() => {
    loadSeasons()
  }, [programId])
  useEffect(() => {
    loadEpisodes(season)
  }, [season])

  return (
    <Wrapper>
      <h2>Browse Season {season} Episodes</h2>
      <SeasonList
        selectedSeasonNumber={parseInt(season)}
        seasons={seasons}
        programId={programId}
      />
      <EpisodeList episodes={episodes} />
    </Wrapper>
  )
}

export default Browse
