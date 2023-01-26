import { styled } from "solid-styled-components";
import Button, { ButtonProps as SolidButtonProps } from "@suid/material/Button";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: CSS.ButtonVariant;
} & Omit<SolidButtonProps, "variant" | "type">;

export const ButtonBase = styled(Button)<ButtonProps>`
  && {
    background-color: red;
    cursor: pointer;
  }
`;

export const ButtonRounded = styled(ButtonBase)`
  && {
    border-radius: 50%;
  }
`;

export const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
};
