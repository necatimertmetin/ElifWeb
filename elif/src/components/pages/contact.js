import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "../../assets/css/contact.css";

// ... diğer import'lar

const CustomActiveShapePieChart = ({ data, width, height, dataNames }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
  
    const renderActiveShape = (props) => {
      const RADIAN = Math.PI / 180;
      const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
      } = props;
  
      const sin = Math.sin(-RADIAN * midAngle);
      const cos = Math.cos(-RADIAN * midAngle);
      const mx = cx + (outerRadius + 10) * cos;
      const my = cy + (outerRadius + 10) * sin;
  
      return (
        <g>
          <text
            x={cx}
            y={cy}
            dy={8}
            textAnchor="middle"
            fontSize={14}
            fontWeight="bold"
            fill={activeIndex !== null ? "black" : "#8884d8"}
          >
            {payload.name}
          </text>
          <text
            x={cx}
            y={cy}
            dy={24}
            textAnchor="middle"
            fontSize={12}
            fill={activeIndex !== null ? "black" : "#8884d8"}
          >
            {`${(percent * 100).toFixed(2)}%`}
          </text>
        </g>
      );
    };
  
    const onPieEnter = (_, index) => {
      setActiveIndex(index);
      console.log(index);
    };
  
    const onPieLeave = () => {
      setActiveIndex(null);
    };
  
    return (
      <PieChart width={width} height={height}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data.map((value, index) => ({ name: dataNames[index], value }))}
          cx={width / 2}
          cy={height / 2}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={1}
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index === activeIndex ? "black" : COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    );
  };
  
  // ... diğer bileşenler
  

const Contact = () => {
    const [chartData, setChartData] = useState([30, 20, 15, 10, 8]);

    const dataNames = ["Instagram", "YouTube", "Facebook", "Twitter", "TikTok"];

    return (
        <div className="contact-landing-container" style={{ width: "100%", height: "100%" }}>
            <CustomActiveShapePieChart data={chartData} width={400} height={400} dataNames={dataNames} />
        </div>
    );
};

export default Contact;
