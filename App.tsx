import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import MarketWatch from './screens/MarketWatch';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Configuring StatusBar for the dark theme 
        barStyle="light-content" ensures text (time, battery) is white 
      */}
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#121212" 
        translucent={false}
      />
      
      {/* Mount the main screen */}
      <MarketWatch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Matches app theme to prevent white flashes on load
  },
});

export default App;