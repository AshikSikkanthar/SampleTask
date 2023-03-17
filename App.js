import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login/Login';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import ScreenDetails from './components/ScreenDetails';
// import ScreenDetails from './components/ScreenDetails';
// import Home from './components/Home';
import {NavigationContainer} from '@react-navigation/native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

const Main = createStackNavigator();
export const Auth = createStackNavigator();
export function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        swipeEnabled: true,
        gestureEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
      }}>
      <Auth.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Auth.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Auth.Screen
        name="ScreenDetails"
        options={{headerShown: false}}
        component={ScreenDetails}
      />
    </Auth.Navigator>
  );
}

function MainStack() {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen
          name="auth"
          options={{headerShown: false}}
          component={AuthStack}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
