import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          router.replace("(tabs)"); // Navigate to main app layout
        } else {
          router.replace("Login"); // Go to login
        }
      } catch (error) {
        console.error("Token check error:", error);
        router.replace("Login");
      }
    };

    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#999" />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
