import { useState } from "react";
import "../styles/NavBottom.scss";
import useScrollDirection from "../utils/customHooks";

function NavBottom() {
  const [isDeployed, setIsDeployed] = useState(false);
  const [menuIcon, setMenuIcon] = useState("fi fi-br-frame");

  const scrollDirection = useScrollDirection();

  const handleClick = (e) => {
    const iconClass = e.currentTarget.firstChild.className;
    if (iconClass !== menuIcon) {
      setMenuIcon(iconClass);
    }
    setIsDeployed(false);
  };

  /**
|--------------------------------------------------
| component's return
|--------------------------------------------------
*/

  return (
    <div
      className={`menu-container ${isDeployed && "active"} ${
        scrollDirection === "down" && "hidden"
      }`}
    >
      <button
        className="deploy"
        type="button"
        onClick={() => {
          setIsDeployed(!isDeployed);
        }}
      >
        <i className={menuIcon} />
      </button>
      <button type="button" className="blob blob-1" onClick={handleClick}>
        <i className="fi fi-br-frame" />
      </button>
      <button type="button" className="blob blob-2" onClick={handleClick}>
        <i className="fi fi-sr-objects-column" />
      </button>
      <button type="button" className="blob blob-3" onClick={handleClick}>
        <i className="fi fi-sr-columns-3" />
      </button>
      <button type="button" className="blob blob-4" onClick={handleClick}>
        <i className="fi fi-sr-map-marker-plus" />
      </button>
      <button type="button" className="blob blob-5" onClick={handleClick}>
        <i className="fi fi-sr-map" />
      </button>
    </div>
  );
}

export default NavBottom;
