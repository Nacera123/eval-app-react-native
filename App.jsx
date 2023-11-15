import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from "expo-splash-screen"
import RootNavigation from "./navigation/RootNavivation"
import { useCallback } from 'react';
import { View } from "react-native";
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [alreadyLaunched, setAlreadyLaunched] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        await SplashScreen.preventAutoHideAsync();
        const data = await AsyncStorage.getItem('alreadyLaunched');
        if (data) {
          setAlreadyLaunched(true);
        }
      } catch (e) {
        console.error(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <RootNavigation />
      <StatusBar style="light" />
    </View>
  );
}


