import React from "react";
import TotalStats from "../components/TotalStats";
import WorldMap from "../components/WorldMap";
import "leaflet/dist/leaflet.css";
import { Box } from "@chakra-ui/layout";


function Home({ data }) {
  return (
    <Box w="100%">
      <WorldMap data={data} />
      <TotalStats />
    </Box>
  );
}

export default Home;
