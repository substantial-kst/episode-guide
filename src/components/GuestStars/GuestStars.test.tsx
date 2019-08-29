import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
// import react-testing methods
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GuestStars from './GuestStars';

const emptyGuests: string[] = [];
const validGuests: string[] = [
  'Billy Bob Thornton',
  'Angelina Jolie',
  'John Ritter'
];

describe('Guest Stars', () => {
  it('Renders without breaking', () => {
    render(<GuestStars guests={emptyGuests} />);
    // ReactDOM.unmountComponentAtNode(div);
  });

  it('Renders all guest names as list items', () => {
    const component = <GuestStars guests={validGuests} />;

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
  it('Component contains h2 with proper text', () => {});

  describe('Negative cases', () => {
    it('Renders nothing when Guests is an empty array', () => {});
  });
=======
import {render, RenderResult} from '@testing-library/react'
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import GuestStars, { Props } from "./GuestStars";

const renderTestComponent = (Component:React.FC<Props>, props: any):RenderResult => {
    return render(<Component {...props}/>);
};

describe('Guest Stars', () => {
    const emptyGuests:string[] = [];
    const validGuests:string[] = [
        "Billy Bob Thornton",
        "Angelina Jolie",
        "John Appleseed"
    ];
    const validProps:Record<string, Props> = {
        populated: {
            guests: validGuests
        },
        unpopulated: {
            guests: emptyGuests
        }
    };
    let rendered:RenderResult;
    let getAllByText:Function;
    let getByText:Function;
    let queryByText:Function;

    describe('With array of guest stars', () => {
        beforeEach(() => {
            rendered = renderTestComponent(GuestStars, validProps.populated);
            getByText = rendered.getByText;
            getAllByText = rendered.getAllByText;
        });

        describe('Renders guest names', () => {
            it('Renders each guest name', () => {
                expect(getAllByText(validGuests[0]).length).toBe(1)
                expect(getAllByText(validGuests[1]).length).toBe(1)
                expect(getAllByText(validGuests[2]).length).toBe(1)
            });

            it('Each guest name only rendered once', () => {
                expect(getAllByText(validGuests[0]).length).toBe(1)
                expect(getAllByText(validGuests[1]).length).toBe(1)
                expect(getAllByText(validGuests[2]).length).toBe(1)
            });
        });

        it('Component contains h2 with proper text', () => {
            expect(getByText('Guest Starring:')).toBeDefined();
        });

    })

    describe('Negative cases', () => {
        it('Renders nothing when Guests is an empty array', () => {
            rendered = renderTestComponent(GuestStars, validProps.unpopulated);
            getByText = rendered.getByText;
            getAllByText = rendered.getAllByText;
            queryByText = rendered.queryByText;
            expect(queryByText('Guest Starring:')).toBe(null);
        });
    });

>>>>>>> master
});
