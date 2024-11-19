import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const ProfileDrawer = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const navigateToScreen = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <ScrollView style={styles.drawerContainer}>
        {/* Primary Links Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Primary Links</Text>
        <TouchableOpacity onPress={() => navigateToScreen('HomeScreen')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Explore')}>
          <Text style={styles.link}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('MyTrips')}>
          <Text style={styles.link}>My Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Messages')}>
          <Text style={styles.link}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
          <Text style={styles.link}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Access Links Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Access Links</Text>
        <TouchableOpacity onPress={() => navigateToScreen('Notifications')}>
          <Text style={styles.link}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('SavedPlaces')}>
          <Text style={styles.link}>Saved Places</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('TravelTips')}>
          <Text style={styles.link}>Travel Tips</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('HelpSupport')}>
          <Text style={styles.link}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      {/* Community and Safety Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Community and Safety</Text>
        <TouchableOpacity onPress={() => navigateToScreen('SafetyCenter')}>
          <Text style={styles.link}>Safety Center</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('CommunityGuidelines')}>
          <Text style={styles.link}>Community Guidelines</Text>
        </TouchableOpacity>
      </View>

      {/* Settings and Premium Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings and Premium</Text>
        <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
          <Text style={styles.link}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('UpgradeToPremium')}>
          <Text style={styles.link}>Upgrade to Premium</Text>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity onPress={() => navigateToScreen('Logout')} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
   section: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  link: {
    fontSize: 15,
    color: '#007BFF',
    paddingVertical: 8,
  },
  logoutButton: {
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  logoutText: {
    fontSize: 16,
    color: '#ff3b30',
  },
});

export default ProfileDrawer;
