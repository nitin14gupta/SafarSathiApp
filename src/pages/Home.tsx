import React from 'react';
import {View, Image, StyleSheet, useWindowDimensions} from 'react-native';
import CustomButton from '../components/CustomButton';
import IMAGES from '../constants/images';
import {NavigationProp} from '@react-navigation/native';

interface HomeProps {
  navigation: NavigationProp<any>;
}

const Home = ({navigation}: HomeProps) => {
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={IMAGES.logo}
          style={[
            styles.logo,
            {width: isPortrait ? width * 0.6 : width * 0.4, height: isPortrait ? width * 0.6 : width * 0.4},
          ]}
          accessible
          accessibilityLabel="App Logo"
        />
      </View>

      <Image
        source={IMAGES.airplaneHeart}
        style={[
          styles.airplanePath,
          {width: width * 1.0, height: (width * 0.8) * (231 / 400)}, // Maintain aspect ratio
        ]}
        accessible
        accessibilityLabel="Airplane Path"
      />

      <CustomButton
        title="EXPLORE"
        bgColor="#ffffff"
        textColor="#000000"
        targetScreen={() => navigation.navigate('Dashboard')}
        accessible
        accessibilityLabel="Explore Button"
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
    borderRadius: 200,
    backgroundColor: '#EFEDE8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  airplanePath: {
    marginBottom: 50,
  },
});

export default Home;
