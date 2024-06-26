import dayjs from "dayjs";

const callTimeFormatter = (inputTime) => {
  const callTimeFormatted = dayjs(inputTime).format("HH:mm:ss");
  return callTimeFormatted;
};

export default callTimeFormatter;
