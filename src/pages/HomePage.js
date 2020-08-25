import React, { useRef } from "react";
import L from "leaflet";
import { Map, TileLayer, Popup, Circle, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Detail from "../components/Details";
import { useToast } from "@chakra-ui/core";
import TotalStats from "../components/TotalStats";
import CustomInput from "../components/CustomInput";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const location = [39, 35];
const zoom = 5;
// some polygon props:
//  color: String,
//  weight: number,
//  dashArray: number,
//  positions: Array,
//  fillColor: String,
//  stroke: Boolean,(for border)
function Home({ data }) {
  const mapRef = useRef();
  const toast = useToast();

  const handleFly = (countryName) => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    const result = data.find((element) => {
      return element.country.toLowerCase() === countryName.toLowerCase();
    });
    if (!result) {
      toast({
        title: "Country not found",
        status: "error",
        duration: 2000,
      });
      return;
    }
    const coordinates = [result.countryInfo["lat"], result.countryInfo["long"]];
    setTimeout(() => {
      map.flyTo(coordinates, 5, { duration: 3 });
    }, 1000);
  };

  return (
    <div className="App">
      <Map ref={mapRef} center={location} zoom={zoom} zoomControl={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data &&
          data.map((country, index) => {
            return (
              <Circle
                key={index}
                color="blue"
                radius={30000}
                className="custom-circle"
                center={[
                  country.countryInfo["lat"],
                  country.countryInfo["long"],
                ]}
              >
                <Popup>
                  <Detail
                    name={country.country}
                    caseNumber={country.cases}
                    deaths={country.deaths}
                    recovered={country.recovered}
                    tests={country.tests}
                  />
                </Popup>
              </Circle>
            );
          })}
        <ZoomControl position="bottomright" />
      </Map>
      <CustomInput handleFly={handleFly} />
      <TotalStats />
    </div>
  );
}

export default Home;
