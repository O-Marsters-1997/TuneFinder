import type { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

import { getColorVariant } from "@utils/style/style.helpers";

type StyleProps = {
  colorvariant?: string;
  lineheight?: number;
  sizeadjust?: number;
  fontStyle?: CSS.FontStyle;
};

export type Props = {
  text: string;
  variant?: CSS.TextVariants;
  as?: CSS.TextComponents;
  children?: JSX.Element;
} & StyleProps;

const StyledText = styled("p")<Props>`
  color: ${({ colorvariant }) => colorvariant && getColorVariant(colorvariant)};
  line-height: ${({ lineheight }) => lineheight && lineheight};
  font-style: ${({ fontStyle }) => fontStyle && fontStyle};
  background-color: blue;
` as Component<Props>;

const StyledH1 = styled(StyledText)`
  font-family: "Arial";
  font-size: 62px;
  font-weight: 800;
`;

const StyledH2 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH3 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH4 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH5 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH6 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledBody2 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledCaption = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledSubtitle1 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledSubtitle2 = styled(StyledText)`
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

export const textVariantsMap = {
  base: StyledText,
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
  body2: StyledBody2,
  caption: StyledCaption,
  subtitle1: StyledSubtitle1,
  subtitle2: StyledSubtitle2,
};
