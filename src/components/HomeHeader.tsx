import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeHeader = ({
  title = 'SafarSaathi',
  onButtonPress = () => console.log('Button Pressed'),
  buttonIcon = <Icon name="home" size={24} color="#333" />
}) => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-back-ios" size={20} color="#333" style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onButtonPress} style={styles.iconButton}>
        {buttonIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: '#fff',
  },
  icon: {
    paddingRight: 8,
  },
  title: {
    fontSize: 16,
        fontWeight: '600',
        color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    padding: 2,
  },
});

export default HomeHeader;
