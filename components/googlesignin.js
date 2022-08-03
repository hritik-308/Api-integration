import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Image,
  style,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import UserInfo from '../components/googlesignout'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const GoogleSign = () => {


  const navigation = useNavigation();
  const signIn = async () => {
    try {
      GoogleSignin.configure({
        //webClientId is required if you need offline access
        //   offlineAccess: true,
        webClientId:
          '469759795206-e89eibrrsrplnv820n4uj5n98dptene8.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      await GoogleSignin.hasPlayServices();
      console.log('reached google sign in');
      const userInfo = await GoogleSignin.signIn();
      // console.log(userInfo);
      Alert.alert(
        "Welcome",
        "You're Logged In Now",
        [
          { text: "Let's Start", onPress: () => navigation.navigate('UserInfo') }
        ]
      );
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error occured SIGN_IN_CANCELLED');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error occured IN_PROGRESS');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error occured PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log(error);
        console.log('error occured unknow error');
      }
    }
  };
  
  
 
  return (
    <View style={styles.Btn}>
      <GoogleSigninButton
        style={{width: 200, height: 50}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};


export default GoogleSign;


const styles = StyleSheet.create({
  Btn: {
    marginTop: 5,
    elevation: 50,
    borderRadius: 15,
  },
});
