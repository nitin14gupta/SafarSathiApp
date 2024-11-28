import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import IMAGES from '../constants/images';

const AuthTopTab = () => {
  return (
    <View style={styles.container}>
      <Image source={IMAGES.beachRelax} style={styles.topImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  topImage: {
    width: '100%',
    height: 330,
    resizeMode: 'cover',
  },
});

export default AuthTopTab;
