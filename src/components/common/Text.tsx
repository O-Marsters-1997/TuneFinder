import type { Component } from "solid-js";
import { Typography } from "@suid/material";
import { styled } from "solid-styled-components";

type StyleProps = {
  colorvariant?: string;
  lineheight?: number;
  sizeadjust?: number;
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

const Text: Component<Props> = ({
  text,
  colorvariant,
  lineheight,
  sizeadjust,
}) => {
  return (
    <StyledText
      text={text}
      colorvariant={colorvariant}
      lineheight={lineheight}
      sizeadjust={sizeadjust}
    >
      {text}
    </StyledText>
  );
};

export default Text;
