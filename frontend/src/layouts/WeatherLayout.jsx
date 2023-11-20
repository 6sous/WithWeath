import { Outlet, useLoaderData } from "react-router-dom";
import NavBottom from "../components/NavBottom";
import "../styles/WeatherLayout.scss";
import { useIsItDay } from "../utils/functions";
import NavTop from "../components/NavTop";

/**
|--------------------------------------------------
| component
|--------------------------------------------------
*/
function WeatherLayout() {
  const { currentWeatherData } = useLoaderData();

  // determine if it's day or night
  const isItDay = useIsItDay(
    currentWeatherData.dt,
    currentWeatherData.sys.sunrise,
    currentWeatherData.sys.sunset,
    currentWeatherData.timezone
  );

  return (
    <div
      id="weather-layout"
      className={` ${
        isItDay ? "day" : "night"
      } ${currentWeatherData.weather[0].main.toLowerCase()}
      `}
    >
      <header>
        <NavTop isItDay={isItDay} />
      </header>
      <Outlet />
      {/* <NavBottom /> */}
    </div>
  );
}

export default WeatherLayout;

/**
|--------------------------------------------------
| loader
|--------------------------------------------------
*/

export const currentDayDataLoader = async ({ request }) => {
  const url = new URL(request.url);
  const city = url.searchParams.getAll("city");

  try {
    const geoResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    const geoData = await geoResponse.json();

    if (!geoResponse.ok) {
      throw Error(`geo data of ${city} not found`);
    }

    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        geoData[0].lat
      }&lon=${geoData[0].lon}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    if (!currentWeatherResponse.ok) {
      throw Error(`current weather of ${city} not found`);
    }

    const currentWeatherData = await currentWeatherResponse.json();

    const overcastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${
        geoData[0].lat
      }&lon=${geoData[0].lon}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    if (!overcastResponse.ok) {
      throw Error(`weather of ${city} not found`);
    }

    const overcastWeatherData = await overcastResponse.json();

    const imageResponse = await fetch(
      `${import.meta.env.VITE_PIXABAY_BASE_URL}?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${city}&image_type=photo&per_page=10&category=buildings`
    );

    if (!imageResponse.ok) {
      throw Error("Failed to fetch cities images");
    }

    const images = await imageResponse.json();

    return { overcastWeatherData, currentWeatherData, images };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred" };
  }
};
