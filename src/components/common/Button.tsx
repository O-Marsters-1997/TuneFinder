import type { Component } from "solid-js";
import { buttonVariants } from "@myTypes/constants";
import { getButton } from "@base/theme/variant.helpers";
import { ButtonProps } from "../lib/variants/button";

const Button: Component<ButtonProps> = (props) => {
  const ButtonVariant = getButton(props.variant ?? buttonVariants.base);

  return (
    <ButtonVariant
      text={props.text}
      variant={props.variant}
      onClick={props.onClick}
      colorVariant={props.colorVariant}
    >
      {props.text}
    </ButtonVariant>
  );
};

export default Button;
