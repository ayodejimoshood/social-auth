import { StatusBar } from 'expo-status-bar';
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './src/navigation/Navigation';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

function App() {
  return (
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="auto" />
        </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;