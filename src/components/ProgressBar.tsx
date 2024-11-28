import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress = 30 }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 2.5,
    marginTop: 10,
    marginBottom: 30,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#008bff',
    borderRadius: 2.5,
  },
});

export default ProgressBar;
