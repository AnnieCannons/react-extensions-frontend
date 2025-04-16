import React, { useState } from 'react';
import Switch from 'react-switch';

const Toggle = ({checked, handleToggleChange, isActive}) => {

  // const [checked, setChecked] = useState(false);
  // const handleChange = nextChecked => {
  //   setChecked(nextChecked);
  // };

  console.log(checked, isActive)

  return (
    <div className="toggle-wrapper">
      <label>
        {/* <span>Switch with default style</span> */}
        <Switch
          onChange={handleToggleChange}
          checked={isActive ? true : false}
          className="react-switch"
          checkedIcon={false}
          uncheckedIcon={false}
          offColor="#A9A9A9"
          onColor="#EE5F54"
        />
      </label>
      {/* <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p> */}
    </div>
  );
};

export default Toggle;
