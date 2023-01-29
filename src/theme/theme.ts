import { DefaultTheme } from "solid-styled-components";
import useComponentVariants from "../hooks/useComponentVariants";

const { viewVariantsMap, textVariantsMap, buttonVariantsMap } =
  useComponentVariants;

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
      other: viewVariantsMap.other,
    },
    text: {
      body1: textVariantsMap.body1,
      h1: textVariantsMap.h1,
      h2: textVariantsMap.h2,
      h3: textVariantsMap.h3,
      h4: textVariantsMap.h4,
      h5: textVariantsMap.h5,
      h6: textVariantsMap.h6,
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
