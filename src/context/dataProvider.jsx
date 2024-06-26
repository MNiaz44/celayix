import React, { useState, useEffect } from "react";
import { Context } from "./dataContext";

function DataProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [reset, setReset] = useState(false);
  const [user, setUser] = useState({
    clientId: "",
    username: "",
    password: "",
  });
  const [search, setSearch] = useState({
    shiftFrom: "",
    shiftTo: "",
    shiftDate: "",
    callDate: "",
    callTime: "",
    shiftStart: "",
    shiftEnd: "",
    services: "All Services",
    mealTime: "All Meal Periods",
    milliseconds: "0",
  });
  const [searchMandalay, setSearchMandalay] = useState({
    shiftStart: [],
    shiftEnd: [],
  });

  const clearSearchContext = () => {
    setSearch({
      shiftDate: "",
      callDate: "",
      callTime: "",
      shiftStart: "",
      shiftEnd: "",
      services: "All Services",
      mealTime: "All Meal Periods",
      milliseconds: "0",
    });
  };

  const clearSearchContextMandalay = () => {
    setSearch({
      shiftDate: "",
      callDate: "",
      callTime: "",
      shiftStart: "",
      shiftEnd: "",
      services: "All Services",
      mealTime: "All Meal Periods",
      milliseconds: "0",
    });
    setSearchMandalay({
      shiftStart: [],
      shiftEnd: [],
    });
  };

  // Load user data from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLogin(true);
    }
  }, []);

  // Save user data to local storage on successful login
  useEffect(() => {
    if (login) {
      localStorage.setItem("userData", JSON.stringify(user));
    } else {
      localStorage.removeItem("userData");
    }
  }, [login, user]);

  return (
    <Context.Provider
      value={{
        login,
        user,
        search,
        searchMandalay,
        reset,
        setLogin,
        setUser,
        setSearch,
        setSearchMandalay,
        setReset,
        clearSearchContext,
        clearSearchContextMandalay,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default DataProvider;
