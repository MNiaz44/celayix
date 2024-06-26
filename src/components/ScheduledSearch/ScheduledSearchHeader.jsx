import React from "react";

import { Box, Grid, Typography } from "@mui/material";

import DeleteIcon from "../../assets/DeleteIcon";

import { stylesMui } from "./styles";

const ScheduledSearchHeader = () => {
  return (
    <>
      <Grid sx={stylesMui.containerGrid}>
        <Box sx={stylesMui.textBox}>
          <Typography variant="h2" sx={stylesMui.headingBox}>
            Scheduled Search
          </Typography>
        </Box>
        <Box sx={stylesMui.iconOrButtonBox}>
          <DeleteIcon />
        </Box>
      </Grid>
    </>
  );
};

export default ScheduledSearchHeader;
