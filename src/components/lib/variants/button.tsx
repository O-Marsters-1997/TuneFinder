// import { styled } from "solid-styled-components";
import type { Component, JSX } from "solid-js";
import { styled } from "solid-styled-components";
import { css } from "@emotion/css";
import { ButtonProps as SolidButtonProps } from "@suid/material/Button";
import componentVariantsHoc from "@utils/style/hoc";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: CSS.ButtonVariants;
  colorVariant?: string;
  children?: JSX.Element;
  class?: string;
} & Omit<SolidButtonProps, "variant" | "type">;

const MyButton = styled.button<ButtonProps>`
  background-color: blue;
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

export const ButtonBase: Component<ButtonProps> = (props) => {
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

export const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
};
