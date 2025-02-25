import { RSI } from "technicalindicators";

export default function calculateRSI(data: { close: number }[]): number | null {
 if (!Array.isArray(data) || data.length < 14) return null;

 const closingPrices = data.map((item) => item.close);
 const rsiValues = RSI.calculate({ period: 14, values: closingPrices });

 return rsiValues.length > 0 ? rsiValues[rsiValues.length - 1] : null;
}
