import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabLayout from "./(tabs)/_layout";

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        setIsAuthenticated(!!token);
        // setIsAuthenticated(true);
      } catch (error) {
        console.error("Error checking token:", error);
      }
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (isAuthenticated === true) {
      router.replace("/(tabs)"); // Navigate to DrawerLayout after login
    }
  }, [isAuthenticated, router]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isAuthenticated ? (
        <TabLayout />
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth/Login" />
          <Stack.Screen name="Auth/Signup" />
          <Stack.Screen name="Auth/ForgotPassword" />
        </Stack>
      )}
    </GestureHandlerRootView>
  );
}
