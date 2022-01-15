import React from "react";
import KeyDataMetric from "./KeyDataMetric";
import UserHeading from "./UserHeading";
import EnergyLogo from "../assets/squareIcns/keyData/energy.svg";
import ChickenLogo from "../assets/squareIcns/keyData/chicken.svg";
import AppleLogo from "../assets/squareIcns/keyData/apple.svg";
import CheeseburgerLogo from "../assets/squareIcns/keyData/cheeseburger.svg";

const MainContentWrapper = () => {
  // Fetch all user info
  const userData = {
    34: {
      id: 34,
      information: {
        firstName: "Thomas",
        lastName: "Malignon",
        age: 27,
      },
      todayScore: 56,
      keyData: {
        calories: "1937kCal",
        proteines: "155g",
        glucides: "290g",
        lipides: "50g",
      },
    },
  };

  const keyData = userData[34].keyData;

  return (
    <div className="mainContentWrapper">
      <UserHeading name={userData[34].information.firstName} />
      <div style={{ display: "flex" }}>
        <div style={{ height: 600 }}>MAIN GRAPHS</div>
        <div className="keyData__wrapper">
          <KeyDataMetric
            metric={keyData.calories}
            label={"Calories"}
            classname={"squareIcn squareIcn-keyData calories"}
            icon={EnergyLogo}
          />
          <KeyDataMetric
            metric={keyData.proteines}
            label={"Proteines"}
            classname={"squareIcn squareIcn-keyData proteines"}
            icon={ChickenLogo}
          />
          <KeyDataMetric
            metric={keyData.glucides}
            label={"Glucides"}
            classname={"squareIcn squareIcn-keyData glucides"}
            icon={AppleLogo}
          />
          <KeyDataMetric
            metric={keyData.lipides}
            label={"Lipides"}
            classname={"squareIcn squareIcn-keyData lipides"}
            icon={CheeseburgerLogo}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentWrapper;
