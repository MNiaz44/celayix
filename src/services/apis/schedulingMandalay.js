import { dataServer } from "./axios.config";

import callDateFormatter from "../../helpers/callDateFormatter";
import callTimeFormatter from "../../helpers/callTimeFormatter";
import clientIdFormatter from "../../helpers/clientIdFormatter";
import servicesAndMealsFormatter from "../../helpers/servicesAndMealsFormatter";

export const scheduleSearchMandalay = async (user, search, searchMandalay) => {
  // console.log("(scheduleSearchMandalay) search is ", search);
  console.log("(scheduleSearchMandalay) user.search is ", user?.search);
  // console.log(
  //   "🏁(scheduleSearchMandalay) user.searchMandalay is ",
  //   user?.searchMandalay
  // );

  let ID = clientIdFormatter(user?.user?.clientId);
  let username = user?.user?.username;
  let password = user?.user?.password;
  let from = user?.search?.shiftFrom;
  let To = user?.search?.shiftTo;
  let Service = servicesAndMealsFormatter(user?.search?.services);
  let Meal = servicesAndMealsFormatter(user?.search?.mealTime);
  let booking_date = callDateFormatter(user?.search?.callDate);
  let booking_time = callTimeFormatter(user?.search?.callTime);
  let shift_start = user?.searchMandalay?.shiftStart.map(
    (value) => value.value
  );
  let shift_end = user?.searchMandalay?.shiftEnd.map((value) => value.value);
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

  console.log("(scheduleSearchMandalay) values are ", values);

  try {
    const response = await dataServer.post("/Scheduling_Mandalay", values, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
