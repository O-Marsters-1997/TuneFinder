import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { useAuthorisation } from "../contexts/Authorisation.context";

const Searchbar: Component = () => {
  const [searchStatus, setSearchStatus] = createSignal<string>("");

  const { token } = useAuthorisation();
  console.log(token);

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
      console.log(data.artists.items[0].name);
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
    </div>
  );
};

export default Searchbar;
