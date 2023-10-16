import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import { ArrowLeft } from 'iconsax-react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = ({navigation}) => {
  // const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    const dummyEmail = "dummy@example.com";
    const dummyPassword = "password";

    if (email === dummyEmail && password === dummyPassword) {
      // Successful login
      navigation.navigate("HomeScreen");
    } else {
      // Invalid credentials
      setError("Invalid email or password");
    }

    // setError("");
    // login({ email, password });
  };

  return (
    <DismissKeyboard>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate("OnboardingScreen")} style={{position: "absolute", paddingHorizontal: 20, top: 0, left: 5}}>
            <ArrowLeft color="#000" size={24} />
          </TouchableOpacity>
          
          <Text style={styles.textLoginStyle}>
            Welcome back!{"\n"}
          </Text>
          <Text style={styles.textLoginSubStyle}>
            Enter your email address to login into your account.
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 16,
              marginTop: 80,
              alignItems: "center"
            }}
          >
            <TextInput
              icon="mail-outline"
              placeholder="Email Address"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 16,
              width: "100%",
            }}
          >
            <TextInput
              icon='lock-closed-outline'
              placeholder="Password"
              secureTextEntry
              autoCompleteType="password"
              autoCapitalize="none"
              keyboardAppearance="dark"
              returnKeyType="go"
              returnKeyLabel="go"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
          </View>

          {/* <Text style={styles.error}>{error}</Text> */}
          {error ? <Text style={styles.error}>{error}</Text> : null}

          {/* <Button navigation={navigation.navigate("auth", { screen: "HomeScreen" })} text="Login" screen="HomeScreen"  color="#259BD8" textColor="#ffffff" /> */}
          {/* <Button navigation={navigation} text="Login" screen="HomeScreen" color="#259BD8" textColor="#ffffff" /> */}

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("auth", { screen: "HomeScreen" })
            }
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
              ) : (
              <Text style={styles.textStartedStyle}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={styles.textForgotPasswordStyle}
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
            >
              {" "}
              Forgot password? <Text style={{fontWeight: 600}}>Click here</Text>{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Text
              style={styles.textRegisterStyle}
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              {" "}
              Don't have an account?? <Text style={styles.signUpText}>Sign Up</Text>{" "}
            </Text>
          </TouchableOpacity>
        </View>
          
      </SafeAreaView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    width: "40%",
    textAlign: "center",
    bottom: "15%",
  },
  error: {
    marginBottom: 10,
    color: "#F80100"
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    resizeMode: "contain",
    marginHorizontal: 15,
    // marginVertical: 15,
  },

  // start old button style
  // buttonStyle: {
  //   backgroundColor: "#191721",
  //   paddingHorizontal: 100,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingVertical: 18,
  //   borderRadius: 10,
  //   marginBottom: 20,
  //   width: "85%",
  // },
  // textStartedStyle: {
  //   fontWeight: "bold",
  //   fontSize: 17,
  //   color: "#ffffff",
  //   textAlign: 'center',
  // },
  // end old button style

  buttonStyle: {
    backgroundColor: "#259BD8",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 30,
    marginBottom: 10,
    width: "85%",
  },
  textStartedStyle: {
    fontWeight: "600",
    fontSize: 15,
    color: "#ffffff",
  },
  textForgotPasswordStyle: {
    // fontWeight: "500",
    fontSize: 13,
  },
  textRegisterStyle: {
    fontSize: 13,
  },
  textOTPStyle: {
    fontWeight: "500",
    fontSize: 12,
    // top: "-110%",
    bottom: 15
  },
  textLoginStyle: {
    fontWeight: "bold",
    // fontSize: 13,
    top: 50,
    color: "#000000",
    fontSize: 24,
    paddingLeft: 30,
  },
  textLoginSubStyle: {
    fontWeight: 400,
    // fontSize: 13,
    top: 30,
    color: "#000000",
    fontSize: 12,
    paddingLeft: 30,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: 50,
  },
  signUpText: {
    fontWeight: '600',
  },
});

export default LoginScreen;