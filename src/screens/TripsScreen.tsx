import {Text, View , StyleSheet} from 'react-native';
import React from 'react';

const TripsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trip Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default TripsScreen;
