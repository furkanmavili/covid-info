import React from "react";
import { Box, Image, Text, useTheme } from "@chakra-ui/react";
import NoDataSvg from "../images/nodata.svg";

function NotFound() {
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Image m="auto" size="500px" src={NoDataSvg} />
      <Text
        fontSize="50px"
        fontWeight="bold"
        fontFamily={theme.fonts.numbers}
        color={theme.colors.brand["800"]}
        textAlign="center"
      >
        Country Not Found{" "}
      </Text>
    </Box>
  );
}

export default NotFound;
