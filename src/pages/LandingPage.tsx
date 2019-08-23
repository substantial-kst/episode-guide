import React from "react";
import styled from "@emotion/styled";
import ImageLink from "../components/ImageLink";

interface ShowLink {
    showCode: string
    title: string
}

const Wrapper = styled.div`
    display: flex;
    // flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 80%;
    position: fixed;
    top: 0;
    left: 10%;
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
    }
];

const LandingPage: React.FC = props => (
    <Wrapper>
        {showMapping.map(show => (<ImageLink showCode={show.showCode} title={show.title}/>))}
    </Wrapper>
);

export default LandingPage;