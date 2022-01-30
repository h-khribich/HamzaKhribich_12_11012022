import React from "react";
import SquareIcn from "../SquareIcn";
import PropTypes from "prop-types";

/**
 * Key data metric graph component
 * @param {Object} props - User metric, component label, classname and icon.
 */
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

KeyDataMetric.propTypes = {
  metric: PropTypes.number,
  icon: PropTypes.string,
  label: PropTypes.string,
  classname: PropTypes.string,
};

export default KeyDataMetric;
