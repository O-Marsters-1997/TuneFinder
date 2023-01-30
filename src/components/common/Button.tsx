import type { Component, JSX } from "solid-js";
import { buttonVariants } from "@myTypes/constants";
import { getButton } from "@base/theme/variant.helpers";
import { ButtonProps as SolidButtonProps } from "@suid/material/Button";

export type ButtonProps = {
  text: string;
  onClick: () => void;
  variant?: CSS.ButtonVariants;
  colorVariant?: string;
  children?: JSX.Element;
  class?: string;
} & Omit<SolidButtonProps, "variant" | "type">;

const Button: Component<ButtonProps> = (props) => {
  const ButtonVariant = getButton(props.variant ?? buttonVariants.base);

  return (
    <ButtonVariant
      text={props.text}
      variant={props.variant}
      onClick={props.onClick}
      class={props.class}
      colorVariant={props.colorVariant}
    >
      {props.text}
    </ButtonVariant>
  );
};

export default Button;
