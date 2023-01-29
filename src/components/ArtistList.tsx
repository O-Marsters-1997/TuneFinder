import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
import Text from "@common/Text";
import Button from "@common/Button";
import View from "@common/View";

const StyledText = styled(Text)`
  color: green;
`;

const ArtistList: Component = () => {
  return (
    <>
      <For each={artists()} fallback={<div>Artists are loading</div>}>
        {(artist) => (
          <>
            <ArtistItem artist={artist} />
          </>
        )}
      </For>
      <StyledText text=" what are you talking about" />
      <Button
        text="please click me boy"
        onClick={() => {
          console.log("testing this pattern");
        }}
        variant="rounded"
        colorVariant="green"
      />
      <Button
        text="please click me boy"
        onClick={() => {
          console.log("testing this pattern");
        }}
        variant="rounded"
        colorVariant="green"
      />
      <View height="500px" width="500px" variant="other" />
      <div>Hello world</div>
    </>
  );
};

export default ArtistList;
