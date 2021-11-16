import React, { useState } from "react";
import { Heading, Link, useTheme, Container, Icon } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { Button, IconButton } from "@chakra-ui/button";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Spacer } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useHistory } from "react-router";
import {Link as RouterLink} from "react-router-dom"

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Stats",
    href: "/stats",
  },
];

const Header = () => {
  const theme = useTheme();
  return (
    <Container maxW="container.lg">
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" py={5} w="full">
        <CovidIcon />
        <Heading fontFamily={theme.fonts.heading} as="h1" size="lg" flex={1}>
          Covid Info
        </Heading>
        <Spacer />
        <Nav />
        <Dropdown />
        <CountrySearch />
      </Flex>
    </Container>
  );
};

function CountrySearch() {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/stats/${inputValue}`);
  };
  return (
    <Box as="form" onSubmit={handleSubmit} display={{ base: "none", md: "flex" }}>
      <SearchInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rightAdornment={<SearchIcon cursor="pointer" as="button" type="submit" onClick={handleSubmit} />}
      />
    </Box>
  );
}

function Nav() {
  return (
    <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }} mr="3">
      {navLinks.map((link, index) => (
        <Link as={RouterLink} to={link.href} key={index}>
          <Button variant="link" fontWeight="600">
            {link.text}
          </Button>
        </Link>
      ))}
    </HStack>
  );
}

function Dropdown() {
  return (
    <Menu placement="bottom-end" display={{ base: "inline-flex", md: "none" }}>
      <MenuButton
        display={{ base: "block", md: "none" }}
        as={IconButton}
        aria-label="Options"
        variant="ghost"
        icon={<HamburgerIcon />}
      />
      <MenuList zIndex={401}>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href}>
            <MenuItem>{link.text}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
}

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
