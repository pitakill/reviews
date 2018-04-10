// @flow
import * as React from 'react';
import moment from 'moment-timezone';
import localization from 'moment/locale/es-us';
import 'Components/Review.css';
import type {ReviewProps} from 'Components/Review.types';

moment.updateLocale('es-us', localization);

const Review = ({album, alt, artist, url: src, timestamp}: ReviewProps):React.Element<'figure'> =>
  <figure className="Review">
    <img
      alt={alt}
      src={src}
      />
    <figcaption>
      <h3>{artist}</h3>
      <p>{album}</p>
      <time>{moment(timestamp).tz('America/Mexico_City').startOf('day').fromNow()}</time>
    </figcaption>
  </figure>

export default Review;
