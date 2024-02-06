import React, { useState, useEffect } from "react";

import "./Forecast.css";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";


export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);
 
  useEffect(() => {
    setReady(false)
  }, [props.cordinates]);

  function forecastSearch(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  function call() {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lon = props.cordinates.lon;
    let lat = props.cordinates.lat;
    let apiUrl = `api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(forecastSearch);
  }

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastInfo data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    call();

    return null;
  }
 
}

