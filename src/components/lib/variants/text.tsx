import type { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";
import { css } from "@emotion/css";
import { getColorVariant } from "@utils/style/style.helpers";
import { componentVariantsHoc } from "@base/utils/style/hoc";
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

const MyText = styled.p<TextProps>`
  color: ${({ colorvariant }) => colorvariant && colorvariant};
  color: ${({ lineheight }) => lineheight && lineheight};
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : "normal")};
`;

const TextOtherStyles = (props: TextProps) => {
  return {
    h1: css`
      font-family: "Arial";
      font-size: 62px;
      font-weight: 800;
    `,
    h2: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    h3: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    h4: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    h5: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    h6: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    body2: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    caption: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    subtitle1: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
    subtitle2: css`
      font-family: "Arial";
      font-size: 32px;
      font-weight: 800;
    `,
  };
};

const TextBase: Component<TextProps> = (props) => {
  return (
    <MyText
      text={props.text}
      variant={props.variant}
      as={getTextVariant(props.variant ?? "body1")}
      class={props.class}
      colorvariant={props.colorvariant}
      lineheight={props.lineheight}
      sizeadjust={props.sizeadjust}
      style={props.style}
    >
      {props.text}
    </MyText>
  );
};

const TextH1 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).h1,
    },
    props,
  );
};

const TextH2 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).h2,
    },
    props,
  );
};

const TextH3 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).h3,
    },
    props,
  );
};

const TextH4 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).h4,
    },
    props,
  );
};

const TextH5 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).h5,
    },
    props,
  );
};

const TextH6 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).h6,
    },
    props,
  );
};

const TextBody2 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).body2,
    },
    props,
  );
};

const TextCaption = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).caption,
    },
    props,
  );
};

const TextSubtitle1 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).subtitle1,
    },
    props,
  );
};

const TextSubtitle2 = (props: TextProps) => {
  return componentVariantsHoc(
    TextBase,
    {
      class: TextOtherStyles(props).subtitle2,
    },
    props,
  );
};

export const textVariantsMap = {
  body1: TextBase,
  h1: TextH1,
  h2: TextH2,
  h3: TextH3,
  h4: TextH4,
  h5: TextH5,
  h6: TextH6,
  body2: TextBody2,
  caption: TextCaption,
  subtitle1: TextSubtitle1,
  subtitle2: TextSubtitle2,
};
