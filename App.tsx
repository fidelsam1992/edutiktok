import React from 'react';
import MainTabs from './app/screens/MainTabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainTabs />
    </SafeAreaProvider>
  );
};

export default App;
