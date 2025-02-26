"use client";

import styles from "./New.module.css";
import cn from "classnames";
import NewProps from "./New.props";
import Text from "../Text/Text";
import Image from "next/image";


export default function New({
 title,
 img
}: NewProps) {

 

   return (
   <div className={cn(styles["new"])}>
     <Image
     src={img}
     alt={title}
     className={cn(styles.img)}
     width={200}
     height={200}
    />
     <Text size="s" className={cn(styles.secondary)}>{title}</Text>
    </div>
 );
}
