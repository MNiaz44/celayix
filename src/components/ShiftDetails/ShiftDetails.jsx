import React, { useState, useContext } from "react";

import { toast } from "react-toastify";

import { Context } from "../../context/dataContext";

import ShiftDayField from "../ShiftDayField";
import DateSelector from "../DateSelector";
import TimeSelector from "../TimeSelector";
import TimeSelectorMandalay from "../TimeSelector/TimeSelectorMandalay";
import Selector from "../Selector/Selector";
import { InputField } from "../InputField";

import { stylesMui } from "./styles";

const ShiftDetails = ({
  rowFunction,
  shifts,
  setShifts,
  rowsCount,
  ...props
}) => {
  const { user, search, searchMandalay, setSearch, setSearchMandalay } =
    useContext(Context);

  const [shiftStart, setShiftStart] = useState([]);
  const [shiftEnd, setShiftEnd] = useState([]);

  const isMandalay = user?.clientId === "MGM Mandalay";

  const keyProp = props?.keyProp;

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

  const handleShiftStartTimeChange = (selectedTime) => {
    setSearchMandalay((prevSearchMandalay) => ({
      ...prevSearchMandalay,
      shiftStart: selectedTime, // Set the selected time as a single value
    }));
  };

  const handleShiftEndTimeChange = (selectedTime) => {
    setSearchMandalay((prevSearchMandalay) => ({
      ...prevSearchMandalay,
      shiftEnd: selectedTime, // Set the selected time as a single value
    }));
  };

  return (
    <>
      {isMandalay ? (
        <>
          <DateSelector
            dateValue={search.shiftFrom}
            setDateValue={setSearch}
            label="Shift From"
            width="8.5rem"
          />
          <DateSelector
            dateValue={search.shiftTo}
            setDateValue={setSearch}
            label="Shift To"
            width="8.5rem"
          />
          <DateSelector
            dateValue={search.callDate}
            setDateValue={setSearch}
            label="Search Date"
            width="8.5rem"
          />
        </>
      ) : (
        // Grand shift date selectors
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
        </>
      )}
      <TimeSelector
        timeValue={search.callTime}
        setTimeValue={setSearch}
        label="Search Time"
      />
      {isMandalay ? (
        <>
          <TimeSelectorMandalay
            // key={key}
            keyProp={keyProp}
            shiftStart={shiftStart}
            shiftEnd={shiftEnd}
            timeValue={searchMandalay.shiftStart}
            setShiftStart={setShiftStart}
            setShiftEnd={setShiftEnd}
            setTimeValue={handleShiftStartTimeChange}
            label="Shift Start"
            width="8.5rem"
          />
          <TimeSelectorMandalay
            // key={key}
            keyProp={keyProp}
            shiftStart={shiftStart}
            shiftEnd={shiftEnd}
            timeValue={searchMandalay.shiftEnd}
            setShiftStart={setShiftStart}
            setShiftEnd={setShiftEnd}
            setTimeValue={handleShiftEndTimeChange}
            label="Shift End"
            width="8.5rem"
          />
        </>
      ) : (
        // Grand time selectors
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
