import React, { useContext, useEffect } from "react";

import { Grid } from "@mui/material";
import { toast } from "react-toastify";

import { Context } from "../../context/dataContext";

import ShiftDayField from "../ShiftDayField/ShiftDayField";
import DateSelector from "../DateSelector/DateSelector";
import TimeSelector from "../TimeSelector/TimeSelector";
import Selector from "../Selector/Selector";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { InputField } from "../InputField";

import { stylesMui } from "./styles";

const ShiftDetails = ({ rowFunction, shifts, setShifts }) => {
  const { search, setSearch } = useContext(Context);

  const handleAddShift = () => {
    console.log("Add Shift clicked");
    toast.success("Shift Filter Added");

    const shift = [...shifts, "new shift"];

    setShifts(shift);
  };

  const handleRemoveShift = () => {
    console.log("Remove Shift clicked");
    toast.success("Shift Filter Removed");

    const updatedShifts = shifts.slice(0, shifts.length - 1);

    setShifts(updatedShifts);

    setShifts(shift);
  };

  const handleClick =
    rowFunction === "Add Shift Filter" ? handleAddShift : handleRemoveShift;

  return (
    <>
      {/* <Grid sx={stylesMui.containerGrid}> */}
      <ShiftDayField />
      {/* Get value from context and pass as props for date and time */}
      <DateSelector
        dateValue={search.shiftDate}
        setDateValue={setSearch}
        label="Shift Date"
        width="8.5rem"
      />
      <DateSelector
        dateValue={search.callDate}
        setDateValue={setSearch}
        label="Search Date"
      />
      <TimeSelector
        timeValue={search.callTime}
        setTimeValue={setSearch}
        label="Search Time"
      />
      <TimeSelector
        timeValue={search.shiftStart}
        setTimeValue={setSearch}
        label="Shift Start"
        width="8.5rem"
      />
      <TimeSelector
        timeValue={search.shiftEnd}
        setTimeValue={setSearch}
        label="Shift End"
        width="8.5rem"
      />
      <Selector selectorLabel="Services" width="8.5rem" />
      <Selector selectorLabel="Meal Time" width="10.75rem" />
      <InputField fieldLabel="Milliseconds Offset" />
      {/* <PrimaryButton buttonText={rowFunction} onClick={handleClick} /> */}
      {/* <PrimaryButton buttonText="Run" onClick={handleClick} /> */}
      {/* </Grid> */}
    </>
  );
};

export default ShiftDetails;
