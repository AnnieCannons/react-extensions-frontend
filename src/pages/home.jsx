import "../App.css";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import data from "../data.js";
import { useState } from "react";

function Home() {
  const [appData, setAppData] = useState(data);
  const [filter, setFilter] = useState("all");

  function removeItem(id) {
    const updatedData = appData.filter((item) => item.id !== id);
    setAppData(updatedData);
  }

  function updateItem(id, newIsActive) {
    const updatedData = appData.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: newIsActive };
      }
      return item;
    });
    setAppData(updatedData);
  }

  const filteredData = appData.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true; // show all
  });

  
  return (
  <div>
    <div className="filter-header">
      <h3>Extensions List</h3>
      <div className="filter-buttons">
        <Button clickHandler={() => setFilter("active")} text="Active" />
        <Button clickHandler={() => setFilter("inactive")} text="Inactive" />
        <Button clickHandler={() => setFilter("all")} text="Show All" />
      </div>
    </div>

    <div className="card-container">
      {filteredData.map((item, key) => (
        <Card
          key={key}
          logo={item.logo}
          name={item.name}
          isActive={item.isActive}
          description={item.description}
          id={item.id}
          clickHandler={removeItem}
          item1={item}
          setApp={setAppData}
          updateItem={updateItem}
        />
      ))}
    </div>
  </div>

  );
}

export default Home;
