import { DefaultTheme } from "solid-styled-components";
import { buttonVariantsMap } from "@components/lib/variants/button";
import { viewVariantsMap } from "@components/lib/variants/view";
import { textVariantsMap } from "@components/lib/variants/text";

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
    view: {
      base: viewVariantsMap.base,
    },
    text: {
      h1: textVariantsMap.h1,
      h2: textVariantsMap.h2,
      h3: textVariantsMap.h3,
      h4: textVariantsMap.h4,
      h5: textVariantsMap.h5,
      h6: textVariantsMap.h6,
      body1: textVariantsMap.body1,
      body2: textVariantsMap.body2,
      caption: textVariantsMap.caption,
      subtitle1: textVariantsMap.subtitle1,
      subtitle2: textVariantsMap.subtitle2,
    },
    button: {
      base: buttonVariantsMap.base,
      rounded: buttonVariantsMap.rounded,
    },
  },
};

export const globalStyles = {};
