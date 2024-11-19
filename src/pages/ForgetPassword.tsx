import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import IMAGES from '../constants/images';


import { NavigationProp } from '@react-navigation/native';

const ForgotPassword = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [isEmail, setIsEmail] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    navigation.navigate('Verfiction');
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <Image source={IMAGES.beachRelax} style={styles.topImage} />

      {/* Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>

        {/* Toggle Email/Mobile */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, isEmail && styles.activeButton]}
            onPress={() => setIsEmail(true)}>
            <Image source={IMAGES.emailIcon} style={styles.socialIcon} />
            <Text style={styles.toggleButtonText}>Email</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.toggleButton, !isEmail && styles.activeButton]}
            onPress={() => setIsEmail(false)}>
            <Image source={IMAGES.mobileIcon} style={styles.socialIcon} />
            <Text style={[styles.toggleButtonText, {color: '#D74A46'}]}>
              Mobile
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Field */}
        {isEmail ? (
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            placeholderTextColor="#7A8C99"
            value={inputValue}
            onChangeText={setInputValue}
          />
        ) : (
          <View style={styles.mobileInputContainer}>
            <Image source={IMAGES.indianFlag} style={styles.flagIcon} />
            <TextInput
              style={styles.mobileInput}
              placeholder="Enter Mobile Number"
              placeholderTextColor="#7A8C99"
              keyboardType="phone-pad"
              value={inputValue}
              onChangeText={setInputValue}
            />
          </View>
        )}

        {/* Send Button */}
        <TouchableOpacity
          style={[styles.sendButton, {opacity: inputValue ? 1 : 0.5}]} // Change opacity based on input
          onPress={handleSend}
          disabled={!inputValue} // Disable if inputValue is empty
        >
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>

        {/* Social Media Login */}
        <View style={styles.socialContainer}>
          <Text style={styles.orText}>or</Text>
          <View style={styles.socialIcons}>
            <Image source={IMAGES.googleIcon} style={styles.socialIconImage} />
            <Image
              source={IMAGES.facebookIcon}
              style={[styles.socialIconImage, styles.socialIcon]}
            />
            <Image
              source={IMAGES.twitterIcon}
              style={[styles.socialIconImage, styles.socialIcon]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC',
    justifyContent: 'flex-start',
  },
  topImage: {
    width: '100%',
    height: 330,
    resizeMode: 'cover',
    marginBottom: -50,
    top: -40, // Offset to match the layout in your provided image
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    paddingTop: 50,
    marginTop: 15,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#333',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#D74A46',
    borderColor: '#D74A46',
    borderWidth: 1,
  },
  toggleButtonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#7A8C99',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    fontSize: 16,
  },
  mobileInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#D1D5DB',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 20,
  },
  flagIcon: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  mobileInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#D74A46',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backToSignInText: {
    color: '#D74A46',
    fontSize: 16,
    marginVertical: 15,
    textAlign: 'center',
  },
  socialContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  orText: {
    color: '#7A8C99',
    marginBottom: 10,
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  socialIcon: {
    marginLeft: 20,
  },
  signUpText: {
    color: '#7A8C99',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  signInLink: {
    color: '#D74A46',
    fontWeight: '600',
    marginLeft: 5,
  },
});

export default ForgotPassword;
