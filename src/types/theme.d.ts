import "solid-styled-components";

declare module "solid-styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: Styles.PaletteOptions;
    };
    variants: {
      button: {
        base: any;
        rounded: any;
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
