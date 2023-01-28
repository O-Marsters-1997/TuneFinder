import { textComponents } from "@myTypes/constants";

// Typograpghy
export const getTextVariant = (variant: CSS.TextVariants) => {
  return Array.from(variant)[0] === "h"
    ? (variant as CSS.TextComponents)
    : textComponents.p;
};

export const getColorVariant = (color: string) => {
  return color;
};
