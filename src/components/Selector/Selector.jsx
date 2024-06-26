import React, { useState, useContext, useEffect } from "react";

import { Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Context } from "../../context/dataContext";

import {
  servicesListMandalay,
  servicesListGrand,
  mealTimeListMandalay,
  mealTimeListGrand,
  millisecondsList,
  accountsList,
  clientIdList,
} from "../../constants/constants";

import { stylesMui } from "./styles";

const Selector = ({ selectorLabel, width = "12.5rem" }) => {
  const [selectorName, setSelectorName] = useState([]);

  const { user, search, setUser, setSearch } = useContext(Context);

  // console.log("(Selector) User client Id is ", user.clientId);

  let dataList = [];

  // Determine the appropriate dataList
  if (selectorLabel === "Milliseconds") {
    dataList = millisecondsList;
  } else if (selectorLabel === "Accounts") {
    dataList = accountsList;
  } else if (selectorLabel === "Client ID") {
    dataList = clientIdList;
  } else if (user.clientId === "MGM Mandalay") {
    if (selectorLabel === "Services") {
      dataList = servicesListMandalay;
    } else if (selectorLabel === "Meal Time") {
      dataList = mealTimeListMandalay;
    }
  } else if (user.clientId === "MGM Grand") {
    if (selectorLabel === "Services") {
      dataList = servicesListGrand;
    } else if (selectorLabel === "Meal Time") {
      dataList = mealTimeListGrand;
    }
  }

  const getFormControlWidth = () => {
    if (selectorLabel === "Client ID") {
      // Set the width for Client ID label
      return width;
    } else {
      // Set the width for other labels in the md breakpoint
      return { xs: width, md: "7rem", xl: width };
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setSelectorName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    let updatedSearch = { ...search }; // Make a copy of the search state
    let updatedUser = { ...user }; // Make a copy of the search state

    // Update the relevant properties based on the selectorLabel
    if (selectorLabel === "Services") {
      updatedSearch.services = value;
    } else if (selectorLabel === "Meal Time") {
      updatedSearch.mealTime = value;
    } else if (selectorLabel === "Client ID") {
      updatedUser.clientId = value;
    } // ...and so on for other properties

    setSearch(updatedSearch); // Update the search state
    // console.log("(Selector) Search data is", search);

    setUser(updatedUser); // Update the user state
    // console.log("(Selector) user is", user);
  };

  useEffect(() => {
    if (user.clientId && selectorLabel === "Client ID") {
      setSelectorName(user.clientId);
    } else if (user.clientId && selectorLabel === "Services") {
      setSelectorName(search.services);
    } else if (user.clientId && selectorLabel === "Meal Time") {
      setSelectorName(search.mealTime);
    }
  }, [user, search]);

  return (
    <>
      <Box sx={stylesMui.inputFieldContainer}>
        <FormControl
          sx={{
            m: { xs: 0, md: 1 },
            width: getFormControlWidth(),
          }}
        >
          <InputLabel id="demo-multiple-name-label">{selectorLabel}</InputLabel>
          <Select
            // labelWidth={250}
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={selectorName}
            onChange={handleChange}
            input={<OutlinedInput label="Name" />}
            MenuProps={{
              IconComponent: KeyboardArrowDownIcon,
            }}
            sx={{
              ...stylesMui.inputField,
              borderRadius: "12px",
            }}
          >
            {dataList?.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Selector;
