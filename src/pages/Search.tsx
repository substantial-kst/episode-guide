import React, { useState } from 'react';
import { fetchData, queryMap } from '../utils/fetch';
import EpisodeList from '../components/EpisodeList';
// interface SearchResults {
//     episodes: Episode[]
// }

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

  setTimeout(
    () =>
      fetchData({ programId: 'koth', season: 2 }).then(response =>
        setResult(response)
      ),
    10
  );

  return (
    <div>
      <h2>Search Page</h2>
      <EpisodeList episodes={results} />
    </div>
  );
};

export default Search;
