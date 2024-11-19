import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import IMAGES from '../constants/images';
import { NavigationProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

type Location = {
  latitude: number;
  longitude: number;
};

const LocationScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [, setLocation] = useState<Location | null>(null);

  // Request location permission
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Permission',
          message: 'We need access to your location to show nearby people.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handlePress = async () => {
    const hasPermission = await requestLocationPermission();
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          Toast.show({
            type: 'success',
            text1: 'Location successfully accessed!',
          });
          navigation.navigate('NameFormScreen');
        },
        error => {
          Alert.alert('Error', 'Unable to get location. Please try again later.');
          console.error(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
      );
    } else {
      Toast.show({
        type: 'error',
        text1: 'Permission Denied',
        text2: 'Location permission is required to proceed.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGES.locationEarth} style={styles.globeIcon} />
      <Text style={styles.mainText}>Now, can we get your location?</Text>
      <Text style={styles.subText}>
        We need your location to show people near to you and many more.
      </Text>
      <View style={styles.heartContainer}>
        <Image source={IMAGES.locationAirplane} style={styles.heartImage} />
      </View>
      <TouchableOpacity style={styles.setLocationButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Set Location Services</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NameFormScreen')}>
        <Text style={styles.notNowText}>Not Now</Text>
      </TouchableOpacity>
      <Toast />
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
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subText: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'auto',
    marginHorizontal: 20,
  },
  heartContainer: {
    marginBottom: 50,
  },
  heartImage: {
    width: 350,
    height: 330,
    resizeMode: 'contain',
  },
  setLocationButton: {
    backgroundColor: '#4DC7F8',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  notNowText: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
  },
});

export default LocationScreen;
