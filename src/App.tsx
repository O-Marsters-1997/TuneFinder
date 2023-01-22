import type { Component } from "solid-js";
import Searchbar from "./components/Searchbar";
import { useAuthorisation } from "./contexts/Authorisation.context";

const App: Component = () => {
  const { authEndPoint, clientId, redirectUrl, responseType } =
    useAuthorisation();

  return (
    <div>
      <a
        href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
        target="_blank"
      >
        Click here
      </a>
      <Searchbar />
    </div>
  );
};

export default App;
