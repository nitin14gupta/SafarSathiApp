import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const ProfileCard = ({ profile }) => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: profile.image }} style={styles.image} />
        <View style={styles.diagonalLeftCut1} />
        <View style={styles.diagonalLeftCut2} />
        <View style={styles.diagonalLeftCut3} />
        <View style={styles.diagonalRightCut}/>
        <TouchableOpacity style={styles.heartIcon}>
          <Icon name="heart" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Middle Section */}
      <View style={styles.detailsContainer}>
        <View>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: profile.image }} style={styles.profileImage} />
          </View>
          <Text style={styles.name}>{profile.name}, {profile.age}</Text>
          <Text style={styles.designation}>{profile.profession}</Text>
          <Text style={styles.location}>{profile.location}</Text>
        </View>
        <Text style={styles.bio}>{profile.bio}</Text>
      </View>

      {/* Scrollable Bottom Section */}
      <ScrollView style={styles.additionalDetails}>
        <Text style={styles.heading}>About Me</Text>
        <FlatList
          data={profile.aboutMe}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.heading}>Looking For</Text>
        <FlatList
          data={profile.lookingFor}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.heading}>Interests</Text>
        <FlatList
          data={profile.interests}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.heading}>Languages</Text>
        <FlatList
          data={profile.languages}
          renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.heading}>Work</Text>
        <FlatList
          data={profile.work}
          renderItem={({ item }) => (
            <View style={styles.workItem}>
              <Image source={{ uri: item.image }} style={styles.workImage} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    overflow: 'hidden',
    width: width * 0.9,
    alignSelf: 'center',
  },
  imageContainer: {
    height: height * 0.4,
    position: 'relative',
    margin: 0,
    padding: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 100,
  },
  diagonalLeftCut1: {
    position: 'absolute',
    top: 230,
    left: -50,
    width: '100%',
    height: '100%',
    backgroundColor: '#5B5757',
    opacity: 0.3,
    transform: [{ skewY: '20deg' }],
    borderTopLeftRadius: 30,
  },
  diagonalLeftCut2: {
    position: 'absolute',
    top: 250,
    left: -50,
    width: '100%',
    height: '100%',
    backgroundColor: '#CECCCC',
    transform: [{ skewY: '20deg' }],
    borderTopLeftRadius: 30,
  },
  diagonalLeftCut3: {
    position: 'absolute',
    top: 270,
    left: -50,
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    transform: [{ skewY: '20deg' }],
    borderTopLeftRadius: 30,
  },
  diagonalRightCut: {
    position: 'absolute',
    top: 201,
    left: 70,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    transform: [{ skewY: '-31deg' }],
    borderTopRightRadius: 30,
    elevation: 1,
  },
  heartIcon: {
    position: 'absolute',
    top: 150,
    right: 10,
    borderRadius: 20,
  },
  detailsContainer: {
    alignItems: 'center',
    padding: 10,
  },
  profileImageContainer: {
    position: 'absolute',
    top: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  designation: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  additionalDetails: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: '#333',
  },
  listItem: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
    marginVertical: 2,
  },
  workItem: {
    marginRight: 10,
  },
  workImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default ProfileCard;
