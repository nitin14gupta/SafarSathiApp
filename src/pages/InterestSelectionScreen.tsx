import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
// import { Ionicons } from 'react-native-vector-icons'; // Icon library for buttons
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

const interestsData = [
  { id: 1, label: 'Camping' },
  { id: 2, label: 'Tennis' },
  { id: 3, label: 'Coffee' },
  { id: 4, label: 'Foodie' },
  { id: 5, label: 'Dogs' },
  { id: 6, label: 'Cats' },
  { id: 7, label: 'Yoga' },
  { id: 8, label: 'Dancing' },
  { id: 9, label: 'LGBTQ Rights' },
  { id: 10, label: 'Game' },
  { id: 11, label: 'Boating' },
  { id: 12, label: 'Singing' },
];

const InterestSelectionScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleSelectInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const renderInterestItem = ({ item }: { item: { id: number; label: string } }) => {
    const isSelected = selectedInterests.includes(item.label);
    return (
      <TouchableOpacity
        style={[styles.interestButton, isSelected && styles.selectedButton]}
        onPress={() => handleSelectInterest(item.label)}
        disabled={selectedInterests.length >= 5 && !isSelected}
      >
        {/* <Ionicons
          name={isSelected ? 'remove-circle' : 'add-circle'}
          size={20}
          color="#fff"
          style={styles.icon}
        /> */}
        <Text style={styles.interestText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={60} />

      {/* Title */}
      <Text style={styles.title}>Choose 5 things you are really into.</Text>
      <Text style={styles.subText}>
        Add interests to your profile to help you match with people who love them too.
      </Text>
      {/* Interests */}
      <Text style={styles.youMightLikeText}>You might like....</Text>
      <FlatList
        data={interestsData}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderInterestItem}
        columnWrapperStyle={styles.columnWrapper}
      />
      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.selectedCount}>
          {selectedInterests.length}/5 Selected
        </Text>
        <BoardingButton
          onPress={() => navigation.navigate('QualitiesSelectionScreen')}
          disabled={selectedInterests.length < 5}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7d7d7d',
    marginBottom: 30,
  },
  youMightLikeText: {
    fontSize: 28,
    marginBottom: 40,
    marginTop: 20,
    color: '#000',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  interestButton: {
    flex: 1,
    backgroundColor: '#4DC7F8',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#48a9f0',
    borderWidth: 2,
    borderColor: '#006fa6',
  },
  interestText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5, // Space between icon and text
  },
  icon: {
    marginRight: 5, // Space between icon and text
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#7d7d7d',
  },
  selectedCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#4DC7F8',
    padding: 15,
    borderRadius: 50,
  },
  nextButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default InterestSelectionScreen;
