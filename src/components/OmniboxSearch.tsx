import React, { useState } from 'react';
import { fetchData } from '../utils/fetch';

interface ComponentProps {
  searchHandler: any;
}


const OmniboxSearch: React.FC<ComponentProps> = ({searchHandler}) => {
  const [query, setQuery] = useState<string>('');

  interface omniProps {
    programId: string;
    // character: string;
    // guest: string;
    title: string;
    union: string;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    let inputValue: string = e.target.value;
    setQuery(inputValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const queryProps = createQueryProps(query);

    console.log('searching for', query);

    fetchData(queryProps).then(jsonData => {
      console.log('set state to...', jsonData);
      // need access to setResults...
    });
  };

  const createQueryProps = (input: string): omniProps => {
    const queryProps: omniProps = {
      programId: 'koth',
      // character: query,
      // guest: query,
      title: query,
      union: 'a'
    };
    return queryProps;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="omnibox"
        placeholder="Characters, guests, titles,..."
        onChange={e => handleInputChange(e)}
      />
    </form>
  );
};

export default OmniboxSearch;
