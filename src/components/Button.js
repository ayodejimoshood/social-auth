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
    alignSelf: "center",
    backgroundColor: "#001F3F",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 40,
  },
  textStartedStyle: {
    fontSize: 14,
    color: "#151515",
  },
});

export default Button;