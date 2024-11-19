import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import IMAGES from '../constants/images';
import BoardingButton from '../components/BoardingButton';

const Onboarding1 = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.handsContainer}>
        <Image
          source={IMAGES.handHeart}
          style={styles.handsImage}
        />
      </View>

      <View style={styles.heartContainer}>
        <Image
          source={IMAGES.handDrawing}
          style={styles.heartImage}
        />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Find your travel partner</Text>
        <Text style={styles.subtitle}>
          Connect with fellow travelers who share your interests and adventures! Our platform makes it easy to find travel buddies, join group trips, and share experiences.
        </Text>
      </View>
<View style={styles.boardingBtn}>
<BoardingButton onPress={() => navigation.navigate('Onboarding2')}/>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FC9DB', // Same background color as the image
    alignItems: 'center',
    justifyContent: 'center',
  },
  handsContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
  },
  handsImage: {
    width: 430,
    height: 293,
    resizeMode: 'contain',
  },
  heartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartImage: {
    width: 338,
    height: 312,
    resizeMode: 'contain',
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
    paddingHorizontal: 20,
  },
  boardingBtn : {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 30,
  },
});

export default Onboarding1;
