'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Card, Text } from '@gravity-ui/uikit';
import { TopCurrencyData  } from "@/interfaces/topCoins.interfaces";
import { API_URLS } from "@/utils/apiUrls";


export default function Home() {

  const [topCoins, setTopCoins] = useState<TopCurrencyData[] | null>(null);

 
  async function getDataTop() {
   const url = API_URLS.TOP;
   console.log(url);

   try {
     const response = await fetch(url);
     if (!response.ok) {
       throw new Error('Network response was not ok');
     }
     const result = await response.json();
     setTopCoins(result.Data); 
     console.log(result.Data);
   } catch (error) {
     console.error('There has been a problem with your fetch operation:', error);
   }
 }
 
  useEffect(() => {
    // getTokenData();
    getDataTop();
  }, []); 

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card>
          <Text>Список криптовалют:</Text>
          {topCoins ? (
            <div>
              {Object.keys(topCoins).map((key) => {
                const coin = topCoins[key]; 
                return (
                 <div key={coin.CoinInfo.Name} className={styles.coinCard}>
                 <Text>
                   <strong>{coin.CoinInfo.FullName}</strong> ({coin.CoinInfo.Name})
                 </Text>
                 <Text>
                   <strong>Цена </strong> ({coin.DISPLAY.USD.PRICE})
                 </Text>
                 <Text>Алгоритм: {coin.CoinInfo.Algorithm || "N/A"}</Text>
                 <Text>Дата запуска: {coin.CoinInfo.AssetLaunchDate}</Text>
                 <hr />
               </div>
                );
              })}
            </div>
          ) : (
            <Text>Загрузка данных...</Text>
          )}
        </Card>
      </main>
    </div>
  );
}