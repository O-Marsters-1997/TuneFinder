import type { Component } from "solid-js";
import { createEffect } from "solid-js";
import Searchbar, { artists, setArtists } from "./components/Searchbar";
import AuthLink from "./components/dev/AuthLink.Dev";
import ArtistList from "./components/ArtistList";

const App: Component = () => {
  createEffect(() => {
    console.log(artists());
  });
  return (
    <div>
      <AuthLink />
      <Searchbar />
      <ArtistList />
      <button onClick={() => setArtists(null)}>Click me</button>
    </div>
  );
};

export default App;
