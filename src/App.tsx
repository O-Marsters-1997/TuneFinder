import type { Component } from "solid-js";
import Searchbar from "./components/Searchbar";
import AuthLink from "./components/dev/AuthLink.Dev";

const App: Component = () => {
  return (
    <div>
      <AuthLink />
      <Searchbar />
    </div>
  );
};

export default App;
