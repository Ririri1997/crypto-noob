"use client";
import styles from "./News.module.css";
import cn from "classnames";
import { fetchNews } from "@/store/news.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import New from "../New/New";
import Text from "../Text/Text";




export default function News({}) {
 const { news } = useSelector((state: RootState) => state.news);
 const dispatch = useDispatch<AppDispatch>();

 useEffect(() => {
  if (news && news.length === 0) {
   dispatch(fetchNews());
  }

 }, [news, dispatch]);

 return (
  <div className={cn(styles["news-wrapper"])}>
   {news && news.length > 0 ? (
  news.map((item) =>
   <New key={item.id} title={item.title} img={item.imageurl}/> 
 )
) : (
  <Text>Котик с гитарой</Text>
)}
  </div>
 );
}
