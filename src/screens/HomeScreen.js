import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Easing
} from "react-native";


const HomeScreen = ({ onPress, navigation, event }) => {


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.scrollViewContainer}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={{
              alignSelf: "center",
              width: 90,
              height: 50,
              top: 0,
            }}
            source={require("../assets/biz4Biz-icon-logo.png")}
          />
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  membershipCard: {
    height: "100%"
  },
  membershipContainer: {
    backgroundColor: "#B52D89",
    paddingVertical: 20,
    // paddingHorizontal: 30,
    borderRadius: 20,
    // flexDirection: "row"
  },
  logoContainer: {
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 15,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: "white",
    // zIndex: 999,
  },
  headerText: {
    textAlign: "center",
    padding: 20,
    fontSize: 14,
    fontWeight: "600",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  innerCard: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    margin: 20,
    borderWidth: 1,
    borderColor: "#E1E6EF",
    borderRadius: 10,
    alignSelf: "center",
    width: "90%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: 140,
    height: 165,
    borderRadius: 15,
    position: "absolute",
    right: 0,
    bottom: 0,
    alignSelf: "center",
  },
  buttonStyle: {
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignSelf: "center",
    paddingVertical: 18,
    borderRadius: 30,
    width: "100%",
    // position: "absolute",
    // right: 0
    marginTop: 10,
  },
  textStartedStyle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#151515",
    textAlign: "center"
  },

  // card
  scrollViewContainer: {
    // paddingVertical: 20,
    backgroundColor: "white",
    marginBottom: 85,
  },
  cardContainer: {
    paddingHorizontal: 30,
    // flexDirection: "row",
    justifyContent: "space-between",
  },

  textContainer: {
    padding: 7,
  },
  subTitle: {
    color: '#151515',
    fontSize: 18,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#151515',
    marginTop: 10,
    textAlign: "justify"
  },
});

export default HomeScreen;