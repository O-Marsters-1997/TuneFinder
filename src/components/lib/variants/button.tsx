// import { styled } from "solid-styled-components";
import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { css } from "@emotion/css";
import { ButtonProps } from "@components/common/Button";
import componentVariantsHoc from "@utils/style/hoc";

const MyButton = styled.button<ButtonProps>`
  cursor: pointer;
  color: ${({ colorVariant }) => colorVariant && colorVariant};
`;

const ButtonOtherStyles = (props: ButtonProps) => {
  return {
    rounded:
      props &&
      css`
        border-radius: 50%;
        border: 2px solid orange;
      `,
  };
};

const ButtonBase: Component<ButtonProps> = (props) => {
  return (
    <MyButton
      text={props.text}
      variant={props.variant}
      onClick={props.onClick}
      class={props.class}
      colorVariant={props.colorVariant}
    >
      {props.text}
    </MyButton>
  );
};

const ButtonRounded = (props: ButtonProps) => {
  return componentVariantsHoc(
    ButtonBase,
    {
      class: ButtonOtherStyles(props).rounded,
    },
    props,
  );
};

const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
};

export default buttonVariantsMap;
