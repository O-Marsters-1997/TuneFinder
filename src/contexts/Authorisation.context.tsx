import type { Component } from "solid-js";
import {
  createSignal,
  onMount,
  //   createEffect,
  createContext,
  useContext,
  Show,
  JSX,
} from "solid-js";

const AuthorisationContext = createContext();

interface Props {
  children: JSX.Element;
}

// testing commit

export const AuthorisationProvider: Component<Props> = (props) => {
  const [authParams, setAuthParams] = createSignal<string | undefined>();

  onMount(() => {
    setAuthParams("Hello world");
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

export const useAuthorisation = () => {
  return useContext(AuthorisationContext);
};
