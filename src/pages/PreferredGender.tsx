import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ProgressBar from '../components/ProgressBar';
import BoardingButton from '../components/BoardingButton';
import { NavigationProp } from '@react-navigation/native';

const PreferredGender = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={50} />

      {/* Title and Subtitle */}
      <Text style={styles.titleText}>Who would you like to meet?</Text>
      <Text style={styles.subtitleText}>
        You can choose more than one answer and change it any time.
      </Text>

      {/* Question Text */}
      <Text style={styles.questionText}>What gender are you interested?</Text>

      {/* Gender Options */}
      <View style={styles.genderOptionsContainer}>
        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === 'Man' && styles.genderOptionSelected,
          ]}
          onPress={() => handleGenderSelect('Man')}
        >
          <Text style={styles.genderText}>Man</Text>
          {selectedGender === 'Man' && <View style={styles.radioCircleSelected} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === 'Woman' && styles.genderOptionSelected,
          ]}
          onPress={() => handleGenderSelect('Woman')}
        >
          <Text style={styles.genderText}>Woman</Text>
          {selectedGender === 'Woman' && <View style={styles.radioCircleSelected} />}
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === 'Both' && styles.genderOptionSelected,
          ]}
          onPress={() => handleGenderSelect('Both')}
        >
          <Text style={styles.genderText}>Both</Text>
          {selectedGender === 'Both' && <View style={styles.radioCircleSelected} />}
        </TouchableOpacity>
      </View>

      {/* Info Text */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.linkText}>ℹ️</Text> You can always update this
          later. A note about gender on SafarSaathi.
        </Text>
      </View>

      {/* Button */}
      <View style={styles.boardingBtn}>
        <BoardingButton
          onPress={() => navigation.navigate('HeightScreen')}
          disabled={!selectedGender}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#000',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 20,
    textAlign: 'auto',
    color: '#555',
    marginBottom: 30,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  genderOptionsContainer: {
    width: '100%',
    marginBottom: 30,
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#65D1D1',
    borderRadius: 30,
    marginBottom: 15,
  },
  genderOptionSelected: {
    borderColor: '#FF5B5B',
  },
  genderText: {
    fontSize: 20,
    color: '#000000',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: '#fff',
  },
  radioCircleSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#FF5B5B',
    backgroundColor: '#fff',
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
    flexShrink: 1,
    textAlign: 'center',
  },
  linkText: {
    color: '#008bff',
  },
  boardingBtn: {
    width: '100%',
    alignItems: 'flex-end',
  },
});

export default PreferredGender;
