import { theme } from "@base/theme/theme";

export const getView = (variant: keyof typeof theme.variants.view) => {
  return theme.variants.view[variant ?? "base"];
};

export const getText = (variant: keyof typeof theme.variants.text) => {
  return theme.variants.text[variant ?? "base"];
};

export const getButton = (variant: keyof typeof theme.variants.button) => {
  return theme.variants.button[variant ?? "base"];
};
