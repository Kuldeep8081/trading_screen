import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { CryptoPair } from '../constants/mockData';

interface Props {
  item: CryptoPair;
}

const CryptoRow: React.FC<Props> = ({ item }) => {
  const prevPrice = useRef(item.price);
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const [highlightColor, setHighlightColor] = useState('transparent');

  // Handle color flash logic
  useEffect(() => {
    if (item.price !== prevPrice.current) {
      const isUp = item.price > prevPrice.current;
      
      setHighlightColor(isUp ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)');

      Animated.sequence([
        Animated.timing(fadeAnim, { 
          toValue: 1, 
          duration: 100, 
          useNativeDriver: true 
        }),
        Animated.timing(fadeAnim, { 
          toValue: 0, 
          duration: 400, 
          useNativeDriver: true 
        })
      ]).start();

      prevPrice.current = item.price;
    }
  }, [item.price, fadeAnim]); 

  return (
    <View style={styles.row}>
      {/* Overlay for performance-safe flashing */}
      <Animated.View 
        style={[
          styles.flashOverlay, 
          { 
            backgroundColor: highlightColor, 
            opacity: fadeAnim 
          }
        ]} 
      />

      <View style={styles.infoContainer}>
        <Text style={styles.symbol}>{item.symbol}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Text style={[styles.change, { color: item.changePercent >= 0 ? '#4CAF50' : '#F44336' }]}>
          {item.changePercent > 0 ? '+' : ''}{item.changePercent}%
        </Text>
      </View>
    </View>
  );
};

export default React.memo(CryptoRow, (prev, next) => {
  return prev.item.price === next.item.price && prev.item.changePercent === next.item.changePercent;
});

const styles = StyleSheet.create({
  row: { 
    padding: 16, 
    borderBottomWidth: 1, 
    borderBottomColor: '#333',
    position: 'relative', 
    overflow: 'hidden'
  },
  flashOverlay: {
    ...StyleSheet.absoluteFill, // FIX: Replaced absoluteFillObject
    zIndex: -1, 
  },
  infoContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  symbol: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  price: { color: '#FFF', fontSize: 16 },
  change: { fontSize: 16, fontWeight: '600' }
});