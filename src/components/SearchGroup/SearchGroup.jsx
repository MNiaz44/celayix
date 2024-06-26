import React, { useState, useContext } from "react";

import { Box } from "@mui/material";

import { toast } from "react-toastify";

import { Context } from "../../context/dataContext";

import { scheduleSearchGrand } from "../../services/apis/schedulingGrand";
import { scheduleSearchMandalay } from "../../services/apis/schedulingMandalay";

import PrimaryButton from "../PrimaryButton";
import SearchGroupHeader from "./SearchGroupHeader";
import ShiftDetails from "../ShiftDetails";

import { stylesMui } from "./styles";

const SearchGroup = ({ headerFunction, setSearchGroups, searchGroups }) => {
  const [shifts, setShifts] = useState([]);
  const [shiftComponents, setShiftComponents] = useState([]);
  const [rowsCount, setRowsCount] = useState(1);
  const [load, setLoad] = useState(false);
  const {
    user,
    search,
    reset,
    searchMandalay,
    setReset,
    clearSearchContext,
    clearSearchContextMandalay,
  } = useContext(Context);

  const clientIdString = user?.clientId;

  const handleClick = async () => {
    let res;

    try {
      setLoad(true);
      res = await scheduleSearchGrand({
        user,
        search,
      });

      if (res.status === 200) {
        console.log("Res is...", res.data.message);
        if (res.data.message === "Sceduled Successfully. Threading Started") {
          toast.success(res.data.message);
        } else {
          toast.info(res.data.message);
        }
        clearSearchContext();
        setReset(true);
        setLoad(false);
      }
    } catch (err) {
      console.error("error is...", err);
      toast.error(err);
      clearSearchContext();
      setReset(true);
    }
  };

  const handleClickMandalay = async () => {
    let res;

    try {
      setLoad(true);
      res = await scheduleSearchMandalay({
        user,
        search,
        searchMandalay,
      });
      if (res.status === 200) {
        console.log("Res is...", res.data.message);
        if (res.data.message === "Sceduled Successfully. Threading Started") {
          toast.success(res.data.message);
        } else {
          toast.info(res.data.message);
        }
        clearSearchContextMandalay();
        setReset(true);
        setLoad(false);
      }
    } catch (err) {
      toast.error(err);
      console.error(err);
      clearSearchContextMandalay();
      setReset(true);
    }
  };

  const addShiftDetailsRow = () => {
    if (rowsCount <= 3) {
      setRowsCount((prevRowsCount) => prevRowsCount + 1);
      const newShiftComponents = [...shiftComponents];
      const newKey = rowsCount;
      newShiftComponents.push(
        <Box sx={stylesMui.rowBox} key={newKey}>
          <ShiftDetails
            keyProp={newKey}
            rowFunction="Remove"
            shifts={shifts}
            setShifts={setShifts}
            rowsCount={rowsCount}
          />
          <PrimaryButton
            buttonText="Remove"
            onClick={() => removeShiftDetailsRow(rowsCount - 1)}
          />
        </Box>
      );

      setShiftComponents(newShiftComponents);
    } else {
      toast.error("Max Shifts Added");
    }
  };

  const removeShiftDetailsRow = (rowIndex) => {
    setShifts((prevShifts) => {
      const updatedShifts = [...prevShifts];

      updatedShifts.splice(rowIndex, 1);

      return updatedShifts;
    });
    setShiftComponents((prevShiftComponents) => {
      const updatedShiftComponents = [...prevShiftComponents];
      updatedShiftComponents.splice(rowIndex, 1);

      return updatedShiftComponents;
    });
    setRowsCount((prevRowsCount) => {
      const newRowsCount = prevRowsCount - 1;
      return newRowsCount >= 1 ? newRowsCount : 1; // Ensure it never drops below 1
    });
  };

  // console.log("(SearchGroup) rows count is", rowsCount);
  // console.log("(SearchGroup) shifts are", shifts);

  return (
    <>
      <Box sx={stylesMui.containerSearch}>
        <SearchGroupHeader
          headerFunction={headerFunction}
          setSearchGroups={setSearchGroups}
          searchGroups={searchGroups}
        />
        <Box sx={stylesMui.outlineBox}>
          {clientIdString.includes("MGM Grand") && (
            <>
              <Box sx={stylesMui.rowBox}>
                <ShiftDetails
                  keyProp={0}
                  rowFunction="Remove"
                  shifts={shifts}
                  setShifts={setShifts}
                  rowsCount={rowsCount}
                />
                <PrimaryButton buttonText="Run" onClick={handleClick} />
              </Box>
            </>
          )}
          {clientIdString.includes("MGM Mandalay") && (
            <>
              <Box sx={stylesMui.rowBox}>
                <ShiftDetails
                  keyProp={0}
                  rowFunction="Remove"
                  shifts={shifts}
                  setShifts={setShifts}
                  rowsCount={rowsCount}
                />
                {rowsCount === 1 && (
                  <PrimaryButton
                    buttonText="Run"
                    onClick={handleClickMandalay}
                  />
                )}
                <PrimaryButton
                  buttonText="Add Row"
                  onClick={addShiftDetailsRow}
                />
              </Box>
              {shiftComponents}
              {rowsCount > 1 && (
                <>
                  <Box sx={stylesMui.runAllBox}>
                    <PrimaryButton
                      buttonText="Run"
                      onClick={handleClickMandalay}
                    />
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default SearchGroup;
