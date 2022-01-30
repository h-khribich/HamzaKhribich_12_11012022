import React from "react";
import { Link } from "react-router-dom";
import SportseeLogo from "../assets/sportsee_logo.svg";

/**
 * Header component
 */
const Header = () => {
  return (
    <header className="header">
      <img src={SportseeLogo} alt="" />
      <nav className="header__nav">
        <ul className="header__navlist">
          <li className="list-item">
            <Link to="/" className="list-item">
              Accueil
            </Link>
          </li>
          <li className="list-item">Profil</li>
          <li className="list-item">Réglages</li>
          <li className="list-item">Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
