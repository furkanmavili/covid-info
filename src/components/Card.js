import React from "react";
import { Box, Text, useTheme } from "@chakra-ui/react";
import { numberWithCommas } from "../utils";
function Card({ cases, death, recovered, title }) {
  const theme = useTheme();
  return (
    <Box
      w="250px"
      textAlign="center"
      overflow="hidden"
      color="white"
      alignSelf="flex-start"
      ml="3em"
    >
      <Text
        fontSize="1.5rem"
        fontWeight="bold"
        fontFamily={theme.fonts.numbers}
      >
        {title}
      </Text>
      <Box p="6" borderTopWidth="3px" textAlign="left">
        <Text>
          Cases:{" "}
          <Box
            fontFamily={theme.fonts.numbers}
            fontWeight="bold"
            fontSize="lg"
            color={theme.colors.brand["800"]}
            as="span"
          >
            {numberWithCommas(cases)}
          </Box>
        </Text>
        <Text>
          Deaths:{" "}
          <Box
            fontSize="lg"
            fontFamily={theme.fonts.numbers}
            fontWeight="bold"
            color={theme.colors.brand["800"]}
            as="span"
          >
            {numberWithCommas(death)}
          </Box>
        </Text>
        <Text>
          Recovered:{" "}
          <Box
            fontSize="lg"
            fontFamily={theme.fonts.numbers}
            fontWeight="bold"
            color={theme.colors.brand["800"]}
            as="span"
          >
            {numberWithCommas(recovered)}
          </Box>
        </Text>
      </Box>
    </Box>
  );
}
export default Card;
