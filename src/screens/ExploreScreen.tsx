import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const ExploreScreen = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'John Doe',
      age: 25,
      bio: 'Love traveling and exploring new places.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 28,
      bio: 'A foodie and book lover!',
      image: 'https://via.placeholder.com/300',
    },
  ]);

  return (
    <View style={styles.container}>
      <Swiper
        cards={profiles}
        renderCard={(profile) => (
          <View style={styles.card}>
            <Image source={{ uri: profile.image }} style={styles.image} />
            <ScrollView style={styles.detailsContainer}>
              <Text style={styles.name}>{profile.name}, {profile.age}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
            </ScrollView>
          </View>
        )}
        onSwipedRight={() => console.log('Liked')}
        onSwipedLeft={() => console.log('Rejected')}
        cardIndex={0}
        backgroundColor={'#f4f4f4'}
        stackSize={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 400,
  },
  detailsContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#555',
  },
});

export default ExploreScreen;
