import dayjs from "dayjs";

const callDateFormatter = (inputDate) => {
  const callDateFormatted = dayjs(inputDate).format("YY/MM/DD");
  return callDateFormatted;
};

export default callDateFormatter;
