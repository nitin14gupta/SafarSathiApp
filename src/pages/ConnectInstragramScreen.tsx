import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import IMAGES from '../constants/images';
import CustomButton from '../components/CustomButton';
import { NavigationProp } from '@react-navigation/native';
const ConnectInstagramScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
        style={styles.instagramLogo}
      />

      {/* Header Text */}
      <Text style={styles.headerText}>Want to show off your IG?</Text>
      <Text style={styles.subText}>
        You can add your Instagram posts to your profile, if you like.
      </Text>
      <Text style={styles.subText}>
        People will see your latest posts, but never your username.
      </Text>

      {/* Sample Instagram Post */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.profileDot} />
          <Text style={styles.postOptions}>⋮</Text>
        </View>
        <Image
          source={IMAGES.bikeCouple}
          style={styles.postImage}
        />
        <View style={styles.postIconsContainer}>
          <Text style={styles.icon}>❤️</Text>
          <Text style={styles.icon}>💬</Text>
          <Text style={styles.icon}>🔖</Text>
        </View>
      </View>

      <CustomButton
      title={'Connect Instagram'}
      bgColor={'#1DA1F2'}
      textColor={'#fff'}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Onboarding1')}>
        <Text style={styles.notNowText}>Not now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  instagramLogo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginVertical: 5,
  },
  postContainer: {
    width: 250,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  postOptions: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  postIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    fontSize: 20,
    color: '#333',
  },
  connectButton: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 10,
  },
  connectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  notNowText: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});

export default ConnectInstagramScreen;
