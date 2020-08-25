import { Box, BoxProps } from "@chakra-ui/core";
import React from "react";

export function Table(props: BoxProps) {
  return (
    <Box
      shadow="sm"
      rounded="lg"
      height="80vh"
      overflow="auto"
      w={["95%", "80%", "65%"]}
      m="3em auto"
    >
      <Box as="table" width="full" {...props} />
    </Box>
  );
}

/**
 * Defines a set of rows defining the head of the columns of the table. It
 * renders a `<thead>` HTML element.
 */
export function TableHead(props: BoxProps) {
  return <Box cursor="pointer" as="thead" {...props} />;
}

/**
 * Defines a row of cells in a table. The row's cells can then be established
 * using a mix of `TableCell` and `TableHeader` elements. It renders a `<tr>`
 * HTML element.
 */
export function TableRow(props: BoxProps) {
  return <Box as="tr" {...props} />;
}

/**
 * Defines a cell as header of a group of table cells. It renders a `<th>` HTML
 * element.
 */
export function TableHeader(props: BoxProps) {
  return (
    <Box
      as="th"
      px="6"
      py="3"
      borderBottomWidth="1px"
      backgroundColor="gray.50"
      textAlign="left"
      fontSize="xs"
      color="gray.500"
      textTransform="uppercase"
      letterSpacing="wider"
      lineHeight="1rem"
      fontWeight="bold"
      {...props}
    />
  );
}

/**
 * Encapsulates a set of table rows, indicating that they comprise the body of
 * the table. It renders a `<tbody>` HTML element.
 */
export function TableBody(props: BoxProps) {
  return <Box as="tbody" {...props} />;
}

/**
 * Defines a cell of a table that contains data. It renders a `<td>` HTML
 * element.
 */
export function TableCell(props: BoxProps) {
  return (
    <Box
      as="td"
      px="6"
      py="4"
      lineHeight="1.25rem"
      whiteSpace="nowrap"
      {...props}
    />
  );
}
