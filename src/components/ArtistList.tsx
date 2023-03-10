import type { Component } from "solid-js";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";

const ArtistList: Component = () => {
  return (
    <For each={artists()} fallback={<div>Artists are loading</div>}>
      {(artist) => <ArtistItem artist={artist} />}
    </For>
  );
};

export default ArtistList;
