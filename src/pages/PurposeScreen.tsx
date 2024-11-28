import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';
import { NavigationProp } from '@react-navigation/native';

const PurposeScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      navigation.navigate('PreferredGender');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={30} />

      <Text style={styles.title}>What brings you to SafarSaathi?</Text>
      <Text style={styles.subtitle}>
        Love and adventure or a beautiful friendship? Choose an option to find
        your best people.
      </Text>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Date' && styles.selectedOption,
        ]}
        onPress={() => handleSelectOption('Date')}
      >
        <Text style={styles.optionTitle}>Date</Text>
        <Text style={styles.optionDescription}>
          Find a relationship, something casual, or anything in-between.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedOption === 'Travel' && styles.selectedOption,
        ]}
        onPress={() => handleSelectOption('Travel')}
      >
        <Text style={styles.optionTitle}>Travel</Text>
        <Text style={styles.optionDescription}>
          Find friends who can match the vibe and can travel with you.
        </Text>
      </TouchableOpacity>
<View style= {styles.infoTextContainer}>
      <Text style={styles.infoText}>
        You’ll only be shown to people in the same mode as you.
      </Text>
</View>


       <View style={styles.boardingBtn}>
      <BoardingButton onPress={handleNext} disabled={!selectedOption} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'auto',
    marginVertical: 20,
    color: '#000',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'auto',
    color: '#666',
    marginBottom: 40,
  },
  option: {
    padding: 20,
    backgroundColor: '#E0F7FA',
    borderRadius: 10,
    marginVertical: 10,
  },
  selectedOption: {
    borderColor: '#FF5252',
    borderWidth: 2,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  infoTextContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'blue',
    width: '80%',
    alignItems: 'center',
  },
  boardingBtn: {
    width: '100%',
    alignItems: 'flex-end',
  },
});

export default PurposeScreen;
