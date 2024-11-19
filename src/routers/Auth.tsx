import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Directly import the screens
import Home from '../pages/Home';
import Onboarding1 from '../pages/Onboarding1';
import Onboarding2 from '../pages/Onboarding2';
import Onboarding3 from '../pages/Onboarding3';
import SignUp from '../pages/SignUp';
import Verification from '../pages/Verification';
import ForgetPassword from '../pages/ForgetPassword';
import Dashboard from '../pages/Dashboard';
import LocationScreen from '../pages/LocationScreen';
import NameFormScreen from '../pages/NameFormScreen';
import GenderScreen from '../pages/GenderScreen';
import PurposeScreen from '../pages/PurposeScreen';
import HeightScreen from '../pages/HeightScreen';
import InterestSelectionScreen from '../pages/InterestSelectionScreen';
import QualitiesSelectionScreen from '../pages/QualitiesSelectionScreen';
import LifestyleScreen from '../pages/LifestyleScreen';
import ReligionSelectionScreen from '../pages/ReligionSelectionScreen';
import PromptScreen from '../pages/PromptScreen';
import ConnectInstragramScreen from '../pages/ConnectInstragramScreen';
import PreferredGender from '../pages/PreferredGender';
import WelcomeScreen from '../pages/WelcomeScreen';
import Drawer from '../pages/Drawer';

export type RootStackParamList = {
  Home: undefined;
  Onboarding1: undefined;
  Onboarding2: undefined;
  Onboarding3: undefined;
  WelcomeScreen: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  Verification: undefined;
  Dashboard: undefined;
  LocationScreen: undefined;
  NameFormScreen: undefined;
  GenderScreen: undefined;
  PurposeScreen: undefined;
  HeightScreen: undefined;
  InterestSelectionScreen: undefined;
  QualitiesSelectionScreen: undefined;
  LifestyleScreen: undefined;
  ReligionSelectionScreen: undefined;
  PromptScreen: undefined;
  ConnectInstragramScreen: undefined;
  PreferredGender: undefined;
  Drawer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LocationScreen"
          component={LocationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NameFormScreen"
          component={NameFormScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GenderScreen"
          component={GenderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PurposeScreen"
          component={PurposeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreferredGender"
          component={PreferredGender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeightScreen"
          component={HeightScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InterestSelectionScreen"
          component={InterestSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QualitiesSelectionScreen"
          component={QualitiesSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LifestyleScreen"
          component={LifestyleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReligionSelectionScreen"
          component={ReligionSelectionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PromptScreen"
          component={PromptScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding1"
          component={Onboarding1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding2"
          component={Onboarding2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding3"
          component={Onboarding3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConnectInstragramScreen"
          component={ConnectInstragramScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{headerShown: false}}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
