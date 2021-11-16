import React from "react";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";

function SearchInput({ value, onChange, rightAdornment }) {
  return (
    <InputGroup>
      <Input value={value} onChange={onChange} placeholder="Search country" />
      <InputRightAddon children={rightAdornment} />
    </InputGroup>
  );
}

export default SearchInput;
