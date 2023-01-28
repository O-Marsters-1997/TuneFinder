import type { Component } from "solid-js";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
import Text from "@common/Text";
import Button from "@common/Button";
import View from "@common/View";

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
      <button
        onClick={() => {
          console.log("hello world");
        }}
      >
        Click me
      </button>
      <Text text=" what are you talking about" />
      <Button
        text="please click me boy"
        onClick={() => {
          console.log("testing this pattern");
        }}
      />
      <View height="500px" width="500px" />
    </>
  );
};

export default ArtistList;
