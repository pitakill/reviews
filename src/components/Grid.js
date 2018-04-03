// @flow
import * as React from 'react';
import 'Components/Grid.css';
import Review from 'Components/Review';
import type {GridState} from 'Components/Grid.types';
import {API_URL} from 'Constants';

class Grid extends React.Component<{}, GridState> {
  state = {
    reviews: []
  };

  async componentDidMount(): Promise<fetch> {
    try {
      const dataRaw = await fetch(`${API_URL}/api/contents?type=Review`);
      const {data: reviews} = await dataRaw.json();
      this.setState({reviews});
    } catch (e) {
      console.error(e);
    }
  }

  render(): React.Element<'main'> {
    const {reviews} = this.state;
    return <main className="Grid">
      {
        reviews.map(({album, artist, uuid: key, portada: url}) => (
          <Review
            {...{album, artist, key}}
            alt={`Cover of ${album} by ${artist}`}
            url={API_URL + url}
          />
        ))
      }
    </main>
  }
}

export default Grid;
