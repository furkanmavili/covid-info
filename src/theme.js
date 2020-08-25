import { theme } from "@chakra-ui/core";

export const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a1a2e",
      800: "#e94560",
      700: "#0f3460",
      600: "#16213e",
    },
  },
  fonts: {
    ...theme.fonts,
    heading: "'Exo 2', sans-serif",
    numbers: "'Do Hyeon', sans-serif",
  },
};
