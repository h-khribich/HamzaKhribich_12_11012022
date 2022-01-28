import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const DailyActivityGraph = ({ activity }) => {
  const dailyActivity = activity.userData.data.sessions;

  // Format days for chart X axis
  const formattedDailyActivity = dailyActivity.map((item, i) => {
    const { day, ...rest } = item;
    return {
      day: i + 1,
      ...rest,
    };
  });

  return (
    <div className="dailyActivityGraph">
      <span className="dailyActivityGraph__label">Activité quotidienne</span>
      <div
        style={{
          position: "absolute",
          marginBottom: "267px",
          marginLeft: "500px",
          display: "flex",
        }}
      >
        <span style={{ fontSize: "13px", fontWeight: 500, color: "#74798C" }}>
          <i
            className="fas fa-circle fa-xs"
            style={{
              paddingRight: "13px",
              color: "#282D30",
            }}
          ></i>
          Poids (kg)
        </span>
        <span
          style={{
            fontSize: "13px",
            marginLeft: "30px",
            fontWeight: 500,
            color: "#74798C",
          }}
        >
          <i
            className="fas fa-circle fa-xs"
            style={{ paddingRight: "13px", color: "#E60000" }}
          ></i>
          Calories brûlées (kCal)
        </span>
      </div>
      <BarChart
        width={780}
        height={240}
        data={formattedDailyActivity}
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
          dataKey="calories"
          yAxisId="calories"
          hide={true}
          tickCount={3}
        />
        <YAxis
          dataKey="kilogram"
          orientation="right"
          tickMargin={30}
          tickCount={3}
          axisLine={false}
          tickLine={false}
          yAxisId="kilogram"
          type="number"
          domain={["dataMin - 3", "auto"]}
          tick={{ fontSize: "14px", fill: "#9B9EAC" }}
        />
        <Tooltip content={customTooltip} />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          yAxisId="kilogram"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          yAxisId="calories"
          barSize={7}
          legendType="circle"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
};

function customTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="dailyActivityGraph__tooltip">
        <h4 className="dailyActivityGraph__value">
          {payload[0].payload.kilogram}kg
        </h4>
        <h4 className="dailyActivityGraph__value">
          {payload[0].payload.calories}kCal
        </h4>
      </div>
    );
  } else {
    return null;
  }
}

export default DailyActivityGraph;
