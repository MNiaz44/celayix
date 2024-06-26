import React from "react";

import { Box } from "@mui/material";

import LoginForm from "../LoginForm/LoginForm";

import { stylesMui } from "./styles";

const LoginBox = () => {
  return (
    <>
      <Box sx={stylesMui.containerBox}>
        <LoginForm />
      </Box>
    </>
  );
};

export default LoginBox;
