import React from "react";
import styled from "@emotion/styled";
import {Link} from "react-router-dom";

interface ComponentProps {
    showCode: string
    title: string
}

const Wrapper = styled.div`
    img {
        max-width: 20vw;
        max-height: 20vh;
    }    
`;

const ImageLink:React.FC<ComponentProps> = ({showCode, title}) => (
    <Wrapper>
        <Link to={`/${showCode}/search`}>
            <img src={`/images/${showCode}/link.jpg`} alt={title} />
            <h3>{title}</h3>
        </Link>
    </Wrapper>
);

export default ImageLink;