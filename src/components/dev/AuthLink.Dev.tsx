import type { Component } from "solid-js";
import { useAuthorisation } from "../../contexts/Authorisation.context";

const AuthLink: Component = () => {
  const { authEndPoint, clientId, redirectUrl, responseType } =
    useAuthorisation();
  return (
    <a
      href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
      target="_blank"
    >
      Click here
    </a>
  );
};

export default AuthLink;
