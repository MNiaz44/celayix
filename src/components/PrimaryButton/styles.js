const baseButtonStyle = {
  borderRadius: "10px",
  background: "#009580",
  textTransform: "capitalize",
  display: "flex",
  height: "48px",
  // minWidth: "6.75rem",
  width: "inherit",
  minWidth: "auto",
  maxWidth: "11.5rem",
  padding: "10px",
  gap: "0.31rem",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff",
  transition: "background-color 0.3s",
  whiteSpace: "nowrap",
  "&:hover": {
    background: "#0a6a5d",
  },
};

export const stylesMui = {
  primaryButton: {
    ...baseButtonStyle,
  },
  primaryButtonAlt: {
    ...baseButtonStyle,
    minWidth: "9.6875rem",
  },
  primaryButtonCustom: {
    ...baseButtonStyle,
    gap: "0.15rem",
    padding: "7px",
  },
  primaryButtonAuth: {
    ...baseButtonStyle,
    minWidth: "6.75rem",
  },
};

// export const stylesMui = {
//   primaryButton: {
//     borderRadius: "10px",
//     background: "#009580",
//     textTransform: "capitalize",
//     display: "flex",
//     height: "48px",
//     minWidth: "8.75rem",
//     padding: "10px",
//     gap: "0.31rem",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#ffffff",
//     transition: "background-color 0.3s",
//     whiteSpace: "nowrap",
//     "&:hover": {
//       background: "#0a6a5d",
//     },
//   },
//   primaryButtonAlt: {
//     borderRadius: "10px",
//     background: "#009580",
//     textTransform: "capitalize",
//     display: "flex",
//     height: "48px",
//     minWidth: "9.6875rem",
//     padding: "10px",
//     gap: "0.31rem",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "#ffffff",
//     transition: "background-color 0.3s",
//     whiteSpace: "nowrap",
//     "&:hover": {
//       background: "#0a6a5d",
//     },
//   },
// };
