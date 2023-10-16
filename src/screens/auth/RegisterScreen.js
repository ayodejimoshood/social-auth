import React, { useCallback, useRef, useState } from "react";
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
import TextInput from "../../components/TextInput";
import { ArrowLeft } from 'iconsax-react-native';
import Button from "../../components/Button";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const RegisterScreen = ({ onPress, navigation }) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleOpenBottomSheet = () => {
    setBottomSheetVisible(true);
    // console.log('bottomSheetVisible:', bottomSheetVisible);
    // console.log('Opening bottom sheet');
  };

  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const handleNext = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{marginTop: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate("OnboardingScreen")} style={{position: "absolute", paddingHorizontal: 20, top: 0, left: 5}}>
            <ArrowLeft color="#000" size={24} />
          </TouchableOpacity>
          
          <Text style={styles.textRegisterStyle}>
            Create account{"\n"}
          </Text>
          <Text style={styles.textRegisterSubStyle}>
            Enter your email address to login into your account.
          </Text>
        </View>
        <View
          style={{
            // flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 16,
              marginTop: 80,
              alignItems: "center"
            }}
          >
            <TextInput
              icon="person-outline"
              placeholder="Firstname"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              validationColor="#223e4b"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 16,
              alignItems: "center"
            }}
          >
            <TextInput
              icon="person-outline"
              placeholder="Lastname"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              validationColor="#223e4b"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 16,
              alignItems: "center",
              width: "100%",
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
              validationColor="#223e4b"
            />
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              marginBottom: 16,
              alignItems: "center"
            }}
          >
            <TextInput
              icon="lock-closed-outline"
              placeholder="Password"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
            />
          </View>
          <View style={styles.textTermsContainerStyle}>
            <TouchableOpacity onPress={handleOpenBottomSheet}>
              <Text style={styles.textTermsStyle}>
                {" "}
                By continuing, you accept our <Text style={{fontWeight: 500, color: "#259BD8"}}>Terms of use</Text> and <Text style={{fontWeight: 600, color: "#259BD8"}}>Privacy Policy.</Text>{" "}
              </Text>
            </TouchableOpacity>
          </View>

          {/* {bottomSheetVisible && (
            <BottomSheet
              snapPoints={['25%', '50%']}
              closeModal={handleCloseBottomSheet}
              content={
                <View style={{flex: 1, backgroundColor: "red"}}>
                  <Text>Bottom Sheet Content</Text>
                </View>
              }
            />
          )} */}

          <Button navigation={navigation} text="Continue" screen="HomeScreen" color="#259BD8" textColor="#ffffff" />

          <TouchableOpacity>
            <Text
              style={styles.textLoginStyle}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              {" "}
              Have an account? <Text style={{fontWeight: 600}}>Log In</Text>{" "}
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
  iconStyle: {
    
    width: 20,
    height: 20,
    // textAlign: "center",
    // bottom: "15%",
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    resizeMode: "contain",
    marginHorizontal: 15,
  },
  buttonStyle: {
    backgroundColor: "#191721",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 10,
    marginBottom: 20,
    width: "85%",
  },
  textStartedStyle: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#ffffff",
  },
  textTermsContainerStyle: {
    // fontWeight: "500",
    fontSize: 13,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  textTermsStyle: {
    // fontWeight: "500",
    fontSize: 13,
    textAlign: "center"
  },
  textLoginStyle: {
    // fontWeight: "500",
    fontSize: 13,
  },
  textForgotPasswordStyle: {
    fontWeight: "500",
    fontSize: 13,
    top: "-80%",
  },
  textRegisterStyle: {
    fontWeight: "bold",
    // fontSize: 13,
    top: 50,
    color: "#000000",
    fontSize: 24,
    paddingLeft: 30,
  },
  textRegisterSubStyle: {
    fontWeight: 400,
    // fontSize: 13,
    top: 30,
    color: "#000000",
    fontSize: 12,
    paddingLeft: 30,
  },
});

export default RegisterScreen;