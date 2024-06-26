export const stylesMui = {
  inputFieldContainer: {
    // "& .MuiInputBase-root": {
    //   height: "48px",
    // },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    ml: { xs: "-1.5rem", md: "0rem" },
    // width: { xs: "12.5rem", md: "auto" },
    "& > fieldset": {
      border: "1px solid #DCDBDD",
    },
    borderRadius: "12px",
    height: "48px",
    "& .MuiOutlinedInput-root": {
      background: "#FFF",
      maxWidth: "10rem",
      minWidth: "8.5rem",
      // width: "5rem",
    },
  },
};
