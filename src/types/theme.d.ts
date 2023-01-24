import "solid-styled-components";

declare module "solid-styled-components" {
  export interface DefaultTheme {}
}

declare module Styles {
  interface Palette {
    main: CSS.ColorVariant;
    contrastText: CSS.ColorVariant;
    muted?: CSS.ColorVariant;
    additional?: CSS.ColorVariant;
  }
}
