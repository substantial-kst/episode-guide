import React, { useState, useContext } from 'react'
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

  section {
    width: 20%;
  }
`

const statusMessages = {
  NO_RESULTS: 'No results found.  Please try a different search.',
  ENTER_SEARCH: 'Enter search criteria to find matching episodes',
}
const QuickSearch = styled.form`
  position: relative;

  button {
    width: 2rem;
    height: 2rem;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 1rem;
    color: white;
    border-radius: 0px 1rem 1rem 0px;
    font-size: 1.1rem;
  }
`

const Search: React.FC<RouteComponentProps<Props>> = props => {
  const { history } = props
  const { programId } = props.match.params
  const initialState: Episode[] = []
  const Theme = useContext(ThemeContext)

  Theme.setTheme(programId)

  const [query, setQuery] = useState('')
  const [results, setResult] = useState(initialState)
  const [message, setMessage] = useState(statusMessages.ENTER_SEARCH)

  const searchHandler = (query: string): void => {
    setMessage('')
    interface SearchQuery {
      programId: string
      query: string
    }

    const q: SearchQuery = {
      programId: programId,
      query: query,
    }

    queryFetch(q).then(episodes => {
      if (episodes.length === 0) {
        setMessage(statusMessages.NO_RESULTS)
      }
      setResult(episodes)
    })
  }

  return (
    <Basic>
      <ProgramHeader backHandler={history.goBack} />
      <Wrapper>
        <h2>Search Page</h2>
        <section>
          <QuickSearch>
            <h3>Quick Search</h3>
            <OmniboxSearch
              query={query}
              queryHandler={setQuery}
              searchHandler={searchHandler}
            />
          </QuickSearch>
          <hr />
          <h4>Advanced Search</h4>
        </section>
        <EpisodeList episodes={results} message={message} />
      </Wrapper>
    </Basic>
  )
}

export default Search
