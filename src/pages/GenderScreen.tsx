import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

import { NavigationProp, RouteProp } from '@react-navigation/native';

interface GenderSelectionScreenProps {
  navigation: NavigationProp<any>;
  route: RouteProp<any>;
}

const GenderScreen: React.FC<GenderSelectionScreenProps> = ({ navigation, route }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const genderOptions = [
    { label: 'Man', value: 'man' },
    { label: 'Woman', value: 'woman' },
    { label: 'Others', value: 'Others' },
  ];

  const firstName = route?.params?.firstName ?? '';
  const lastName = route?.params?.lastName ?? '';

  const handlePress = () => {
    if (selectedGender) {
      navigation.navigate('PurposeScreen', { selectedGender });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ProgressBar progress={20} />

        {/* Title and Subtitle */}
        <Text style={styles.titleText}>{firstName} {lastName} is a great name</Text>
        <Text style={styles.subtitleText}>
          We love that you’re here. Pick the perfect gender which describes you,
          then add more about it if you like.
        </Text>

        {/* Gender Selection */}
        <Text style={styles.questionText}>
          Which gender best describes you?
        </Text>
        <View style={styles.genderOptionsContainer}>
          {genderOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.genderOption,
                selectedGender === option.value && styles.genderOptionSelected,
              ]}
              onPress={() => setSelectedGender(option.value)}
            >
              <Text style={styles.genderText}>{option.label}</Text>
              <View
                style={
                  selectedGender === option.value
                    ? styles.radioCircleSelected
                    : styles.radioCircle
                }
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Text */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            You can always update this later.{' '}
            <Text style={styles.linkText}>
              A note about gender on SafarSaathi.
            </Text>
          </Text>
        </View>

       <View style={styles.boardingBtn}>
        <BoardingButton onPress={handlePress} disabled={!selectedGender} />
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
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 20,
    textAlign: 'center',
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

export default GenderScreen;
