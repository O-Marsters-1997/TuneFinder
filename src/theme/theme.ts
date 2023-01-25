import { DefaultTheme } from "solid-styled-components";
import { buttonVariantsMap } from "@components/lib/variants/button";

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: {
        base: "red",
      },
      alternative: {
        base: "green",
      },
    },
  },
  variants: {
    button: {
      base: buttonVariantsMap.base,
      rounded: buttonVariantsMap.rounded,
    },
  },
};
