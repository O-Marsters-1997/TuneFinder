import type { Component } from "solid-js";
import { Typography } from "@suid/material";
import { styled } from "solid-styled-components";

type StyleProps = {
  colorvariant?: string;
  lineheight?: number;
  sizeadjust?: number;
};

export const add = (num1: number, num2: number) => {
  return num1 + num2;
};

type Props = {
  text: string;
} & StyleProps;

const getColorVariant = (color: string) => {
  return color;
};

const StyledText = styled(Typography)<Props>`
  color: ${({ colorvariant }) => colorvariant && getColorVariant(colorvariant)};
  line-height: ${({ lineheight }) => lineheight && lineheight};
`;

const Text: Component<Props> = (props) => {
  return (
    <StyledText
      text={props.text}
      colorvariant={props.colorvariant}
      lineheight={props.lineheight}
      sizeadjust={props.sizeadjust}
    >
      {props.text}
    </StyledText>
  );
};

export default Text;
