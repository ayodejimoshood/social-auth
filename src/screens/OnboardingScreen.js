import React, {useState} from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import Images from "../assets/onboarding";
import Button from "../components/Button";
import { useFonts } from 'expo-font';
import Socials from "../components/Socials";
import logo from "../assets/social-auth-logo.png"

const OnboardingScreen = ({ onPress, navigation }) => {

  const [fontsLoaded] = useFonts({
    Recoleta: require('../assets/fonts/Recoleta-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // You can handle the font loading state here
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo}/>
      
      <Socials/>
      
      <View
        style={{
          position: "absolute",
          bottom: "4%",
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.subtitleStyle}>Unlock Your World with a Single Tap! 🌏✨ Sign in effortlessly and explore a world of connected experiences with our Social Authentication App. 🚀🔒 #SignInSimplified #ConnectedJourney</Text>
        <Text style={[styles.textStyle, { fontFamily: 'Recoleta' }]}>Social Authentication</Text>
        {/* <View style={styles.buttonStyle}>
          <Button navigation={navigation} text="Login" screen="LoginScreen" color="#ffffff" textColor="#000000" />
        </View>
        <View style={styles.buttonStyle}>
          <Button navigation={navigation} text="Sign Up" screen="RegisterScreen" color="#ffffff" textColor="#000000" />
        </View> */}

        <View style={{bottom: 0}}>
          <Text style={styles.textTermsStyle}>
              {" "}
              v0.0.1
          </Text>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#000000",
    flexDirection: 'column',
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    position: "absolute",
    width: 70,
    height: 70,
    top: 40
  },
  middle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundimage: {
    flex: 1,
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 25,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: "center",
    color: "#ffffff"
  },
  subtitleStyle: {
    fontSize: 13,
    fontWeight: 400,
    paddingHorizontal: 20,
    paddingTop: 20,
    // width: "100%",
    textAlign: "center",
    // alignSelf: "left",
    // bottom: "5%",
    color: "#ffffff"
  },
  imageContainer: {
    height: 400,
    width: "80%",
    resizeMode: "contain",
  },
  buttonStyle: {
    marginBottom: 10,
    width: "85%",
  },
  textButtonStyle: {
    fontWeight: "600",
    fontSize: 15,
    color: "#259BD8",
  },
  textSkipStyle: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  textTermsStyle: {
    fontSize: 12,
    textAlign: "center",
    color: "#ffffff"
  },
});

export default OnboardingScreen;