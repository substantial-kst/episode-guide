import React, { useContext } from "react";
import { ThemeContext, ThemeObj } from '../context/ThemeContext';
import {Global, css} from "@emotion/core";

const linkFont = (currentTheme:any) => {
    if (!!currentTheme.font) {
        const fontName = currentTheme.font.replace('+',' ').replace(/:[0-9]*/,'')
        return (
            <div>
                <link href={`https://fonts.googleapis.com/css?family=${currentTheme.font}&display=swap`} rel="stylesheet" />
                <Global styles={css`
                    * { font-family: '${fontName}'; }
                            
                    h1, h2, h3 {
                        color: ${currentTheme.color};
                        font-weight: bold;
                        text-shadow: 2px 2px 1px rgba(16,16,16,.2);
                    }
                `}/>
            </div>
        )
    }
    return;
};

const GlobalBase: React.FC = props => {
    const {currentTheme} = useContext(ThemeContext);
    console.log('CURRENT THEME in GLOBAL BASE: ', currentTheme);

    return (
    <div id='theme-background' className={currentTheme.themeKey}>
        {linkFont(currentTheme)}
        <Global styles={css`
            * { margin: 0; padding: 0; box-sizing: border-box; text-decoration: none; line-height: 1.4em; }
            html {
                font-family: "Heebo";
                font-size: 20px;
            }
            html, body {  width: 100%; height: 100%; }
            h1, h2, h3, h4, h5, h6, div, header, footer, aside, article, ul, ol {
                display: block;
            }
            a { color: #333; }
            
            h1 {
                font-size:3rem;
                line-height: 1.2em;
                letter-spacing: .01em;
            }
            
            ul, ol {
                margin: auto;
                padding: auto;
                box-sizing: border-box;
                overflow: auto;
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
                background-image: url(${currentTheme.bgImg});
            }
          `}
        />
    </div>
)};

export default GlobalBase;