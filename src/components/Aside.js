import React from "react";
import SquareIcn from "./SquareIcn";
import Meditating from "../assets/squareIcns/aside/meditating.svg";
import Swimming from "../assets/squareIcns/aside/swimming.svg";
import Biking from "../assets/squareIcns/aside/biking.svg";
import Lifting from "../assets/squareIcns/aside/lifting.svg";

/**
 * Left-side icon list
 */
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
