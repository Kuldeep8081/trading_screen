export interface CryptoPair {
  id: string;
  symbol: string;
  price: number;
  changePercent: number;
}

export const INITIAL_DATA: CryptoPair[] = [
  { id: '1', symbol: 'BTC/USDT', price: 43000.50, changePercent: 1.2 },
  { id: '2', symbol: 'ETH/USDT', price: 2250.10, changePercent: -0.5 },
  { id: '3', symbol: 'SOL/USDT', price: 95.40, changePercent: 5.1 },
  { id: '4', symbol: 'BNB/USDT', price: 310.20, changePercent: 0.8 },
  { id: '5', symbol: 'XRP/USDT', price: 0.62, changePercent: -1.1 },
  { id: '6', symbol: 'ADA/USDT', price: 0.55, changePercent: 0.2 },
  { id: '7', symbol: 'DOGE/USDT', price: 0.09, changePercent: -2.3 },
  { id: '8', symbol: 'AVAX/USDT', price: 35.80, changePercent: 4.5 },
];