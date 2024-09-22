import React, { useState } from "react";
import "./CircleCheckbox.scss"; 

const CircleCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggle();
    }
  };

  return (
    <label className="checkbox-group">
      <div
        className={`circle-checkbox ${checked ? "checked" : ""}`}
        onClick={handleToggle}
        role="checkbox"
        aria-checked={checked}
        tabIndex="0"
        onKeyDown={handleKeyDown}
      >
        <span className="checkmark">&#10003;</span>
      </div>
      {label}
    </label>
  );
};

export default CircleCheckbox;

