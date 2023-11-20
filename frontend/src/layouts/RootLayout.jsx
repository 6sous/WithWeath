import React from "react";
import { Outlet } from "react-router-dom";
import NavTop from "../components/NavTop";

// import styles & assets
import "../reset.css";
import "../styles/RootLayout.scss";

function RootLayout() {
  return (
    <div className="root-layout">
      {/* <header>
        <NavTop />
      </header> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
