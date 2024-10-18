import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import IMAGES from '../../constants/images';

const LocationScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      {/* Globe Icon */}
      <Image source={IMAGES.locationEarth} style={styles.globeIcon} />

      {/* Main Text */}
      <Text style={styles.mainText}>Now, can we get your location?</Text>

      {/* Sub Text */}
      <Text style={styles.subText}>
        We need your location to show people near to you and many more?
      </Text>

      {/* Heart with Airplane */}
      <View style={styles.heartContainer}>
        <Image source={IMAGES.locationAirplane} style={styles.heartImage} />
      </View>

      {/* Set Location Button */}
      <TouchableOpacity
        style={styles.setLocationButton}
        onPress={() => navigation.replace('GenderScreen')}>
        <Text style={styles.buttonText}>Set location services</Text>
      </TouchableOpacity>

      {/* Not Now Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.notNowText}>Not now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  globeIcon: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#7d7d7d',
  },
  heartContainer: {
    marginBottom: 50,
  },
  heartImage: {
    width: 150,
    height: 150, // Adjust the size based on the image
    resizeMode: 'contain',
  },
  setLocationButton: {
    backgroundColor: '#4DC7F8', // Color from the design
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  notNowText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
});

export default LocationScreen;
