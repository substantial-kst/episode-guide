import * as React from 'react';
import { css } from 'emotion';
import EpisodePreview from '../Components/EpisodePreview';

const color = 'white';

type Props = {};

const testProps: {
  image: string;
  title: string;
  summary: string;
  episode: string;
} = {
  image:
    'https://cf-images.us-east-1.prod.boltdns.net/v1/static/769341148/4b78e4f8-a9c5-48cc-a3e2-f2f9df057cf7/62801e48-df1e-4ce4-b71e-45eb94fcf5d4/1280x720/match/image.jpg',
  title: 'Title of Episode',
  summary:
    'Hank Hill drinks beer in a lonely alley, staring out at the Texas sky.',
  episode: 'Season 1, Episode 1'
};

const Search: React.FunctionComponent<Props> = props => {
  return (
    <div
      className={css({
        backgroundColor: 'lightgray',
        '&:hover': {
          color
        }
      })}
    >
      <h2>Search Page</h2>
      <EpisodePreview {...testProps} />
    </div>
  );
};

export default Search;
