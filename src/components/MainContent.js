import React, { useEffect, useState } from "react";
import KeyDataMetric from "./KeyDataMetric";
import UserHeading from "./UserHeading";
import EnergyLogo from "../assets/squareIcns/keyData/energy.svg";
import ChickenLogo from "../assets/squareIcns/keyData/chicken.svg";
import AppleLogo from "../assets/squareIcns/keyData/apple.svg";
import CheeseburgerLogo from "../assets/squareIcns/keyData/cheeseburger.svg";
import SessionAvgGraph from "./SessionAvgGraph";
import PerformanceGraph from "./PerformanceGraph";
import ObjectiveGraph from "./ObjectiveGraph";
import DailyActivityGraph from "./DailyActivityGraph";

export const useFetch = (url) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setUserData(data[34]);
      setLoading(false);
    };
    getUserData();
  }, [url]);

  return { userData, loading };
};

const MainContentWrapper = () => {
  const { userData, loading } = useFetch("/assets/DataMock.json");

  return (
    <div className="mainContent__wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <UserHeading name={userData.information.firstName} />
          <div className="mainContent__graphs">
            <div className="mainGraphs__wrapper">
              <DailyActivityGraph />
              <div className="mainGraphs__smaller-group">
                <SessionAvgGraph />
                <PerformanceGraph />
                <ObjectiveGraph />
              </div>
            </div>
            <div className="keyData__wrapper">
              <KeyDataMetric
                metric={userData.keyData.calories}
                label={"Calories"}
                classname={"squareIcn squareIcn-keyData calories"}
                icon={EnergyLogo}
              />
              <KeyDataMetric
                metric={userData.keyData.proteines}
                label={"Proteines"}
                classname={"squareIcn squareIcn-keyData proteines"}
                icon={ChickenLogo}
              />
              <KeyDataMetric
                metric={userData.keyData.glucides}
                label={"Glucides"}
                classname={"squareIcn squareIcn-keyData glucides"}
                icon={AppleLogo}
              />
              <KeyDataMetric
                metric={userData.keyData.lipides}
                label={"Lipides"}
                classname={"squareIcn squareIcn-keyData lipides"}
                icon={CheeseburgerLogo}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContentWrapper;
