import { View, Text, Alert, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GoogleSignin, statusCodes, User } from '@react-native-google-signin/google-signin';
import AuthTopTab from '../components/AuthTopTab';
import AuthBottomTab from '../components/AuthBottomTab';
import CustomButton from '../components/CustomButton';
import { NavigationProp } from '@react-navigation/native';

const WelcomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  // Configure Google Sign-In on component mount
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '498182939170-8cr3qsqcppk28etb7bpkpk4q6tk1itbv.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const handleScreen = () => {
    navigation.navigate('SignUp');
  };

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      const usrInfo = await GoogleSignin.signIn();
      setUserInfo(usrInfo);

      const idToken = usrInfo.idToken;
      const response = await fetch('YOUR_BACKEND_URL/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      // Navigate to LocationScreen if response is successful
      if (response.ok) {
        navigation.navigate('LocationScreen');
      } else {
        Alert.alert('Error', 'Failed to authenticate with the backend');
      }
    } catch (error) {

      if ((error as any).code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Error', 'User cancelled the login');
      } else if ((error as any).code === statusCodes.IN_PROGRESS) {
        Alert.alert('Error', 'Sign in is in progress');
      } else if ((error as any).code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Play Services not available');
      } else {
        console.error(error);
        Alert.alert('Error', 'An error occurred during Google Sign-In');
      }
    }
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
            bgColor="#4285F4"
            textColor="white"
            targetScreen={signInWithGoogle}
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
