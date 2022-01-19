import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    <div>
      <BarChart width={835} height={320} data={data}>
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="poids" fill="#282D30" />
        <Bar dataKey="calories" fill="#E60000" />
      </BarChart>
    </div>
  );
};

export default DailyActivityGraph;
