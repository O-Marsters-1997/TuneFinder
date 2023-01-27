import type { Component } from "solid-js";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
import Text from "@common/Text";
import Button from "@common/Button";

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
      <Text text="hello what are you talking about" />
      <Button
        text="please click me boy"
        onClick={() => {
          console.log("testing this pattern");
        }}
      />
    </>
  );
};

export default ArtistList;
