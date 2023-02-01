import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { For } from "solid-js";
import { artists } from "@components/Searchbar";
import ArtistItem from "@components/ArtistItem";
import Button from "@common/Button";
import { artistId } from "@state/artistId";
import { useAuthorisation } from "@contexts/Authorisation.context";

const ArtistList: Component = () => {
  const { token } = useAuthorisation();
  const getPlaylists = async () => {
    const playlistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(
      `https://api.spotify.com/v1/browse/featured-playlists`,
      playlistParameters,
    );
    console.log(await res.json());
  };

  return (
    <>
      <For each={artists()} fallback={<div>Artists are loading</div>}>
        {(artist) => (
          <>
            <ArtistItem artist={artist} />
          </>
        )}
      </For>
      <Button text="click me" onClick={getPlaylists} variant="rounded" />
    </>
  );
};

export default ArtistList;
