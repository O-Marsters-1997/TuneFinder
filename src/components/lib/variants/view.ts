import type { JSX } from "solid-js";
import { styled } from "solid-styled-components";

export type StyleViewProps = {
  height?: string;
  width?: string;
  backgroundColor?: string;
};

export type Props = {
  variant?: CSS.ViewVariants;
  children?: JSX.Element;
  as?: CSS.ViewComponents;
} & StyleViewProps;

export const ViewBase = styled.div<Props>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme?.palette.primary.main.base};
`;

export const viewVariantsMap = {
  base: ViewBase,
};
