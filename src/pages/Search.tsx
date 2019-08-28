import React, { useState, useContext, StatelessComponent } from 'react';
import { queryFetch } from '../utils/fetch';
import EpisodeList from '../components/EpisodeList';
import OmniboxSearch from '../components/OmniboxSearch';

type Props = {
  programId: string;
};

const Search: React.FunctionComponent<Props> = props => {
  const initialState: Episode[] = [];

  const [results, setResult] = useState(initialState);

  const searchHandler = (query: string): void => {
    interface searchQuery {
      programId: string;
      query: string;
    }

    const q: searchQuery = {
      programId: props.programId,
      query: query
    };

    queryFetch(q).then(episodes => setResult(episodes));
    console.log('context', context);
  };

  return (
    <SearchContext.Provider value={results}>
      <h2>Search Page</h2>
      <OmniboxSearch searchHandler={searchHandler} />
      <EpisodeList episodes={results} />
    </SearchContext.Provider>
  );
};

export default Search;
