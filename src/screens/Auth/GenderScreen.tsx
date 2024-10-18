import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GenderScreen = ({navigation}) => {
  const [selectedGender, setSelectedGender] = useState('Man');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Om Sharma is a great name</Text>
      <Text style={styles.subtitle}>
        Pick the perfect gender which describes you, then add more about it if
        you like.
      </Text>

      {['Man', 'Woman', 'Trans'].map(gender => (
        <TouchableOpacity
          key={gender}
          style={[
            styles.optionButton,
            selectedGender === gender && styles.selectedButton,
          ]}
          onPress={() => setSelectedGender(gender)}>
          <Text style={styles.optionText}>{gender}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.nextButton}
      onPress={() => navigation.navigate('PurposeScreen')}>
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

export default GenderScreen;
