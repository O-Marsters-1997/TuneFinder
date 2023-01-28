declare namespace CSS {
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

  type FontSizeModifiersMap = { [modifier in FontSizeModifiers]: number };

  // Components

  type ViewComponents = "div" | "span" | "main" | "aside" | "article";

  type ViewComponentsMap = { [component in ViewComponents]: ViewComponents };

  type Components = "View" | "Button";

  type ComponentsMap = { [component in Components]: string };

  // Variants
  // Buttons

  type ViewVariants = "base";

  type ViewVariantsMap = { [variant in ViewVariants]: ViewVariants };

  type ButtonVariants = "base" | "rounded";

  type ButtonVariantsMap = {
    [variant in ButtonVariants]: ButtonVariants;
  };
}
