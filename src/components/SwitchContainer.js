import React from "react";

function SwitchContainer() {
  const handleToggleSwitch = () => {
    // Implement the logic for toggling the switch here
  };

  return (
    <div className="switchContainer">
      <label className="switch">
        <input
          type="checkbox"
          id="toggleSwitch"
          onChange={handleToggleSwitch}
        />
        <span className="slider round"></span>
      </label>
      <aside>Make Photos Grayscale</aside>
    </div>
  );
}

export default SwitchContainer;
