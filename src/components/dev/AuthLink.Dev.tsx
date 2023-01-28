import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { A } from "@solidjs/router";
import Text from "@common/Text";
import { useAuthorisation } from "../../contexts/Authorisation.context";

const StyledA = styled(A)`
  background-color: red;
  width: fit-content;
`;

const AuthLink: Component = () => {
  const { authEndPoint, clientId, redirectUrl, responseType } =
    useAuthorisation();

  return (
    <>
      <Text text="hello world" />
      <StyledA
        href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
        target="_blank"
      >
        Click me
        {/* <Text text="click me" /> */}
      </StyledA>
    </>
  );
};

export default AuthLink;
