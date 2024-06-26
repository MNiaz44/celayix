import React, { useState, useContext, useEffect } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

import { Context } from "../../context/dataContext";

import { days } from "../../constants/constants";
import { stylesMui } from "./styles";

const ShiftDayField = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const { search } = useContext(Context);

  useEffect(() => {
    // Parse the shift date from the context and get the day of the week
    if (search?.shiftDate) {
      const shiftDate = new Date(search.shiftDate);
      const dayOfWeek = shiftDate.toLocaleDateString(undefined, {
        weekday: "long",
      });
      setSelectedDay(dayOfWeek);
    }
  }, [search?.shiftDate]);

  // console.log("(ShiftDayField) date is ", search?.shiftDate);

  const handleChange = (event) => {
    setSelectedDay(event.target.value);
  };

  return (
    <Box sx={stylesMui.inputFieldContainer}>
      <TextField
        select
        disabled
        label="Shift Day"
        value={selectedDay}
        onChange={handleChange}
        SelectProps={{
          IconComponent: () => null, // Hide the downward icon
        }}
        InputProps={{
          readOnly: true, // Make the input read-only
          classes: {
            disabled: stylesMui.shiftDayFieldDisabled, // Apply custom styles for disabled state
          },
          sx: {
            ...stylesMui.inputField,
            borderRadius: "12px",
            minWidth: "95px",
            height: "48px",
            cursor: "not-allowed",
          },
        }}
      >
        <MenuItem value={selectedDay}>{selectedDay}</MenuItem>
      </TextField>
    </Box>
  );
};

export default ShiftDayField;
