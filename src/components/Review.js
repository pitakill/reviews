// @flow
import * as React from 'react';
import './Review.css';

const Review = ():React.Element<'figure'> =>
  <figure className="Review">
    <img
      src="http://lorempixel.com/200/200/"
      alt="portada of album"
      />
    <figcaption>
      <h3>Nombre del artista</h3>
      <p>Nombre del disco</p>
    </figcaption>
  </figure>

export default Review;
