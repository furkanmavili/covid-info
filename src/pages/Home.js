import React from "react";
import TotalStats from "../components/TotalStats";
import WorldMap from "../components/WorldMap";
import "leaflet/dist/leaflet.css";


function Home({ data }) {
  return (
    <div>
      <WorldMap data={data} />
      <TotalStats />
    </div>
  );
}

export default Home;
