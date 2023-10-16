import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SocialItem = ({ image, text }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 1,
  },
});

export default SocialItem;
