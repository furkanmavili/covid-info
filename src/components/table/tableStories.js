import { Link, Text, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { numberWithCommas } from "../../utils";

export const CustomTable = ({ data, url }) => {
  const [up, setUp] = useState(false);
  const [localData, setLocalData] = useState([]);
  const [last, setLast] = useState("");

  useEffect(() => {
    let sorted = data.sort((a, b) => compare(a, b, "cases"));
    setLocalData(sorted);
  }, [data]);

  const compare = (a, b, attribute) => {
    let comparison = 0;
    if (a[attribute] > b[attribute]) {
      if (!up) {
        comparison = -1;
      } else {
        comparison = 1;
      }
    } else if (a[attribute] < b[attribute]) {
      if (!up) {
        comparison = 1;
      } else {
        comparison = -1;
      }
    }
    return comparison;
  };
  const sortBy = (attribute) => {
    let sorted = localData.sort((a, b) => compare(a, b, attribute));
    if (last !== attribute) {
      setUp(
        false,
        () => (sorted = data.sort((a, b) => compare(a, b, attribute)))
      );
    } else {
      setUp(
        (prev) => !prev,
        () => (sorted = data.sort((a, b) => compare(a, b, attribute)))
      );
    }
    setLast(attribute);
    setLocalData(sorted.slice(0, 215));
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader onClick={() => sortBy("country")}>
            <Tooltip label="You can sort fields by clicking titles">
              Location
            </Tooltip>
          </TableHeader>
          <TableHeader onClick={() => sortBy("cases")}>Confirmed</TableHeader>
          <TableHeader onClick={() => sortBy("deaths")}> Deaths</TableHeader>
          <TableHeader onClick={() => sortBy("recovered")}>
            Recovered
          </TableHeader>
          <TableHeader onClick={() => sortBy("tests")}>Tests</TableHeader>
          <TableHeader onClick={() => sortBy("critical")}>Critical</TableHeader>
          <TableHeader onClick={() => sortBy("population")}>
            Population
          </TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {localData.map((item, index) => {
          return (
            <TableRow
              key={index}
              bg={index % 2 === 0 ? "gray.300" : "gray.100"}
            >
              <TableCell>
                <img
                  className="table-img"
                  src={item.countryInfo.flag}
                  alt="flag"
                />
                <Link as={RouterLink} to={`${url}/${item.country}`}>
                  <Text mt="10px" fontWeight="500">
                    {item.country}
                  </Text>
                </Link>
              </TableCell>
              <TableCell>{numberWithCommas(item.cases)}</TableCell>
              <TableCell>{numberWithCommas(item.deaths)}</TableCell>
              <TableCell>{numberWithCommas(item.recovered)}</TableCell>
              <TableCell>{numberWithCommas(item.tests)}</TableCell>
              <TableCell>{numberWithCommas(item.critical)}</TableCell>
              <TableCell>{numberWithCommas(item.population)}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
