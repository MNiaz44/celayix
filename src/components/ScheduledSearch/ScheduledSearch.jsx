import React from "react";

import { Box } from "@mui/material";

import ScheduledSearchHeader from "./ScheduledSearchHeader";
import ScheduledDetails from "../ScheduledDetails";
import TableStructure from "../TableStructure";

import { stylesMui } from "./styles";

const ScheduledSearch = () => {
  return (
    <>
      <Box sx={stylesMui.containerScheduled}>
        <Box sx={stylesMui.outlineBox}>
          <ScheduledSearchHeader />
          <ScheduledDetails />
          <TableStructure />
        </Box>
      </Box>
    </>
  );
};

export default ScheduledSearch;
