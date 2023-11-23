import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/BurgerMenu.scss";

function burgerMenu({ isItDay }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button
        type="button"
        className={`menu-button ${isOpen && "open"}`}
        aria-label="toggle navigation"
        aria-expanded={isOpen ? "true" : "false"}
        onClick={handleClick}
      >
        <span className={`line ${isItDay && "day"}`}></span>
        <span className={`line ${isItDay && "day"}`}></span>
        <span className={`line ${isItDay && "day"}`}></span>
      </button>
      <ul className={`links ${isOpen && "open"} ${isItDay ? "day " : "night"}`}>
        <li className="link">
          <Link to="/" aria-current="page" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="link">
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="link">
          <Link to="/articles" onClick={handleClick}>
            Articles
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default burgerMenu;
