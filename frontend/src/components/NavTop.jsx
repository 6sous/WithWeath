import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.svg";
import BurgerMenu from "./BurgerMenu";
import "../styles/NavTop.scss";

function NavTop({ isItDay }) {
  const location = useLocation();

  return (
    <nav
      className={`top-navbar ${
        location.pathname !== "/" && (isItDay ? "day" : "night")
      }`}
    >
      <Link
        to="/"
        className={`logo-link ${isItDay && "day"}`}
        aria-label="visit homepage"
        aria-current="page"
      >
        {location.pathname !== "/" && (
          <>
            <img
              src={logo}
              alt="logo with 2 triangles which represent the brand WithWeath"
              className="logo"
            />
            <span>WithWeath</span>
          </>
        )}
      </Link>
      <BurgerMenu isItDay={isItDay} />
    </nav>
  );
}

export default NavTop;
