// import { styled } from "solid-styled-components";
import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { ButtonProps as SolidButtonProps } from "@suid/material/Button";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: CSS.ButtonVariants;
} & Omit<SolidButtonProps, "variant" | "type">;

export const ButtonBase = styled.button<ButtonProps>`
  && {
    background-color: red;
    cursor: pointer;
  }
` as Component<ButtonProps>;

export const ButtonRounded = styled(ButtonBase)`
  && {
    border-radius: 50%;
  }
`;

export const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
};
