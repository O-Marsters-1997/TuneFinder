import type { Component } from "solid-js";
import { For } from "solid-js";
import useLogger from "@hooks/useLogger";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
import Text from "@common/Text";
import Button from "@common/Button";
import View from "@common/View";

const ArtistList: Component = () => {
  const logger = useLogger();

  return (
    <>
      <For each={artists()} fallback={<div>Artists are loading</div>}>
        {(artist) => (
          <>
            <ArtistItem artist={artist} />
          </>
        )}
      </For>
      <Text text=" what are you talking about" variant="h2" />
      <Button
        text="please click me boy"
        onClick={() => {
          logger.log("testing this pattern");
        }}
        variant="rounded"
        colorVariant="green"
      />

      <View height="500px" width="500px" variant="random" />
    </>
  );
};

export default ArtistList;
