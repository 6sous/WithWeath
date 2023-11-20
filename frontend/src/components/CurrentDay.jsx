/**
|--------------------------------------------------
| imports
|--------------------------------------------------
*/

import { useRouteLoaderData } from "react-router-dom";

// package which allows to manipulate dates
import moment from "moment";

// import styles
import "../styles/CurrentDay.scss";
import { randomNum, roundNumber, useIsItDay } from "../utils/functions";
import weatherIconsArray from "../utils/weather_icons_array";
import detailsCurrentWeather from "../utils/currentDayDetailsArray";
import LineChart from "./LineChart";
import { useEffect, useState } from "react";

/**
|--------------------------------------------------
| CurrentDay component
|--------------------------------------------------
*/
function CurrentDay() {
  const [infoExpanded, setInfoExpanded] = useState(false);

  const today = moment().format("dddd, MMMM Do");
  const { currentWeatherData, overcastWeatherData } =
    useRouteLoaderData("weather-layout");

  const isItDay = useIsItDay(
    currentWeatherData.dt,
    currentWeatherData.sys.sunrise,
    currentWeatherData.sys.sunset,
    currentWeatherData.timezone
  );

  console.log(isItDay);

  // details of current weather
  const currentWeatherDetails = detailsCurrentWeather(currentWeatherData);

  // weather icon based on weather
  const weatherIcon = weatherIconsArray.find((icon) => {
    return (
      currentWeatherData.weather[0].main &&
      icon.main.includes(currentWeatherData.weather[0].main.toLowerCase())
    );
  });

  /**
|--------------------------------------------------
| return of the component
|--------------------------------------------------
*/

  return (
    <div className="current-day">
      <section className="main-info">
        <h3 className="city-name">
          <i className="fi fi-rr-marker" />
          {currentWeatherData.name}
        </h3>
        <p>
          {roundNumber(currentWeatherData.main.temp)}
          <span className="unit-temperature">°C</span>
        </p>
        <figure>
          <img
            src={weatherIcon.icon}
            alt="icon representing weather"
            className="weather-icon"
          />
          <figcaption>{currentWeatherData.weather[0].main}</figcaption>
        </figure>
      </section>

      <section
        className={`additional-info ${infoExpanded && "expanded"} ${
          isItDay && "day"
        }`}
      >
        <button
          className={`expand-additional-info ${isItDay && "day"}`}
          onClick={() => setInfoExpanded(!infoExpanded)}
        >
          <i className={`fi fi-br-angle-${infoExpanded ? "down" : "up"}`} />
        </button>
        <div className="info-header">
          <h3 className="current-date">{today} </h3>
          <p className={`description ${isItDay && "day"}`}>
            {currentWeatherData.weather[0].description}
          </p>
        </div>
        <h2 className={`section-title ${isItDay && "day"}`}>
          Temperature Curve
        </h2>
        <div className="hourly-weather">
          <LineChart />
        </div>
        <h2 className={`section-title ${isItDay && "day"}`}>weather details</h2>
        <div className="detailed-info">
          {currentWeatherDetails.map((detail) => (
            <div
              className={`detail ${detail.className}`}
              key={detail.className}
            >
              <i className={detail.icon} />
              <p className="detail-text">{detail.text}</p>
              <p className="detail-value">
                <span>{detail.value}</span>
                {detail.unit}
              </p>
            </div>
          ))}
        </div>
        <div className="sunset-to-sunrise">ok</div>
      </section>
    </div>
  );
}

export default CurrentDay;
