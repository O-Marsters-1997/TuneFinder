import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import Text from "@common/Text";
import { RowContainer } from "@components/lib";
import { artistId, setArtistId } from "@state/artistId";
import Button from "@common/Button";

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
      <RowContainer>
        <Text text={artist.name} />
        {artistIsSelected() && (
          <Text text="this artist is selected" colorvariant="green" />
        )}
        <Button text="click me" onClick={handleSelectArtist} />
      </RowContainer>
      ,
    </>
  );
};

export default ArtistItem;
