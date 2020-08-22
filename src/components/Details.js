import React from "react";

function Details({ name, caseNumber, deaths, recovered, tests }) {
  return (
    <div>
      <p>Country: {name}</p>
      <p>Total Case: {caseNumber}</p>
      <p>Deaths: {deaths}</p>
      <p>Recovered: {recovered}</p>
      <p>Tests: {tests}</p>
    </div>
  );
}

export default Details;
