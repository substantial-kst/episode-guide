import React from "react";
import styled from "@emotion/styled";
import GlobalBase from "./GlobalBase";
import Header from "../components/Header";

interface ThemeProps {
    theme: string
}

const Wrapper = styled.div`
`;

const Basic: React.FC<ThemeProps> = ({ theme, children }) => (
    <Wrapper>
        <GlobalBase theme={theme} />
        {children}
    </Wrapper>
);

export default Basic;