import type { Component } from "solid-js";
import "solid-styled-components";
import { ButtonProps } from "@components/lib/variants/button";
import { Props as ViewProps } from "@components/lib/variants/view";

declare module "solid-styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: Styles.PaletteOptions;
    };
    variants: {
      button: {
        base: Component<ButtonProps>;
        rounded: Component<ButtonProps>;
      };
      view: {
        base: Component<ViewProps>;
      };
    };
  }
}

declare module Styles {
  interface PaletteOptions {
    main: CSS.ColorVariant;
    alternative?: CSS.ColorVariant;
    muted?: CSS.ColorVariant;
    additional?: CSS.ColorVariant;
  }
}
