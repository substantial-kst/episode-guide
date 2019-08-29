import React from 'react';
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

});
