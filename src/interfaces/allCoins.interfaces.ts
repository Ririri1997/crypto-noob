import { CoinRating, CoinTaxonomy } from "./common.interface"

export interface CoinData {
  Id: string;
  Url: string;
  ImageUrl: string;
  ContentCreatedOn: number;
  Name: string;
  Symbol: string;
  CoinName: string;
  FullName: string;
  Description: string;
  AssetTokenStatus: string;
  Algorithm: string;
  ProofType: string;
  SortOrder: string;
  Sponsored: boolean;
  Taxonomy: CoinTaxonomy;
  Rating: CoinRating;
  IsTrading: boolean;
  TotalCoinsMined: number;
  CirculatingSupply: number;
  BlockNumber: number;
  NetHashesPerSecond: number;
  BlockReward: number;
  BlockTime: number;
  AssetLaunchDate: string;
  AssetWhitepaperUrl: string;
  AssetWebsiteUrl: string;
  MaxSupply: number;
  MktCapPenalty: number;
  IsUsedInDefi: number;
  IsUsedInNft: number;
  PlatformType: string;
  BuiltOn: string;
  SmartContractAddress: string;
  OtherSmartContractAddress: string;
  DecimalPoints: number;
}

export interface AllCoinsApiResponse {
  Data: {
    [key: string]: CoinData;
  };
}