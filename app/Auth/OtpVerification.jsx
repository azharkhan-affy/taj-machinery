// app/otp-verification.js
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function OtpVerificationScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.backText}>Verify OTP</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Enter Verification Code</Text>
      <Text style={styles.subtitle}>
        We are automatically detecting a SMS sent to your mobile Number +91 123
        456 789
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      <Text style={styles.phoneText}>
        +31452475836214 <Text style={styles.linkText}>Wrong Number?</Text>
      </Text>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Don’t receive OTP? <Text style={styles.linkText}>Resend OTP</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: "#fff",
  },
  backRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1.5,
    borderColor: "#FFCC00",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#fff",
  },
  phoneText: {
    marginBottom: 30,
    fontSize: 14,
    color: "#000",
  },
  linkText: {
    color: "#FFCC00",
    fontWeight: "bold",
  },
  verifyButton: {
    backgroundColor: "#FFCC00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  resendText: {
    textAlign: "center",
    fontSize: 14,
    color: "#444",
  },
});
