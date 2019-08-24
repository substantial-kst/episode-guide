import React from "react";
import styled from "@emotion/styled";
import ImageLink from "../components/ImageLink";

interface ShowLink {
    showCode: string
    title: string
}

const Wrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    top: 0;
    left: 10%;
    width: 80%;
    text-align: center;
`

const showMapping: ShowLink[] = [
    {
        showCode: 'koth',
        title: 'King of the Hill'
    },
    {
        showCode: 'bburg',
        title: 'Bob\'s Burgers'
    },
    {
        showCode: 'gg',
        title: 'Golden Girls'
    },
    {
        showCode: 'vb',
        title: 'Venture Bros.'
    },
    {
        showCode: 'fri',
        title: 'Friends'
    },
    {
        showCode: 'fra',
        title: 'Frasier'
    }
];

const LandingPage: React.FC = props => (
    <Wrapper>
        {showMapping.map(show => (<ImageLink showCode={show.showCode} title={show.title}/>))}
    </Wrapper>
);

export default LandingPage;