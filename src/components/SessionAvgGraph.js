import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

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
    <div className="sessionAverageGraph">
      <LineChart
        width={258}
        height={263}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="line-color">
            <stop offset="0%" stopColor="white" stopOpacity={0.4} />
            <stop offset="100%" stopColor="white" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          tickLine={false}
          minTickGap={1}
          padding={{ left: 15, right: 15 }}
          tick={{ fontSize: 12, fill: "white", opacity: ".5", dy: -10 }}
          axisLine={false}
          interval={"preserveStartEnd"}
        />
        <YAxis
          dataKey="time"
          hide={true}
          type="number"
          padding={{ bottom: 30, top: 30 }}
          domain={["dataMin", 100]}
        />
        <Legend verticalAlign="top" value="Durée moyenne des sessions" />
        <Tooltip />
        <Line
          type="natural"
          dataKey="time"
          dot={false}
          strokeWidth={2}
          stroke="url(#line-color)"
        />
      </LineChart>
    </div>
  );
};

export default SessionAvgGraph;
