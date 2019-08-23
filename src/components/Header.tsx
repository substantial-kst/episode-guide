import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/koth/search">King of the Hill</Link>
            </li>
        </ul>

        <hr/>
    </div>
);

export default Header;