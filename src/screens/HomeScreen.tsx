import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';

const ScrollableScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      showsVerticalScrollIndicator={false}>
        {Array.from({ length: 20 }, (_, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.text}>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  scrollViewContent: {
    padding: 20,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#4CAF50',
    padding: 20,
    marginVertical: 10,
    width: '100%',
    borderRadius: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ScrollableScreen;
