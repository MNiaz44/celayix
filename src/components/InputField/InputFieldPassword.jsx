import React, { useState, useContext } from "react";

import {
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material/";

import { Context } from "../../context/dataContext";

import { stylesMui } from "./styles";

const InputFieldPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useContext(Context);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setPassword(value);

    let updatedUser = { ...user };
    updatedUser.password = value;

    setUser(updatedUser);
    // console.log("(InputFieldPassword) user is", user);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          ...stylesMui.inputFieldContainer,
          borderRadius: "12px",
        }}
      >
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password || user?.password}
          onChange={handleChange}
          sx={stylesMui.inputFieldPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </Box>
    </>
  );
};

export default InputFieldPassword;
