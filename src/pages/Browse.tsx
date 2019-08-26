import React, { useState } from 'react';
import { queryFetch } from '../utils/fetch';
import SeasonList from "../components/SeasonList";
import EpisodeList from '../components/EpisodeList';

type Props = {
    programId: string;
};

const Browse: React.FunctionComponent<Props> = props => {
    let initialState: Episode[] = [];
    const [results, setResult] = useState(initialState);

    const searchHandler = (query: string): void => {
        interface searchQuery {
            programId: string;
            query: string;
        }

        const q: searchQuery = {
            programId: props.programId,
            query: query
        };

        queryFetch(q).then(episodes => setResult(episodes));
    };

    return (
        <div>
            <h2>Browse Episodes</h2>
            <SeasonList />
            <EpisodeList episodes={results} />
        </div>
    );
};

export default Browse;
