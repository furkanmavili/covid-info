import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { changeWhiteSpaceUrl } from "../utils";
import {
  Stack,
  Image,
  Flex,
  Text,
  Box,
  useTheme,
  Skeleton,
} from "@chakra-ui/react";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import { changeDataForChart } from "../utils";
import NoData from '../components/NoData'
import StatsCard from "../components/StatsCard";

function CoutryPage() {
  const [data, setData] = useState({ countryInfo: { flag: "" } });
  const [historicalData, setHistoricalData] = useState({});
  const [error, setError] = useState(false);
  let { countryName } = useParams();
  const theme = useTheme();
  
  countryName = changeWhiteSpaceUrl(countryName);

  useEffect(() => {
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${countryName}`)
      .then((res) => {
        const result = changeDataForChart(res);
        setHistoricalData(result);
      })
      .catch((err) => setError(true));
    return () => {
      console.log("returning");
    };
  }, [countryName]);

  if (error) {
    return <NoData />
  }

  if (historicalData === undefined || data === undefined) {
    return <Text color="white">Loading</Text>;
  }

  return (
    <Stack flex={1} alignItems="center" mt="2em">
      <Flex w="100%">
        <StatsCard />
      </Flex>
    </Stack>
  );
}

export default CoutryPage;
