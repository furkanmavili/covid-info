import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { customTheme } from "./theme";
import { ChakraProvider , CSSReset } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
