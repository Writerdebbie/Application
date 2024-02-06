import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function ForecastInfo(props) {
  console.log(props.data);
 
  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }
  return (
    <div className="Forecast">
      <div className="Forecast-day">{day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />;
      <div className="Forecast-temperature">
        <span className="Forecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="Forecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
