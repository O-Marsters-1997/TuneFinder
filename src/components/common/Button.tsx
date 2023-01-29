import type { Component } from "solid-js";
import { buttonVariants } from "@myTypes/constants";
import { getButton } from "@base/theme/variant.helpers";
import { ButtonProps } from "../lib/variants/button";

const Button: Component<ButtonProps> = (props) => {
  const ButtonVariant = getButton(props.variant ?? buttonVariants.base);
  console.log(props.variant);

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
