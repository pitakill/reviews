// @flow
import * as React from 'react';
import type {
  DetailProps,
  DetailState
} from 'Components/Detail.types';
import {API_URL} from 'Constants';
import 'Components/Detail.css';

class Detail extends React.Component<DetailProps, DetailState> {
  state = {
    album: '',
    artist: '',
    body: '',
    portada: '',
    url: '',
    uuid: '',
    rating: undefined,
    slug: '',
    timestamp: ''
  };

  async componentDidMount(): Promise<fetch> {
    try {
      const dataRaw = await fetch(`${API_URL}/api/content?type=Review&slug=${this.props.match.params.slug}`);
      const {data: [detail]} = await dataRaw.json();
      this.setState(detail);
    } catch (e) {
      console.error(e);
    }
  }

  render(): React.Element<'div'> {
    const {
      album,
      artist,
      body,
      portada,
      rating
    } = this.state;

    return <div className="Detail">
      <section>
        <div>
          <h3>{artist}</h3>
          <h2>{album}</h2>
        </div>
        <img
          alt={`${album} by ${artist}`}
          src={API_URL + portada}
          />
        <span>{rating}</span>
      </section>
      <main dangerouslySetInnerHTML={{__html: body}}/>
    </div>
  }
}

export default Detail;
