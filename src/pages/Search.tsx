import React, { useState } from 'react';
import { fetchData } from '../utils/fetch';
import EpisodeList from '../components/EpisodeList';
import OmniboxSearch from '../components/OmniboxSearch';

type Props = {
  programId: string;
};

const Search: React.FunctionComponent<Props> = props => {
  let initialState: Episode[] = [];
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

    fetchData(q).then(episodes => setResult(episodes));
  };

  return (
    <div>
      <h2>Search Page</h2>
      <OmniboxSearch searchHandler={searchHandler} />
      <EpisodeList episodes={results} />
    </div>
  );
};

export default Search;
