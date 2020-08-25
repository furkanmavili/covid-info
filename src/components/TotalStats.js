import React, { useEffect, useState } from "react";
import { Flex, Text, Stack, useTheme } from "@chakra-ui/core";
import axios from "axios";
import { numberWithCommas } from "../utils";

function TotalStats({ handleFly }) {
  const [totalData, setTotalData] = useState(false);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((response) => setTotalData(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Flex
        justifyContent="space-around"
        mt="50px"
        direction={["column", "row"]}
      >
        <CustomBox title="Cases" text={totalData.cases} />
        <CustomBox title="Deaths" text={totalData.deaths} />
        <CustomBox title="Recovered" text={totalData.recovered} />
      </Flex>
      <Flex
        justifyContent="space-around"
        mt="50px"
        direction={["column", "row"]}
      >
        <CustomBox title="Today Cases" text={totalData.todayCases} />
        <CustomBox title="Today Deaths" text={totalData.todayDeaths} />
        <CustomBox title="Today Recovered" text={totalData.todayRecovered} />
      </Flex>
    </>
  );
}

function CustomBox({ title, text }) {
  return (
    <Stack alignItems="center" pt="4px" flex={1}>
      <CustomTitle text={title} />
      <CustomText text={text} />
    </Stack>
  );
}

function CustomText({ text }) {
  const theme = useTheme();
  return (
    <Text
      fontFamily={theme.fonts.numbers}
      fontSize="2rem"
      color={theme.colors.brand["800"]}
      fontWeight="900"
    >
      {numberWithCommas(text)}
    </Text>
  );
}
function CustomTitle({ text }) {
  const theme = useTheme();
  return (
    <Text
      fontSize="1.4rem"
      fontFamily={theme.fonts.numbers}
      fontWeight="bold"
      color="gray.400"
    >
      {text}
    </Text>
  );
}
export default TotalStats;
