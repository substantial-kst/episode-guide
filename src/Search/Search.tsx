import * as React from 'react';
import { css } from 'emotion';

export interface Props {
  name: string;
}

const color = 'white';

const Search = ({ name }: Props) => {
  return (
    <div
      className={css({
        backgroundColor: 'hotpink',
        '&:hover': {
          color
        }
      })}
    >
      Search Page
    </div>
  );
};

export default Search;
