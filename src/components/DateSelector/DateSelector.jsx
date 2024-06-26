import React, { useState, useEffect, useContext } from "react";

import { Box, useMediaQuery } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";

import dayjs from "dayjs";

import { Context } from "../../context/dataContext";

import { stylesMui } from "./styles";

export default function DateSelector({
  dateValue,
  setDateValue,
  label,
  width = "10rem",
}) {
  const { search, setSearch } = useContext(Context);
  const [rerender, setRerender] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (selectedDate) => {
    let updatedSearch = { ...search };

    if (label === "Shift Date") {
      updatedSearch.shiftDate = dayjs(selectedDate).format("MM/DD/YY");
      setDateValue((prevDateValue) => ({
        ...prevDateValue,
        shiftDate: updatedSearch.shiftDate,
      }));
    } else if (label === "Shift From") {
      updatedSearch.shiftFrom = dayjs(selectedDate).format("MM/DD/YY");
      setDateValue((prevDateValue) => ({
        ...prevDateValue,
        shiftFrom: updatedSearch.shiftFrom,
      }));
    } else if (label === "Shift To") {
      updatedSearch.shiftTo = dayjs(selectedDate).format("MM/DD/YY");
      setDateValue((prevDateValue) => ({
        ...prevDateValue,
        shiftTo: updatedSearch.shiftTo,
      }));
    } else if (label === "Search Date") {
      updatedSearch.callDate = dayjs(selectedDate).format("MM/DD/YY");
      setDateValue((prevDateValue) => ({
        ...prevDateValue,
        callDate: updatedSearch.callDate,
      }));
    }
    setRerender(!rerender);
    // console.log("🏁(DateSelector) Search data is", search);
  };

  // useEffect(() => {
  // }, [rerender]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ ...stylesMui.inputFieldContainer, width: width }}>
        {isMobile ? (
          <>
            <DateField
              key={search}
              label={label}
              value={dayjs(dateValue)}
              onChange={handleChange}
              format="MM/DD/YYYY"
              sx={{
                ...stylesMui.inputField,
                borderRadius: "12px",
              }}
            />
          </>
        ) : (
          <>
            <DatePicker
              key={search}
              label={label}
              value={dayjs(dateValue)}
              onChange={handleChange}
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
