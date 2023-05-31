import React from "react";
import "./colors.css";

const Colors = () => {
  const [color, setColor] = React.useState("blue");

  function change(e) {
    setColor(e.target.value);
  }

  return (
    <div className={`container ${color}`}>
      <select className="select" onChange={change} value={color}>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
      <h1 className="text">{color}</h1>
    </div>
  );
};

export default Colors;
