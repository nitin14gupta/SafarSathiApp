import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ProfileCard from '../components/ExploreProfileCard';

const ExploreScreen = () => {
  const profiles = [
    {
      id: 1,
      name: 'Sofia Haiya',
      age: 27,
      profession: 'Actor, Hollywood',
      location: 'USA',
      image: 'https://via.placeholder.com/300',
      bio: 'Sleep deprived and dehydrated most of the time. Crazy. ig: SofiaHaiya09',
      aboutMe: ['169 cm', 'Sometimes', 'Graduate', 'No', 'Hindu'],
      lookingFor: ['A long-term relationship', 'Humor', 'Kindness', 'Loyalty'],
      interests: ['Writing', 'Coffee', 'Dogs'],
      languages: ['English', 'Hindi'],
      work: [
        { id: 11, image: 'https://via.placeholder.com/150' },
        { id: 12, image: 'https://via.placeholder.com/150' },
      ],
    },
    {
      id: 2,
      name: 'John Doe',
      age: 30,
      profession: 'Software Engineer',
      location: 'California, USA',
      image: 'https://via.placeholder.com/300',
      bio: 'Tech enthusiast and avid traveler.',
      aboutMe: ['180 cm', 'Non-smoker', 'Postgraduate', 'No', 'Christian'],
      lookingFor: ['Intelligence', 'Adventure', 'Empathy'],
      interests: ['Coding', 'Hiking', 'Music'],
      languages: ['English', 'Spanish'],
      work: [
        { id: 21, image: 'https://via.placeholder.com/150' },
        { id: 22, image: 'https://via.placeholder.com/150' },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const onSwiped = (index) => {
    console.log(`Swiped card index: ${index}`);
    setCurrentIndex(index + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Swiper
        cards={profiles}
        renderCard={(profile) => <ProfileCard profile={profile} />}
        onSwiped={onSwiped}
        verticalSwipe={false}
        stackSize={3}
        backgroundColor="#f4f4f4"
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: { color: 'red', fontSize: 24 },
              wrapper: { alignItems: 'flex-end', marginTop: 20 },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: { color: 'green', fontSize: 24 },
              wrapper: { alignItems: 'flex-start', marginTop: 20 },
            },
          },
        }}
        swipeAnimationDuration={400}
      />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
        padding: 0,
  },

  scrollContainer: {
      flexGrow: 1,
    },
});

export default ExploreScreen;
