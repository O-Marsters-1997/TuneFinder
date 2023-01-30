import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
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
      <Button text="click me" onClick={() => console.log("hello world")} />
    </>
  );
};

export default ArtistList;
