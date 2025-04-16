import "../App.css";
import Toggle from "./Toggle.jsx";
import Button from "./Button.jsx";
import { useState } from "react";

function Card({
  logo,
  name,
  isActive,
  description,
  clickHandler,
  id,
  updateItem,
  
}) {
  const [checked, setChecked] = useState(false);

  const handleToggleChange = (nextChecked) => {
    updateItem(id, nextChecked);
    setChecked(nextChecked);
  };

  return (
    <div className="card">
      <div className="card-header-wrapper">
        <img src={logo} />
        <div className="name-desc-wrapper">
          <h2>{name}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
      <div className="button-wrapper">
        <Button clickHandler={clickHandler}id={id} text="Remove"/>
        <Toggle checked={checked} handleToggleChange={handleToggleChange} isActive={isActive}/>
      </div>
    </div>
  );
}

export default Card;
