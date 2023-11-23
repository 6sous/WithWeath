import "../styles/ErrorCity.scss";
import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import sadCloud from "../assets/icons/weather_icons/sad_cloud.svg";

function ErrorCity() {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="error-city">
      <img src={sadCloud} alt="a cloud with a sad face" className="sad-cloud" />
      <h1 className="error-message">The city you asked for was not found!</h1>

      <div className="return-home">
        <i className="fi fi-sr-undo-alt" />

        <Link className="link-to-home" to="/">
          home page
        </Link>
      </div>
    </div>
  );
}

export default ErrorCity;
