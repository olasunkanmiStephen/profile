// Toggle.jsx
import React from 'react';

const Toggle = ({ IsDayMode, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={IsDayMode} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default Toggle;
