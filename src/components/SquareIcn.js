import React from "react";

const SquareIcn = (props) => {
  return (
    <span className={props.classname}>
      <img src={props.icon} alt="" />
    </span>
  );
};

export default SquareIcn;
