import React from "react";
import styled from "@emotion/styled";
import GlobalBase from "./GlobalBase";
// const img = import();

const Wrapper = styled.div`
`;

const Basic: React.FC = (props) => (
    <Wrapper>
        <GlobalBase />
        {props.children}
    </Wrapper>
);

export default Basic;