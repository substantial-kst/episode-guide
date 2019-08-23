import React, { useState } from 'react';
import { css } from 'emotion';
import { fetchData, queryMap } from '../utils/fetch';
import EpisodeList from '../components/EpisodeList';
import OmniboxSearch from '../components/OmniboxSearch';

const color = 'white';

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
  let initialState = [
    {
      episode: 1,
      id: 's01e01',
      broadcast: {
        year: '1997',
        month: '01',
        date: '12'
      },
      title: 'Pilot',
      summary:
        "Straitlaced propane salesman and family man, Hank Hill, is accused of beating his son, Bobby, after Bobby gets a black eye from getting hit in the face with a baseball during a Little League game and rumors spread that Hank beat up a teenaged Megalo-Mart employee (when really he just yelled at him for not knowing if the store sells a tap and dye and some WD-40). Meanwhile, Hank's friends, conspiracy nut Dale Gribble, down-and-out Army barber Bill Dauterive, and fast-talking womanizer Jeff Boomhauer, try to fix Hank's truck, while Luanne Platter (Hank's niece) moves in with the Hills after her parents get sent to jail over a domestic disturbance.",
      characters: [],
      tags: [],
      guests: [],
      image:
        'https://m.media-amazon.com/images/M/MV5BNzI2MTAzODQwMl5BMl5BanBnXkFtZTgwOTcyODg0MjE@._V1_.jpg',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTIzNjc0ODc0N15BMl5BanBnXkFtZTYwNDY4Njk5._V1_.jpg'
    },
    {
      episode: 2,
      id: 's01e02',
      broadcast: {
        year: '1997',
        month: '01',
        date: '19'
      },
      title: 'Square Peg',
      summary:
        "Peggy is mortified and tongue-tied when she finds out she has been chosen to teach the middle school's sexual education class, while Hank does everything he can to keep his son from learning about sex.",
      characters: [],
      tags: [],
      guests: [],
      image:
        'https://m.media-amazon.com/images/M/MV5BMjIxNzU5NzIzMl5BMl5BanBnXkFtZTgwNjgyODg0MjE@._V1_.jpg',
      poster: ''
    },
    {
      episode: 3,
      id: 's01e03',
      broadcast: {
        year: '1997',
        month: '02',
        date: '02'
      },
      title: 'The Order of the Straight Arrow',
      summary:
        'Hank, Bill, Dale, and Boomhauer take Bobby and his friends on an Order of the Straight Arrow camping trip where the men send the boys on a snipe hunt during which Bobby stuns a whooping crane but then everyone believes it is dead. Meanwhile, Peggy sneaks out to buy special shoes for her large feet.',
      characters: [],
      tags: [],
      guests: [],
      image:
        'https://m.media-amazon.com/images/M/MV5BNDgxMjA2MjE3MF5BMl5BanBnXkFtZTgwODAwODg0MjE@._V1_.jpg',
      poster: ''
    }
  ];
  const [results, setResult] = useState(initialState);

  // setTimeout(
  //   () =>
  //     fetchData({ programId: 'koth', season: 2 }).then(response =>
  //       setResult(response)
  //     ),
  //   1000
  // );

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
      <OmniboxSearch searchHandler={setResult} />
      <EpisodeList episodes={results} />
    </div>
  );
};

export default Search;
