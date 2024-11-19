import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

interface Quality {
  id: number;
  label: string;
}

const qualitiesData: Quality[] = [
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

const QualitiesSelectionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedQualities, setSelectedQualities] = useState<string[]>([]);

  const handleSelectQuality = (quality: string) => {
    setSelectedQualities(prev =>
      prev.includes(quality)
        ? prev.filter(item => item !== quality)
        : prev.length < 3
          ? [...prev, quality]
          : prev
    );
  };

  const renderQualityItem = ({ item }: { item: Quality }) => {
    const isSelected = selectedQualities.includes(item.label);
    return (
      <TouchableOpacity
        style={[styles.qualityButton, isSelected && styles.selectedButton]}
        onPress={() => handleSelectQuality(item.label)}
        disabled={selectedQualities.length >= 3 && !isSelected}
      >
        {/* Adding icons to the button */}
        {/* <Ionicons
          name={isSelected ? 'ios-checkmark-circle' : 'ios-add-circle'}
          size={24}
          color={isSelected ? '#fff' : '#4DC7F8'}
          style={styles.icon}
        /> */}
        <Text style={[styles.qualityText, isSelected && styles.selectedText]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={70} />

      <Text style={styles.title}>Choose 3 qualities that resonate with you.</Text>
      <Text style={styles.subText}>
        Select qualities that speak to your soul.
      </Text>

      <Text style={styles.theirQualitiesText}>Available Qualities</Text>
      <FlatList
        data={qualitiesData}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderQualityItem}
        columnWrapperStyle={styles.columnWrapper}
      />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <Text style={styles.selectedCount}>{selectedQualities.length}/3 Selected</Text>
        <BoardingButton onPress={() => navigation.navigate('LifestyleScreen')}
          disabled={selectedQualities.length < 3} />
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
  theirQualitiesText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  qualityButton: {
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
  icon: {
    marginRight: 10,
  },
  qualityText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
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
});

export default QualitiesSelectionScreen;
