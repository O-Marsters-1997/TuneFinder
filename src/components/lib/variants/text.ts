import type { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";

import { getColorVariant } from "@utils/style/style.helpers";

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
} & StyleTextProps;

const textBaseMixin = (props: TextProps): string => {
  const { colorvariant, lineheight, fontStyle } = props;
  return `
    color: ${colorvariant && getColorVariant(colorvariant)};
    line-height: ${lineheight && lineheight};
    font-style: ${fontStyle && fontStyle};
  `;
};

const StyledBody1 = styled.p<TextProps>`
  ${(props) => textBaseMixin(props)};
` as Component<TextProps>;

const StyledH1 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 62px;
  font-weight: 800;
`;

const StyledH2 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH3 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH4 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH5 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledH6 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledBody2 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledCaption = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledSubtitle1 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

const StyledSubtitle2 = styled(StyledBody1)`
  ${(props) => textBaseMixin(props)};
  font-family: "Arial";
  font-size: 32px;
  font-weight: 800;
`;

export const textVariantsMap = {
  body1: StyledBody1,
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
