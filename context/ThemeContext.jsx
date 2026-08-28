import { useState } from "react";
import { createContext } from "react";

export const ThemeContaxt = createContext();

function ThemeProvider({ childern }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContaxt.Provider value={{ theme, setTheme }}>
      {childern}
    </ThemeContaxt.Provider>
  );
}

export default ThemeProvider;
