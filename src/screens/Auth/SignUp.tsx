import React from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import IMAGES from '../../constants/images';
import AuthBottomTab from '../../components/AuthBottomTab';
import AuthTopTab from '../../components/AuthTopTab';
import CustomButton from '../../components/CustomButtom';

const SignUp = ( {navigation} ) => {
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
            />
          </View>
          <CustomButton
            title="SignUp"
            bgColor="red"
            textColor="white"
            targetScreen={() => navigation.navigate('Verification')} />
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
    backgroundColor: '#F5F5F5',
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
    paddingHorizontal: 10, // Added padding for better UX
  },
});

export default SignUp;
