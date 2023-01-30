import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { css } from "@emotion/css";
import { ViewProps } from "@components/common/View";
import { viewComponents } from "@myTypes/constants";
import componentVariantsHoc from "@utils/style/hoc";

const MyView = styled.div<ViewProps>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  max-height: ${({ maxHeight }) => maxHeight && maxHeight};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
  background-color: blue;
`;

const ViewOtherStyles = (props: ViewProps) => {
  return {
    other:
      props &&
      css`
        border: 2px solid orange;
      `,
    random:
      props &&
      css`
        border: 50px solid yellow;
      `,
  };
};

const ViewBase: Component<ViewProps> = (props) => {
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

const ViewOther = (props: ViewProps) => {
  return componentVariantsHoc(
    ViewBase,
    {
      class: ViewOtherStyles(props).other,
    },
    props,
  );
};

const ViewRandom = (props: ViewProps) => {
  return componentVariantsHoc(
    ViewBase,
    {
      class: ViewOtherStyles(props).random,
    },
    props,
  );
};

const viewVariantsMap = {
  base: ViewBase,
  other: ViewOther,
  random: ViewRandom,
};

export default viewVariantsMap;
