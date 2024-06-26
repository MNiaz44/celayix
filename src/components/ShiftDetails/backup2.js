import React, { useState, useContext, useEffect } from "react";

import { toast } from "react-toastify";

import dayjs from "dayjs";

import { Context } from "../../context/dataContext";

import ShiftDayField from "../ShiftDayField/ShiftDayField";
import DateSelector from "../DateSelector/DateSelector";
import TimeSelector from "../TimeSelector/TimeSelector";
import Selector from "../Selector/Selector";
import { InputField } from "../InputField";

import { stylesMui } from "./styles";

const ShiftDetails = ({ rowFunction, shifts, setShifts, isMultiple }) => {
  const { search, searchMandalay, setSearch, setSearchMultiple } =
    useContext(Context);

  const [timeValues, setTimeValues] = useState({
    shiftStart: [],
    shiftEnd: [],
  });

  const isMultipleRows = isMultiple > 1;

  // Function to handle time value changes for a specific field
  const handleTimeChange = (selectedTime, field) => {
    const updatedSearchMultiple = { ...searchMandalay };
    if (field === "shiftStart") {
      updatedSearchMultiple.shiftStart = dayjs(selectedTime);
      setSearchMultiple((prevTimeValue) => ({
        ...prevTimeValue,
        shiftStart: updatedSearchMultiple.shiftStart,
      }));
    } else if (field === "shiftEnd") {
      updatedSearchMultiple.shiftEnd = dayjs(selectedTime);
      setSearchMultiple((prevTimeValue) => ({
        ...prevTimeValue,
        shiftEnd: updatedSearchMultiple.shiftEnd,
      }));
    }
    //  OR
    // const updatedTimeValues = { ...timeValues };
    // console.log("Initially updatedTimeValues are .... ", updatedTimeValues);
    // // updatedTimeValues[field] = selectedTime; // Update the value for the specified field
    // updatedTimeValues[field] = dayjs(selectedTime);
    // console.log("👋updatedTimeValues are .... ", updatedTimeValues);
    // setTimeValues(updatedTimeValues);
    // setSearchMultiple(timeValues);
  };

  useEffect(() => {
    console.log("⌚time values .... ", timeValues);
  }, [timeValues]);

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
      <ShiftDayField />
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
      {isMultipleRows ? (
        <>
          <TimeSelector
            timeValue={search.shiftStart}
            setTimeValue={(selectedTime) =>
              handleTimeChange(selectedTime, "shiftStart")
            }
            label="Shift Start"
            width="8.5rem"
          />
          <TimeSelector
            timeValue={search.shiftEnd}
            setTimeValue={(selectedTime) =>
              handleTimeChange(selectedTime, "shiftEnd")
            }
            label="Shift End"
            width="8.5rem"
          />
        </>
      ) : (
        <>
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
        </>
      )}
      <Selector selectorLabel="Services" width="8.5rem" />
      <Selector selectorLabel="Meal Time" width="10.75rem" />
      <InputField fieldLabel="Milliseconds Offset" />
    </>
  );
};

export default ShiftDetails;
