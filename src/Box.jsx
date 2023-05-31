import React from "react";


const Box = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.body.style.backgroundColor = "pink";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container1">
      <div className="box1">
        <div className="count">{count}</div>
        <div className="button-container">
          <button className="button" onClick={handleDecrement}>
            -1
          </button>
          <button className="button" onClick={handleIncrement}>
            +1
          </button>
        </div>
        <div>
          <button className="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Box;
