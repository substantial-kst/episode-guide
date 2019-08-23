import React from "react";
import {Link} from "react-router-dom";

interface ComponentProps {
    showCode: string
}

const showMapping: Record<string, any> = {
    koth: {
        img: '',
        title: 'King of the Hill'
    },
    bburg: {
        img: '',
        title: 'Bob\'s Burgers'
    }

};

const ImageLink:React.FC<ComponentProps> = props => (
    <Link to={`/${props.showCode}/search`}>
        <img src={showMapping[props.showCode].img} />
        <h3>{showMapping[props.showCode].title}</h3>
    </Link>
);

export default ImageLink;