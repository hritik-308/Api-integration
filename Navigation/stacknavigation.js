import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Header from '../components/header';
import LoginScreen from '../components/loginscreen';
import WelcomeScreen from '../components/welcomescreen';


const Stack = createNativeStackNavigator()
export default function StackNavigation() {

return (
    
      
    <NavigationContainer>
      
      <Header/> 
       
       <Stack.Navigator >
         
       <Stack.Screen component={LoginScreen} name="Login" options={{headerShown:false}}></Stack.Screen>
       <Stack.Screen component={WelcomeScreen} name="Home"></Stack.Screen>
         
       </Stack.Navigator>

    </NavigationContainer>
    
);
};