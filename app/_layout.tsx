import { SafeAreaProvider } from 'react-native-safe-area-context';
// import AppProvider from '@/src/context/AppProvider';
import { useFonts } from 'expo-font';
import { Stack, Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
// import { useColorScheme } from '@/src/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
        <Stack.Screen name="(app)" options={{ animation: "fade" }} />
      </Stack>
    </SafeAreaProvider>
  );
}