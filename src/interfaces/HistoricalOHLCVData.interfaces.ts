export interface OHLCVData {
 time: number;   
 open: number;     
 high: number;       
 low: number;        
 close: number;       
 volumefrom: number; 
 volumeto: number;
 data: { time: number; close: number }[];
}

export interface HistoricalData {
 Aggregated: boolean;
 TimeFrom: number;
 TimeTo: number;
 Data: OHLCVData[]; 
}

export interface HistoricalDataResponse {
 Response: string;
 Message: string;
 HasWarning: boolean;
 Type: number;
 RateLimit: Record<string, unknown>;
 Data: HistoricalData;
}