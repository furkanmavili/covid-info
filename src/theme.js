import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a1a2e",
      800: "#e94560",
      700: "#2a69ac",
    },
  },
};
