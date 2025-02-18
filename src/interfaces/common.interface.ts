export interface WeissRating {
 MarketPerformanceRating: string;
 Rating: string;
 TechnologyAdoptionRating: string;
}

export interface CoinRating {
 Weiss: WeissRating;
}

export interface CoinTaxonomy {
 Access: string;
 CollateralInfo: string;
 CollateralType: string;
 CollateralizedAsset: string;
 CollateralizedAssetType: string;
 FCA: string;
 FINMA: string;
 Industry: string;
}