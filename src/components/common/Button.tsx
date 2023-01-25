import type { Component } from "solid-js";
import { ButtonProps } from "../lib/variants/button";
import { getButton } from "@base/theme/variant.helpers";

const Button: Component<ButtonProps> = ({ text, variant, onClick }) => {
  const Button = getButton(variant);

  return (
    <Button text={text} variant={variant ?? "base"} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Button;
