import { styled, DefaultTheme } from "solid-styled-components";
import Button from "@suid/material/Button";

export type ButtonProps = {
  text: string;
  variant?: any;
  onClick: () => void;
};

export const ButtonBase = styled(Button)<ButtonProps>`
  && {
    background-color: red;
    cursor: pointer;
  }
`;

export const ButtonRounded = styled(ButtonBase)`
  && {
    border-radius: 20%;
  }
`;

export const buttonVariantsMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
};