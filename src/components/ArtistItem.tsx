import type { Component } from "solid-js";

type Props = {
  artist: any;
};

const ArtistItem: Component<Props> = (props) => {
  return <div>{props.artist.name}</div>;
};

export default ArtistItem;
