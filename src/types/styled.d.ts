import { Component } from "solid-js";

declare global {
  namespace CSS {
    // Color variants
    interface ColorVariant {
      base: string;
      modifierOne?: string;
      modifierTwo?: string;
      modifierThree?: string;
      modifierFour?: string;
      modifierFive?: string;
    }

    // Typograpghy

    type TextVariants =
      | "body1"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "body2"
      | "caption"
      | "subtitle1"
      | "subtitle2";

    type TextVariantsMap = {
      [variant in TextVariants]: TextVariants;
    };

    type FontSizeModifiers =
      | "x1"
      | "x2"
      | "x3"
      | "x4"
      | "x5"
      | "x6"
      | "x7"
      | "x8"
      | "x9"
      | "x10"
      | "x11";

    type FontStyle = "normal" | "italic";

    type FontSizeModifiersMap = { [modifier in FontSizeModifiers]: number };

    // Components

    type ViewComponents = "div" | "span" | "main" | "aside" | "article";

    type ViewComponentsMap = { [component in ViewComponents]: ViewComponents };

    type TextComponents = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

    type TextComponentsMap = { [component in TextComponents]: TextComponents };

    type Components = "View" | "Button" | "Text";

    type ComponentsMap = { [component in Components]: string };

    // Variants
    // Buttons

    type ViewVariants = "base" | "other" | "random";

    type ViewVariantsMap = { [variant in ViewVariants]: ViewVariants };

    type ButtonVariants = "base" | "rounded";

    type ButtonVariantsMap = {
      [variant in ButtonVariants]: ButtonVariants;
    };
  }
}
