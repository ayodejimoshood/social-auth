import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
// import { Entypo as Icon } from '@expo/vector-icons';
import { Ionicons as Icon } from '@expo/vector-icons';

export default function TextInput({ icon, validationColor, ...otherProps }) {
  return (
    <View
      style={[
        styles.container,
        { borderColor: validationColor },
      ]}
    >
      {/* <View style={styles.iconContainer}>
        <Icon name={icon} color={validationColor} size={16} />
      </View> */}
      {icon && (
        <View style={styles.iconContainer}>
          <Icon name={icon} color={validationColor} size={16} />
        </View>
      )}
      <View style={styles.inputContainer}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 30,
    // borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
  iconContainer: {
    paddingLeft: 8,
  },
  inputContainer: {
    flex: 1,
    padding: 8
  },
});