import {Text, View, StyleSheet } from 'react-native';
import React from 'react';

const MessagesScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
});

export default MessagesScreen;
