import React from "react";
import styled from "@emotion/styled";
import GlobalBase from "./GlobalBase";

interface ThemeProps {
    theme: string
}

const Wrapper = styled.div`
`;

const Basic: React.FC<ThemeProps> = ({ theme, children }) => (
    <Wrapper data-theme={theme}>
        <GlobalBase theme={theme} />
        {children}
    </Wrapper>
);

export default Basic;