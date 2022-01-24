import React from "react";
import Aside from "../components/Aside";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Aside />
      <nav style={{ padding: "120px" }}>
        <h1
          style={{
            fontSize: "30px",
            color: "black",
            fontWeight: 700,
            margin: "20px",
          }}
        >
          Utilisateurs
        </h1>
        <Link
          to="user/12"
          style={{
            fontSize: "24px",
            color: "#E60000",
            margin: "20px",
            fontWeight: 500,
          }}
        >
          User 1
        </Link>
        <Link
          to="user/18"
          style={{
            fontSize: "24px",
            color: "#E60000",
            margin: "20px",
            fontWeight: 500,
          }}
        >
          User 2
        </Link>
      </nav>
    </div>
  );
};

export default Homepage;
