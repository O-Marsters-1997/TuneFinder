import type { Component } from "solid-js";
import "solid-styled-components";
import { ButtonProps } from "@components/lib/variants/button";
import { ViewProps } from "@components/lib/variants/view";
import { TextProps } from "@components/lib/variants/text";

declare module "solid-styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: Styles.PaletteOptions;
    };
    variants: {
      view: {
        base: Component<ViewProps>;
        other: Component<ViewProps>;
        random: Component<ViewProps>;
      };
      text: {
        body1: Component<TextProps>;
        h1: Component<TextProps>;
        h2: Component<TextProps>;
        h3: Component<TextProps>;
        h4: Component<TextProps>;
        h5: Component<TextProps>;
        h6: Component<TextProps>;
        body2: Component<TextProps>;
        caption: Component<TextProps>;
        subtitle1: Component<TextProps>;
        subtitle2: Component<TextProps>;
      };
      button: {
        base: Component<ButtonProps>;
        rounded: Component<ButtonProps>;
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
