import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import IMAGES from '../constants/images';
import BoardingButton from '../components/BoardingButton';
import ProgressBar from '../components/ProgressBar';

const NameFormScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handlePress = () => {
    navigation.navigate('GenderScreen', { firstName, lastName });
  };

  const isDisabled = !firstName || !lastName;

  return (
    <SafeAreaView style={styles.container}>
      {/* Removed ScrollView, now using View */}
      <View style={styles.contentContainer}>
        <ProgressBar progress={10} />

        {/* Title */}
        <Text style={styles.titleText}>
          Will it be not more interesting if you tell us your name?
        </Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#888"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#888"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        <Image
          source={IMAGES.globeImg}
          style={styles.globeImage}
          resizeMode="contain"
        />

        <View style={styles.boardingButton}>
          <BoardingButton onPress={handlePress} disabled={isDisabled} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: '#000',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#b0b0b0',
    marginVertical: 15,
    fontSize: 24,
    paddingHorizontal: 10,
    color: '#333',
  },
  globeImage: {
    width: 430,
    height: 379,
    marginTop: 30,
  },
  boardingButton: {
    width: '100%',
    alignItems: 'flex-end',
    bottom: 50,
  },
});

export default NameFormScreen;
