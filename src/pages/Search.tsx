import React, { useState } from 'react';
import { fetchData, queryMap } from '../utils/fetch';
import EpisodeList from '../components/EpisodeList';
import OmniboxSearch from '../components/OmniboxSearch';

type Props = {
  image: string;
  title: string;
  match?: any;
  summary: string;
  episode: string;
};

const Search: React.FunctionComponent<Props> = props => {
  let initialState: Episode[] = [];
  const [results, setResult] = useState(initialState);
  const programId = props.match.params.programId;

  return (
    <div>
      <h2>Search Page</h2>
      <OmniboxSearch searchHandler={setResult} />
      <EpisodeList episodes={results} />
    </div>
  );
};

export default Search;
