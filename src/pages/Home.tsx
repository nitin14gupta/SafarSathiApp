import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';
import IMAGES from '../constants/images';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
}

const Home = ({navigation}: HomeProps) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={IMAGES.logo} style={styles.logo} />
      </View>

      <Image source={IMAGES.airplaneHeart} style={styles.airplanePath} />

      <CustomButton
        title="EXPLORE"
        bgColor="#ffffff"
        textColor="#000000"
        targetScreen={() => navigation.navigate('Onboarding1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7EDBFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 280,
    height: 280,
    borderRadius: 200,
    backgroundColor: '#EFEDE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  airplanePath: {
    width: 400,
    height: 231,
    marginBottom: 50,
  },
});

export default Home;
