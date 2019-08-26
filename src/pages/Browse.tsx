import React, {useEffect, useState} from 'react';
import { queryFetch } from '../utils/fetch';
import SeasonList from "../components/SeasonList";
import EpisodeList from '../components/EpisodeList';
import styled from "@emotion/styled";

type Props = {
    programId: string;
    location: any;
    match: any;
};

const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 10%;
    
    h2 {
        width: 100%;
        margin-bottom:1em;
    }
`;

const Browse: React.FunctionComponent<Props> = props => {
    let initialState: Episode[] = [];
    const [results, setResult] = useState(initialState);
    useEffect(() => {
        loadData(props.match.params.season);
    }, []);

    const loadData = (season: number): void => {
        interface seasonQuery {
            programId: string;
            season: number;
        }

        const q: seasonQuery = {
            programId: props.programId,
            season
        };

        queryFetch(q).then(episodes => {
            console.log('Results: ', episodes);
            setResult(episodes)
        });
    };

    return (
        <Wrapper>
            <h2>Browse Episodes</h2>
            <SeasonList selectedSeasonNumber={props.match.params.season} programId={props.programId}/>
            <EpisodeList episodes={results} />
        </Wrapper>
    );
};

export default Browse;
