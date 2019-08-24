import React from "react";
import {Global, css} from "@emotion/core";

interface ThemeProps {
    theme: string
}

const GlobalBase: React.FC<ThemeProps> = ({theme}) => (
    <div id='theme-background' className={theme}>
        <Global styles={css`
            * { margin: 0; padding: 0; box-sizing: border-box; overflow: scroll; text-decoration: none; }
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
            
            img {
                border: 1px solid #333;
                padding: 5px;
                box-shadow:1px 3px 4px rgba(0,0,0,.25);
                background-color: #fff;
            }
            
            #theme-background {
                background-size: cover;
                position:fixed;
                width: 100%;
                height: 100%;
                background-position: center center;
                background-repeat: no-repeat;
                filter: blur(5px);
                opacity: .25;
                pointer-events: none;
                z-index: -1;
                
                &.${theme} {
                    background-image: url('/images/${theme}/background.jpg');
                }
            }
          `}
        />
    </div>
);

export default GlobalBase;