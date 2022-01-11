import React from "react";
import SportseeLogo from "../assets/sportsee_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={SportseeLogo} alt="" />
      <nav className="header__nav">
        <ul className="header__navlist">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
