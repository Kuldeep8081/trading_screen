import { useState, useEffect, useCallback } from 'react';
import { CryptoPair, INITIAL_DATA } from '../constants/mockData';

export const useCryptoTicker = () => {
  const [data, setData] = useState<CryptoPair[]>(INITIAL_DATA);

  // Helper to randomize price
  const getRandomFactor = () => 1 + (Math.random() * 0.04 - 0.02); // +/- 2%

  const updatePrices = useCallback(() => {
    setData((prevData) =>
      prevData.map((item) => {
        // Randomly decide if this item updates to simulate real market
        // Not every coin changes every single tick
        if (Math.random() > 0.7) return item; 

        const newPrice = item.price * getRandomFactor();
        return {
          ...item,
          price: parseFloat(newPrice.toFixed(2)),
          // Update % change based on price movement
          changePercent: parseFloat((item.changePercent + (Math.random() * 0.5 - 0.25)).toFixed(2)),
        };
      })
    );
  }, []);

  useEffect(() => {
    // Requirements: Update every 2-3 seconds 
    const interval = setInterval(updatePrices, 2500);
    return () => clearInterval(interval);
  }, [updatePrices]);

  return data;
};