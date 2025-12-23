## Crypto Market Watch - Tradescape Assignment
A high-performance, real-time crypto tracking application built with React Native CLI. This project focuses on rendering efficiency, stability under rapid data updates, and smooth UI interactions.

#### 📱 Features
**Real-Time Updates:** Simulated WebSocket behavior updating prices every 2.5 seconds.

**Performance Optimization:** Zero unnecessary re-renders using React.memo and useMemo.

**Visual Feedback:** Green/Red flash indicators on price changes without layout shifts.

**Sorting:** Dynamic sorting by Price and 24h % Change that persists during updates.

### 🚀 Performance & Optimization Logic

Specific optimizations implemented to minimize re-renders:

#### 1. Granular Row Memoization (React.memo)
The CryptoRow component is wrapped in React.memo with a custom comparator.

**Logic:** A row only re-renders if its specific price or changePercent changes.

**Result:** If BTC updates, the rows for ETH, SOL, and others do not re-render. This prevents the "whole list refresh" issue.

#### 2. Efficient Sorting (useMemo)
Sorting logic is wrapped in useMemo inside the parent screen.

**Logic:** The list is only re-sorted when the data array actually changes or the user selects a new sort filter. This ensures the sorting operation does not block the JS thread unnecessarily.

#### 3. Native Driver Animations
The price flash effect uses Animated.timing with useNativeDriver: true.

**Logic:** The animation is offloaded to the native UI thread.

**Result:** Even if the JS thread is busy processing a data update, the visual flash remains smooth (60fps) without flickering.

#### 4. Layout Stability
Used StyleSheet.absoluteFill for the background flash overlay. This allows color changes without triggering layout recalculations (reflows) for the text elements.

### ⚙️ Price Update Logic

#### Explanation of the simulated real-time behavior:

The application uses a custom hook useCryptoTicker to simulate a live socket connection.

Interval: A setInterval runs every 2500ms (2.5 seconds).

#### Randomization:

**Selection:** Not every coin updates every tick. A randomizer determines which rows change (approx. 30% chance per tick) to simulate realistic market volatility.

**Price Movement:** Prices move up or down by a random factor between -2% and +2%.

**Change %:** The 24h Change % adjusts dynamically based on the price movement direction.

### 🛠 Tech Stack
**Framework:** React Native CLI

**Language:** TypeScript

**State Management:** React Hooks (useState, useEffect, useCallback, useMemo)

**Styling:** StyleSheet (No heavy UI libraries)

### 📂 Project Structure
```
src/
├── components/
│   ├── CryptoRow.tsx      # Memoized row with native animation
│   └── SortHeader.tsx     # Sorting controls
├── constants/
│   └── mockData.ts        # Initial dataset
├── hooks/
│   └── useCryptoTicker.ts # Business logic for simulation
└── screens/
    └── MarketWatch.tsx    # Main container
```

### ⏱️ Time Taken
Approx. 4 Hours

**1 Hour:** Project setup and architecture planning.

**1.5 Hours:** Implementing the useCryptoTicker logic and Mock Data.

**1 Hour:** UI implementation and React.memo performance tuning.

**0.5 Hours:** Testing, refinements, and documentation.

### 🎥 Preview
```
Video : https://drive.google.com/file/d/1O1pxXO4yBIaGdg4lbTi7CPwODisNStTQ/view?usp=sharing
apk : https://drive.google.com/file/d/1cXXRZ8ggz2EKHSOyNfSo0qiVBlqRQ1ZI/view?usp=drive_link
```

### ▶️ How to Run
1.Install Dependencies:
```
npm install
```

2.Start Metro Bundler:
```
npm start
```

3.Run on Android:
```
npm run android
```
