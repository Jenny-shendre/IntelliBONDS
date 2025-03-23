import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/Login";
import Dashboard from "./component/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "../src/context/ThemeContext"; // Make sure this path is correct

const App = () => {
  const { themeName } = useContext(ThemeContext);

  // Create a theme based on light or dark mode
  const theme = createTheme({
    palette: {
      mode: themeName, // 'light' or 'dark'
      primary: {
        main: themeName === "light" ? "#1976d2" : "#2cb0ca",
      },
      background: {
        default: themeName === "light" ? "#fbfeff" : "#132742",
        paper: themeName === "light" ? "#ffffff" : "#1c4c66",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures background & typography respect theme */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
