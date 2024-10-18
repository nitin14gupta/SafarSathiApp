import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PurposeScreen = ({navigation}) => {
  const [selectedPurpose, setSelectedPurpose] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What brings you to SafarSaathi?</Text>
      <Text style={styles.subtitle}>Choose a option to find your best people.</Text>

      {['Date', 'Travel'].map((purpose) => (
        <TouchableOpacity
          key={purpose}
          style={[styles.optionButton, selectedPurpose === purpose && styles.selectedButton]}
          onPress={() => setSelectedPurpose(purpose)}
        >
          <Text style={styles.optionText}>{purpose}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.nextButton}
      onPress={() => navigation.navigate('HeightScreen')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  optionButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#4DD0E1',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#4DD0E1',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default PurposeScreen;
