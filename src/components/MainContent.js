import React from "react";
import { useParams } from "react-router-dom";
import KeyDataMetric from "./graphs/KeyDataMetric";
import UserHeading from "./UserHeading";
import EnergyLogo from "../assets/squareIcns/keyData/energy.svg";
import ChickenLogo from "../assets/squareIcns/keyData/chicken.svg";
import AppleLogo from "../assets/squareIcns/keyData/apple.svg";
import CheeseburgerLogo from "../assets/squareIcns/keyData/cheeseburger.svg";
import SessionAvgGraph from "./graphs/SessionAvgGraph";
import PerformanceGraph from "./graphs/PerformanceGraph";
import ObjectiveGraph from "./graphs/ObjectiveGraph";
import DailyActivityGraph from "./graphs/DailyActivityGraph";
import useFetch1 from "../ApiCalls";

const MainContentWrapper = () => {
  const userId = useParams().id;
  const { userData, loading } = useFetch1(userId);
  let user;
  loading ? (user = null) : (user = userData.data);

  return (
    <div className="mainContent__wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <UserHeading name={user.userInfos.firstName} />
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
                metric={user.keyData.calorieCount}
                label={"Calories"}
                classname={"squareIcn squareIcn-keyData calories"}
                icon={EnergyLogo}
              />
              <KeyDataMetric
                metric={user.keyData.proteinCount}
                label={"Proteines"}
                classname={"squareIcn squareIcn-keyData proteines"}
                icon={ChickenLogo}
              />
              <KeyDataMetric
                metric={user.keyData.carbohydrateCount}
                label={"Glucides"}
                classname={"squareIcn squareIcn-keyData glucides"}
                icon={AppleLogo}
              />
              <KeyDataMetric
                metric={user.keyData.lipidCount}
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
