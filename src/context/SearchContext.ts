import React from 'react';

interface searchInterface {
  results: Episode[];
}

const initialState: Episode[] = [];

const SearchContext = React.createContext<searchInterface>({
  results: initialState
});

export default SearchContext;
