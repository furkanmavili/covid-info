import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { SearchIcon } from "@chakra-ui/icons";

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
          <SearchIcon as="button" onClick={handleSubmit} cursor="pointer" />
        }
      />
    </Flex>
  );
}

export default CustomInput;
