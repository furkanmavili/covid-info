import React from "react";
import { CustomTable } from "../components/table/tableStories";
import { useRouteMatch } from "react-router-dom";

function StatsPage({ data, setData }) {
  let { url } = useRouteMatch();
  return (
    <>
      <CustomTable data={data} setData={setData} url={url} />
    </>
  );
}

export default StatsPage;
