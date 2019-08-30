import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import EpisodePreview, { Props } from './EpisodePreview';

const renderTestComponent = (
  Component: React.FC<Props>,
  props: any
): RenderResult => {
  return render(<Component {...props} />);
};

// describe('Episode Preview', () => {
//   const validEpisode: Episode = {
//     episode: 5,
//     season: 1,
//     id: 's01e05',
//     broadcast: {
//       year: '1997',
//       month: '02',
//       date: '16'
//     },
//     title: "Luanne's Saga",
//     summary:
//       'When Buckley breaks up with Luanne and Luanne goes on a days-long crying jag, Hank sets out to find Luanne a new boyfriend in 48 hours—which backfires when Hank sees Luanne with Boomhauer. Chuck Mangione also guest stars.',
//     characters: [],
//     tags: [],
//     guests: ['Chuck Mangione'],
//     image:
//       'https://m.media-amazon.com/images/M/MV5BMTg4OTExMjE0NF5BMl5BanBnXkFtZTgwNjMyODg0MjE@._V1_.jpg',
//     poster:
//       'https://m.media-amazon.com/images/M/MV5BMTIzNjc0ODc0N15BMl5BanBnXkFtZTYwNDY4Njk5._V1_.jpg',
//     number: 5,
//     showCode: 'koth'
//   };

//   const validProps: Props = {
//     episode: validEpisode
//   };

//   let rendered: RenderResult;
//   let getAllByText: Function;
//   let getByText: Function;
//   let queryByText: Function;

// describe('with valid episode prop', () => {
//     beforeEach(() => {
//       rendered = renderTestComponent(EpisodePreview, validProps);
//       getByText = rendered.getByText;
//       getAllByText = rendered.getAllByText;
//     });

//     describe('Renders episode properties', () => {
//       it('Renders each guest name', () => {
//         console.log('RENDERED', rendered);
//         // expect(getAllByText(validGuests[0]).length).toBe(1);
//       });
//     });
//   });

//   // describe('Negative cases', () => {
//   //   it('... ', () => {
//   //   });
//   // });
// });
