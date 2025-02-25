export default interface CardProps {
 name: string,
 internal: string,
 price: number | string,
 change24hour: number| string,
 img: string,
 rsi?: number | null,
 data: { time: number; close: number }[];
}