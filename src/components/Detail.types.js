// @flow
import type {ReviewAPIResponse} from 'Components/Review.types';

export type DetailProps = {
  match: {
    params: {
      slug: string
    }
  }
};

type extensionDetailState = {
  body: string,
  rating: ?number
};

export type DetailState = ReviewAPIResponse & extensionDetailState;
