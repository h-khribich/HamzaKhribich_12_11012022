import React from "react";
import SquareIcn from "../components/SquareIcn";

const KeyDataMetric = (props) => {
  return (
    <div className="keyData__metric">
      <SquareIcn classname={props.classname} icon={props.icon} />
      <div className="keyData__descriptionWrapper">
        <span className="keyData__number">{props.metric}</span>
        <span className="keyData__description">{props.label}</span>
      </div>
    </div>
  );
};

export default KeyDataMetric;
