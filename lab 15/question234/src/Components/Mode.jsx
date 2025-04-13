import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Mode() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default Mode;
