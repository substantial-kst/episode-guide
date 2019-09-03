import React, { useState, useContext, StatelessComponent } from 'react'
import styled from '@emotion/styled'
import { queryFetch } from '../../utils/fetch'
import EpisodeList from '../../components/EpisodeList'
import OmniboxSearch from '../../components/OmniboxSearch'
import { RouteComponentProps } from 'react-router'
import Basic from '../../layouts/Basic'
import ProgramHeader from '../../components/ProgramHeader'
import { ThemeContext } from '../../context/ThemeContext'

type Props = {
  programId: string
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

const Search: React.FC<RouteComponentProps<Props>> = props => {
  const { programId } = props.match.params
  const initialState: Episode[] = []
  const Theme = useContext(ThemeContext)

  Theme.setTheme(programId)

  const [results, setResult] = useState(initialState)

  const searchHandler = (query: string): void => {
    interface SearchQuery {
      programId: string
      query: string
    }

    const q: SearchQuery = {
      programId: programId,
      query: query,
    }

    queryFetch(q).then(episodes => setResult(episodes))
  }

  return (
    <Basic>
      <ProgramHeader />
      <Wrapper>
        <h2>Search Page</h2>
        <OmniboxSearch searchHandler={searchHandler} />
        <EpisodeList episodes={results} />
      </Wrapper>
    </Basic>
  )
}

export default Search
