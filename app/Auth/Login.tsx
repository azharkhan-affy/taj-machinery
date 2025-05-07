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
  Alert,
  Animated,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import { useTranslation } from "react-i18next";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { MaterialIcons, Feather } from "@expo/vector-icons";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const router = useRouter();

  // const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const resetData = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Implement your login logic here
      console.log("Login attempt with:", email, password);
      const response = {
        email: email,
        password: password,
      };

      // await axios
      //   .post(`${BASE_URL}/auth/login`, response, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   })
      //   .then(async (res) => {
      //     setLoading(false);
      //     // Call the login function from AuthContext to update authentication state
      //     console.log("====================================");
      //     console.log("DAT>>>>", res);
      //     console.log("====================================");
      //     if (res?.status === 200) {
      //       // await AsyncStorage.setItem("token", res?.data?.token);
      //       resetData();
      //       await AsyncStorage.setItem("token", res?.data?.token);
      //       // await login(res?.data?.token);
      //       // navigation.navigate("index" as never);
      //     }
      //   })
      //   .catch((error) => {
      //     setLoading(false);
      //     Alert.alert("Error", error?.response?.data?.message);
      //     console.log("ERROR>>>>", error?.response?.data?.message);
      //   });

      // Navigation will be handled automatically by the useEffect in RootLayoutNav
      // No need to navigate manually here
      router.replace("/(tabs)"); // Navigate to the drawer layout
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  // Example of how to open drawer in screens after login

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.wrapper}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Welcome back! Please enter your credentials to access your
              account.
            </Text>
          </View>

          <View style={styles.innerContainer}>
            <ScrollView contentContainerStyle={styles.formContent}>
              {/* Email */}
              <Text style={styles.label}>Email address</Text>
              <View style={styles.inputRow}>
                <TextInput
                  placeholder="helloworld@gmail.com"
                  placeholderTextColor="#999"
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                {/* {email.length > 0 && (
                  <MaterialIcons name="check-circle" size={16} color="black" />
                )} */}
              </View>

              {/* Password */}
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputRow}>
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  style={styles.input}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Feather
                    name={showPassword ? "eye" : "eye-off"}
                    size={16}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>

              {/* Forgot password */}
              <TouchableOpacity style={styles.forgot}>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </ScrollView>

            {/* Continue Button */}
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>

              <View style={styles.signup}>
                <Text style={{ color: "#999", fontSize: wp("3%") }}>
                  Don’t Have an Account?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Auth/Signup" as never)}
                >
                  <Text style={styles.signupText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
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
  formContent: {
    paddingBottom: 16,
  },
  label: {
    color: "#1E1E1E",
    fontWeight: "500",
    marginBottom: 8,
    fontSize: wp("3.4%"),
    marginTop: 16,
  },
  inputRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: wp("3.4%"),
  },
  forgot: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  forgotText: {
    color: "#FFCC00",
    fontSize: wp("3.4%"),
    fontWeight: "400",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  footer: {
    paddingBottom: 24,
  },
  button: {
    backgroundColor: "#FFCC00",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: wp("3.8%"),
    color: "#1E1E1E",
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  signupText: {
    color: "#FFCC00",
    fontWeight: "400",
    fontSize: wp("3%"),
  },
});

export default Login;
