// @flow
import * as React from 'react';
import 'Components/Grid.css';
import Review from 'Components/Review';
import type {GridState} from 'Components/Grid.types';
import {Link} from 'react-router-dom';
import {API_URL} from 'Constants';

class Grid extends React.Component<{}, GridState> {
  state = {
    reviews: []
  };

  async componentDidMount(): Promise<fetch> {
    try {
      const dataRaw = await fetch(`${API_URL}/api/contents?type=Review&count=-1`);
      const {data: reviews} = await dataRaw.json();
      this.setState({reviews});
    } catch (e) {
      console.error(e);
    }
  }

  render(): React.Element<'main'> {
    const {reviews} = this.state;
    return <main className="Grid">
      { reviews.map(({album, artist, uuid: key, portada: url, timestamp, slug}) => {
        const linkProps = {to: slug, key};
        const reviewProps = {album, artist, timestamp};
        return (
          <Link {...linkProps}>
            <Review
              {...reviewProps}
              alt={`Cover of ${album} by ${artist}`}
              url={API_URL + url}
            />
          </Link>
        )}
      )}
    </main>
  }
}

export default Grid;
