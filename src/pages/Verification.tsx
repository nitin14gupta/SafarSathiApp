// Verification.js
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import AuthTopTab from '../components/AuthTopTab';
import AuthBottomTab from '../components/AuthBottomTab';
import CustomButton from '../components/CustomButton';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type VerificationProps = {
  route: RouteProp<{ params: { phoneNumber: string } }, 'params'>;
  navigation: StackNavigationProp<any, any>;
};

const Verification = ({ route, navigation }: VerificationProps) => {
  const { phoneNumber } = route.params;
  const inputRefs = useRef(Array(4).fill(null));
  const [inputValues, setInputValues] = useState(['', '', '', '']);

  const handleInputChange = (text: string, index: number) => {
    const numericText = text.replace(/\D/g, '');
    if (numericText) {
      const newValues = [...inputValues];
      newValues[index] = numericText;
      setInputValues(newValues);

      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const confirmCode = async () => {
    const code = inputValues.join('');
    if (code.length === 4) {
      try {
        const response = await fetch('YOUR_BACKEND_URL/auth/phone/verify-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phoneNumber, code }),
        });

        if (response.ok) {
          Alert.alert('Success', 'Phone number verified successfully!');
          navigation.navigate('LocationScreen');
        } else {
          Alert.alert('Error', 'Invalid OTP. Please try again.');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert('Error', 'Please enter the complete OTP.');
    }
  };

  return (
    <View style={styles.container}>
      <AuthTopTab />
      <AuthBottomTab>
        <View style={styles.formContainer}>
          <Text style={styles.verificationTitle}>Verification</Text>
          <Text style={styles.verificationSubTitle}>Enter Verification Code</Text>

          <View style={styles.codeInputContainer}>
            {inputValues.map((value, i) => (
              <TextInput
                key={`input-${i}`}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(text, i)}
                value={value}
                ref={(ref) => (inputRefs.current[i] = ref)}
              />
            ))}
          </View>

          <CustomButton
            title="Verify"
            bgColor="red"
            textColor="white"
            targetScreen={confirmCode}
            disabled={inputValues.some(value => value === '')}
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
  },
  formContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    paddingTop: 50,
    marginTop: 20,
    alignItems: 'center',
  },
  verificationTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  verificationSubTitle: {
    fontSize: 18,
    color: '#444',
    marginBottom: 30,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginBottom: 30,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#000',
    backgroundColor: '#FFF',
    textAlign: 'center',
    fontSize: 22,
    width: 55,
    height: 55,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  resendText: {
    color: '#333',
    fontSize: 14,
    marginBottom: 25,
    textAlign: 'center',
  },
  resendLink: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
});

export default Verification;
