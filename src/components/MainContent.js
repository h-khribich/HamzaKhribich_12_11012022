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
import { useFetch } from "../ApiCalls";

const MainContentWrapper = () => {
  const userId = useParams().id;
  const activity = useFetch(`${userId}/activity`);
  const sessionAverage = useFetch(`${userId}/average-sessions`);
  const performance = useFetch(`${userId}/performance`);
  const keyInfo = useFetch(userId);

  // Shortening word use of object after loading
  let user;
  keyInfo.loading ? (user = null) : (user = keyInfo.userData.data);

  return (
    <div className="mainContent__wrapper">
      {keyInfo.loading ||
      sessionAverage.loading ||
      activity.loading ||
      performance.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <UserHeading name={user.userInfos.firstName} />
          <div className="mainContent__graphs">
            <div className="mainGraphs__wrapper">
              <DailyActivityGraph activity={activity} />
              <div className="mainGraphs__smaller-group">
                <SessionAvgGraph sessionAverage={sessionAverage} />
                <PerformanceGraph performance={performance} />
                <ObjectiveGraph score={user.todayScore || user.score} />
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
