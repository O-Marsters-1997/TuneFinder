import type { Component, JSX } from "solid-js";
import { styled, css } from "solid-styled-components";
import Button, { ButtonProps as SolidButtonProps } from "@suid/material/Button";

export interface MyButtonProps extends SolidButtonProps {
  text: string;
  variant?: CSS.ButtonVariant;
  onClick: () => void;
  children?: JSX.Element;
}

const ButtonVariantStyles = {
  rounded: css`
    border-radius: 50%;
  `,
  transparent: css`
    border: 2px solid green;
    cursor: pointer;
  `,
};

export const ButtonBase = styled(Button)<MyButtonProps>`
  && {
    background-color: blue;
    cursor: pointer;
    border-radius: 50%;
  }
`;

const ButtonRounded = styled(ButtonBase)`
  ${() => ButtonVariantStyles["rounded"]}
`;

const ButtonTransparent = styled(ButtonBase)`
  ${() => ButtonVariantStyles["transparent"]}
`;

export const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
  transparent: ButtonTransparent,
};
