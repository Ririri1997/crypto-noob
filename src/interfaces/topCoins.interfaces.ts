import { CoinRating } from "./common.interface";

export interface CoinInfo {
  Algorithm: string;
  AssetLaunchDate: string;
  BlockNumber: number;
  BlockReward: number;
  BlockTime: number;
  DocumentType: string;
  FullName: string;
  Id: string;
  ImageUrl: string;
  Internal: string;
  MaxSupply: number;
  Name: string;
  NetHashesPerSecond: number;
  ProofType: string;
  Rating?: CoinRating;
  Type: number;
  Url: string;
}

export interface MarketData {
  FROMSYMBOL: string;
  TOSYMBOL: string;
  MARKET: string;
  LASTMARKET?: string;
  TOPTIERVOLUME24HOUR?: string;
  PRICE?: number;
  LASTUPDATE?: number;
  VOLUME24HOUR?: number;
  VOLUME24HOURTO?: number;
  OPEN24HOUR?: number;
  HIGH24HOUR?: number;
  LOW24HOUR?: number;
  CHANGE24HOUR?: number;
  CHANGEPCT24HOUR?: number;
}

export interface TopCurrencyData {
  CoinInfo: CoinInfo;
  RAW?: {
    [currency: string]: MarketData;
  };
  DISPLAY?: {
    [currency: string]: MarketData;
  };
}