// ExploreHeader.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ExploreHeader = ({ title = 'Explore', onSearchPress, onMorePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onSearchPress} style={styles.iconButton}>
          <Icon name="search" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onMorePress} style={styles.iconButton}>
          <Icon name="more-vert" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    paddingHorizontal: 8,
  },
});

export default ExploreHeader;
