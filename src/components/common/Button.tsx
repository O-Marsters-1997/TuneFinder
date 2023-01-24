import type { Component } from "solid-js";
import { ButtonBase, ButtonRounded, ButtonProps } from "../lib/variants/button";

const variantMap = {
  base: ButtonBase,
  rounded: ButtonRounded,
} as any;

const Button: Component<ButtonProps> = ({ text, variant, onClick }) => {
  const Component = variantMap[variant];
  return (
    <Component text={text} variant="base" onClick={onClick}>
      {text}
    </Component>
  );
};

export default Button;
