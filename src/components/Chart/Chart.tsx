import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer,
} from "recharts";
import { ChartProps } from "./Chart.props";
import cn from "classnames";
import styles from './Chart.module.css'
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";



export default function Chart({ data }: ChartProps) {
 const theme = useSelector((state: RootState)=> state.theme.mode);
 const strokeColor = theme === "dark" ? "rgba(255, 255, 255, 0.80)" : "rgba(0, 0, 0, 0.80)";
 const tickColor = theme === "dark" ? "#fff" : "#444";
 const dotColor = theme === "dark" ? "#fff" : "#0a0807";
 const tooltipBg = theme === "dark" ? "#222" : "white";


 return (
  <div className={cn(styles['chart-wrapper'])}>
  <ResponsiveContainer width="100%" height={300}>
   <LineChart data={data}>
    <XAxis
     dataKey="time"
     tickFormatter={(time) => new Date(time * 1000).toLocaleDateString()}
     stroke={strokeColor}
     tick={{ fontSize: 12, fill: tickColor }}
    />
    <YAxis domain={["auto", "auto"]} 
     stroke={strokeColor}
     tick={{ fontSize: 12, fill: tickColor }}/>
    <Tooltip
     contentStyle={{ backgroundColor: tooltipBg, borderRadius: "10px" }}
     itemStyle={{ color: dotColor }}
    />
    <Line
     type="monotone"
     dataKey="close"
     stroke={strokeColor}
     strokeWidth={2}
     dot={{ r: 2, fill: dotColor }}
    />
   </LineChart>
  </ResponsiveContainer>
  </div>
 );
}
