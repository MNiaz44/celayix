import React, { useState, useContext } from "react";

import { Box, useMediaQuery } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";

import dayjs from "dayjs";

import { Context } from "../../context/dataContext";

import { stylesMui } from "./styles";

export default function TimeSelector({
  timeValue,
  setTimeValue,
  label,
  width = "10rem",
}) {
  const { search, setSearch } = useContext(Context);
  const isMobile = useMediaQuery("(max-width:600px)");

  // Define views conditionally based on the label
  const views =
    label === "Search Time"
      ? ["hours", "minutes", "seconds"]
      : ["hours", "minutes"];

  // Define timeSteps conditionally based on the label
  const timeSteps =
    label === "Search Time"
      ? { hours: 1, minutes: 1, seconds: 1 }
      : { hours: 1, minutes: 1 };

  const format = label === "Search Time" ? "hh:mm:ss a" : "hh:mm a";

  const handleChange = (selectedTime) => {
    let updatedSearch = { ...search }; // Make a copy of the search state

    if (label === "Search Time") {
      updatedSearch.callTime = dayjs(selectedTime);
      // updatedSearch.callTime = selectedTime;
      setTimeValue((prevTimeValue) => ({
        ...prevTimeValue,
        callTime: updatedSearch.callTime,
      }));
    } else if (label === "Shift Start") {
      updatedSearch.shiftStart = dayjs(selectedTime);
      // updatedSearch.shiftStart = selectedTime;
      setTimeValue((prevTimeValue) => ({
        ...prevTimeValue,
        shiftStart: updatedSearch.shiftStart,
      }));
    } else if (label === "Shift End") {
      updatedSearch.shiftEnd = dayjs(selectedTime);
      // updatedSearch.shiftEnd = selectedTime;
      setTimeValue((prevTimeValue) => ({
        ...prevTimeValue,
        shiftEnd: updatedSearch.shiftEnd,
      }));
    }
    // console.log("⌚(TimeSelector) Search data is", search);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ ...stylesMui.inputFieldContainer, width: width }}>
        {isMobile ? (
          <>
            <TimeField
              key={search}
              label={label}
              value={timeValue}
              onChange={handleChange}
              ampm={true}
              format={format}
              sx={{
                ...stylesMui.inputField,
                borderRadius: "12px",
              }}
            />
          </>
        ) : (
          <>
            <TimePicker
              key={search}
              views={views}
              label={label}
              value={timeValue}
              onChange={handleChange}
              timeSteps={timeSteps}
              ampm={true}
              disableOpenPicker={true}
              sx={{
                ...stylesMui.inputField,
                borderRadius: "12px",
              }}
            />
          </>
        )}
      </Box>
    </LocalizationProvider>
  );
}
