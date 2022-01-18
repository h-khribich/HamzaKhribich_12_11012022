import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 78,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 76,
    fullMark: 150,
  },
  {
    subject: "Endurance",
    A: 99,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    fullMark: 150,
  },
  {
    subject: "Cardio",
    A: 45,
    fullMark: 150,
  },
];

const PerformanceChart = () => {
  return (
    <div className="performanceGraph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="67%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "white", fontSize: "13px", fontWeight: 500, dy: 5 }}
          />
          <Radar dataKey="A" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
