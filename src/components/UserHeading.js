import React from "react";
import PropTypes from "prop-types";

/**
 * User heading greeting user
 * @param {Object} props - User firstname.
 */
const UserHeading = (props) => {
  return (
    <div className="userHeading">
      <h1 className="userHeading__greeting">
        Bonjour <span className="userHeading__name">{props.name}</span>
      </h1>
      <p className="userHeading__recap">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

UserHeading.propTypes = {
  name: PropTypes.string,
};

UserHeading.defaultProps = {
  name: "Champion",
};

export default UserHeading;
