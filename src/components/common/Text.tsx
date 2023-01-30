import type { Component, JSX } from "solid-js";
import { mergeProps } from "solid-js";
import { textVariants } from "@myTypes/constants";
import { getText } from "@theme/variant.helpers";
import { getTextVariant } from "@utils/style/style.helpers";

type StyleTextProps = {
  colorvariant?: string;
  lineheight?: number;
  sizeadjust?: number;
  fontStyle?: CSS.FontStyle;
  style?: JSX.CSSProperties;
};

export type TextProps = {
  text: string;
  variant?: CSS.TextVariants;
  as?: CSS.TextComponents;
  children?: JSX.Element;
  class?: string;
} & StyleTextProps;

const Text: Component<TextProps> = (_props) => {
  const props = mergeProps({ variant: textVariants.body1 }, _props);
  const TextVariant = getText(props.variant);

  return (
    <TextVariant
      text={props.text}
      variant={props.variant}
      as={getTextVariant(props.variant)}
      class={props.class}
      colorvariant={props.colorvariant}
      lineheight={props.lineheight}
      sizeadjust={props.sizeadjust}
      style={props.style}
    >
      {props.text}
    </TextVariant>
  );
};

export default Text;
