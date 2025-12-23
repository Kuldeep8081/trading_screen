import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Define the SortOption type here or import it if you have a shared types file
export type SortOption = 'price' | 'change' | null;

interface SortHeaderProps {
  sortBy: SortOption;
  onSort: (option: SortOption) => void;
}

const SortHeader: React.FC<SortHeaderProps> = ({ sortBy, onSort }) => {
  
  // Helper to determine active style
  const getButtonStyle = (option: SortOption) => {
    return [
      styles.button, 
      sortBy === option && styles.activeButton // Apply active style if selected
    ];
  };

  const getTextStyle = (option: SortOption) => {
    return [
      styles.buttonText,
      sortBy === option && styles.activeButtonText
    ];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={getButtonStyle('price')} 
        onPress={() => onSort('price')}
        activeOpacity={0.7}
      >
        <Text style={getTextStyle('price')}>Sort by Price ↓</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={getButtonStyle('change')} 
        onPress={() => onSort('change')}
        activeOpacity={0.7}
      >
        <Text style={getTextStyle('change')}>Sort by 24h %</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    backgroundColor: '#1E1E1E', // Slightly lighter than background
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#444',
  },
  activeButton: {
    backgroundColor: '#4CAF50', // Green when active
    borderColor: '#4CAF50',
  },
  buttonText: {
    color: '#AAA',
    fontSize: 14,
    fontWeight: '600',
  },
  activeButtonText: {
    color: '#FFF',
  },
});

export default SortHeader;