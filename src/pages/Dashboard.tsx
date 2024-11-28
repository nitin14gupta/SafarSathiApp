import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../components/HomeHeader';
import ExploreHeader from '../components/ExploreHeader';
import TripsHeader from '../components/TripsHeader';
import MessagesHeader from '../components/MessagesHeader';
import ProfileHeader from '../components/ProfileHeader';
import BottomDashboard from '../components/BottomDashboard';

import { NavigationProp } from '@react-navigation/native';

const Dashboard = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderHeader = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeHeader onButtonPress={() => console.log('Home pressed')} />;
      case 'Explore':
        return (
          <ExploreHeader
            onSearchPress={() => console.log('Search pressed')}
            onMorePress={() => console.log('More pressed')}
          />
        );
      case 'Trips':
        return (
          <TripsHeader
            onBackPress={() => console.log('Back pressed')}
            onFilterPress={() => console.log('Filter pressed')}
          />
        );
      case 'Messages':
        return <MessagesHeader onSettingsPress={() => console.log('Settings pressed')} />;
      case 'Profile':
      default:
        return <ProfileHeader onMenuPress={() => navigation.navigate('Drawer')} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <BottomDashboard setCurrentScreen={setCurrentScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default Dashboard;
