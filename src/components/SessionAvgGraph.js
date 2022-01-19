import React from "react";
import { LineChart, Line, YAxis, Tooltip } from "recharts";

const data = [
  {
    day: "L",
    time: 35,
  },
  {
    day: "M",
    time: 55,
  },
  {
    day: "M",
    time: 30,
  },
  {
    day: "J",
    time: 44,
  },
  {
    day: "V",
    time: 69,
  },
  {
    day: "S",
    time: 45,
  },
  {
    day: "D",
    time: 35,
  },
];

const SessionAvgGraph = () => {
  return (
    <div className="sessionAverageGraph" style={{ width: "fit-content" }}>
      <span className="sessionAverageGraph__label">L M M J V S D</span>
      <LineChart
        width={258}
        height={263}
        data={data}
        style={{ backgroundColor: "#FF0000", borderRadius: "5px" }}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <text x="13%" y="17%">
          <tspan
            fill="white"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              opacity: ".5",
            }}
          >
            Durée moyenne des
          </tspan>
          <tspan
            dy={23}
            dx={-133}
            fill="white"
            style={{
              fontSize: "15px",
              fontWeight: 500,
              opacity: ".5",
            }}
          >
            sessions
          </tspan>
        </text>
        <defs>
          <linearGradient id="line-color">
            <stop offset="0%" stopColor="white" stopOpacity={0.4} />
            <stop offset="100%" stopColor="white" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <YAxis
          dataKey="time"
          hide={true}
          type="number"
          padding={{ bottom: 80, top: 30 }}
          domain={["dataMin", 100]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "black",
            strokeOpacity: 0.1,
            strokeWidth: 60,
            fill: "rgba(255, 255, 255, 0.1)",
          }}
        />
        <Line
          type="natural"
          dataKey="time"
          dot={false}
          strokeWidth={2}
          stroke="url(#line-color)"
          activeDot={{
            stroke: "white",
            strokeOpacity: 0.2,
            strokeWidth: 10,
            fill: "white",
            r: 5,
          }}
        />
      </LineChart>
    </div>
  );
};

function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="sessionAverageGraph__tooltip">
        <h4 className="sessionAverageGraph__value">
          {payload[0].payload.time} min
        </h4>
      </div>
    );
  } else {
    return null;
  }
}

export default SessionAvgGraph;
