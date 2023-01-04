import React, { useState } from "react";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  }

  return (
    <button
      type="button"
      className="bg-gray-800 text-white font-bold py-2 px-4 rounded"
      onClick={handleToggle}
    >
      {darkMode ? "Mode clair" : "Mode sombre"}
    </button>
  );
}

export default DarkModeButton;
