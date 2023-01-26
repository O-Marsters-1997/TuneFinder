import { theme } from "@base/theme/theme";

export const getButton = (variant: keyof typeof theme.variants.button) => {
  return theme.variants.button[variant ?? "base"];
};
