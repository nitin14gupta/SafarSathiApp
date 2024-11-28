import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

const ReligionSelectionScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [selectedReligion, setSelectedReligion] = useState<string | null>(null);

  const religions = [
    'Agnostic',
    'Atheist',
    'Buddhist',
    'Catholic',
    'Hindu',
    'Christian',
    'Jain',
    'Jewish',
    'Muslim',
    'Sikh',
    'Spiritual',
    'Other',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Progress Bar */}
        <ProgressBar progress={90}/>

        {/* Title and Description */}
        <Text style={styles.titleText}>What’s important in your life?</Text>
        <Text style={styles.subtitleText}>
          You can answer or can leave blank depending on what matters to you.
        </Text>

        {/* Religion Section */}
        <Text style={styles.sectionTitle}>Religion</Text>
        <View style={styles.optionsContainer}>
          {religions.map(religion => (
            <TouchableOpacity
              key={religion}
              style={[
                styles.optionButton,
                selectedReligion === religion && styles.optionButtonSelected,
              ]}
              onPress={() => setSelectedReligion(religion)}>
              <Text
                style={[
                  styles.optionText,
                  selectedReligion === religion && styles.optionTextSelected,
                ]}>
                {religion}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
         <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
          <BoardingButton
            onPress={() => navigation.navigate('PromptScreen')}
            disabled={!selectedReligion}
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
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
    paddingHorizontal: 15,
    backgroundColor: '#4DC7F8',
    borderRadius: 20,
    marginVertical: 5,
    minWidth: '30%',
    alignItems: 'center',
  },
  optionButtonSelected: {
    backgroundColor: '#48a9f0',
    borderWidth: 2,
    borderColor: '#006fa6',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  optionTextSelected: {
    color: '#000',
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

export default ReligionSelectionScreen;
