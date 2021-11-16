import React from "react";
import { Box } from "@chakra-ui/react";
import Social from "./Social";

function Footer() {
  return (
    <Box as="footer" textAlign="center" marginTop="auto !important" w="full" py="5">
        Created by {" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/furkanmavili">
          Furkan Mavili{" "}
          <span role="img" aria-label="Peace">
            &#9996;
          </span>
        </a>
      {/* <Social /> */}
    </Box>
  );
}

export default Footer;
