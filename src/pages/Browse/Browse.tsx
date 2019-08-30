import React, { useEffect, useState } from 'react'
import { queryFetch, fetchSeasons } from '../../utils/fetch'
import SeasonList from '../../components/SeasonList'
import EpisodeList from '../../components/EpisodeList'
import styled from '@emotion/styled'

interface Props {
  programId: string
  seasonNumber: number
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

const Browse: React.FunctionComponent<Props> = props => {
  let initialState: BrowseState = {
    episodes: [],
    seasons: [],
  }
  const [seasons, setSeasons] = useState(initialState.seasons)
  const [episodes, setEpisodes] = useState(initialState.episodes)

  const loadSeasons = (): void => {
    if (props.programId) {
      fetchSeasons({ programId: props.programId }).then(apiResults => {
        setSeasons(apiResults)
      })
    }
  }

  const loadEpisodes = (season: number): void => {
    interface SeasonQuery {
      programId: string
      season: number
    }

    const q: SeasonQuery = {
      programId: props.programId,
      season,
    }

    queryFetch(q).then(apiResults => {
      setEpisodes(apiResults)
    })
  }

  useEffect(() => {
    loadSeasons()
  }, [props.programId])
  useEffect(() => {
    loadEpisodes(props.seasonNumber)
  }, [props.seasonNumber])

  return (
    <Wrapper>
      <h2>Browse Season {props.seasonNumber} Episodes</h2>
      <SeasonList
        selectedSeasonNumber={props.seasonNumber}
        seasons={seasons}
        programId={props.programId}
      />
      <EpisodeList episodes={episodes} />
    </Wrapper>
  )
}

export default Browse
