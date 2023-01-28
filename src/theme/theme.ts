import { DefaultTheme } from "solid-styled-components";
import { buttonVariantsMap } from "@components/lib/variants/button";
import { viewVariantsMap } from "@components/lib/variants/view";

export const theme: DefaultTheme = {
  palette: {
    primary: {
      main: {
        base: "grey",
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
    view: {
      base: viewVariantsMap.base,
    },
  },
};

export const globalStyles = {};
