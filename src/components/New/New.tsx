"use client";

import styles from "./New.module.css";
import cn from "classnames";
import NewProps from "./New.props";
import Text from "../Text/Text";
import Image from "next/image";
import Link from "next/link";


export default function New({
 href,
 title,
 img
}: NewProps) {

 

   return (
    <Link href={href}>
   <div className={cn(styles["new"])}>
     <Image
     src={img}
     alt={title}
     className={cn(styles.img)}
     width={200}
     height={200}
    />
     <Text size="s" overflow={true}  className={cn(styles['secondary'], styles['overflow'])}>{title}</Text>
    </div></Link>
 );
}
