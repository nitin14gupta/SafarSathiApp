import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const qualitiesData = [
  { id: 1, label: 'Ambition' },
  { id: 2, label: 'Humor' },
  { id: 3, label: 'Loyalty' },
  { id: 4, label: 'Sarcasm' },
  { id: 5, label: 'Openness' },
  { id: 6, label: 'Gratitude' },
  { id: 7, label: 'Humility' },
  { id: 8, label: 'Playfulness' },
  { id: 9, label: 'Empathy' },
  { id: 10, label: 'Leadership' },
  { id: 11, label: 'Sassiness' },
  { id: 12, label: 'Curiosity' },
];

const QualitiesSelectionScreen = () => {
  const [selectedQualities, setSelectedQualities] = useState([]);

  const handleSelectQuality = (quality) => {
    if (selectedQualities.includes(quality)) {
      setSelectedQualities(selectedQualities.filter(item => item !== quality));
    } else if (selectedQualities.length < 5) {
      setSelectedQualities([...selectedQualities, quality]);
    }
  };

  const renderQualityItem = ({ item }) => {
    const isSelected = selectedQualities.includes(item.label);
    return (
      <TouchableOpacity
        style={[styles.qualityButton, isSelected && styles.selectedButton]}
        onPress={() => handleSelectQuality(item.label)}
        disabled={selectedQualities.length >= 5 && !isSelected} // Disable when 5 are selected
      >
        <Text style={styles.qualityText}>{item.label} {isSelected ? '-' : '+'}</Text>
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
        Which qualities speak to your soul? Choose 5 that would make a connection that much stronger.
      </Text>

      {/* Search Box */}
      <TextInput
        style={styles.searchBox}
        placeholder="Which qualities you prefer?"
      />

      {/* Qualities */}
      <Text style={styles.theirQualitiesText}>Their qualities</Text>
      <FlatList
        data={qualitiesData}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={renderQualityItem}
        columnWrapperStyle={styles.columnWrapper}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.selectedCount}>{selectedQualities.length}/5 Selected</Text>
        <TouchableOpacity style={styles.nextButton}>
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
  theirQualitiesText: {
    fontSize: 18,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  qualityButton: {
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
  qualityText: {
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

export default QualitiesSelectionScreen;
