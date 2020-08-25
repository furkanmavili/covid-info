import React from "react";
import { numberWithCommas } from "../utils";
function Details({ name, caseNumber, deaths, recovered, tests }) {
  return (
    <div>
      <p>Country: {name}</p>
      <p>Total Case: {numberWithCommas(caseNumber)}</p>
      <p>Deaths: {numberWithCommas(deaths)}</p>
      <p>Recovered: {numberWithCommas(recovered)}</p>
      <p>Tests: {numberWithCommas(tests)}</p>
    </div>
  );
}

export default Details;
