import Switch from 'react-switch';

const Toggle = ({ handleToggleChange, isActive}) => {

  return (
    <div className="toggle-wrapper">
      <label>
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
    </div>
  );
};

export default Toggle;
