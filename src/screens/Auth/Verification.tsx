import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import IMAGES from '../../constants/images';
import AuthTopTab from '../../components/AuthTopTab';
import AuthBottomTab from '../../components/AuthBottomTab';
import CustomButton from '../../components/CustomButtom';

export default function Verification() {
  return (
    <View style={styles.container}>
      <AuthTopTab />

      <AuthBottomTab>
        <View style={styles.formContainer}>
          <Text style={styles.verificationTitle}>Verification</Text>

          {/* Verification Code Input */}
          <View style={styles.codeInputContainer}>
            {[...Array(4)].map((_, i) => (
              <TextInput
                key={i}
                style={styles.codeInput}
                maxLength={1}
                keyboardType="numeric"
              />
            ))}
          </View>

          <Text style={styles.resendText}>
            If you didn’t receive a code,
            <Text style={styles.resendLink}> Resend</Text>
          </Text>

          <CustomButton
            title="SignUp"
            bgColor="red"
            textColor="white"
            targetScreen="LocationScreen"
          />

          <Text style={styles.orText}>or</Text>

          <View style={styles.socialMediaContainer}>
            <TouchableOpacity>
              <Image source={IMAGES.googleIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMAGES.facebookIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IMAGES.twitterIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </AuthBottomTab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C4CC',
    justifyContent: 'flex-start',
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
  verificationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 50,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginBottom: 20,
  },
  codeInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#C9EAF0',
    textAlign: 'center',
    fontSize: 24,
    width: 60,
    height: 60,
    borderRadius: 75,
  },
  resendText: {
    color: '#333',
    fontSize: 14,
    marginBottom: 20,
  },
  resendLink: {
    color: 'red',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginBottom: 20,
  },
  accountText: {
    fontSize: 14,
    color: '#333',
  },
});
