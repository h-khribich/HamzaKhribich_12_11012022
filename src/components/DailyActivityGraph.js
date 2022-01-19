import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    day: 1,
    poids: 70,
    calories: 65,
  },
  {
    day: 2,
    poids: 68,
    calories: 50,
  },
  {
    day: 3,
    poids: 67,
    calories: 72,
  },
  {
    day: 4,
    poids: 65,
    calories: 45,
  },
  {
    day: 5,
    poids: 68,
    calories: 55,
  },
  {
    day: 6,
    poids: 70,
    calories: 58,
  },
  {
    day: 7,
    poids: 72,
    calories: 65,
  },
  {
    day: 8,
    poids: 71,
    calories: 63,
  },
  {
    day: 9,
    poids: 70,
    calories: 78,
  },
  {
    day: 10,
    poids: 70,
    calories: 60,
  },
];

const DailyActivityGraph = () => {
  return (
    <div className="dailyActivityGraph">
      <span className="dailyActivityGraph__label">Activité quotidienne</span>
      <BarChart
        width={780}
        height={240}
        data={data}
        margin={{ top: 20, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          tickMargin={10}
          tickLine={false}
          stroke="#DEDEDE"
          axisLine={true}
          tick={{ fontSize: "14px", fill: "#9B9EAC" }}
        />
        <YAxis
          orientation="right"
          tickMargin={30}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          type="number"
          domain={["dataMin - 10", "auto"]}
          tick={{ fontSize: "14px", fill: "#9B9EAC" }}
        />
        <Tooltip />
        <Legend
          verticalAlign="top"
          align="right"
          iconSize={10}
          chartHeight={30}
        />
        <Bar
          dataKey="poids"
          fill="#282D30"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

export default DailyActivityGraph;
