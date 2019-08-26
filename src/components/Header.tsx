import React from "react";
import {Link} from "react-router-dom";

interface HeaderProps {
    show: boolean
}
const renderHeader = (shouldShow:boolean) => {
    if (shouldShow) {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/koth/search">King of the Hill</Link>
                    </li>
                </ul>
            </div>
        );
    } else {
        return (
            <div></div>
                );
    }
}

const Header: React.FC<HeaderProps> = ({show}) => {
    return renderHeader(show);
};

export default Header;