// @flow
export type ReviewAPIResponse = {
  album: string,
  artist: string,
  portada: string,
  url: string,
  uuid: string
};

export type ReviewProps = {
  album: string,
  alt?: string,
  artist: string,
  url: string
};
