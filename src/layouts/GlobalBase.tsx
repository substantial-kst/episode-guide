import React from "react";
import {Global, css} from "@emotion/core";

interface ThemeProps {
    theme: string
}

const themes: Record<string, any> = {
    koth: {
        color: '#ff0d1d',
        font: "Hepta+Slab:600"
    },
    bburg: {
        color: '#fade00',
        font: "Secular+One"
    }
};

const linkFont = (theme: string) => {
    if (!!theme) {
        return (
            <div>
                <link href={`https://fonts.googleapis.com/css?family=${themes[theme].font}&display=swap`} rel="stylesheet" />
                <Global styles={css`                            
                    @font-face {
                        font-family: '${theme}';
                        src: url('/fonts/${theme}/${theme}.ttf') format('truetype');
                    }
                    
                    h1, h2, h3 {
                        font-family: '${themes[theme].font.replace('+',' ').replace(/:[0-9]*/,'')}';
                        color: ${themes[theme].color};
                        font-weight: bold;
                    }
                `}/>
            </div>
        )
    }
    return;
};

const GlobalBase: React.FC<ThemeProps> = ({theme}) => (
    <div id='theme-background' className={theme}>
        {linkFont(theme)}
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
            
            h1 {
                font-size:3rem;
                line-height: 1.6em;
                letter-spacing: .01em;
                text-shadow: 2px 2px 1px rgba(16,16,16,.6);
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