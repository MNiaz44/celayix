import { dataServer } from "./axios.config";

import callDateFormatter from "../../helpers/callDateFormatter";
import callTimeFormatter from "../../helpers/callTimeFormatter";
import shiftTimeFormatter from "../../helpers/shiftTimeFormatter";
import clientIdFormatter from "../../helpers/clientIdFormatter";
import servicesAndMealsFormatter from "../../helpers/servicesAndMealsFormatter";

export const scheduleSearchGrand = async (user, search) => {
  // console.log("(scheduleSearchGrand) user is ", user?.user);
  // console.log("(scheduleSearchGrand) user.search is ", user?.search);
  // console.log("(scheduleSearchGrand) search is ", user?.search);

  let ID = clientIdFormatter(user?.user?.clientId);
  let username = user?.user?.username;
  let password = user?.user?.password;
  let from = user?.search?.shiftDate;
  let To = user?.search?.shiftDate;
  let Service = servicesAndMealsFormatter(user?.search?.services);
  let Meal = servicesAndMealsFormatter(user?.search?.mealTime);
  let booking_date = callDateFormatter(user?.search?.callDate);
  let booking_time = callTimeFormatter(user?.search?.callTime);
  let shift_start = shiftTimeFormatter(user?.search?.shiftStart);
  let shift_end = shiftTimeFormatter(user?.search?.shiftEnd);
  let milliseconds = user?.search?.milliseconds;

  if (milliseconds === null || milliseconds === "") {
    milliseconds = 0;
  }

  let values = {
    ID,
    username,
    password,
    from,
    To,
    Service,
    Meal,
    booking_date,
    booking_time,
    shift_start,
    shift_end,
    milliseconds,
  };

  console.log("(scheduleSearchGrand) values are ", values);

  try {
    const response = await dataServer.post("/Scheduling_Grand", values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
