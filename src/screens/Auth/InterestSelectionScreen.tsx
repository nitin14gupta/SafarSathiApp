import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const interestsData = [
  {id: 1, label: 'Camping', icon: '🏕️'},
  {id: 2, label: 'Tennis', icon: '🎾'},
  {id: 3, label: 'Coffee', icon: '☕'},
  {id: 4, label: 'Foodie', icon: '🍴'},
  {id: 5, label: 'Dogs', icon: '🐶'},
  {id: 6, label: 'Cats', icon: '🐱'},
  {id: 7, label: 'Yoga', icon: '🧘'},
  {id: 8, label: 'Dancing', icon: '💃'},
  {id: 9, label: 'LGBTQ Rights', icon: '🏳️‍🌈'},
  {id: 10, label: 'Game', icon: '🎮'},
  {id: 11, label: 'Boating', icon: '🚤'},
  {id: 12, label: 'Singing', icon: '🎤'},
];

const InterestSelectionScreen = ({navigation}) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const handleSelectInterest = interest => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const renderInterestItem = ({item}) => {
    const isSelected = selectedInterests.includes(item.label);
    return (
      <TouchableOpacity
        style={[styles.interestButton, isSelected && styles.selectedButton]}
        onPress={() => handleSelectInterest(item.label)}
        disabled={selectedInterests.length >= 5 && !isSelected} // Disable unselected buttons if already 5 are selected
      >
        <Text style={styles.interestText}>
          {item.icon} {item.label} {isSelected ? '-' : '+'}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Choose 5 things you are really into.</Text>
      <Text style={styles.subText}>
        Add interests to your profile to help you match with people who love
        them too.
      </Text>

      {/* Search Box */}
      <TextInput style={styles.searchBox} placeholder="What are you into?" />

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
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.selectedCount}>
          {selectedInterests.length}/5 Selected
        </Text>
        <TouchableOpacity style={styles.nextButton}
        onPress={() => navigation.navigate('QualitiesSelectionScreen')}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
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
  progressBar: {
    height: 4,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: 20,
  },
  progressFill: {
    width: '20%',
    height: '100%',
    backgroundColor: '#4DC7F8',
    borderRadius: 2,
  },
  title: {
    fontSize: 22,
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
  searchBox: {
    backgroundColor: '#4DC7F8',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#fff',
    marginBottom: 20,
  },
  youMightLikeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  interestButton: {
    flex: 1,
    backgroundColor: '#4DC7F8',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#333',
  },
  interestText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  skipText: {
    fontSize: 16,
    color: '#7d7d7d',
  },
  selectedCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#4DC7F8',
    padding: 15,
    borderRadius: 50,
  },
});

export default InterestSelectionScreen;
