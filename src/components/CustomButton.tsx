import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({
  title = 'Click Me',
  bgColor = '#007bff',
  textColor = '#ffffff',
  targetScreen = () => {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: disabled ? 'red' : bgColor,
          opacity: disabled ? 0.6 : 1,
        },
      ]}
      onPress={() => !disabled && targetScreen()}
      disabled={disabled}
      >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomButton;
