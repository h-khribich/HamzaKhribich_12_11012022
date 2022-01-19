import React from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const data = [
  {
    score: 0.37,
  },
];

const ObjectiveGraph = () => {
  return (
    <div>
      <RadialBarChart
        width={258}
        height={263}
        innerRadius={75}
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={90 + 360}
        style={{ backgroundColor: "#FBFBFB", borderRadius: "5px" }}
      >
        <text x="20%" y="15%" textAnchor="middle" dominantBaseline="middle">
          <tspan fill="#282D30" style={{ fontSize: "15px", fontWeight: 500 }}>
            Score
          </tspan>
        </text>
        <PolarAngleAxis
          type="number"
          domain={[0, 1]}
          angleAxisId={0}
          tick={false}
        />
        <circle cx="50%" cy="50%" fill="white" r="70"></circle>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan
            dy="-20"
            fill="#282D30"
            style={{ fontSize: "19px", fontWeight: 600 }}
          >
            {data[0].score * 100}%
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C">
            de votre
          </tspan>
          <tspan x="50%" dy="26" fill="#74798C">
            objectif
          </tspan>
        </text>
        <RadialBar clockWise dataKey="score" cornerRadius={10} fill="#FF0000" />
      </RadialBarChart>
    </div>
  );
};

export default ObjectiveGraph;
