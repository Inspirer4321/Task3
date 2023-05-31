import React from "react";

const Time = () => {
  const [time, setTime] = React.useState(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="time-container">
      <h2>Time is</h2>
      <div className="time">{time}</div>
    </div>
  );
};

export default Time;
