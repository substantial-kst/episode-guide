import React, { useState } from 'react';
import { css } from 'emotion';

import EpisodeList from '../Components/EpisodeList';

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

const episodes: Episode[] = [
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
  },
  {
    episode: 4,
    id: 's01e04',
    broadcast: {
      year: '1997',
      month: '02',
      date: '09'
    },
    title: "Hank's Got the Willies",
    summary:
      "Hank is worried that Bobby does not have a normal role model in his life—and things get worse when Bobby accidentally hits Hank's idol, Willie Nelson (voiced by Nelson himself) with a golf club during a day on the green.",
    characters: [],
    tags: [],
    guests: ['Willie Nelson'],
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg4OTExMjE0NF5BMl5BanBnXkFtZTgwNjMyODg0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 5,
    id: 's01e05',
    broadcast: {
      year: '1997',
      month: '02',
      date: '16'
    },
    title: "Luanne's Saga",
    summary:
      'When Buckley breaks up with Luanne and Luanne goes on a days-long crying jag, Hank sets out to find Luanne a new boyfriend in 48 hours—which backfires when Hank sees Luanne with Boomhauer. Chuck Mangione also guest stars.',
    characters: [],
    tags: [],
    guests: ['Chuck Mangione'],
    image:
      'https://m.media-amazon.com/images/M/MV5BMTg4OTExMjE0NF5BMl5BanBnXkFtZTgwNjMyODg0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 6,
    id: 's01e06',
    broadcast: {
      year: '1997',
      month: '02',
      date: '23'
    },
    title: "Hank's Unmentionable Problem",
    summary:
      "Hank's ongoing constipation causes great concern for Peggy and, much to Hank's embarrassment, everyone else in Arlen.",
    characters: [],
    tags: [],
    guests: [],
    image:
      'https://m.media-amazon.com/images/M/MV5BMjE3MDYzNTI3Ml5BMl5BanBnXkFtZTgwMzcxODg0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 7,
    id: 's01e07',
    broadcast: {
      year: '1997',
      month: '03',
      date: '02'
    },
    title: 'Westie Side Story',
    summary:
      "When a new Laotian family moves in next door, problems ensue when the new neighbor's family dog goes missing and the Hills fear that the stereotype about Asians eating dogs is true.",
    characters: [],
    tags: [],
    guests: [],
    image:
      'https://m.media-amazon.com/images/M/MV5BMjIwNjU3MTE0N15BMl5BanBnXkFtZTgwMTkyMjk0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 8,
    id: 's01e08',
    broadcast: {
      year: '1997',
      month: '03',
      date: '23'
    },
    title: 'Shins of the Father',
    summary:
      "Hank's brash, sexist father, Cotton Hill, crashes Bobby's 12th birthday party—and stays over the Hills' house, which does not sit well with Peggy when Cotton's misogyny begins rubbing off on Bobby.",
    characters: [],
    tags: [],
    guests: [],
    image:
      'https://m.media-amazon.com/images/M/MV5BNzY4MTU1NTQ5N15BMl5BanBnXkFtZTgwMDk4MDk0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 9,
    id: 's01e09',
    broadcast: {
      year: '1997',
      month: '04',
      date: '13'
    },
    title: 'Peggy the Boggle Champ',
    summary:
      "Hank's promise to coach Peggy at the Texas State Boggle Championship is jeopardized when his buddies try to lure him away to the Ninth Annual Dallas Mower Expo. Meanwhile, Bobby and Luanne freak out when they leave a condensation ring on the new coffee table, but their efforts to fix it cause even more trouble.",
    characters: [],
    tags: [],
    guests: ['Laurie Metcalf'],
    image:
      'https://m.media-amazon.com/images/M/MV5BMjU3NTI0NzE4MV5BMl5BanBnXkFtZTgwNzEyODg0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 10,
    id: 's01e10',
    broadcast: {
      year: '1997',
      month: '04',
      date: '27'
    },
    title: 'Keeping Up with Our Joneses',
    summary:
      'When Hank catches Bobby smoking a cigarette in a gas station bathroom, Hank punishes him by making his son smoke an entire carton, but the plan backfires when Bobby, Hank, and Peggy all become addicted.',
    characters: [],
    tags: [],
    guests: [],
    image:
      'https://m.media-amazon.com/images/M/MV5BMjMwMDU5MDQzM15BMl5BanBnXkFtZTgwMTEyODg0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 11,
    id: 's01e11',
    broadcast: {
      year: '1997',
      month: '05',
      date: '04'
    },
    title: 'King of the Ant Hill',
    summary:
      "After telling Dale never to spray insecticide on his lawn again, Hank's expensive new lawn becomes mysteriously infested with fire ants days before Rainey Street's Cinco de Mayo celebration. Meanwhile, Bobby becomes the hypnotized servant for the Red Ant Queen.",
    characters: [],
    tags: [],
    guests: [],
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQzMDExMzUwMV5BMl5BanBnXkFtZTgwOTMyODg0MjE@._V1_.jpg',
    poster: ''
  },
  {
    episode: 12,
    id: 's01e12',
    broadcast: {
      year: '1997',
      month: '05',
      date: '11'
    },
    title: 'Plastic White Female',
    summary:
      "Bobby is invited to his first boy/girl party, and Peggy is horrified when she discovers him playing Spin the Bottle with one of Luanne's plastic beauty school heads.",
    characters: [],
    tags: [],
    guests: [],
    image:
      'https://m.media-amazon.com/images/M/MV5BMjMwMDYzOTEwMV5BMl5BanBnXkFtZTgwNjkyODg0MjE@._V1_.jpg',
    poster: ''
  }
];
let interval = 0;

const fetchData = (queryProps: any) => {
  let paramsParsed = 0;
  let queryMap: Record<string, string> = {
    programId: 'p',
    query: 'q',
    episode: 'e',
    season: 's',
    title: 't',
    summary: 'd',
    character: 'c',
    guest: 'g',
    tag: 'tags',
    date: 'dd',
    month: 'mm',
    year: 'yy',
    unionType: 'u'
  };

  let url = `https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?`;

  Object.keys(queryProps).forEach((key: string) => {
    url += `${paramsParsed > 0 ? '&' : ''}${queryMap[key]}=${queryProps[key]}`;
    paramsParsed++;
  });

  //   url += `p=${queryProps.programId}`;
  //   url += `q=${queryProps.query}`;
  //   url += `e=${queryProps.episode}`;
  //   url += `s=${queryProps.season}`;
  //   url += `t=${queryProps.title}`;
  //   url += `d=${queryProps.summary}`;
  //   url += `c=${queryProps.character}`;
  //   url += `g=${queryProps.guest}`;
  //   url += `tags=${queryProps.tag}`;
  //   url += `dd=${queryProps.broadcast.date}`;
  //   url += `mm=${queryProps.broadcast.month}`;
  //   url += `yy=${queryProps.broadcast.year}`;
  //   url += `u=${queryProps.unionType}`;

  console.log('Constructed fetch URL: ', url);

  return fetch(url, {
    mode: 'cors',
    method: 'GET'
  })
    .then(data => {
      data.json();
    })
    .then(jsonData => jsonData);
};

setInterval(() => {
  let props = [
    {
      programId: 'koth',
      character: 'Bobby'
    },
    {
      programId: 'koth',
      season: 1
    },
    {
      programId: 'koth',
      year: '1999'
    }
  ];

  fetchData(props[interval % props.length]);
  interval += 1;
}, 10000);

const initialState = [
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

const Search: React.FunctionComponent<Props> = props => {
  const [results, fetchData] = useState(initialState);

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
      <EpisodeList episodes={results} />
    </div>
  );
};

export default Search;
