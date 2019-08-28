import React from "react";
import styled from "@emotion/styled";
import GlobalBase from "./GlobalBase";
const Wrapper = styled.div`
`;

const Basic: React.FC = ({ children }) => (
    <Wrapper>
        <GlobalBase />
        {children}
    </Wrapper>
);

export default Basic;