import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

interface Props {
    programId: any;
    selectedSeasonNumber: number;
    seasons: Season[];
}

const Wrapper = styled.div`
    width:30%;
`;

const initialData = { programId: '', seasons: [], selectedSeasonNumber: 0 };

const SeasonList: React.FC<Props> = (props) => {
    const seasonPreview = () => {
        return props.seasons.map((season:Season, idx:number) => (
            <Link
                to={`/${props.programId}/browse/${idx + 1}`}
                className={idx === props.selectedSeasonNumber - 1 ? 'selected' : ''}
                key={idx}
            >
                <h3>{season.name}</h3>
                <p>Episodes: {season.episodeCount}</p>
                <span>{season.startDate} - {season.endDate}</span>
            </Link>
        ))
    };

    return (
        <Wrapper>
            {seasonPreview()}
        </Wrapper>
    );
};

export default SeasonList