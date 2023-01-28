import type { Component } from "solid-js";
import { buttonVariants } from "@myTypes/constants";
import { getButton } from "@base/theme/variant.helpers";
import { ButtonProps } from "../lib/variants/button";

const Button: Component<ButtonProps> = (props) => {
  const { text, variant, onClick, colorVariant } = props;
  const ButtonVariant = getButton(props.variant ?? buttonVariants.base);

  return (
    <ButtonVariant
      text={text}
      variant={variant}
      onClick={onClick}
      colorVariant={colorVariant}
    >
      {text}
    </ButtonVariant>
  );
};

export default Button;
