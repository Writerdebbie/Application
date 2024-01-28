import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function Fahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsiusUnit(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature p-0">
        <span className="temp-value">{props.celsius}</span>
        <span className="temp-unit">
          ℃|
          <a href="/" onClick={Fahrenheit}>
            ℉
          </a>{" "}
        </span>{" "}
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="Temperature p-0">
        <span className="temp-value">{Math.round(fahrenheit)}</span>
        <span className="temp-unit">
          <a href="/" onClick={celsiusUnit}>
            ℃
          </a>
          |℉
        </span>
      </div>
    );
  }
}
