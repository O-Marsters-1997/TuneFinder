import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { useAuthorisation } from "../contexts/Authorisation.context";

export const [artists, setArtists] = createSignal<any>();
export const [hello, setHello] = createSignal<string>("hllo");

const Searchbar: Component = () => {
  const [searchStatus, setSearchStatus] = createSignal<string>("");

  const { token } = useAuthorisation();

  const search = async () => {
    // Get artist ID
    if (searchStatus() !== "") {
      const artistParameters = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchStatus()}&type=artist`,
        artistParameters,
      );
      const data = await res.json();
      setArtists(await data.artists.items);
    }
  };

  const handleChange = (e: any) => {
    setSearchStatus(e.currentTarget.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchStatus()}
        onInput={handleChange}
      />
      <button onClick={search}>Click me</button>
      <button onClick={() => setHello("hello")}>Clcik to set hello</button>
    </div>
  );
};

export default Searchbar;
