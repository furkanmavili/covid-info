import React from "react";
import { Box, Text, useTheme } from "@chakra-ui/react";
import { numberWithCommas } from "../utils";

function Card({ cases, death, recovered, title }) {
  const theme = useTheme();
  return (
    <Box w="100%" maxW="250px" textAlign="center" overflow="hidden">
      <Text fontSize="1.5rem" fontWeight="bold" fontFamily={theme.fonts.numbers}>
        {title}
      </Text>
      <Box p="6" borderTopColor="gray.700" borderTopWidth="2px" textAlign="left">
        <Row title="Cases" value={cases} />
        <Row title="Deaths" value={death} />
        <Row title="Recovered" value={recovered} />
      </Box>
    </Box>
  );
}

function Row({ title, value }) {
  const theme = useTheme();
  return (
    <Text>
      {title}:{" "}
      <Box fontSize="lg" fontFamily={theme.fonts.numbers} fontWeight="bold" color={theme.colors.brand["800"]} as="span">
        {numberWithCommas(value)}
      </Box>
    </Text>
  );
}
export default Card;
