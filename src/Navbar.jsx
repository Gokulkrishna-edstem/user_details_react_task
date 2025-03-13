import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const data = {
  loggedIn: {
    empId: 123,

    name: "Abdul",

    dept: "Accounts",

    isAdmin: true,
  },

  employees: [
    {
      empId: 123,

      name: "Abdul",

      email: "abdul@email.com",

      joinDate: "27-09-2024",

      dept: "Accounts",

      isAdmin: true,
    },

    {
      empId: 456,

      name: "Aswathy",

      email: "aswathy@email.com",

      joinDate: "05-01-2024",

      dept: "Technical",

      isAdmin: true,
    },

    {
      empId: 1224,

      name: "Farsana",

      email: "farsana@email.com",

      joinDate: "18-01-2025",

      dept: "Marketing",

      isAdmin: false,
    },

    {
      empId: 2334,

      name: "Gokul",

      email: "gokul@email.com",

      joinDate: "01-02-2025",

      dept: "Technical",

      isAdmin: false,
    },
  ],
};

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
