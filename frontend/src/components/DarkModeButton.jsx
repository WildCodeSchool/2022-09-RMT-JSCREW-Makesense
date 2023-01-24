import React, { useState } from "react";

import "./DarkMode.css";

import PictoSun from "../assets/sun.svg";
import PictoMoon from "../assets/moon.svg";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );
  function handleToggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  }

  return (
    <div className="flex justify-between p-3">
      <img className="aspect-auto" src={PictoSun} alt="light" />
      <div>
        <label className="switch mx-2">
          <input type="checkbox" onClick={handleToggle} checked={darkMode} />
          <span className="slider round" />
        </label>
      </div>
      <img className="aspect-auto" src={PictoMoon} alt="dark" />
    </div>
  );
}

export default DarkModeButton;
