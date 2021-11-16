import React, { useEffect, useState } from "react";
import { SimpleGrid, Text, Stack, useTheme } from "@chakra-ui/react";
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
    <SimpleGrid columns={[2,3]} spacing={10} mt={10}>
      <CustomBox title="Cases" text={totalData.cases} />
      <CustomBox title="Deaths" text={totalData.deaths} />
      <CustomBox title="Recovered" text={totalData.recovered} />
      <CustomBox title="Today Cases" text={totalData.todayCases} />
      <CustomBox title="Today Deaths" text={totalData.todayDeaths} />
      <CustomBox title="Today Recovered" text={totalData.todayRecovered} />
    </SimpleGrid>
  );
}

function CustomBox({ title, text }) {
  const theme = useTheme();
  return (
    <Stack textAlign="center" fontFamily={theme.fonts.numbers} color={theme.colors.brand["800"]}>
      <Text  fontSize={["1rem", "1.4rem"]} fontWeight="bold" color="gray.400">
        {title}
      </Text>
      <Text fontSize={["1.5rem", "2rem"]} fontWeight="700" mt="0 !important">
        {numberWithCommas(text)}
      </Text>
    </Stack>
  );
}

export default TotalStats;
