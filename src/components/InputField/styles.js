export const stylesMui = {
  inputFieldContainer: {
    "& .MuiInputBase-root": {
      borderRadius: "12px",
      height: "48px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    ml: { xs: "-3rem", md: "0rem" },
    "& .MuiOutlinedInput-root": {
      background: "#FFF",
      borderRadius: "12px",
      minWidth: { xs: "12.5rem", md: "8.25rem", xl: "11rem" },
      maxWidth: { xs: "12.5rem", md: "11rem", xl: "12rem" },
      height: "48px",
      "& > fieldset": {
        border: "1px solid #DCDBDD",
      },
    },
  },
  inputFieldPassword: {
    "& > fieldset": {
      border: "1px solid #DCDBDD",
    },
    "& .MuiOutlinedInput-root": {
      background: "#FFF",
      borderRadius: "12px",
      minWidth: "12.5rem",
      height: "48px",
    },
  },
  inputFieldMilliseconds: {
    "& > fieldset": {
      border: "1px solid #DCDBDD",
    },
    "& .MuiOutlinedInput-root": {
      background: "#FFF",
      borderRadius: "12px",
      // width: "auto",
      width: "7rem",
      // minWidth: "5.5rem",
      height: "48px",
    },
  },
};
