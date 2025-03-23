import React, { createContext, useState, useEffect } from "react";
import { lightTheme, darkTheme } from "../theme";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");
  const [themeVars, setThemeVars] = useState(lightTheme);

  useEffect(() => {
    const vars = themeName === "light" ? lightTheme : darkTheme;
    setThemeVars(vars);
    for (const key in vars) {
      document.documentElement.style.setProperty(`--${key}`, vars[key]);
    }
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme, themeVars }}>
      {children}
    </ThemeContext.Provider>
  );
};
