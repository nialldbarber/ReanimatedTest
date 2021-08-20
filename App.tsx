import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TestPageView from './screens/TestPageView';

export type RootStackParamList = {
  Home: undefined;
  Test: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const noHeader = {headerShown: false};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={noHeader} />
        <Stack.Screen name="Test" component={TestPageView} options={noHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
