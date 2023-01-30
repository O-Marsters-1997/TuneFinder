import type { Component, JSX } from "solid-js";
import { DefaultTheme } from "solid-styled-components";
import { viewVariants } from "@myTypes/constants";
import { getView } from "@theme/variant.helpers";

type StyleViewProps = {
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  backgroundColor?: string;
  theme?: DefaultTheme;
  style?: JSX.CSSProperties;
};

export type ViewProps = {
  variant?: CSS.ViewVariants;
  children?: JSX.Element;
  as?: CSS.ViewComponents;
  class?: string;
} & StyleViewProps;

const View: Component<ViewProps> = (props) => {
  const ViewVariant = getView(props.variant ?? viewVariants.base);

  return (
    <ViewVariant
      variant={props.variant}
      height={props.height}
      width={props.width}
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
      as={props.as}
      class={props.class}
      style={props.style}
    >
      {props.children}
    </ViewVariant>
  );
};

export default View;
