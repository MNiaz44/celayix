import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";

import PrimaryButton from "../PrimaryButton";

import { stylesMui } from "./styles";

const SearchGroupHeader = ({
  headerFunction,
  setSearchGroups,
  searchGroups,
}) => {
  const buttonLabel = headerFunction === "add" ? "Add Group" : "Remove Group";

  const handleAddSearchGroup = () => {
    console.log("add group clicked");
    toast.success("Search Group Added");
    const groups = [...searchGroups, "yo"];
    setSearchGroups(groups);
  };

  const handleRemoveSearchGroup = () => {
    console.log("remove group clicked");
    toast.success("Search Group Removed");
    const updatedGroups = searchGroups.slice(0, searchGroups.length - 1);
    setSearchGroups(updatedGroups);
  };

  const handleClick =
    buttonLabel === "Add Group"
      ? handleAddSearchGroup
      : handleRemoveSearchGroup;

  return (
    <>
      <Grid sx={stylesMui.containerGrid}>
        <Box sx={stylesMui.textBox}>
          <Typography variant="h2" sx={stylesMui.headingBox}>
            Search Group
          </Typography>
        </Box>
        <Box sx={stylesMui.iconOrButtonBox}>
          {/* on click function from  */}
          <PrimaryButton buttonText={buttonLabel} onClick={handleClick} />
        </Box>
      </Grid>
    </>
  );
};

export default SearchGroupHeader;
