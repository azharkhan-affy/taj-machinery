import React, { useEffect, useState } from "react";
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
  ScrollView,
  Alert,
  Animated,
} from "react-native";
import axios from "axios";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);
  const position = new Animated.Value(isSignup ? 1 : 0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const route = useRoute();
  const resetData = () => {
    setName("");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
  };
  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Implement your signup logic here
    console.log("Signup attempt with:", name, email, password);
    // If signup is successful, navigate to login or home
    // navigation.navigate('Login');
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    setLoading(true);
    await axios;
    // .post(`${BASE_URL}/auth/register`, userData, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then((res) => {
    //   setLoading(false);
    //   if (res?.data?.message) {
    //     resetData();
    //     Alert.alert("Success", res?.data?.message);
    //     navigation.navigate("Auth/Login" as never);
    //   }
    // })
    // .catch((error) => {
    //   setLoading(false);
    //   Alert.alert("Error", error?.response?.data?.message);
    //   console.log("ERROR>>>>", error?.response?.data?.message);
    // });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Fill Up all the information below here to create an account.
            </Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter Your Name" />
            <Text style={styles.label}>Mobile</Text>

            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="phone-pad"
            />

            <View style={styles.row}>
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Select Country"
              />
              <TextInput
                style={[styles.input, styles.halfInput]}
                placeholder="Select City"
              />
            </View>

            <View style={styles.passwordInput}>
              <TextInput
                style={styles.inputField}
                placeholder="Enter password"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={16}
                  color="#999"
                />
              </TouchableOpacity>
            </View>

            <View style={styles.passwordInput}>
              <TextInput
                style={styles.inputField}
                placeholder="Confirm password"
                secureTextEntry={!showConfirm}
              />
              <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)}>
                <Ionicons
                  name={showConfirm ? "eye" : "eye-off"}
                  size={16}
                  color="#999"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createButtonText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already Have an Account?</Text>
              <TouchableOpacity>
                <Text style={styles.signInText}> Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#333333",
    flexGrow: 1,
    justifyContent: "center",
  },
  formContainer: {
    flex: 1,
    marginHorizontal: "auto",
    maxWidth: 400,
  },
  wrapper: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  title: {
    fontSize: hp("4%"),
    fontWeight: "700",
    color: "#FFCC00",
  },
  subtitle: {
    color: "#ccc",
    marginTop: 6,
    fontSize: wp("3.3%"),
  },
  label: {
    color: "#1E1E1E",
    fontWeight: "500",
    marginBottom: 8,
    fontSize: wp("3.4%"),
    marginTop: 16,
  },

  innerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 12,
    paddingTop: 12,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFCC00",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: wp("3%"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  passwordInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: wp("3%"),
  },
  inputField: {
    flex: 1,
    paddingVertical: 12,
  },
  createButton: {
    backgroundColor: "#FFCC00",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 10,
  },
  createButtonText: {
    fontWeight: "600",
    fontSize: wp("3.8%"),
    color: "#1E1E1E",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  footerText: {
    color: "#888",
  },
  signInText: {
    color: "#FFCC00",
    fontWeight: "bold",
  },
});

export default Signup;
