import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Text,
  Link,
  useTheme,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/core";
import { Link as ReactLink } from "react-router-dom";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const [input, setInput] = useState("");
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.1rem"
      bg={theme.colors.brand["600"]}
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading fontFamily={theme.fonts.heading} as="h1" size="lg" flex={1}>
          Corona Info
        </Heading>
      </Flex>

      <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
      >
        <MenuItems>
          <Link as={ReactLink} to="/covid-info">
            Home
          </Link>
        </MenuItems>
        <MenuItems>
          <Link as={ReactLink} to="/covid-info/stats">
            Stats
          </Link>
        </MenuItems>
        <InputGroup>
          <Input
            onChange={(e) => setInput(e.target.value)}
            color="black"
            placeholder="Search country"
          />
          <InputRightElement
            children={
              <Link as={ReactLink} to={`/covid-info/stats/${input}`}>
                <IconButton icon="search-2" color="red.300" />
              </Link>
            }
          />
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default Header;
