import React, { useState } from "react";
import { Input, PseudoBox, useTheme, Flex } from "@chakra-ui/core";

function CustomInput({ handleFly }) {
  const [countryName, setCountryName] = useState("");
  const theme = useTheme();
  const bg = theme.colors.brand["800"];
  return (
    <Flex m="auto" alignItems="center" w="300px">
      <Input
        variant="flushed"
        color="white"
        onChange={(e) => setCountryName(e.target.value)}
        placeholder="country name"
        focusBorderColor={bg}
      />
      <PseudoBox
        _hover={{ cursor: "pointer" }}
        backgroundColor="inherit"
        color={bg}
        fontWeight="bold"
        fontSize="1.2rem"
        ml="1em"
        onClick={() => handleFly(countryName)}
      >
        Go
      </PseudoBox>
    </Flex>
  );
}

export default CustomInput;
