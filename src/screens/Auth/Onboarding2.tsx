import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../constants/images';
import BoardingButton from '../../components/BoardingButton';

export default function Onboarding2({navigation}) {
  return (
    <View style={styles.background}
    >
      

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Travel Ease with us</Text>
        <Text style={styles.subtitle}>
          Your ultimate companion for seamless journeys! With intuitive navigation, real-time updates, and personalized itineraries, planning and managing your trips has never been easier.
        </Text>
      </View>

      {/* Top Section with Flags */}
      <View style={styles.flagContainer}>
        <Image
          source={IMAGES.decoration} // Replace with your flags image path
          style={styles.flags}
        />
      </View>

      {/* Main Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={IMAGES.bikeCouple} // Replace with your image of the couple on the bike
          style={styles.mainImage}
        />
      </View>

      <BoardingButton onPress={() => navigation.navigate('Onboarding3')}/>
    </View>
  );
}

const styles = StyleSheet.create({
background: {
  flex: 1,
  backgroundColor: '#5FC9DB', // Same background color as the image
  alignItems: 'center',
  justifyContent: 'center',
},
  flagContainer: {
    position: 'absolute',
    top: 140,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  flags: {
    width: 460, // Adjust as per your image
    height: 350,
    resizeMode: 'contain',
    
  },
  textContainer: {
    marginTop: 100,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Cursive', // Ensure the font family is loaded
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 155,
    flex:2,
  },
  mainImage: {
    width: 393,
    height: 385,
    resizeMode: 'contain',
  },
  exploreButton: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    backgroundColor: '#00BFFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
