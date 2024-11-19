// SignUp.js
import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native';
import IMAGES from '../constants/images';
import AuthBottomTab from '../components/AuthBottomTab';
import AuthTopTab from '../components/AuthTopTab';
import CustomButton from '../components/CustomButton';
import { NavigationProp } from '@react-navigation/native';

const SignUp = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text : string) => {
    const numericText = text.replace(/\D/g, '');
    setPhoneNumber(numericText);
  };

  const signUpWithPhoneNumber = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_URL/auth/phone/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });
      if (response.ok) {
        navigation.navigate('Verification', { phoneNumber });
      } else {
        Alert.alert('Error', 'Failed to send verification code');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <AuthTopTab />
      <AuthBottomTab>
        <View style={styles.formContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>New Account</Text>
          </View>

          <View style={styles.inputContainer}>
            <Image source={IMAGES.mobileIcon} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              keyboardType="numeric"
              maxLength={10}
              placeholderTextColor="#777"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
            />
          </View>

          <CustomButton
            title="Sign Up with Phone"
            bgColor="red"
            textColor="white"
            targetScreen={signUpWithPhoneNumber}
            disabled={phoneNumber.length < 10}
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D74A46',
    marginBottom: 10,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default SignUp;
