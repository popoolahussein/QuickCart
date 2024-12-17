// AppNavigation.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationOptions from './src/Components/navigationOptions';
import OnboardingScreen from './src/Screens/OnboardingScreen';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="onboardingScreen"
          screenOptions={{ headerShown: false }} >
        <Stack.Screen name="onboardingScreen" component={OnboardingScreen} options={navigationOptions} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
