import React from "react";
import {Global, css} from "@emotion/core";

interface ThemeProps {
    background?: any
}

const GlobalBase: React.FC<ThemeProps> = (props) => (
    <div>
        <Global styles={css`
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html {
                font-family: "Heebo";
                font-size: 20px;
            }
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
          `}
        />
    </div>
);

export default GlobalBase;