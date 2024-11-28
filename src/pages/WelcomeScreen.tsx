import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AuthTopTab from '../components/AuthTopTab';
import AuthBottomTab from '../components/AuthBottomTab';
import CustomButton from '../components/CustomButton';
import { NavigationProp } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {

  const handleScreen = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
      <AuthTopTab />
      <AuthBottomTab>
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Welcome</Text>
          </View>

          <CustomButton
            title="Sign Up with Phone"
            bgColor="red"
            textColor="white"
            targetScreen={handleScreen}
          />

          <CustomButton
                      title="Sign Up with Google"
                      bgColor="red"
                      textColor="white"
                      targetScreen={handleScreen}
                    />
        </View>
      </AuthBottomTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC',
    justifyContent: 'flex-start',
  },
  formContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 50,
    marginTop: 15,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
});

export default WelcomeScreen;
