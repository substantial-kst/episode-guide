import React from 'react';
import {css} from 'emotion';

import EpisodePreview from '../Components/EpisodePreview';
// import Season1Data from '../../aws/data/KingOfTheHill/season1.json';
const Season1Data = [{
    "episode": 1,
    "id": "s01e01",
    "broadcast": {
        "year": "1997",
        "month": "01",
        "date": "12"
    },
    "title": "Pilot",
    "summary": "Straitlaced propane salesman and family man, Hank Hill, is accused of beating his son, Bobby, after Bobby gets a black eye from getting hit in the face with a baseball during a Little League game and rumors spread that Hank beat up a teenaged Megalo-Mart employee (when really he just yelled at him for not knowing if the store sells a tap and dye and some WD-40). Meanwhile, Hank's friends, conspiracy nut Dale Gribble, down-and-out Army barber Bill Dauterive, and fast-talking womanizer Jeff Boomhauer, try to fix Hank's truck, while Luanne Platter (Hank's niece) moves in with the Hills after her parents get sent to jail over a domestic disturbance.",
    "characters": [],
    "tags": [],
    "guests": [],
    "image": "https://m.media-amazon.com/images/M/MV5BNzI2MTAzODQwMl5BMl5BanBnXkFtZTgwOTcyODg0MjE@._V1_.jpg",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTIzNjc0ODc0N15BMl5BanBnXkFtZTYwNDY4Njk5._V1_.jpg"
}];

const color = 'white';

type Props = {
    image: string;
    title: string;
    match?: any;
    summary: string;
    episode: string;
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
            <h2>{ props.match.params.programId } - Search Page</h2>
            <EpisodePreview {...Season1Data[0]} />
        </div>
    );
};

export default Search;