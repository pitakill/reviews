// @flow
import * as React from 'react';
import 'Components/Grid.css';
import Review from 'Components/Review';

const Elements: Array<React.Element<typeof Review>> = Array.from(
  new Array(20),
  (_, i): React.Element<typeof Review> => <Review key={`review${i + 1}`} />
);

const Grid = ():React.Element<'main'> => <main className="Grid">{Elements}</main>

export default Grid;
