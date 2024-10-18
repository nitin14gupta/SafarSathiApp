import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BoardingButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.roundedButton}>
        <Text style={styles.iconText}>{'>'}</Text>
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
});

export default BoardingButton;
