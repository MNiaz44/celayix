import dayjs from "dayjs";

const multipleShiftTimeFormatter = (inputTimes) => {
  const valuesArray = Object.values(inputTimes);

  const formattedTimes = valuesArray.map((time) =>
    dayjs(time).format("HH:mm:ss a")
  );

  return formattedTimes;
};

export default multipleShiftTimeFormatter;
