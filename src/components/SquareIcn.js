import React from "react";
import PropTypes from "prop-types";

const SquareIcn = (props) => {
  return (
    <span className={props.classname}>
      <img src={props.icon} alt="" />
    </span>
  );
};

SquareIcn.propTypes = {
  classname: PropTypes.string,
  icon: PropTypes.string,
};

export default SquareIcn;
