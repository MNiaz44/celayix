import React from "react";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import TableHeader from "./TableHeader";
import { stylesMui } from "./styles";

export const tableDummyRows = [
  {
    "Shift Day": "Monday",
    "Search Date": "10-17-2023",
    "Call Time": "09:00 AM",
    "End Time": "05:00 PM",
    Services: "Breakfast",
    "Meal Time": "12:30 PM",
  },
  {
    "Shift Day": "Tuesday",
    "Search Date": "09-27-2023",
    "Call Time": "08:30 AM",
    "End Time": "04:30 PM",
    Services: "Lunch",
    "Meal Time": "01:00 PM",
  },
];

const TableStructure = () => {
  return (
    <Grid>
      <Box sx={stylesMui.containerBox}>
        <TableContainer>
          <Table>
            <TableHeader />
            <TableBody>
              {tableDummyRows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {Object.values(row).map((cellValue, cellIndex) => (
                    <TableCell key={cellIndex} sx={{ textAlign: "center" }}>
                      {cellValue}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Grid>
  );
};

export default TableStructure;
