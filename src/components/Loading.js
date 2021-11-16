import { Box } from "@chakra-ui/layout";
import React from "react";
import { Jelly } from "react-rounder";

function Loading() {
  return (
    <Box w="100%" h="100%" zIndex={99999} position="absolute" inset={0} display="grid" placeContent="center">
      <Jelly />
    </Box>
  );
}

export default Loading;
