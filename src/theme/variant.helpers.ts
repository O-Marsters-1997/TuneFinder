import { theme } from "@base/theme/theme";

export const getButton = (variant: keyof typeof theme.variants.button) => {
  return theme.variants.button[variant ?? "base"];
};

export const getView = (variant: keyof typeof theme.variants.view) => {
  return theme.variants.view[variant ?? "base"];
};
