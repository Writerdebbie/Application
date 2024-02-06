import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";
import { ColorRing } from "react-loader-spinner";

import "./index.css";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  function displayWeather(response) {
    setWeather({
      ready: true,
      coordinate: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      feel: Math.round(response.data.main.feels_like),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }
  function Search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="col-9">
              <input
                type="search"
                autoCapitalize="on"
                placeholder="Enter a city here..."
                autoFocus
                onChange={handleCity}
                className="search-form w-100"
              />
            </div>
            <div className="col-1 w-80">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary "
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weather} />
       
      </div>
    );
  } else {
    Search();
    return (
      <div className="App-header">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "green", "#abbd81", "blueviolet"]}
        />
      </div>
    );
  }
}
