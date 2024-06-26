import React, { useState, useContext, useEffect } from "react";

import { Grid } from "@mui/material";

import { Context } from "../../context/dataContext";

import LoginBox from "../LoginBox";
import { SearchGroup } from "../SearchGroup";
import ScheduledSearch from "../ScheduledSearch/ScheduledSearch";

import { stylesMui } from "./styles";
import "./MainPage.css";

const MainPage = () => {
  const { user, login, setUser, setLogin } = useContext(Context);
  const [searchGroups, setSearchGroups] = useState([]);

  useEffect(() => {
    // Check if user data is available in local storage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLogin(true);
    }
  }, [setUser, setLogin]);

  // console.log("(Main) user is", user);
  // console.log("(Main) user id is", user?.clientId);

  const clientIdString = user?.clientId;

  const { username, password } = user;

  // console.log("(Main) user creds are ", clientIdString, username, password);

  return (
    <>
      <div className="version-box">
        <p>v0.20</p>
      </div>
      <Grid container spacing={3} sx={stylesMui.containerGrid}>
        <Grid item>
          <LoginBox />
        </Grid>
        <Grid item sx={stylesMui.searchSection}>
          {clientIdString.includes("MGM Mandalay") &&
            username === "Aloi3384" &&
            password != null &&
            password.trim() !== "" &&
            login === true && (
              <SearchGroup
                headerFunction="remove"
                setSearchGroups={setSearchGroups}
                searchGroups={searchGroups}
              />
            )}
          {clientIdString.includes("MGM Grand") &&
            username === "Aloi3384" &&
            password != null &&
            password.trim() !== "" &&
            login === true && (
              <SearchGroup
                headerFunction="remove"
                setSearchGroups={setSearchGroups}
                searchGroups={searchGroups}
              />
            )}
        </Grid>
        <Grid item sx={stylesMui.scheduleSection}>
          {/* Conditionally render ScheduledSearch */}
          {clientIdString.includes("MGM Mandalay") &&
            username === "Aloi3384" &&
            password != null &&
            password.trim() !== "" &&
            login === true && <ScheduledSearch />}
          {clientIdString.includes("MGM Grand") &&
            username === "Aloi3384" &&
            password != null &&
            password.trim() !== "" &&
            login === true && <ScheduledSearch />}
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
