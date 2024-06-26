import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import MainPage from "./components/MainPage/MainPage";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="App">
            <MainPage />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
