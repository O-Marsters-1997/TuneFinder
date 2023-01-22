/* @refresh reload */
import { render } from "solid-js/web";
import App from "@base/App";
import { AuthorisationProvider } from "@contexts/Authorisation.context";

render(
  () => (
    <AuthorisationProvider>
      <App />
    </AuthorisationProvider>
  ),
  document.getElementById("root") as HTMLElement,
);
