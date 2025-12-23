import React, { useState, useMemo } from 'react';
import {  FlatList, StyleSheet,  Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCryptoTicker } from '../hooks/useCryptoTicker';
import CryptoRow from '../components/CryptoRow';
import SortHeader, { SortOption } from '../components/SortHeader'; // Import the new component

const MarketWatch = () => {
  const data = useCryptoTicker();
  const [sortBy, setSortBy] = useState<SortOption>(null);

  const sortedData = useMemo(() => {
    if (!sortBy) return data;
    
    return [...data].sort((a, b) => {
      if (sortBy === 'price') return b.price - a.price; // High to Low
      if (sortBy === 'change') return b.changePercent - a.changePercent;
      return 0;
    });
  }, [data, sortBy]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Crypto Market Watch</Text>
      
      {/* Replaced inline buttons with the clean Component */}
      <SortHeader sortBy={sortBy} onSort={setSortBy} />

      <FlatList
        data={sortedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CryptoRow item={item} />}
        initialNumToRender={12}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  headerTitle: { 
    color: '#FFF', 
    fontSize: 22, 
    textAlign: 'center', 
    paddingVertical: 16, 
    fontWeight: '700',
    letterSpacing: 0.5
  },
});

export default MarketWatch;