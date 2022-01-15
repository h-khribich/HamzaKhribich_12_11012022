import React from "react";

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

export default UserHeading;
