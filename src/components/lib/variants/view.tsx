import type { Component, JSX } from "solid-js";
import { styled, DefaultTheme } from "solid-styled-components";
import { css } from "@emotion/css";
import { viewComponents } from "@myTypes/constants";

type StyleViewProps = {
  height?: string;
  width?: string;
  maxWidth?: string;
  maxHeight?: string;
  backgroundColor?: string;
  theme?: DefaultTheme;
  style?: JSX.CSSProperties;
};

type ModifiedState = { class: string };

export type ViewProps = {
  variant?: CSS.ViewVariants;
  children?: JSX.Element;
  as?: CSS.ViewComponents;
  class?: string;
} & StyleViewProps;

const ViewStyles = (props: ViewProps) => `
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

const MyView = styled.div<ViewProps>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  background-color: blue;
`;

const ViewOtherStyles = (props: ViewProps) => {
  return {
    other: css`
      border: 2px solid orange;
    `,
  };
};

const withModifiedState = (
  OriginalComponent: Component<ViewProps>,
  modifiedState: ModifiedState,
  props: ViewProps,
) => {
  const ModifiedComponent: Component<ViewProps> = (props) => {
    return <OriginalComponent {...props} {...modifiedState} />;
  };
  return ModifiedComponent(props);
};

export const ViewBase: Component<ViewProps> = (props) => {
  return (
    <MyView
      variant={props.variant}
      height={props.height}
      width={props.width}
      maxWidth={props.maxWidth}
      maxHeight={props.maxHeight}
      as={props.as ?? viewComponents.div}
      class={props.class}
      style={props.style}
    />
  );
};

export const ViewOther = (props: ViewProps) => {
  return withModifiedState(
    ViewBase,
    {
      class: ViewOtherStyles(props).other,
    },
    props,
  );
};

// const ViewBase = styled.div<ViewProps>`
//   ${(props) => ViewStyles(props)}
// `;

// const ViewOther = styled(ViewBase)<ViewProps>`
//   ${(props) => ViewStyles(props)};
//   border: 2px solid orange;
// `;

export const viewVariantsMap = {
  base: ViewBase,
  other: ViewOther,
};
