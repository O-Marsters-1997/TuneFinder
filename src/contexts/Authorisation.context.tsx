import type { Component, JSX } from "solid-js";
import {
  createSignal,
  onMount,
  createEffect,
  createContext,
  useContext,
  Show,
} from "solid-js";
import useLogger from "@hooks/useLogger";

const AuthorisationContext = createContext();

type Props = {
  children: JSX.Element;
};

export const AuthorisationProvider: Component<Props> = (props) => {
  const [authParams, setAuthParams] = createSignal<AuthParams | undefined>();
  const [token, setToken] = createSignal<string | undefined>();
  const logger = useLogger();

  const paramsObj = {
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
    clientId: import.meta.env.VITE_CLIENT_ID,
    redirectUrl: import.meta.env.VITE_REDIRECT_URI,
    authEndPoint: import.meta.env.VITE_AUTH_ENDPOINT,
    responseType: import.meta.env.VITE_RESPONSE_TYPE,
  };

  onMount(async () => {
    setToken(await getAccessToken());
  });

  async function getAccessToken() {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${paramsObj.clientId}&client_secret=${paramsObj.clientSecret}`,
    };
    try {
      const accessToken = await fetch(
        "https://accounts.spotify.com/api/token",
        authParameters,
      );
      const data = await accessToken.json();
      return data?.access_token;
    } catch (err) {
      logger.error(err);
    }
    return token;
  }

  const mergeToken = () => {
    return { ...paramsObj, ...{ token: token() } };
  };

  createEffect(() => {
    if (token()) {
      setAuthParams(mergeToken());
    }
  });

  return (
    <>
      {authParams() !== undefined && (
        <Show when={authParams()} fallback={<div>I am loading</div>}>
          <AuthorisationContext.Provider value={authParams()}>
            {props.children}
          </AuthorisationContext.Provider>
        </Show>
      )}
    </>
  );
};

export const useAuthorisation = (): IAuth => {
  return useContext(AuthorisationContext) as IAuth;
};
