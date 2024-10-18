import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IMAGES from '../../constants/images';
import BoardingButton from '../../components/BoardingButton';

export default function Onboarding3({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Flights, Tickets, and More</Text>
        <Text style={styles.subtitle}>
          Book flights, manage tickets, and explore exciting destinations all in
          one place. Enjoy real-time updates, personalized recommendations, and
          exclusive deals that make traveling a breeze. Adventure awaits---
          let's take off together.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={IMAGES.coupleFlight} style={styles.travelersImage} />
      </View>

      <BoardingButton onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FC9DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  travelersImage: {
    width: 430,
    height: 465,
    resizeMode: 'contain',
  },
});
