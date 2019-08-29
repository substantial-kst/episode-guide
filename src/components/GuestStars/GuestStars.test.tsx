import React from 'react';
// import react-testing methods
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import GuestStars from "./GuestStars";

const emptyGuests:string[] = [];
const validGuests:string[] = [
    "Billy Bob Thornton",
    "Angelina Jolie",
    "John Ritter"
];

describe('Guest Stars', () => {
    it('Renders without breaking', () => {
        render(<GuestStars guests={emptyGuests}/>);
        // ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders all guest names as list items', () => {
        const component = <GuestStars guests={validGuests}/>;

        const renderedComponent = render(component);
        // look inside render to see if guests rendered as list item
        const listItem = document.createElement('li');
        listItem.innerText = validGuests[1];
        // listItem.setAttribute('key', '1');

        console.log('renderedComponent: ', renderedComponent);
        expect(renderedComponent).toContainElement(listItem);

        // console.log('Post-render: ', component);
        // expect(JSON.stringify(preRender)).toBe(JSON.stringify(div));
        // ReactDOM.unmountComponentAtNode(div);
    });
    it('Component contains h2 with proper text', () => {

    });

    describe('Negative cases', () => {
        it('Renders nothing when Guests is an empty array', () => {

        });
    });

});
