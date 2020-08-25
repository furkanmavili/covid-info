import React from "react";
import { Flex, Image } from "@chakra-ui/core";
import Error404 from "../images/pagenotfound.svg";
function PageNotFound() {
  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <Image w="500px" src={Error404} alt="Page not found" />
    </Flex>
  );
}

export default PageNotFound;
