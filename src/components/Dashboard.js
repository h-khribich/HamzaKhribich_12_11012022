import React from "react";
import Aside from "./Aside";
import MainContentWrapper from "./MainContentWrapper";

const Dashboard = () => {
  // Not using a specific scss file for Dashboard as display flex is the only styling needed here
  return (
    <div style={{ display: "flex" }}>
      <Aside />
      <MainContentWrapper />
    </div>
  );
};

export default Dashboard;
