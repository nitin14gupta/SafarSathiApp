import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import AuthTopTab from '../components/AuthTopTab';
import AuthBottomTab from '../components/AuthBottomTab';
import CustomButton from '../components/CustomButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';

type VerificationProps = {
  route: RouteProp<{ params: { phoneNumber: string } }, 'params'>;
  navigation: StackNavigationProp<any, any>;
};

const Verification = ({ route, navigation }: VerificationProps) => {
  const { phoneNumber } = route.params;
  const inputRefs = useRef<Array<TextInput | null>>(Array(6).fill(null));
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(''));
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (text: string, index: number) => {
    const numericText = text.replace(/\D/g, '');
    if (numericText) {
      const newValues = [...inputValues];
      newValues[index] = numericText;
      setInputValues(newValues);

      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyCode = async () => {
    const code = inputValues.join('');
    if (code.length === 6) {
      setIsLoading(true);
      try {
        const response = await axios.post('http://10.0.2.2:5000/auth/verify-code', {
          mobileNumber: phoneNumber,
          code: code,
        });

        if (response.data.message === 'New user, proceed to registration') {
          Toast.show({
            type: 'success',
            text1: 'Verification successful! Proceed to registration.',
          });
          navigation.navigate('RegistrationScreen');
        } else if (response.data.message === 'Existing user') {
          Toast.show({
            type: 'success',
            text1: 'Phone number verified successfully!',
          });
          navigation.navigate('DashboardScreen');
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Verification Failed',
          text2: (error as any).response?.data?.message || 'Something went wrong. Please try again.',
        });
        console.error('Error verifying code:', (error as any).response?.data?.message);
      } finally {
        setIsLoading(false);
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Invalid OTP',
        text2: 'Please enter a valid 6-digit OTP.',
      });
    }
  };

  return (
    <View style={styles.container}>
      <AuthTopTab />
      <AuthBottomTab>
        <Text style={styles.headerText}>Enter the 6-digit Code</Text>
        <View style={styles.codeInputContainer}>
          {inputValues.map((value, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange(text, index)}
              value={value}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
        {isLoading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
          <CustomButton
            title="Verify"
            bgColor="red"
            textColor="white"
            targetScreen={verifyCode}
            disabled={isLoading || inputValues.some((val) => val.trim() === '')}
          />
        )}
      </AuthBottomTab>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    backgroundColor: '#FFF',
  },
});

export default Verification;
