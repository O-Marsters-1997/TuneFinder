/* @refresh reload */
import { render } from "solid-js/web";
import App from "@base/App";
import { AuthorisationProvider } from "@contexts/Authorisation.context";
import { HopeProvider } from "@hope-ui/solid";
import { config } from "@theme/config";

render(
  () => (
    <HopeProvider config={config}>
      <AuthorisationProvider>
        <App />
      </AuthorisationProvider>
    </HopeProvider>
  ),
  document.getElementById("root") as HTMLElement,
);
