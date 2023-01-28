import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import View from "@common/View";
import Text from "@common/Text";
import { useAuthorisation } from "../../contexts/Authorisation.context";

const AuthLink: Component = () => {
  const { authEndPoint, clientId, redirectUrl, responseType } =
    useAuthorisation();

  return (
    <View maxWidth="fit-content">
      <A
        href={`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}`}
        target="_blank"
      >
        <Text text="click me" />
      </A>
    </View>
  );
};

export default AuthLink;
