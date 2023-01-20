import { createSignal, createEffect } from "solid-js";
import type { Component } from "solid-js";

const clientId: string = import.meta.env.VITE_CLIENT_ID;
const clientSecret: string = import.meta.env.VITE_CLIENT_SECRET;
const redirectUrl: string = import.meta.env.VITE_REDIRECT_URI;
const authEndPoint: string = import.meta.env.VITE_AUTH_ENDPOINT;
const responseType: string = import.meta.env.VITE_RESPONSE_TYPE;

const App: Component = () => {
  const [token, setToken] = createSignal<string | null>("");

  const getAccessToken = async () => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    };
    try {
      const accessToken = await fetch(
        "https://accounts.spotify.com/api/token",
        authParameters,
      );
      const data = await accessToken.json();
      return data?.access_token;
    } catch (err) {
      console.log(err);
    }
  };

  createEffect(async () => {
    setToken(await getAccessToken());
  });

  return (
    <div>
      <a
        href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
        target="_blank"
      >
        Click here
      </a>
      <p>{token()}</p>
    </div>
  );
};

export default App;
