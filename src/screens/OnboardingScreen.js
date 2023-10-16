import React, {useState} from "react";
import {
  View,
  SafeAreaView,
  Text,
  // Button,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import Images from "../assets/onboarding";
import Button from "../components/Button";
import { useFonts } from 'expo-font';

const OnboardingScreen = ({ onPress, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    navigation.navigate('RegisterScreen');
  };

  const [fontsLoaded] = useFonts({
    Recoleta: require('../assets/fonts/Recoleta-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // You can handle the font loading state here
    return null;
  }

  const onboardingList = [
    {
      id: 1,
      subtitle: "Providing business networking,\nmarketing, advice and sustainability support\nfor SMEs in the east of England, and so much more.",
      title: "Simplify your business\njourney with biz4Biz",
      image: Images.luxidriver,
    },
    // {
    //   id: 2,
    //   title: "Simplify your business \njourney with biz4Biz",
    //   subtitle: "Providing business networking,\nmarketing, advice and sustainability \nsupport for SMEs in the east of England.",
    //   image: Images.luxidriver,
    // },
    // {
    //   id: 3,
    //   title: "Simplify your business \njourney with biz4Biz",
    //   subtitle: "Providing business networking, \nmarketing, advice and sustainability \nsupport for SMEs in the east of England.",
    //   image: Images.luxidriver,
    // },
    // { id: 2, title: "Send parcels with ease", image: Images.taxi },
  ];

  return (
    <View 
      style={{ 
        flex: 1, 
        backgroundColor: "#259BD8",
        // padding: 5,
        flexDirection: 'column',
        justifyContent: 'center' }}>
    {/* <ImageBackground source={image} resizeMode="cover" style={styles.backgroundimage}> */}
    <Image
        style={{
          alignSelf: 'center',
          width: '20%',
          height: '5%',
          top: 25
        }}
        source={require('../assets/biz4Biz-icon-logo.png')}
      />
      <Swiper
        paginationStyle={{
          // position: "absolute",
          bottom: 60,
          // flex: 1,
          // top: 450,
          // right: 300
        }}
        activeDotColor="#191721"
        activeDotStyle={{ width: 20, height: 8 }}
        autoplay
      >
        {onboardingList.map((i) => {
          return (
            <View
              key={i.id}
              style={{
                justifyContent: "center",
                alignItems: "center",
                // height: "100%",
                // position: "absolute" 
              }}
            >
              <Image style={styles.imageContainer} source={i.image} />
              <Text style={styles.subtitleStyle}>{i.subtitle}</Text>
              <Text style={[styles.textStyle, { fontFamily: 'Recoleta' }]}>{i.title}</Text>
            </View>
          );
        })}
        
      </Swiper>

      <View
        style={{
          // position: "absolute",
          bottom: "4%",
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Icon navigation={navigation} screen="LoginScreen" icon="ios-arrow-forward" color="#ffffff" iconColor="#259BD8"/> */}
        {/* <Button navigation={navigation} text="Press to Open" screen="HomeScreen" color="#ffffff" textColor="#259BD8" /> */}
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() =>
              navigation.navigate("auth", { screen: "HomeScreen" })
            }
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
              ) : (
              <Text style={styles.textStartedStyle}>Press to Open</Text>
            )}
          </TouchableOpacity>
        
        {/* <Button navigation={navigation} text="Sign Up" screen="RegisterScreen" color="#ffffff" textColor="#259BD8" />
        <Button navigation={navigation} text="Login" screen="LoginScreen" color="#ffffff" textColor="#259BD8" /> */}

        {/* <Icon icon="ios-arrow-forward"/> */}

        <View style={{bottom: 0}}>
          <Text style={styles.textTermsStyle}>
              {" "}
              v0.0.25
          </Text>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
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
    width: "100%",
    resizeMode: "contain",
  },
  // buttonStyle: {
  //   backgroundColor: "#ffffff",
  //   // paddingHorizontal: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingVertical: 18,
  //   borderRadius: 30,
  //   marginBottom: 10,
  //   width: "70%",
  // },
  buttonStyle: {
    backgroundColor: "#ffffff",
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
    // width: 350
  },
});

export default OnboardingScreen;