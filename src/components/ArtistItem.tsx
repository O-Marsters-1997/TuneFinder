import { Component } from "solid-js";
import Text from "@common/Text";
import { artistId, setArtistId } from "@state/artistId";

type Props = {
  artist: any;
};

const ArtistItem: Component<Props> = (props) => {
  const { artist } = props;
  const artistIsSelected = () => {
    return props.artist.id === artistId() ?? false;
  };

  const handleSelectArtist = () => {
    setArtistId(artist.id);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Text text={artist.name} />
        {artistIsSelected() && (
          <Text
            text="this artist is selected"
            variant="h1"
            colorvariant="green"
          />
        )}
        <button onClick={handleSelectArtist}>click me</button>
      </div>
      ,
    </>
  );
};

export default ArtistItem;
