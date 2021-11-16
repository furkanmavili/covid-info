import React from "react";
import { useParams } from "react-router";
import Card from "./Card";
import Loading from "./Loading";
import { Image } from "@chakra-ui/image";
import useFetch from 'use-http'

function StatsCard() {
  const { countryName } = useParams();
  const queryString = `https://disease.sh/v3/covid-19/countries/${countryName}`
  const { data = null, loading, error } = useFetch(queryString, {}, []);

  
  console.log(data)
  if (loading || !data) return null;

  return (
    <div>
      {/* <Image
          htmlWidth="100px"
          htmlHeight="30px"
          src={data.countryInfo.flag}
        /> */}
      <Card cases={data.todayCases} death={data.todayDeaths} recovered={data.todayRecovered} title="Today" />
      <Card cases={data.cases} death={data.deaths} recovered={data.recovered} title="Total" />
    </div>
  );
}

const MemoizedCard = React.memo(StatsCard)

export default MemoizedCard;
