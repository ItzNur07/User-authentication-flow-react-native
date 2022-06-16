import React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

const CustomButton = ({ text, onPress, type, bgColor, fgColor }) => {
  return (
    <Pressable
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
      onPress={onPress}>
      <Text style={[styles[`text_${type}`], fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },

  text_PRIMERY: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text_TERSERY: {
    color: 'gray',
    fontSize: 16,
  },
  container_PRIMERY: {
    backgroundColor: 'dodgerblue',
  },
  container_TERSERY: {},

  container_SECONDERY: {
    borderWidth: 2,
    borderColor: 'dodgerblue',
  },
  text_SECONDERY: {
    color: 'dodgerblue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
