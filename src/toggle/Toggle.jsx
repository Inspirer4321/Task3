import React from "react";
import "./toggle.css";

const Toggle = () => {
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    console.log(`Your block is ${toggle}`);
  });

  return (
    <>
      <button className={`toggle-btn ${toggle ? "active" : ""}`} onClick={() => setToggle(!toggle)}>
        Toggle Fetch Component
      </button>
      {toggle ? (
        <div className="toggle">
          <div className="toggle-block">Fetch Component</div>
        </div>
      ) : null}
    </>
  );
};

export default Toggle;
