import React, { useState } from "react";
import { Box, Heading, Flex, Text, Link, useTheme, IconButton, Container, Icon } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import SearchInput from "./SearchInput";
import { FaSearch } from "react-icons/fa";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = () => {
  const [show, setShow] = React.useState(false);
  const theme = useTheme();
  const [input, setInput] = useState("");
  const handleToggle = () => setShow(!show);

  return (
    <Container maxW="container.lg">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" pt={10} mb={5} w="full">
        <Flex align="center" mr={5}>
          <CovidIcon />
          <Heading fontFamily={theme.fonts.heading} as="h1" size="lg" flex={1}>
            Covid Info
          </Heading>
        </Flex>

        <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
          <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
          <MenuItems>
            <SearchInput
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rightAdornment={
                <Link as={ReactLink} to={`/covid-info/stats/${input}`}>
                  <FaSearch />
                </Link>
              }
            />
          </MenuItems>
        </Box>
      </Flex>
    </Container>
  );
};

function CovidIcon() {
  return (
    <Icon
      mr="2"
      w="8"
      h="8"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="green.600"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v-4m-1 0h2" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(45 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(90 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(135 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(180 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(225 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(270 12 12)" />
      <path d="M12 7v-4m-1 0h2" transform="rotate(315 12 12)" />
    </Icon>
  );
}

export default Header;
