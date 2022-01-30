import React from "react";
import { LineChart, Line, YAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

/**
 * Session average graph component
 * @param {Object} sessionAverage - User session average.
 */
const SessionAvgGraph = ({ sessionAverage }) => {
  const sessions = sessionAverage.userData.data.sessions;

  return (
    <div className="sessionAverageGraph" style={{ width: "fit-content" }}>
      <span className="sessionAverageGraph__label">L M M J V S D</span>
      <LineChart
        width={258}
        height={263}
        data={sessions}
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
          dataKey="sessionLength"
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
          dataKey="sessionLength"
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

/**
 * Session average custom tooltip on hover
 * @param {boolean} active - Whether the tooltip should be shown or not.
 * @param {object} payload - The data included within the payload.
 */
function CustomTooltip({ active, payload }) {
  if (active) {
    return (
      <div className="sessionAverageGraph__tooltip">
        <h4 className="sessionAverageGraph__value">
          {payload[0].payload.sessionLength} min
        </h4>
      </div>
    );
  } else {
    return null;
  }
}

SessionAvgGraph.propTypes = {
  sessionAverage: PropTypes.shape({
    loading: PropTypes.bool,
    userData: PropTypes.shape({
      data: PropTypes.shape({
        userId: PropTypes.number,
        sessions: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
  }),
};

export default SessionAvgGraph;
