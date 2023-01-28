import type { JSX } from "solid-js";
import { styled, DefaultTheme } from "solid-styled-components";

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
  backgroundColor?: string;
} & StyleViewProps;

const ViewOtherStyles = (props: ViewProps): string => {
  return `
    height: ${props.height && props.height};
    width: ${props.width && props.width};
    max-height: ${props.maxHeight && props.maxHeight};
    max-width: ${props.maxWidth && props.maxWidth};
    background-color: ${
      props.backgroundColor
        ? props.backgroundColor
        : props.theme?.palette.primary.main.base
    };
  `;
};

const ViewBase = styled.div<ViewProps>`
  ${(props) => ViewOtherStyles(props)}
`;

const ViewOther = styled(ViewBase)<ViewProps>`
  ${(props) => ViewOtherStyles(props)};
  border: 5px solid orange;
`;

export const viewVariantsMap = {
  base: ViewBase,
  other: ViewOther,
};
