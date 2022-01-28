import React, { useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const PerformanceChart = ({ performance }) => {
  const objProp = performance.userData.data;

  /*
    The function within use effect will in the first part match and replace both objects 'kind' data to know which value is for which kind . It will then translate the 'kind' values now within the first obj. The obj data is then reversed to match how it is displayed in the model
  */
  useEffect(() => {
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

export default PerformanceChart;
