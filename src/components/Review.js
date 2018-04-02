// @flow
import * as React from 'react';
import 'Components/Review.css';
import type {ReviewProps} from 'Components/Review.types';

const Review = ({album, alt, artist, url: src}: ReviewProps):React.Element<'figure'> =>
  <figure className="Review">
    <img
      alt={alt}
      src={src}
      />
    <figcaption>
      <h3>{artist}</h3>
      <p>{album}</p>
    </figcaption>
  </figure>

export default Review;
