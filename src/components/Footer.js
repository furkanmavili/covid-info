import React from "react";
import { Flex, Text, useTheme, Stack } from "@chakra-ui/core";
import Social from "./Social";

function Footer() {
  const theme = useTheme();
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg={theme.colors.brand["600"]}
      mt="3em"
    >
      <Stack alignItems="center" mt="1em">
        <Text fontWeight="bold" color="gray.300">
          Data Sources
        </Text>
        <Text color="gray.100">disease.sh, JHUCSSE, Worldometers</Text>
      </Stack>
      <Social />
    </Flex>
  );
}

export default Footer;
