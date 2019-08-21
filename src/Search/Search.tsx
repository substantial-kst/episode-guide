import * as React from 'react';

export interface Props {
  name: string;
}

const Search = ({ name }: Props): string => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>Search Page</h2>
    </div>
  );
};

export default Search;
