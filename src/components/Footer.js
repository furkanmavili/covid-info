import React from "react";
import { Flex, Text, Stack } from "@chakra-ui/react";
import Social from "./Social";

function Footer() {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      alignItems="center"
      marginTop="auto !important"
      w="full"
      pb="4"
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
