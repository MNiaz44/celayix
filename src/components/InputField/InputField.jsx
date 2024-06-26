import React, { useState, useContext, useEffect } from "react";

import { Box, TextField } from "@mui/material";

import { Context } from "../../context/dataContext";
import { handleChangeInputField } from "../../helpers/formHandlers";

import { stylesMui } from "./styles";

const InputField = ({ fieldLabel }) => {
  const [inputValue, setInputValue] = useState("");
  const { user, search, setUser, setSearch } = useContext(Context);

  const handleChange = (event) => {
    const sanitizedValue = handleChangeInputField(
      event,
      fieldLabel,
      search,
      setSearch,
      user,
      setUser
    );

    setInputValue(sanitizedValue);

    // console.log("(InputField) Search data is", search);
    // console.log("(InputField) user is", user);
  };

  const storedUser = JSON.parse(localStorage.getItem("userData"));
  // console.log("✨(InputField) storedUser password is...", storedUser?.password);
  // console.log("✨(InputField) context password is...", user?.password);

  // Define different styles based on fieldLabel
  const inputFieldStyles =
    fieldLabel === "Username"
      ? stylesMui.inputField // Replace with your specific styles
      : fieldLabel === "Password"
      ? stylesMui.inputField // Replace with your specific styles
      : fieldLabel === "Milliseconds Offset"
      ? stylesMui.inputFieldMilliseconds // Replace with your specific styles
      : stylesMui.inputField; // Default styles if no match

  useEffect(() => {
    if (user.username && fieldLabel === "Username") {
      setInputValue(user.username);
    } else if (user.password && fieldLabel === "Password") {
      setInputValue(
        storedUser.password !== "" ? storedUser.password : user.password
      );
    } else if (fieldLabel === "Milliseconds Offset") {
      setInputValue(search?.milliseconds);
    }
  }, [user.username, user.password, search.milliseconds]);

  return (
    <>
      <Box sx={stylesMui.inputFieldContainer}>
        <TextField
          key={search}
          id="outlined-basic"
          label={fieldLabel}
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          sx={inputFieldStyles}
        />
      </Box>
    </>
  );
};

export default InputField;
