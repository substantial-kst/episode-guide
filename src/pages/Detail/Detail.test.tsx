import React from 'react';
import ReactDOM from 'react-dom';
import Detail from "./Detail";
import {buildEpisode} from '../../test/fixtures'

describe('Detail', () => {
   it('Renders without breaking', () => {
     const episode = buildEpisode()
       const div = document.createElement('div');
       ReactDOM.render(<Detail episode={episode} id="foo" programId="bar" />, div);
       ReactDOM.unmountComponentAtNode(div);
   })
});

