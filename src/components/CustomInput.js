import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import SearchInput from "./SearchInput";

function CustomInput({ handleFly }) {
  const [countryName, setCountryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()  
    handleFly(countryName)
  }
  return (
    <Flex as="form" onSubmit={handleSubmit} m="auto" alignItems="center" maxW="400px">
      <SearchInput
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        rightAdornment={
          <Box
            as="button"
            _hover={{ cursor: "pointer" }}
            variant="ghost"
            fontWeight="bold"
            fontSize="1.2rem"
            type="submit"
            color="red.400"
          >
            Go
          </Box>
        }
      />
    </Flex>
  );
}

export default CustomInput;
