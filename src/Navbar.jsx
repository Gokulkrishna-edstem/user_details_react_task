import React from "react";
import "./Navbar.css";
import data from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img
          className="logo"
          src="public\img\edstem_logo.jpeg"
          alt="Edstem_Logo"
        />
        <h4>
          <FontAwesomeIcon icon={faUser} size="2x" />
          {data.loggedIn ? data.loggedIn.name : null}
        </h4>
      </div>
    </>
  );
}

export default Navbar;
