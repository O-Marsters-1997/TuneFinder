/* @refresh reload */
import { render } from "solid-js/web";
import { ThemeProvider } from "solid-styled-components";
import App from "@base/App";
import { AuthorisationProvider } from "@contexts/Authorisation.context";
import { HopeProvider } from "@hope-ui/solid";
import { theme } from "./theme/theme";

render(
  () => (
    <HopeProvider>
      <ThemeProvider theme={theme}>
        <AuthorisationProvider>
          <App />
        </AuthorisationProvider>
      </ThemeProvider>
    </HopeProvider>
  ),
  document.getElementById("root") as HTMLElement,
);
