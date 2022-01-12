import React from "react";
import SquareIcn from "./SquareIcn";
import Meditating from "../assets/squareIcns/meditating.svg";
import Swimming from "../assets/squareIcns/swimming.svg";
import Biking from "../assets/squareIcns/biking.svg";
import Lifting from "../assets/squareIcns/lifting.svg";

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside__icon-panel">
        <SquareIcn icon={Meditating} classname="squareIcn squareIcn-aside" />
        <SquareIcn icon={Swimming} classname="squareIcn squareIcn-aside" />
        <SquareIcn icon={Biking} classname="squareIcn squareIcn-aside" />
        <SquareIcn icon={Lifting} classname="squareIcn squareIcn-aside" />
      </div>
      <span className="aside__copyright">Copyright, SportSee 2022</span>
    </aside>
  );
};

export default Aside;
