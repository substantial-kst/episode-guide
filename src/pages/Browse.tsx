import React, {useEffect, useState} from 'react';
import { queryFetch } from '../utils/fetch';
import SeasonList from "../components/SeasonList";
import EpisodeList from '../components/EpisodeList';
import styled from "@emotion/styled";

interface Props {
    programId: string;
    seasonNumber: number;
}

interface BrowseState {
    episodes: Episode[];
}


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
    let initialState: BrowseState = {
        episodes: []
    };
    const [results, setResult] = useState(initialState);

    const loadData = (season: number): void => {
        interface seasonQuery {
            programId: string;
            season: number;
        }

        const q: seasonQuery = {
            programId: props.programId,
            season
        };

        queryFetch(q).then(apiResults => {
            console.log('Results: ', apiResults);
            setResult({ episodes: apiResults })
        });
    };

    useEffect(() => { loadData(props.seasonNumber); }, [props.seasonNumber]);

    return (
        <Wrapper>
            <h2>Browse Season {props.seasonNumber} Episodes</h2>
            <SeasonList selectedSeasonNumber={props.seasonNumber} programId={props.programId}/>
            <EpisodeList episodes={results.episodes} />
        </Wrapper>
    );
};

export default Browse;
