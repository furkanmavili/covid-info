import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { customTheme } from "./theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
