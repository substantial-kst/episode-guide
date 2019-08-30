import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import EpisodeImage, { Props } from './EpisodeImage';

const renderTestComponent = (
  Component: React.FC<Props>,
  props: any
): RenderResult => {
  return render(<Component {...props} />);
};

describe('Episode Image', () => {
  const validImage: Props = {
    imageUrl: 'http://thisimageplace.com/validImage'
  };
  const validThumbnailImage: Props = {
    imageUrl: 'http://thisimageplace.com/validThumbnail',
    size: 'thumbnail'
  };
  const emptyUrl: Props = {
    imageUrl: ''
  };

  const validProps: any = {
    image: validImage,
    thumbnail: validThumbnailImage,
    emptyUrl: emptyUrl
  };

  let rendered: RenderResult;
  let getAllByText: Function;
  let getByText: Function;
  let queryByText: Function;

  describe('With valid image prop', () => {
    describe('renders expected URL', () => {
      it('should apply image src of string', () => {
        rendered = renderTestComponent(EpisodeImage, validProps.image);
        const image = rendered.getByAltText('Episode Screencap');
        expect(image.getAttribute('src')).toBe(
          'http://thisimageplace.com/validImage'
        );
      });
      it('with thumbnail string', () => {
        rendered = renderTestComponent(EpisodeImage, validProps.thumbnail);
        const image = rendered.getByAltText('Episode Screencap');
        expect(image.getAttribute('src')).toBe(
          'http://thisimageplace.com/validThumbnail'
        );
      });
      it('with empty URL string', () => {
        rendered = renderTestComponent(EpisodeImage, validProps.emptyUrl);
        const image = rendered.getByAltText('Episode Screencap');
        expect(image.getAttribute('src')).toBe('');
      });
    });
    describe('should render expected image size', () => {
      it('with no size provided', () => {
        rendered = renderTestComponent(EpisodeImage, validProps.image);
        // check Wrapper width
      });
      it('with size string thumbnail', () => {
        rendered = renderTestComponent(EpisodeImage, validProps.thumbnail);
        // check Wrapper width
      });
      it('with size string thumbnail', () => {
        rendered = renderTestComponent(EpisodeImage, validProps.thumbnail);
        // check Wrapper width
      });
    });
  });

  // describe('Negative cases', () => {
  //   it('... ', () => {
  //   });
  // });
});
