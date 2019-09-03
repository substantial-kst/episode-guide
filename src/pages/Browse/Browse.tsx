import React, { useContext, useEffect, useState } from 'react'
import { queryFetch, fetchSeasons } from '../../utils/fetch'
import ProgramHeader from '../../components/ProgramHeader'
import SeasonList from '../../components/SeasonList'
import EpisodeList from '../../components/EpisodeList'
import styled from '@emotion/styled'
import { RouteComponentProps } from 'react-router'
import Basic from '../../layouts/Basic'
import { ThemeContext } from '../../context/ThemeContext'

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
  justify-content: space-between;

  h2 {
    width: 100%;
    margin-bottom: 1em;
  }
`

const Browse: React.FC<RouteComponentProps<Props>> = props => {
  const { location } = props
  const { history } = props
  const { programId } = props.match.params
  let { season } = props.match.params

  if (!season) {
    season = '1'
  }

  const initialState: BrowseState = {
    episodes: [],
    seasons: [],
  }
  const Theme = useContext(ThemeContext)

  Theme.setTheme(programId)

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
    console.log('LOCATION: ', location)
    if (location.state && location.state.episodes) {
      setEpisodes(location.state.episodes)
    } else {
      setEpisodes([])
      interface SeasonQuery {
        programId: string
        season: number
      }

      const q: SeasonQuery = {
        programId: programId,
        season: parseInt(seasonNumber),
      }

      queryFetch(q).then(apiResults => {
        history.replace(location.pathname, { episodes: apiResults })
        setEpisodes(apiResults)
      })
    }
  }

  useEffect(() => {
    loadSeasons()
  }, [programId])
  useEffect(() => {
    loadEpisodes(season)
  }, [season])

  return (
    <Basic data-theme-key={Theme.currentTheme.themeKey}>
      <ProgramHeader backHandler={history.goBack} />
      <Wrapper>
        <h2>Browse Season {season} Episodes</h2>
        <SeasonList
          selectedSeasonNumber={parseInt(season)}
          seasons={seasons}
          programId={programId}
        />
        <EpisodeList episodes={episodes} />
      </Wrapper>
    </Basic>
  )
}

export default Browse
