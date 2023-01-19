import type { Component } from "solid-js";

const clientId: string = import.meta.env.VITE_CLIENT_ID;
// const clientSecret: string = import.meta.env.VITE_CLIENT_SECRET;
const redirectUrl: string = import.meta.env.VITE_REDIRECT_URI;
const authEndPoint: string = import.meta.env.VITE_AUTH_ENDPOINT;
const responseType: string = import.meta.env.VITE_RESPONSE_TYPE;

const App: Component = () => {
  console.log(authEndPoint);
  return (
    <div>
      <a
        href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
        target="_blank"
      >
        Click here
      </a>
    </div>
  );
};

export default App;
