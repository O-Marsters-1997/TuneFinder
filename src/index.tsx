/* @refresh reload */
import { render } from "solid-js/web";
import { ThemeProvider } from "solid-styled-components";
import App from "@base/App";
import { AuthorisationProvider } from "@contexts/Authorisation.context";
import { theme } from "./theme/theme";

render(
  () => (
    <ThemeProvider theme={theme}>
      <AuthorisationProvider>
        <App />
      </AuthorisationProvider>
    </ThemeProvider>
  ),
  document.getElementById("root") as HTMLElement,
);
