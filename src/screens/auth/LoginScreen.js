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
  NativeModules,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import TextInput from "../../components/TextInput";
import { ArrowLeft } from "iconsax-react-native";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import {
  Settings,
  LoginButton,
  AccessToken,
  LoginManager,
  Profile,
  GraphRequest,
  GraphRequestManager,
  AuthenticationToken,
} from "react-native-fbsdk-next";

const { RNTwitterSignIn } = NativeModules;

// ios ClientID = 1086447436205-c3n3hvm0m8i3dibbvia7kbba185ijps7.apps.googleusercontent.com
// android = 1086447436205-3nurs9ar1ljv3nfff36a2rehrunt12tn.apps.googleusercontent.com
//twitter clientID = bmxGN0EzSjFzOENkT0lzcUdhWU06MTpjaQ
//twitter client secret = CjzE6WuKr2ZgZBryVnf5WYn9JurvJgBL2aKcqmo-yQ2bjbiWvY
//twitter api key = aPEuYidcx6Oeses3NeARMMmY2
//twitter aoi secret = COan1XQ7ImEn4IotwbgOP0GAarKUOmm4D9dAcphF524g1onNl1
//faceboo app id 1389198861945792

GoogleSignin.configure({
  androidClientId:
    "1086447436205-3nurs9ar1ljv3nfff36a2rehrunt12tn.apps.googleusercontent.com",
  iosClientId:
    "1086447436205-c3n3hvm0m8i3dibbvia7kbba185ijps7.apps.googleusercontent.com",
});

Settings.setAppID("1389198861945792");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const LoginScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const loginTwitter = () => {
    RNTwitterSignIn.init(
      "aPEuYidcx6Oeses3NeARMMmY2",
      "COan1XQ7ImEn4IotwbgOP0GAarKUOmm4D9dAcphF524g1onNl1"
    );
    RNTwitterSignIn.logIn()
      .then((loginData) => {
        console.log(loginData, "this is the login data");
      })
      .catch((error) => {
        console.log(error?.message);
      });
  };

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
  const signIn = (e) => {
    console.log(e, "the sign lagos");
  };

  return (
    <DismissKeyboard>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("OnboardingScreen")}
            style={{
              position: "absolute",
              paddingHorizontal: 20,
              top: 0,
              left: 5,
            }}
          >
            <ArrowLeft color="#000" size={24} />
          </TouchableOpacity>

          <Text style={styles.textLoginStyle}>Welcome back!{"\n"}</Text>
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
              alignItems: "center",
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
              icon="lock-closed-outline"
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
            onPress={async () => {
              const user = await GoogleSignin.signIn();
              console.log(user, "the sign uin");
              // navigation.navigate("auth", { screen: "HomeScreen" })
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.textStartedStyle}>Login with Google</Text>
            )}
          </TouchableOpacity>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={(error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  console.log(data.accessToken.toString());
                });
              }
            }}
            onLogoutFinished={() => console.log("logout.")}
          />
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={async () => {
              LoginManager.logInWithPermissions(["public_profile"]).then(
                async function (result) {
                  if (result.isCancelled) {
                    console.log("Login cancelled");
                  } else {
                    const token = await AccessToken.getCurrentAccessToken();
                    console.log(token.accessToken, "the token ");

                    const response = await fetch(
                      `https://graph.facebook.com/me?fields=id,first_name,last_name,email&access_token=${token.accessToken}`
                    );
                    const res = await response.json();
                    console.log(res, "the response");
                  }
                },
                function (error) {
                  console.log("Login fail with error: " + error);
                }
              );
            }}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.textStartedStyle}>Login with Facebook</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyle} onPress={loginTwitter}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
            ) : (
              <Text style={styles.textStartedStyle}>Login with twitter</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={styles.textForgotPasswordStyle}
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
            >
              {" "}
              Forgot password?{" "}
              <Text style={{ fontWeight: 600 }}>Click here</Text>{" "}
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
              Don't have an account??{" "}
              <Text style={styles.signUpText}>Sign Up</Text>{" "}
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
    color: "#F80100",
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
    bottom: 15,
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
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    paddingBottom: 50,
  },
  signUpText: {
    fontWeight: "600",
  },
});

export default LoginScreen;
