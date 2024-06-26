import dayjs from "dayjs";

const shiftTimeFormatter = (inputTime) => {
  const shiftTimeFormatted = dayjs(inputTime).format("h:mm a");
  return shiftTimeFormatted;
};

export default shiftTimeFormatter;
