import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  const handleResetPassword = async () => {
    if (!email) {
      setMessage("Please enter your email address");
      setIsError(true);
      return;
    }

    try {
      // Implement your password reset logic here
      console.log("Password reset attempt for:", email);
      // Mock success
      setMessage("Password reset link has been sent to your email");
      setIsError(false);
      setIsSubmitted(true);
    } catch (err) {
      setMessage("Failed to send reset link. Please try again.");
      setIsError(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
          <Text style={styles.backText}>Forget Password</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Enter Your Mobile Number</Text>
        <Text style={styles.subtitle}>
          Enter your registered Mobile number below, and we’ll send you a code
          to reset your password.
        </Text>

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="IN+91"
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  wrapper: {
    flex: 1,
  },
  backButton: {
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
    marginBottom: 24,
  },
  label: {
    color: "#1E1E1E",
    fontWeight: "500",
    marginBottom: 8,
    fontSize: wp("3.4%"),
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 30,
    backgroundColor: "#fff",
  },
  sendButton: {
    backgroundColor: "#FFCC00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
export default ForgotPassword;
