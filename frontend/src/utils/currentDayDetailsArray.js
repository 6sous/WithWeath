import { roundNumber } from "./functions";

const detailsCurrentWeather = (currentWeatherData) => {
  return [
    {
      className: "humidity",
      icon: "fi fi-rr-raindrops",
      text: "Humidity",
      value: currentWeatherData.main.humidity,
      unit: "%",
    },
    {
      className: "feels-like",
      icon: "fi fi-rr-temperature-high",
      text: "Feels like",
      value: roundNumber(currentWeatherData.main.feels_like),
      unit: "°C",
    },
    {
      className: "wind",
      icon: "fi fi-rr-wind",
      text: "Wind",
      value: roundNumber(currentWeatherData.wind.speed * 3.6),
      unit: "km/h",
    },
    {
      className: "pressure",
      icon: "fi fi-rr-dashboard",
      text: "Pressure",
      value: currentWeatherData.main.pressure,
      unit: "hPa",
    },
    {
      className: "cloudiness",
      icon: "fi fi-rr-cloud",
      text: "Cloudiness",
      value: currentWeatherData.clouds.all,
      unit: "%",
    },
    {
      className: "visibility",
      icon: "fi fi-rr-eye",
      text: "Visibility",
      value: currentWeatherData.visibility / 1000,
      unit: "km",
    },
  ];
};

export default detailsCurrentWeather;
