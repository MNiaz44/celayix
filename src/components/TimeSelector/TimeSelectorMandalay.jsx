import React, { useContext, useEffect, useState } from "react";

import { Box, useMediaQuery } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";

import dayjs from "dayjs";

import { Context } from "../../context/dataContext";

import { stylesMui } from "./styles";

export default function TimeSelectorMandalay({
  keyProp,
  shiftStart,
  shiftEnd,
  timeValue,
  setShiftStart,
  setShiftEnd,
  setTimeValue,
  label,
  width = "10rem",
}) {
  const { searchMandalay, setSearchMandalay } = useContext(Context);
  const isMobile = useMediaQuery("(max-width:600px)");

  // console.log("⌚(TimeSelectorMandalay) search mandalay is...", searchMandalay);
  // console.log("🔑(TimeSelectorMandalay) keyProp is...", keyProp);

  const handleStartTimeChange = (selectedTime) => {
    console.log("changing shift start time...");
    console.log(
      "(handleStartTimeChange) shift start selectedTime is...",
      selectedTime
    );

    const valueExists = searchMandalay.shiftStart.find(
      (item) => item.index === keyProp
    );

    setShiftStart(selectedTime);
    setPickerValue(selectedTime);
    if (valueExists) {
      searchMandalay.shiftStart[valueExists.index].value =
        dayjs(selectedTime).format("hh:mm a");
      setSearchMandalay([...searchMandalay]);
    } else {
      searchMandalay.shiftStart.push({
        index: keyProp,
        value: dayjs(selectedTime).format("hh:mm a"),
      });
    }
  };

  const handleEndTimeChange = (selectedTime) => {
    console.log("changing shift end time...");
    console.log(
      "(handleEndTimeChange) shift end selectedTime is...",
      selectedTime
    );

    const valueExists = searchMandalay.shiftEnd.find(
      (item) => item.index === keyProp
    );

    setShiftEnd(selectedTime);
    setPickerValue(selectedTime);
    if (valueExists) {
      searchMandalay.shiftEnd[valueExists.index].value =
        dayjs(selectedTime).format("hh:mm a");
      setSearchMandalay([...searchMandalay]);
    } else {
      searchMandalay.shiftEnd.push({
        index: keyProp,
        value: dayjs(selectedTime).format("hh:mm a"),
      });
    }
  };

  const handleChange =
    label === "Shift Start" ? handleStartTimeChange : handleEndTimeChange;

  const getStartValue = () => {
    if (searchMandalay.shiftStart.hasOwnProperty(keyProp)) {
      return searchMandalay[keyProp];
    } else {
      // return null;
      return [];
    }
  };

  const getEndValue = () => {
    if (searchMandalay.shiftEnd.hasOwnProperty(keyProp)) {
      return searchMandalay[keyProp];
    } else {
      return null;
    }
  };

  const getValue = label === "Shift Start" ? getStartValue : getEndValue;

  const [pickerValue, setPickerValue] = useState(getValue());

  useEffect(() => {
    const value = getValue();
    setPickerValue(value); // Update the local state
  }, [searchMandalay.shiftStart, searchMandalay.shiftEnd]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ ...stylesMui.inputFieldContainer, width: width }}>
        {isMobile ? (
          <>
            <TimeField
              label={label}
              value={pickerValue}
              onChange={handleChange}
              ampm={true}
              format="hh:mm a"
              sx={{
                ...stylesMui.inputField,
                borderRadius: "12px",
              }}
            />
          </>
        ) : (
          <>
            <TimePicker
              views={["hours", "minutes"]}
              label={label}
              value={pickerValue}
              onChange={handleChange}
              timeSteps={{ hours: 1, minutes: 1 }}
              disableOpenPicker={true}
              ampm={true}
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
