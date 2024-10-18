// import React, { Suspense, lazy } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
// // Lazy load the screens
// const Home = lazy(() => import('./src/screens/Auth/Home'));
// const Onboarding1 = lazy(() => import('./src/screens/Auth/Onboarding1'));
// const Onboarding2 = lazy(() => import('./src/screens/Auth/Onboarding2'));
// const Onboarding3 = lazy(() => import('./src/screens/Auth/Onboarding3'));
// const SignUp = lazy(() => import('./src/screens/Auth/SignUp'));
// const Verification = lazy(() => import('./src/screens/Auth/Verification'));
// const ForgetPassword = lazy(() => import('./src/screens/Auth/ForgetPassword'));
// const Dashboard = lazy(() => import('./src/screens/App/Dashboard'));
// const LocationScreen = lazy(() => import('./src/screens/Auth/LocationScreen'));
// const GenderScreen = lazy(() => import('./src/screens/Auth/GenderScreen'));
// const PurposeScreen = lazy(() => import('./src/screens/Auth/PurposeScreen'));
// const HeightScreen = lazy(() => import('./src/screens/Auth/HeightScreen'));
// const InterestSelectionScreen = lazy(() => import('./src/screens/Auth/InterestSelectionScreen'));
// const QualitiesSelectionScreen = lazy(() => import('./src/screens/Auth/QualitiesSelectionScreen'));

// export type RootStackParamList = {
//   Home: undefined;
//   Onboarding1: undefined;
//   Onboarding2: undefined;
//   Onboarding3: undefined;
//   SignUp: undefined;
//   ForgetPassword: undefined;
//   Verification: undefined;
//   Dashboard: undefined;
//   LocationScreen: undefined;
//   GenderScreen: undefined;
//   PurposeScreen: undefined;
//   HeightScreen: undefined;
//   InterestSelectionScreen: undefined;
//   QualitiesSelectionScreen: undefined;
// };

// const Stack = createNativeStackNavigator<RootStackParamList>();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen
//             name="Home"
//             component={Home}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Onboarding1"
//             component={Onboarding1}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Onboarding2"
//             component={Onboarding2}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Onboarding3"
//             component={Onboarding3}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="SignUp"
//             component={SignUp}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="ForgetPassword"
//             component={ForgetPassword}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Verification"
//             component={Verification}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="LocationScreen"
//             component={LocationScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="GenderScreen"
//             component={GenderScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="PurposeScreen"
//             component={PurposeScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="HeightScreen"
//             component={HeightScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="InterestSelectionScreen"
//             component={InterestSelectionScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="QualitiesSelectionScreen"
//             component={QualitiesSelectionScreen}
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="Dashboard"
//             component={Dashboard}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </Suspense>
//     </NavigationContainer>
//   );
// };

// export default App;


