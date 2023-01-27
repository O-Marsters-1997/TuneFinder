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

  // Variants
  // Buttons
  type ButtonVariant = "base" | "rounded";

  type ButtonVariantModifiersMap = {
    [modifier in ButtonVariant]: ButtonVariant;
  };
}
