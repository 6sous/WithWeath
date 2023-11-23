import { useState } from "react";
import "./App.scss";
import { useLoaderData, useNavigate } from "react-router-dom";
import logo from "./assets/logo/logo.svg";
import ImageSlider from "./components/ImageSlider";
import NavTop from "./components/NavTop";
import SearchInput from "./components/SearchInput";

function App() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const cityImages = useLoaderData();

  // input functions
  const handleSearchCity = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/weather/currentday?city=${city}`);
    }
  };

  const handleClick = () => {
    navigate(`/weather/currentday?city=${city}`);
  };

  return (
    <>
      <header>
        <NavTop />
      </header>
      <div className="landingPage">
        <section className="hero">
          <figure className="logo-container">
            <img
              src={logo}
              alt="logo with 2 triangles which represent the brand WithWeath"
              className="logo"
            />
            <figcaption className="title">WithWeath</figcaption>
          </figure>
          <p>
            powered by <br />
            <span>OpenWeather & 6sous</span>
          </p>
          <SearchInput
            nameAttribute="city"
            value={city}
            handleSearch={handleSearchCity}
            handleKeyPress={handleKeyPress}
            handleClick={handleClick}
            placeholder="Search a city..."
          />
        </section>
        <section className="city-search-section">
          <ImageSlider slides={cityImages} />
        </section>
        <footer>
          <p>© 2022 WithWeath. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

export const citiesImagesLoader = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_PIXABAY_BASE_URL}?key=${
      import.meta.env.VITE_PIXABAY_API_KEY
    }&q=city&image_type=photo&per_page=10&category=buildings`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cities images");
  }

  const data = await response.json();
  return data;
};
