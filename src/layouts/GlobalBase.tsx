import React from "react";
import {Global, css} from "@emotion/core";
import {Link} from "react-router-dom";

interface ThemeProps {
    theme: string
}

const GlobalBase: React.FC<ThemeProps> = (props) => (
    <div id='theme-background'>
        <Global styles={css`
            * { margin: 0; padding: 0; box-sizing: border-box; overflow: scroll; }
            html {
                font-family: "Heebo";
                font-size: 20px;
            }
            html, body {  width: 100%; height: 100%; }
            h1, h2, h3, h4, h5, h6, div, header, footer, aside, article, li {
                display: block;
            }
            h2, h3 {
                font-weight: 500;
            }
            h4, h5 {
                font-weight: 700;
            }
            h1, h5, h6 {
                font-weight: 100;
            }
            
            #theme-background {
                background-image: url('/king-of-the-hill-background.jpeg');
                background-size: cover;
                position:fixed;
                width: 100%;
                height: 100%;
                background-position: center center;
                background-repeat: no-repeat;
                filter: blur(5px);
                opacity: .25;
            }
          `}
        />
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/koth/search">King of the Hill</Link>
            </li>
        </ul>

        <hr />
    </div>
);

export default GlobalBase;