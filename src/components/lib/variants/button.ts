import { styled } from "solid-styled-components";
import { Button } from "@suid/material";

export type ButtonProps = {
  text: string;
  variant: string;
  onClick: () => void;
};

export const ButtonBase = styled(Button)<ButtonProps>`
  background-color: red;
  cursor: pointer;
`;

export const ButtonRounded = styled(ButtonBase)`
  border-radius: 50%;
`;
