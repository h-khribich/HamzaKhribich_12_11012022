import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Performance graph component
 * @param {Object} performance - User performance.
 */
const PerformanceGraph = ({ performance }) => {
  const objProp = performance.userData.data;

  useEffect(() => {
    /**
   The function will first match and replace both objects 'kind' data to know which value is for which kind . It will then translate the 'kind' values now within the first obj. The obj data is then reversed to match how it is displayed in the model
   @returns {Object} Formatted user data
   */
    const propFormatting = () => {
      // Part 1: Matching and replacing kind value (1st obj) and kind key(2nd obj)
      for (const [key, value] of Object.entries(objProp.kind)) {
        objProp.data.forEach((item) => {
          if (item.kind === parseInt(key)) {
            item.kind = value;
          }
        });
      }

      // Part 2: Translating 'kind' values
      objProp.data.forEach((obj) => {
        switch (obj["kind"]) {
          case "cardio":
            obj.kind = "Cardio";
            break;
          case "energy":
            obj.kind = "Energie";
            break;
          case "endurance":
            obj.kind = "Endurance";
            break;
          case "strength":
            obj.kind = "Force";
            break;
          case "speed":
            obj.kind = "Vitesse";
            break;
          case "intensity":
            obj.kind = "Intensité";
            break;
          default:
        }
      });

      // Part 3: Reversing data array so as to match how data is displayed in the model
      objProp.data = objProp.data.reverse();
    };
    propFormatting();
  }, [performance, objProp]);

  return (
    <div className="performanceGraph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={objProp.data}>
          <PolarGrid />
          <PolarAngleAxis
            orient="outer"
            dataKey="kind"
            tick={{ fill: "white", fontSize: "13px", fontWeight: 500, dy: 5 }}
          />
          <Radar dataKey="value" fill="red" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceGraph.propTypes = {
  performance: PropTypes.shape({
    loading: PropTypes.bool,
    userData: PropTypes.shape({
      data: PropTypes.shape({
        userId: PropTypes.number,
        data: PropTypes.arrayOf(PropTypes.object),
        kind: PropTypes.shape({}),
      }),
    }),
  }),
};

export default PerformanceGraph;
