import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ navigation, text, screen, color, textColor, url }) => {
  const handlePress = () => {
    if (url) {
      navigation.navigate('WebViewScreen', { url });
    } else {
      navigation.navigate(screen);
    }
  };

  return (
    <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: color }]} onPress={handlePress}>
      <Text style={[styles.textStartedStyle, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 40,
    width: "100%",
    alignItems: "center",
  },
  textStartedStyle: {
    alignItems: "center",
    fontSize: 14,
    color: "#151515",
    fontWeight: "600",
  },
});

export default Button;