import { Component } from "solid-js";
import { artistId, setArtistId } from "@state/artistId";

type Props = {
  artist: any;
};

const ArtistItem: Component<Props> = (props) => {
  const artistIsSelected = () => {
    return props.artist.id === artistId() ?? false;
  };

  const handleSelectArtist = () => {
    setArtistId(props.artist.id);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <p>{props.artist.name}</p>
        {artistIsSelected() && (
          <p style={{ color: "green" }}>This artist is selected</p>
        )}
        <button onClick={handleSelectArtist}>click me</button>
      </div>
      ,
    </>
  );
};

export default ArtistItem;
