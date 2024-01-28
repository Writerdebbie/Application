import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";
import Temperature from "./Temperature"

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h1 className="mt-0 mb-2 fs-4">
        {props.data.city}, {props.data.country}
      </h1>
      <div className="row">
        <div className="col-8 p-0">
          <div className="row">
            <div className="col-2">
              <div className="clearfix">
                <div className="float-left">
                  <WeatherIcon code={props.data.icon} alt={props.data.description} />
                </div>
              
              </div>
            </div>

            <div className="col-2 p-0">
              <div className="float-left p-0">
                <Temperature celsius={props.data.temperature} />
                
              </div>
            </div>

            <div className="col-4 mt-1">
              <ul>
                <li> Feels Like: {props.data.feel}℃</li>
                <li> Humidity: {props.data.humidity}% </li>
                <li> Wind: {props.data.wind}m/s</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h1 className="mt-0">Weather</h1>
          <ul>
            <li>
              <FormatDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
