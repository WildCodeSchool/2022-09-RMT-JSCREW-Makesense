import React, { useState } from "react";

import "./DarkMode.css";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(true);

  function handleToggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  }

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={handleToggle} />
        <span className="slider round" />
      </label>
    </div>
  );
}

export default DarkModeButton;
