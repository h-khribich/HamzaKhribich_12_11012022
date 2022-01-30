import React from "react";
import Aside from "../components/Aside";
import { Link } from "react-router-dom";

/**
 * Homepage which enables the changing of user profile displayed
 */
const Homepage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Aside />
      <nav style={{ padding: "120px" }}>
        <h1
          style={{
            fontSize: "45px",
            color: "#E60000",
            fontWeight: 700,
            paddingBottom: "50px",
            margin: "20px",
          }}
        >
          Bienvenue
        </h1>
        <h2
          style={{
            fontSize: "30px",
            color: "black",
            fontWeight: 500,
            margin: "20px",
          }}
        >
          Utilisateurs
        </h2>
        <Link
          to="user/12"
          style={{
            fontSize: "24px",
            color: "#74798C",
            margin: "20px",
            fontWeight: 500,
          }}
        >
          Profil 1
        </Link>
        <Link
          to="user/18"
          style={{
            fontSize: "24px",
            color: "#74798C",
            margin: "20px",
            fontWeight: 500,
          }}
        >
          Profil 2
        </Link>
      </nav>
    </div>
  );
};

export default Homepage;
