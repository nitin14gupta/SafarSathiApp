import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
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
    width: '100%',        // Full-width image
    height: 330,          // Fixed height as per your style
    resizeMode: 'cover',  // Image covers the container
    marginBottom: -50,    // Overlap with content below
    top: -40,             // Pull image upwards
  },
});

export default AuthTopTab;
