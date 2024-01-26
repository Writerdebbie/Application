import React, { useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

import "./index.css";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  function displayWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      country: response.data.sys.country,
      city: response.data.name,
      date: "Thursday 15:23",
    });
  }
  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row ">
            <div className="col-9">
              <input
                type="search"
                autoCapitalize="on"
                placeholder="Enter a city here..."
                autoFocus
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
        <h1 className="mt-0 mb-2 fs-4">
          {weather.city},{weather.country}
        </h1>
        <div className="row">
          <div className="col-8 p-0">
            <div className="row">
              <div className="col-2">
                <div className="clearfix">
                  <img
                    className="float-left "
                    src={weather.icon}
                    alt={weather.description}
                  />
                </div>
              </div>

              <div className="col-2">
                <div className="float-left">
                  <span className="temp-value">{weather.temperature}</span>
                  <span className="temp-unit">℃</span>{" "}
                </div>
              </div>

              <div className="col-4">
                <ul>
                  <li> Humidity: {weather.humidity}% </li>
                  <li> Wind: {weather.wind}m/s</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4">
            <h1>Weather</h1>
            <ul>
              <li>{weather.date}</li>
              <li className="text-capitalize">{weather.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
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
