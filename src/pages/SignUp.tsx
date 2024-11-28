import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ActivityIndicator } from 'react-native';
import IMAGES from '../constants/images';
import AuthBottomTab from '../components/AuthBottomTab';
import AuthTopTab from '../components/AuthTopTab';
import CustomButton from '../components/CustomButton';
import { NavigationProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const SignUp = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneNumberChange = (text: string) => {
    const numericText = text.replace(/\D/g, '');
    setPhoneNumber(numericText);
  };

  const isValidPhoneNumber = (number: string) => /^[6-9]\d{9}$/.test(number);

  const sendOtp = async () => {
    setLoading(true);
    try {
      const BASE_URL = process.env.REACT_APP_API_URL || 'http://10.0.2.2:5000';
      const response = await fetch(`${BASE_URL}/auth/phone/send-code`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: 'Verification code sent successfully.',
        });
        navigation.navigate('Verification', { phoneNumber });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: data.message || 'Failed to send verification code.',
        });
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Network Error',
        text2: 'Please check your connection and try again.',
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthTopTab />
      <AuthBottomTab>
        <View style={styles.formContainer}>
          <Text style={styles.headerText}>Enter Mobile Number</Text>
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
            title={loading ? <ActivityIndicator color="white" /> : 'Send OTP'}
            bgColor="red"
            textColor="white"
            targetScreen={sendOtp}
            disabled={loading || !isValidPhoneNumber(phoneNumber)}
          />
        </View>
      </AuthBottomTab>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC',
  },
  formContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 50,
    marginTop: 15,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D74A46',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
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
