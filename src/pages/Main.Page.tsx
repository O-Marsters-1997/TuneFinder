import type { Component } from "solid-js";
import Searchbar from "@components/Searchbar";
import AuthLink from "@components/dev/AuthLink.Dev";
import ArtistList from "@components/ArtistList";

const MainPage: Component<Props> = () => {
  return (
    <div class="main-page-container">
      <AuthLink />
      <Searchbar />
      <ArtistList />
    </div>
  );
};

export default MainPage;
