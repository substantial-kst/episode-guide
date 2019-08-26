import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

interface Props {
    programId: any;
    selectedSeasonNumber: number
}

const Wrapper = styled.div`
    width:30%;
`;

const sampleData:any[] = [
    {
        "name": "Season 1", "episodeCount": 12, "startDate": "1997-01-12", "endDate": "1997-05-11"
    },
    {
        "name": "Season 2", "episodeCount": 23, "startDate": "1997-09-21", "endDate": "1998-05-17"
    },
    {
        "name": "Season 3", "episodeCount": 25, "startDate": "1998-09-15", "endDate": "1999-05-18"
    },
    {
        "name": "Season 4", "episodeCount": 24, "startDate": "1999-09-26", "endDate": "2000-05-21"
    },
    {
        "name": "Season 5", "episodeCount": 20, "startDate": "2000-10-01", "endDate": "2001-05-13"
    },
    {
        "name": "Season 6", "episodeCount": 21, "startDate": "2001-11-11", "endDate": "2002-05-12"
    },
    {
        "name": "Season 7", "episodeCount": 23, "startDate": "2002-11-03", "endDate": "2003-05-18"
    },
    {
        "name": "Season 8", "episodeCount": 22, "startDate": "2003-11-02", "endDate": "2004-05-23"
    },
    {
        "name": "Season 9", "episodeCount": 15, "startDate": "2004-11-07", "endDate": "2005-05-15"
    },
    {
        "name": "Season 10", "episodeCount": 15, "startDate": "2005-09-18", "endDate": "2006-05-14"
    },
    {
        "name": "Season 11", "episodeCount": 12, "startDate": "2007-01-28", "endDate": "2007-05-20"
    },
    {
        "name": "Season 12", "episodeCount": 22, "startDate": "2007-09-23", "endDate": "2008-05-18"
    },
    {
        "name": "Season 13", "episodeCount": 24, "startDate": "2008-09-28", "endDate": "2009-09-13"
    }];

const SeasonList: React.FC<Props> = (props) => {
    const seasonPreview = (seasonArr:any[]) => {
        return seasonArr.map((season, idx) => (
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
            {seasonPreview(sampleData)}
        </Wrapper>
    );
};

export default SeasonList