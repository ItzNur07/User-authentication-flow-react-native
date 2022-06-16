import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SigninScreen from '../Screen/SigninScreen';
import SignUpScreen from '../Screen/SignUpScreen';
import EmailConfirmScreen from '../Screen/EmailConfirmScreen';
import ForgetPasswordScreen from '../Screen/ForgetPasswordScreen';
import HomeScreen from '../Screen/HomeScreen';
import NewPasswordScreen from "../Screen/NewPasswordScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';


export default function Navigation() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="EmailConfirm" component={EmailConfirmScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

