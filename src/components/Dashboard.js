import React from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

const Dashboard = () => {
  // Not using a specific scss file for Dashboard as display flex is the only styling needed here
  return (
    <div style={{ display: "flex" }}>
      <Aside />
      <MainContent />
    </div>
  );
};

export default Dashboard;
