import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BoardingButton = ({ onPress = () => navigation.navigate('Home'), disabled = false }) => {
  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : undefined}
      style={[styles.buttonContainer, disabled && styles.buttonDisabled]}
      activeOpacity={disabled ? 1 : 0.7}
    >
      <View style={[styles.roundedButton, disabled && styles.roundedButtonDisabled]}>
        <Text style={[styles.iconText, disabled && styles.iconTextDisabled]}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedButton: {
    width: 50,
    height: 50,
    backgroundColor: '#00C4CC',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  roundedButtonDisabled: {
    backgroundColor: '#00C4CC',
  },
  iconTextDisabled: {
    color: '#CFD8DC',
  },
});

export default BoardingButton;
