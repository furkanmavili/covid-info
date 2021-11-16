import React from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td, TableCaption } from "@chakra-ui/react";

function StatsTable({ data }) {
  return (
    <Box border="1px" p={3} borderColor="gray.700" borderRadius="12px">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Location</Th>
            <Th isNumeric>Confirmed</Th>
            <Th isNumeric>Deaths</Th>
            <Th isNumeric>Recovered</Th>
            <Th isNumeric>Tests</Th>
            <Th isNumeric>Critical</Th>
            <Th isNumeric>Population</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr _hover={{backgroundColor: "gray.700"}}>
              <Td>{row.countryInfo.iso3}</Td>
              <Td isNumeric>{row.cases}</Td>
              <Td isNumeric>{row.deaths}</Td>
              <Td isNumeric>{row.recovered}</Td>
              <Td isNumeric>{row.tests}</Td>
              <Td isNumeric>{row.critical}</Td>
              <Td isNumeric>{row.population}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default StatsTable;
