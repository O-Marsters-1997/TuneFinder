/* @refresh reload */
import { render } from "solid-js/web";
import { ThemeProvider } from "solid-styled-components";
import { theme } from "./theme/theme";
import App from "@base/App";
import { AuthorisationProvider } from "@contexts/Authorisation.context";

render(
  () => (
    <ThemeProvider theme={theme}>
      <AuthorisationProvider>
        e
        <App />
      </AuthorisationProvider>
    </ThemeProvider>
  ),
  document.getElementById("root") as HTMLElement,
);
