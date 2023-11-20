import sunny from "../assets/icons/weather_icons/sunny_icon.svg";
import cloudy from "../assets/icons/weather_icons/cloudy_icon.svg";
import rainy from "../assets/icons/weather_icons/rainy_icon.svg";
import snowy from "../assets/icons/weather_icons/snowy_icon.svg";
import thunderstorm from "../assets/icons/weather_icons/thunderstorm_icon.svg";
import wind from "../assets/icons/weather_icons/wind_clouds.svg";
import moon from "../assets/icons/weather_icons/moon.svg";
import cloudySun from "../assets/icons/weather_icons/cloudy_sun_icon.svg";
import fog from "../assets/icons/weather_icons/fog.svg";

// array of objects with id, icon and main category
const weatherIconsArray = [
  {
    id: 1,
    icon: sunny,
    main: "clear",
  },
  {
    id: 2,
    icon: cloudy,
    main: "clouds",
  },
  {
    id: 3,
    icon: rainy,
    main: "rain drizzle",
  },
  {
    id: 4,
    icon: snowy,
    main: "snow",
  },
  {
    id: 5,
    icon: thunderstorm,
    main: "thunderstorm",
  },
  {
    id: 6,
    icon: wind,
    main: "wind tornado squall",
  },
  {
    id: 7,
    icon: moon,
    main: "moon",
  },
  {
    id: 8,
    icon: cloudySun,
    main: "cloudy_sun",
  },
  {
    id: 9,
    icon: fog,
    main: "fog mist haze smoke sand dust ash",
  },
];

export default weatherIconsArray;
