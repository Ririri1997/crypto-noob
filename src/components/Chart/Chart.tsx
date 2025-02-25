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

export default function Chart({ data }: ChartProps) {
 return (
  <div className={cn(styles['chart-wrapper'])}>
  <ResponsiveContainer width="100%" height={300}>
   <LineChart data={data}>
    <XAxis
     dataKey="time"
     tickFormatter={(time) => new Date(time * 1000).toLocaleDateString()}
     stroke="rgba(255, 255, 255, 0.50)"
     tick={{ fontSize: 12, fill: "#444" }}
    />
    <YAxis domain={["auto", "auto"]} 
     stroke="rgba(255, 255, 255, 0.50)"
     tick={{ fontSize: 12, fill: "#444" }}/>
    <Tooltip
     contentStyle={{ backgroundColor: "white", borderRadius: "10px" }}
     itemStyle={{ color: "#0a0807" }}
    />
    <Line
     type="monotone"
     dataKey="close"
     stroke="rgba(255, 255, 255, 0.50)"
     strokeWidth={2}
     dot={{ r: 2, fill: "#0a0807" }}
    />
   </LineChart>
  </ResponsiveContainer>
  </div>
 );
}
