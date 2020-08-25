import React from "react";

import { Box, Link, Flex } from "@chakra-ui/core";
import { FaTwitter, FaGithub } from "react-icons/fa";
function Social() {
  return (
    <Flex position="absolute" right="10">
      <Link href="https://www.github.com/furkanmavili" isExternal>
        <Box mr="1em" size="25px" as={FaGithub} color="gray.300" />
      </Link>
      <Link href="https://www.twitter.com/ffmavili" isExternal>
        <Box size="25px" as={FaTwitter} color="gray.300" />
      </Link>
    </Flex>
  );
}

export default Social;
