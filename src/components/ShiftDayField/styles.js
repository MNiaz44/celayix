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
    background: "#FFF",
    "& > fieldset": {
      border: "1px solid #DCDBDD",
    },
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        borderRadius: "12px",
      },
    },
  },
  shiftDayFieldDisabled: {
    opacity: 1, // Restore full opacity
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        border: "1px solid #DCDBDD",
      },
    },
    "& > fieldset": {
      border: "1px solid #DCDBDD",
    },
  },
};
