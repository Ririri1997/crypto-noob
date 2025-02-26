"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Text } from "@gravity-ui/uikit";
import { IMG_URL } from "@/utils/apiUrls";
import cn from "classnames";
import Card from "@/components/Card/Card";
import { AppDispatch, RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTopCoins } from "@/store/topCoins.slice";
import { fetchDataHistory } from "@/store/historicalData.slice";
import calculateRSI from "@/utils/rsiCalculator";
import News from "@/components/News/News";


export default function Home() {
 const [rsiData, setRsiData] = useState<Record<string, number | null>>({});
 const { topCoins } = useSelector((state: RootState) => state.topCoins);
 const { historicalData } = useSelector(
  (state: RootState) => state.historicalData
 );

 const dispatch = useDispatch<AppDispatch>();


 useEffect(() => {
  if (Object.keys(historicalData).length > 0) {
   const newRSIData: Record<string, number | null> = {};
   Object.entries(historicalData).forEach(([coinSymbol, data]) => {
    newRSIData[coinSymbol] = calculateRSI(data);
   });
   setRsiData(newRSIData);
  }
 }, [historicalData]);

 useEffect(() => {
  if (topCoins && topCoins.length > 0) {
   topCoins.forEach((coin) => {
    dispatch(fetchDataHistory(coin.CoinInfo.Internal));
   });
  }
  console.log("2");
 }, [topCoins, dispatch]);

 useEffect(() => {
  if (topCoins && topCoins.length === 0) {
   dispatch(fetchTopCoins());
  }
 }, [topCoins, dispatch]);

 return (
  <main className={styles.main}>
   {topCoins && topCoins.length > 0 ? (
    <section className={cn(styles["card-wrapper"])}>
     {topCoins.map((coin) => {
      const rsi = rsiData[coin.CoinInfo.Internal];
      const historicalDataCoin = historicalData[coin.CoinInfo.Internal] || [];

      return (
       <Card
        key={coin.CoinInfo.Name}
        name={coin.CoinInfo.FullName}
        internal={coin.CoinInfo.Internal}
        price={coin.DISPLAY?.USD.PRICE || "Нет данных"}
        img={IMG_URL + coin.CoinInfo.ImageUrl}
        change24hour={coin.DISPLAY?.USD.CHANGEPCT24HOUR || "Нет данных"}
        rsi={rsi}
        data={
         historicalDataCoin.length > 0
          ? historicalDataCoin.map((item) => ({
             time: item.time,
             close: item.close,
            }))
          : []
        }
       />
      );
     })}
    </section>
   ) : (
    <Text>Загрузка данных... </Text>
   )}
   <News/>
  </main>
 );
}
