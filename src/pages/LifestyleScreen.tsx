import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';
import { NavigationProp } from '@react-navigation/native';

const LifestyleScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [drinking, setDrinking] = useState('');
  const [smoking, setSmoking] = useState('');

  const drinkingOptions = [
    { label: 'Yes, I drink', value: 'yes' },
    { label: 'I drink sometimes', value: 'sometimes' },
    { label: 'I rarely drink', value: 'rarely' },
    { label: 'I don’t drink', value: 'no' },
  ];

  const smokingOptions = [
    { label: 'I smoke sometimes', value: 'sometimes' },
    { label: 'No, I don’t', value: 'no' },
    { label: 'Yes, I smoke', value: 'yes' },
    { label: 'I am trying to quit', value: 'quit' },
  ];

  const renderOptionButton = (option: { label: string; value: string }, type: 'drinking' | 'smoking') => {
    const isSelected = type === 'drinking' ? drinking === option.value : smoking === option.value;
    return (
      <TouchableOpacity
        key={option.value}
        style={[styles.optionButton, isSelected && styles.optionButtonSelected]}
        onPress={() => {
          if (type === 'drinking') {
            setDrinking(option.value);
          } else {
            setSmoking(option.value);
          }
        }}
        accessibilityLabel={option.label}
      >
        <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Progress Bar */}
        <ProgressBar progress={80} />

        {/* Title and Description */}
        <Text style={styles.titleText}>Let’s talk about your lifestyles and habits</Text>
        <Text style={styles.subtitleText}>
          Share your habits to get good connection with more people and comfortable.
        </Text>

        {/* Drinking Section */}
        <Text style={styles.sectionTitle}>Drinking</Text>
        <View style={styles.optionsContainer}>
          {drinkingOptions.map(option => renderOptionButton(option, 'drinking'))}
        </View>

        {/* Smoking Section */}
        <Text style={styles.sectionTitle}>Smoking</Text>
        <View style={styles.optionsContainer}>
          {smokingOptions.map(option => renderOptionButton(option, 'smoking'))}
        </View>

        {/* Bottom Navigation */}
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
          <BoardingButton
            onPress={() => navigation.navigate('ReligionSelectionScreen')}
            disabled={!drinking || !smoking}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7d7d7d',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4DC7F8',
    borderRadius: 25,
    marginVertical: 5,
    minWidth: '45%',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#48a9f0',
    borderWidth: 2,
    borderColor: '#006fa6',
  },
  optionText: {
    fontSize: 16,
    color: '#fff',
  },
  optionTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      marginTop: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#7d7d7d',
  },
  nextButton: {
    backgroundColor: '#4DC7F8',
    padding: 15,
    borderRadius: 50,
  },
});

export default LifestyleScreen;
