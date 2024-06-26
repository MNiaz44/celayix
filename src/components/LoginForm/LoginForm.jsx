import React, { useContext } from "react";

import { FormControl } from "@mui/material";

import { Context } from "../../context/dataContext";

import Selector from "../Selector";
import { InputField, InputFieldPassword } from "../InputField";
import PrimaryButton from "../PrimaryButton";

const LoginForm = () => {
  const { login, setLogin } = useContext(Context);

  const handleClick = () => {
    console.log("Login clicked");
    setLogin(true);
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    setLogin(false);
  };

  // console.log("(LoginForm) login is", login);
  return (
    <>
      <FormControl sx={{ m: { xs: 0, md: 1 }, width: "25ch" }}>
        <Selector selectorLabel="Client ID" />
      </FormControl>
      <FormControl sx={{ m: { xs: 0, md: 1 }, width: "25ch" }}>
        <InputField fieldLabel="Username" />
      </FormControl>
      <FormControl
        sx={{ m: { xs: 0, md: 1 }, width: "20ch" }}
        variant="outlined"
      >
        <InputFieldPassword />
      </FormControl>
      {login === false && (
        <PrimaryButton buttonText="Login" onClick={handleClick} />
      )}
      {login === true && (
        <PrimaryButton buttonText="Logout" onClick={handleLogoutClick} />
      )}
    </>
  );
};

export default LoginForm;
