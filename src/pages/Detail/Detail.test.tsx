import React from 'react';
import ReactDOM from 'react-dom';
import Detail from './Detail';

describe('Detail', () => {
  it('Renders without breaking', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Detail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
