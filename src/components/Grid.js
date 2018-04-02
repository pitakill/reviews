// @flow
import * as React from 'react';
import 'Components/Grid.css';
import Review from 'Components/Review';

const Elements: Array<React.Element<typeof Review>> = Array.from(
  new Array(20),
  (_, i): React.Element<typeof Review> => {
    const album = 'Nombre del álbum';
    const alt = 'Portada del álbum';
    const artist = 'Nombre del artista';
    const key = `review${i + 1}`;
    const url = 'http://lorempixel.com/200/200/'
    return (
      <Review
        {...{album, alt, artist, key, url}}
      />
    );
  }
);

const Grid = ():React.Element<'main'> => <main className="Grid">{Elements}</main>

export default Grid;
