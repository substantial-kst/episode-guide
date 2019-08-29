import React from "react";
import styled from "@emotion/styled";
import GlobalBase from "./GlobalBase";
const Wrapper = styled.div`
    position: relative;
    padding: 40px 10%;
    width: 100%;
    
    h1, p {
      width: 100%;
      margin: .6em 0 .4em;
    }
    
    ul {
      padding-left: 2em;
      list-style-type: disc;    
    }
    
  `;

const Basic: React.FC = ({ children }) => (
    <Wrapper>
        <GlobalBase />
        {children}
    </Wrapper>
);

export default Basic;