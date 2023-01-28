import type { JSX } from "solid-js";
import { styled, DefaultTheme } from "solid-styled-components";

type StyleViewProps = {
  height?: string;
  width?: string;
  backgroundColor?: string;
  theme?: DefaultTheme;
};

export type ViewProps = {
  variant?: CSS.ViewVariants;
  children?: JSX.Element;
  as?: CSS.ViewComponents;
  height?: string;
  width?: string;
  backgroundColor?: string;
} & StyleViewProps;

const ViewOtherStyles = (props: ViewProps): string => {
  const { height, width, backgroundColor, theme } = props;
  return `
    height: ${height && height};
    width: ${width && width};
    background-color: ${
      backgroundColor ? backgroundColor : theme?.palette.primary.main.base
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
