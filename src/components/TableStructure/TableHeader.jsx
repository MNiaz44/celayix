import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { tableDummyRows } from "./TableStructure";
import { stylesMui } from "./styles";

const TableHeader = () => {
  return (
    <>
      <TableHead sx={stylesMui.tableHead}>
        <TableRow>
          {Object.keys(tableDummyRows[0]).map((column, index) => (
            <TableCell
              key={index}
              sx={{
                ...stylesMui.tableHead,
                borderTopLeftRadius: index === 0 ? "12px" : 0,
                borderTopRightRadius:
                  index === Object.keys(tableDummyRows[0]).length - 1
                    ? "12px"
                    : 0,
                borderBottomLeftRadius: index === 0 ? "12px" : 0,
                borderBottomRightRadius:
                  index === Object.keys(tableDummyRows[0]).length - 1
                    ? "12px"
                    : 0,
                Height: "36px",
                textAlign: "center",
                padding: "0px",
              }}
            >
              {column}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default TableHeader;
