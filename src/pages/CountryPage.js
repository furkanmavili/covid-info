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
} from "@chakra-ui/core";
import Card from "../components/Card";
import LineChart from "../components/LineChart";
import { changeDataForChart } from "../utils";
import NoData from '../components/NoData'

function CoutryPage() {
  const [data, setData] = useState({ countryInfo: { flag: "" } });
  const [historicalData, setHistoricalData] = useState({});
  const [error, setError] = useState(false);
  let { countryName } = useParams();
  const theme = useTheme();
  countryName = changeWhiteSpaceUrl(countryName);

  useEffect(() => {
    axios
      .get(`https://disease.sh/v3/covid-19/countries/${countryName}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(true));
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
      <Flex mt="1em" alignItems="center">
        <Image
          htmlWidth="100px"
          htmlHeight="30px"
          src={data.countryInfo.flag}
        />
        <Text
          fontFamily={theme.fonts.numbers}
          fontSize="32px"
          ml="1em"
          color="white"
        >
          {data.country}
        </Text>
      </Flex>
      <Flex w="100%">
        <Stack>
          <Card
            cases={data.todayCases}
            death={data.todayDeaths}
            recovered={data.todayRecovered}
            title="Today"
          />
          <Card
            cases={data.cases}
            death={data.deaths}
            recovered={data.recovered}
            title="Total"
          />
        </Stack>
        <Stack spacing={10} mt="2em" ml="6em" w="80%">
          <Skeleton w="75%" isLoaded={historicalData.cases}>
            <Box backgroundColor="white" h="600px" w="100%">
              <LineChart
                title="cases"
                data={historicalData ? historicalData.cases : ""}
                color="rgb(0,0,0)"
              />
            </Box>
          </Skeleton>
          <Skeleton w="75%" isLoaded={historicalData.cases}>
            <Box backgroundColor="white" h="600px" w="100%">
              <LineChart
                title="deaths"
                data={historicalData ? historicalData.death : ""}
                color="hsl(353, 92%, 55%)"
              />
            </Box>
          </Skeleton>
          <Skeleton w="75%" isLoaded={historicalData.cases}>
            <Box backgroundColor="white" h="600px" w="100%">
              <LineChart
                title="recovered"
                data={historicalData ? historicalData.recovered : ""}
                color="hsl(123, 97%, 71%)"
              />
            </Box>
          </Skeleton>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default CoutryPage;
