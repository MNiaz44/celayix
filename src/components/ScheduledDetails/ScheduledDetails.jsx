import React from "react";

import { Grid } from "@mui/material";

import ShiftDayField from "../ShiftDayField/ShiftDayField";
import DateSelector from "../DateSelector/DateSelector";
import TimeSelector from "../TimeSelector/TimeSelector";
import Selector from "../Selector/Selector";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

import { stylesMui } from "./styles";

import { InputField } from "../InputField";

const ScheduledDetails = () => {
  return (
    <>
      <Grid sx={stylesMui.containerGrid}>
        <ShiftDayField />
        <DateSelector label="Search Date" />
        <TimeSelector label="Search Time" />
        <InputField fieldLabel="Milliseconds Offset" />
        <Selector selectorLabel="Accounts" />
        <PrimaryButton buttonText="Create" />
      </Grid>
    </>
  );
};

export default ScheduledDetails;
