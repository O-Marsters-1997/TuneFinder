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

const ViewOtherBaseStyles = (props: ViewProps) => {
  return css`
    height: ${props.height && props.height};
    width: ${props.width && props.width};
    max-height: ${props.maxHeight && props.maxHeight};
    max-width: ${props.maxWidth && props.maxWidth};
    background-color: red;
  `;
};

const ViewOtherStyles = (props: ViewProps) => {
  return {
    other: css`
      border: 2px solid orange;
    `,
  };
};

// const OtherStyles = (props: ViewProps) => {
//   return `
//     background-color: ${
//       props.backgroundColor
//         ? props.backgroundColor
//         : props.theme?.palette.primary.main.base
//     };
//   `;
// };
const withModifiedState = (
  OriginalComponent: Component<ViewProps>,
  modifiedState: any,
  props: ViewProps,
) => {
  const ModifiedComponent: Component<ViewProps> = (props) => {
    return <OriginalComponent {...props} {...modifiedState} />;
  };
  return ModifiedComponent(props);
};

const MyView = styled.div<ViewProps>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  background-color: blue;
`;

export const MyBaseComponent: Component<ViewProps> = (props) => {
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
    >
      {props.children}
    </MyView>
  );
};

// export const MyModifiedComponent: Component<ViewProps> = (props) => {
//   const modifiedState = { cclass: ViewOtherStyles(props).otherlass: ViewOtherStyles(props).other };
//   return (
//     <MyBaseComponent {...props} {...modifiedState}>
//       {props.children}
//     </MyBaseComponent>
//   );
// };

export const MyModifiedComponent = (props: ViewProps) => {
  return withModifiedState(
    MyBaseComponent,
    {
      class: ViewOtherStyles(props).other,
    },
    props,
  );
};

const ViewBase = styled.div<ViewProps>`
  ${(props) => ViewStyles(props)}
`;

const ViewOther = styled(ViewBase)<ViewProps>`
  ${(props) => ViewStyles(props)};
  border: 2px solid orange;
`;

export const viewVariantsMap = {
  base: ViewBase,
  other: ViewOther,
};
