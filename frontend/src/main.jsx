import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import elements and loaders
import RootLayout from "./layouts/RootLayout";
import App, { citiesImagesLoader } from "./App";
import About from "./pages/About";
import Articles from "./pages/Articles";
import WeatherLayout, { currentDayDataLoader } from "./layouts/WeatherLayout";
import CurrentDay from "./components/CurrentDay";
import ErrorCity from "./errors/ErrorCity";

// router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<App />} loader={citiesImagesLoader} />
      <Route
        path="weather"
        element={<WeatherLayout />}
        loader={currentDayDataLoader}
        id="weather-layout"
        errorElement={<ErrorCity />}
      >
        <Route path="currentday" element={<CurrentDay />} />
      </Route>

      <Route path="about" element={<About />} />
      <Route path="articles" element={<Articles />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
