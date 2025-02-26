"use client";

import { Card as CardGUI } from "@gravity-ui/uikit";
import styles from "./Card.module.css";
import cn from "classnames";
import CardProps from "./Card.props";
import Image from "next/image";
import Chart from "../Chart/Chart";
import Text from "../Text/Text";


export default function Card({
 name,
 internal,
 price,
 change24hour,
 rsi,
 img,
 data,
}: CardProps) {
 const analytics =
  rsi == null || isNaN(rsi)
   ? "no data"
   : rsi < 30
   ? "buy"
   : rsi > 70
   ? "sell"
   : "hold";
   

console.log(data);
   return (
  <CardGUI className={cn(styles["coin-card"])}>
   <Text
    size='s'
    className={cn(styles.top, {
     [styles.red]: (rsi ?? 0) < 30,
     [styles.green]: (rsi ?? 0) > 70,
    })}
   >
    {analytics}
   </Text>
   <div className={cn(styles["card-info"])}>
    <Image
     src={img}
     alt={name}
     className={cn(styles.img)}
     width={200}
     height={200}
    />

    <div className={cn(styles["name"])}>
     <Text size='l'>{name}</Text>
     <Text className={cn(styles.secondary)}>{internal}</Text>
    </div>

    <div className={cn(styles["price"])}>
     <Text size='l'>{price}</Text>
     <Text className={cn(styles.secondary)}>{change24hour}%</Text>
    </div>
   </div>
   <Chart
    data={(data || [])}
   />
  </CardGUI>
 );
}
