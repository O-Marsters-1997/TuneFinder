// import { styled } from "solid-styled-components";
import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { ButtonProps as SolidButtonProps } from "@suid/material/Button";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: CSS.ButtonVariants;
  colorVariant?: string;
} & Omit<SolidButtonProps, "variant" | "type">;

export const ButtonBase = styled.button<ButtonProps>`
  background-color: blue;
  cursor: pointer;
  color: ${({ colorVariant }) => colorVariant && colorVariant};
` as Component<ButtonProps>;

export const ButtonRounded = styled(ButtonBase)`
  border-radius: 50%;
  border: 2px solid orange;
`;

export const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
};
