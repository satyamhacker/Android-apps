// src/navigations/RootStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import JobScreen from '../screens/Job/JobScreen';


const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: 'Overview' }}
    />
    <Stack.Screen name="Job" component={JobScreen} />
  </Stack.Navigator>
  );
};

export default RootStack;
