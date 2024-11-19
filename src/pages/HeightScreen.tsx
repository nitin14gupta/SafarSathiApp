import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

const HeightScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [selectedHeight, setSelectedHeight] = useState('');

  const heights = Array.from({length: 81}, (_, index) => `${120 + index} cm`);
  const handleNext = () => {
    if (selectedHeight) {
      navigation.navigate('InterestSelectionScreen');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar progress={50} />
      <Text style={styles.title}>Who would you like to meet?</Text>
      <Text style={styles.subtitle}>
        Let’s get the small talk out of the way. We’ll get into the deep and
        meaningful later.
      </Text>
      <Text style={styles.label}>Your height?</Text>

      <FlatList
        data={heights}
        renderItem={({item}: {item: string}) => (
          <TouchableOpacity
            style={[
              styles.heightButton,
              selectedHeight === item && styles.selectedButton,
            ]}
            onPress={() => setSelectedHeight(item)}
            accessibilityRole="button"
            accessibilityLabel={`Height ${item}`}>
            <Text
              style={[
                styles.heightText,
                selectedHeight === item && styles.selectedHeightText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Onboarding1')}
          style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <BoardingButton onPress={handleNext} disabled={!selectedHeight} />
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#000',
    textAlign: 'center',
  },
  heightButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#4DD0E1',
  },
  heightText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  selectedHeightText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  skipButton: {
    paddingHorizontal: 10,
  },
  skipText: {
    fontSize: 16,
    color: '#333',
    textDecorationLine: 'underline',
  },
  nextButton: {
    backgroundColor: '#4DD0E1',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default HeightScreen;
